import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser';
import { cleandir } from 'rollup-plugin-cleandir'
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { preserveShebangs } from 'rollup-plugin-preserve-shebangs'
import alias from '@rollup/plugin-alias'
import copy from 'rollup-plugin-copy'
import { defineConfig } from 'rollup';

const extensions = ['.js', '.ts']

const config = defineConfig({
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
    // 处理别名
    alias({
      entries: [
        { find: '@', replacement: '../src' }
      ]
    }),
    // 解析代码中依赖的 node_modules
    // 必须在 typescript2 前
    nodeResolve({
      extensions,
      modulesOnly: true
    }),
    // 解析typescript
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNext'
        }
      }
    }),
    // 将JSON转换为ES6版本
    json(),
    // 代码压缩
    terser(),
    // 拷贝静态文件
    copy({
      targets: [
        { src: 'src/templates/', dest: 'lib/' }
      ]
    })
  ]
})

export default config;