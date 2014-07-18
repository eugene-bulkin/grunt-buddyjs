/*
 * grunt-buddyjs
 * https://github.com/eugene-bulkin/grunt-buddyjs
 *
 * Copyright (c) 2014 Eugene Bulkin
 * Licensed under the MIT license.
 */

'use strict';

var chalk     = require('chalk');
var Detector  = require('buddy.js/lib/detector');
var reporters = require('buddy.js/lib/reporters');

// from https://gist.github.com/pguillory/729616
function hook_stdout(callback) {
  var old_write = process.stdout.write;

  process.stdout.write = (function(write) {
    return function(string, encoding, fd) {
      write.apply(process.stdout, arguments);
      callback(string, encoding, fd);
    };
  })(process.stdout.write);

  return function() {
    process.stdout.write = old_write;
  };
}

function checkOutput(output, reporter) {
  switch(reporter) {
    case "simple":
      return (output.indexOf("No magic numbers found") > -1);
    case "detailed":
      return (output.indexOf("No magic numbers found") > -1);
    case "json":
      return output === "[]";
    default:
      return true;
  }
}

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('buddyjs', 'Grunt module for running Buddy.js', function() {
    var done = this.async();
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      ignore: [0, 1],
      disableIgnore: false,
      reporter: "simple",
      constants: false,
      noColor: false
    });

    if(options.noColor) {
      chalk.enabled = false;
    }

    var paths = this.files.reduce(function(arr, f) {
      return arr.concat(f.src);
    }, []);

    var ignore = options.disableIgnore ? [] : options.ignore;

    var detector = new Detector(paths, options.constants, ignore);
    var reporter = new reporters[options.reporter](detector);
    
    var output = "";
    var unhook = hook_stdout(function(string, encoding, fd) {
      output += string;
    });

    detector.run().then(function() {
      done(checkOutput(output, options.reporter));
    }, function(e) {
      console.log(e);
      done(false);
    }).done(unhook);
  });

};
