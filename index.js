var through = require('through2');
var jsonfile = require('jsonfile');
var mkpath = require('mkpath');
var fileExists = require('file-exists');
var path = require('path');

module.exports = function (logFile) {
    logFile = logFile || './log.json';
    var manifest = [];

    return through.obj(
        function (file, enc, cb) {
            if (!file.path) {
                cb();

                return;
            }

            var asset = file.basename;

            if (manifest.indexOf(asset) === -1) {
                manifest.push(asset);
            }

            cb(null, file);
        },
        function (cb) {
            if (!fileExists(path.dirname(logFile))) {
                mkpath.sync(path.dirname(logFile));
            }

            jsonfile.writeFile(logFile, manifest, {spaces: 2}, function (err) {
                cb(err);
            })
        }
    );
};
