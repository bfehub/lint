#!/usr/bin/env node

const path = require('path')
const prompts = require('prompts')
const fs = require('fs-extra')
const { installPackage } = require('@antfu/install-pkg')

async function main() {
  const options = {
    cwd: process.cwd(),
    result: {},
  }

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
  ])

  // 获取默认配置
  const tplPath = path.resolve(__dirname, 'template')
  const results = Object.values(options.result).flat()
  const configs = results.map((configPath) => {
    const config = require(path.resolve(tplPath, configPath, 'config.js'))
    return config(options)
  })

  // 安装依赖包
  const pkgNames = Array.from(
    new Set(configs.map((config) => config.pkg).flat())
  )
  await installPackage(pkgNames, {
    dev: true,
    cwd: options.cwd,
  })

  // 生成配置文件
  const configFiles = Array.from(
    new Set(configs.map((config) => config.configFile).flat())
  )
  await Promise.all(
    configFiles.map((configFile) =>
      fs.copyFile(
        path.resolve(tplPath, configFile),
        path.resolve(options.cwd, configFile.split('/')[1])
      )
    )
  )
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
