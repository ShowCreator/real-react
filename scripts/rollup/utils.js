/*
 * @Author: sfy
 * @Date: 2023-05-22 22:45:29
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-28 17:26:16
 * @FilePath: /big-react/scripts/rollup/utils.js
 * @Description: update here
 */
import path from 'path';
import fs from 'fs';
// const path = require('path');
// const fs = require('fs');
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules');
console.log('pkgPath: ', pkgPath);

export function resolvePkgPath(pkgName, isDist) {
	if (isDist) {
		return `${distPath}/${pkgName}`;
	}
	return `${pkgPath}/${pkgName}`;
}

export function getPackageJSON(pkgName) {
	//...包路径
	const path = `${resolvePkgPath(pkgName)}/package.json`;
	const str = fs.readFileSync(path, { encoding: 'utf-8' });
	return JSON.parse(str);
}

export function getBaseRollupPlugins({
	alias = {
		__DEV__: true
	},
	typescript = {}
} = {}) {
	return [replace(alias), cjs(), ts(typescript)];
}
