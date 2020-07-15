/**
 * Created by VicSolWang.
 * Date: 2020-07-08 19:34
 * Email: vic.sol.wang@gmail.com
 */

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import path from 'path';

export default {
	input: path.resolve(__dirname, '../src/index.js'),
	output: {
		file: path.resolve(__dirname, '../dist/index.js'),
		format: 'umd',
		name: 'BMapLib.MarkerTool',
	},
	plugins: [
		del({ targets: 'dist/*' }),
		resolve(),
		commonjs({
			include: 'node_modules/**',
		}),
		babel({
			exclude: 'node_modules/**',
			babelHelpers: 'runtime',
		}),
		replace({
			'use strict': '',
		}),
		uglify(),
		postcss({
			extract: path.resolve(__dirname, '../dist/style.css'),
			minimize: true,
		}),
	],
};
