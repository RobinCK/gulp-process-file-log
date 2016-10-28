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
