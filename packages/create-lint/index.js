#!/usr/bin/env node

import path from 'node:path'
import { installPackage } from '@antfu/install-pkg'
import fse from 'fs-extra'
import { blue } from 'kolorist'
import prompts from 'prompts'
import { isModule } from './utils/index.js'

const __dirname = new URL('.', import.meta.url).pathname

async function main() {
  const options = {
    cwd: process.cwd(),
    result: {},
    module: false,
  }
  options.module = await isModule(options.cwd)

  // 获取用户交互配置
  options.result = await prompts([
    {
      type: 'select',
      name: 'eslint',
      message: 'Pick a eslint preset',
      choices: [
        { title: 'none', value: [] },
        { title: 'basic', value: ['eslint-basic'] },
        { title: 'typescript', value: ['eslint-typescript'] },
        { title: 'vue', value: ['eslint-vue'] },
        { title: 'react', value: ['eslint-react'] },
        { title: 'antfu-config', value: ['eslint-antfu'] },
      ],
    },
    {
      type: 'select',
      name: 'stylelint',
      message: 'Pick a stylelint preset',
      choices: [
        { title: 'none', value: [] },
        { title: 'basic', value: ['stylelint-basic'] },
      ],
    },
    {
      type: 'select',
      name: 'commit',
      message: 'Pick a commit preset',
      choices: [
        { title: 'none', value: [] },
        { title: 'basic', value: ['commit-basic'] },
      ],
    },
    {
      type: 'select',
      name: 'release',
      message: 'Pick a release preset',
      choices: [
        { title: 'none', value: [] },
        { title: 'changesets', value: ['release-changesets'] },
        { title: 'release-it', value: ['release-release-it'] },
      ],
    },
    {
      type: 'select',
      name: 'test',
      message: 'Pick a test preset',
      choices: [
        { title: 'none', value: [] },
        { title: 'vitest-vue', value: ['test-vitest-vue'] },
        { title: 'vitest-react', value: ['test-vitest-react'] },
      ],
    },
    {
      type: 'multiselect',
      name: 'files',
      message: 'Pick files preset',
      hint: 'Space to select. Return to submit',
      choices: [
        { title: '.editorconfig', value: 'file-basic/editorconfig' },
        { title: '.gitignore', value: 'file-basic/gitignore' },
        { title: '.npmrc', value: 'file-basic/npmrc' },
      ],
    },
  ])

  // 获取配置文件信息
  const tplPath = path.resolve(__dirname, 'template')
  const results = Object.values(options.result).flat()
  const configs = []
  for (const file of results) {
    const config = await import(path.resolve(tplPath, file, 'config.js'))
    configs.push(config.default(options))
  }

  // 安装依赖包
  const pkgNames = Array.from(
    new Set(configs.map((config) => config.pkg).flat())
  )
  await installPackage(pkgNames, {
    dev: true,
    cwd: options.cwd,
    additionalArgs: process.argv.slice(2),
  })

  // 安装后执行
  for (const { afterInstall } of configs) {
    afterInstall && (await afterInstall())
  }

  // 生成配置文件
  const configFiles = Array.from(
    new Set(configs.map((config) => config.file).flat())
  )
  await Promise.all(
    configFiles.map((configFile) => {
      fse.copyFile(
        path.resolve(tplPath, configFile),
        path.resolve(
          options.cwd,
          (options.module
            ? configFile
            : configFile.replace(/\.js$/, '.mjs')
          ).slice(configFile.indexOf('/') + 1)
        )
      )
    })
  )

  console.log(blue('✨ created success. ✨'))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
