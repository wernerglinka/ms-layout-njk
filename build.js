/*jslint es6 */

/*
 * Metalsmith build file
 * Build site with `node build`
 */

'use strict';

const toUpper = function (string) {
    return string.toUpperCase();
};

const spaceToDash = function (string) {
    return string.replace(/\s+/g, "-");
};

const inplace = require('metalsmith-in-place');
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
    .build(function (err) {
        if (err) {
            throw err;
        }
        console.log('Build finished!');
    });