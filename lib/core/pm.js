const fs = require('fs')
const path = require('path')

function PM (root, options) {
  this._root = root
  this._options = options
  this._entryPath = path.resolve(this._root, this._options.entry)
  this._bundlePath = path.resolve(this._root, this._options.output.path)
  this._bundleName = path.resolve(this._bundlePath, this._options.output.name)
}

PM.prototype.compile = function () {
  fs.mkdir(this._bundlePath, '0777', () => {
    fs.copyFile(this._entryPath, this._bundleName, () => {
    })
  })
}

module.exports = PM
