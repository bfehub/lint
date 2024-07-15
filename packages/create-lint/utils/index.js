import path from 'node:path'
import fse from 'fs-extra'

const getPkg = async (cwd) => {
  const pkgPath = path.resolve(cwd, 'package.json')
  return await fse.readJSON(pkgPath)
}

const setPkg = async (cwd, pkgObj) => {
  const pkgPath = path.resolve(cwd, 'package.json')
  const pkgJson = await fse.readJSON(pkgPath)

  for (const key in pkgObj) {
    if (pkgJson[key] && typeof pkgJson[key] === 'object') {
      Object.assign(pkgJson[key], pkgObj[key])
    } else {
      pkgJson[key] = pkgObj[key]
    }
  }

  await fse.writeJSON(pkgPath, pkgJson, { spaces: 2 })
}

const isModule = async (cwd) => {
  const pkg = await getPkg(cwd)
  return pkg.type === 'module'
}

export { getPkg, setPkg, isModule }
