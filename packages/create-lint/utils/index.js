const path = require('path')
const fs = require('fs-extra')

const setPkg = async (cwd, pkgObj) => {
  const pkgPath = path.resolve(cwd, 'package.json')
  const pkgJson = await fs.readJSON(pkgPath)

  for (const key in pkgObj) {
    if (pkgJson[key] && typeof pkgJson[key] === 'object') {
      Object.assign(pkgJson[key], pkgObj[key])
    } else {
      pkgJson[key] = pkgObj[key]
    }
  }

  await fs.writeJSON(pkgPath, pkgJson, { spaces: 2 })
}

module.exports = {
  setPkg,
}
