/* eslint-disable @typescript-eslint/no-var-requires */
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'
import { cleandir } from 'rollup-plugin-cleandir'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import { preserveShebangs } from 'rollup-plugin-preserve-shebangs'
import copy from 'rollup-plugin-copy'

const extensions = ['.js', '.ts']

export default {
  // 输入目录
  input: ['./src/index.ts', './src/core.ts'],
  // 输出目录
  output: {
    dir: './lib/core',
    format: 'cjs'
  },
  plugins: [
    // 清理文件夹
    cleandir('./lib'),
    // 处理#!/usr/bin/env node
    preserveShebangs(),
    // 解析typescript
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNEXT'
        }
      }
    }),
    // 解析代码中依赖的node_modules
    nodeResolve({
      extensions,
      modulesOnly: true,
      preferredBuiltins: false
    }),
    // 将JSON转换为ES6版本
    json(),
    // 代码压缩
    terser(),
    // 拷贝静态文件
    copy({
      targets: [
        { src: 'src/templates/', dest: 'lib/' },
        { src: 'src/@types/', dest: 'lib/core' }
      ]
    })
  ]
}
