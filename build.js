#!/usr/bin/env node

/*
 * Metalsmith build file
 * Build site with `node ./build.js` or `npm start`
 */

'use strict';

const toUpper = function (string) {
	"use strict";
	return string.toUpperCase();
};

const spaceToDash = function (string) {
	"use strict";
	return string.replace(/\s+/g, "-");
};

const consoleLog = true; 
const inplace = require('metalsmith-in-place');
const layouts = require('metalsmith-layouts');
const metalsmith = require('metalsmith');

const templateConfig = {
		engineOptions: {
			filters: {
				toUpper: toUpper,
				spaceToDash: spaceToDash
			}
		}
	};

metalsmith(__dirname)
	.clean(true)
	.source('./src/')
	.destination('./build/')
	.use(inplace(templateConfig))
	.use(layouts(templateConfig))
	.build(function(err) {
	if (err) throw err;
		console.log('Build finished!');
	});