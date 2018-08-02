#!/usr/bin/env node

/**
 * @description:
 *    1.inject user options
 *    2.entry: required
 *    3.build ast
 *    4.recursion-compile with dependence
 *    5.output bundle
 * */
const path = require('path')
const program = require('commander')
const PM = require('../lib/core/pm')

program
  .version('1.0.0')
  .option('-c, --config [path]', 'entry config file path', path.resolve('./pm.config.js'))

program.parse(process.argv)

if (program.config) {
  // new PM(path.resolve(program.config))
  const configPath = path.resolve(program.config)
  const options = require(configPath)
  const pm = new PM(path.dirname(configPath), options)

  pm.compile()
}
