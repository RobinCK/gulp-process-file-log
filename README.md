<div align="center">

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)[![Build Status](https://img.shields.io/travis/RobinCK/gulp-process-file-log.svg?style=flat-square)](https://travis-ci.org/RobinCK/gulp-process-file-log)[![Code Climate](https://img.shields.io/codeclimate/github/RobinCK/gulp-process-file-log.svg?style=flat-square)](https://codeclimate.com/github/RobinCK/gulp-process-file-log)[![npm](https://img.shields.io/npm/dt/gulp-process-file-log.svg?style=flat-square)](https://github.com/RobinCK/gulp-process-file-log)[![Dependencies](https://david-dm.org/robinck/gulp-process-file-log.svg?style=flat-square)](https://david-dm.org/robinck/gulp-process-file-log)[![devDependencies](https://david-dm.org/robinck/gulp-process-file-log/dev-status.svg?style=flat-square)](https://david-dm.org/robinck/gulp-process-file-log#info=devDependencies&view=table)[![NPM version](https://img.shields.io/npm/v/gulp-process-file-log.svg?style=flat-square)](https://www.npmjs.com/package/gulp-process-file-log)
</div>

# gulp-process-file-log

## Install

```
$ npm install --save-dev gulp-process-file-log
```

## Usage

```js
const gulp = require('gulp');
const logger = require('gulp-process-file-log');

gulp.task('default', () =>
	gulp.src('src/*.js')
		.pipe(logger('log.json'))
		.pipe(gulp.dest('dist'))
);
```

## Result

```json
[
  "bootstrap.js",
  "calendar.js"
]
```
