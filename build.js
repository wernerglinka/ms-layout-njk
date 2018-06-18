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
const nunjucks = require("nunjucks");


nunjucks
    .configure(["./layouts", "./layouts/partials"], {watch: false, autoescape: false})

    .addFilter("spaceToDash", function (string) {
        "use strict";
        return string.replace(/\s+/g, "-");
	})
	.addFilter("toUpper", function (string) {
        "use strict";
        return string.toUpperCase();
    })

const templateConfig = {
		"engine": "nunjucks",
		"directory": "./layouts",
		"partials": "./layouts/partials"
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