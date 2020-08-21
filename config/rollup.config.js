'use strict'

const path = require('path')
const { babel } = require('@rollup/plugin-babel')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
import json from '@rollup/plugin-json'

const BUNDLE = process.env.BUNDLE === 'true'
const ESM = process.env.ESM === 'true'

let fileDest = `script${ESM ? '.esm' : ''}`
const external = []
const plugins = [
    babel({
        // Only transpile our source code
        exclude: 'node_modules/**',
        // Include the helpers in the bundle, at most one copy of each
        babelHelpers: 'bundled'
    }),
    json()
]

if (BUNDLE) {
    fileDest += '.bundle'
    // Remove last entry in external array to bundle Popper
    external.pop()
    plugins.push(nodeResolve())
}

const rollupConfig = {
    input: path.resolve(__dirname, `../src/js/index.${ESM ? 'esm' : 'umd'}.js`),
    output: {
        file: path.resolve(__dirname, `../dist/js/${fileDest}.js`),
        format: ESM ? 'esm' : 'umd',
    },
    external,
    plugins
}

if (!ESM) {
    rollupConfig.output.name = 'script'
}

module.exports = rollupConfig
