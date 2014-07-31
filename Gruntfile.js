/*
 * grunt-buddyjs
 * https://github.com/eugene-bulkin/grunt-buddyjs
 *
 * Copyright (c) 2014 Eugene Bulkin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jsonlint: {
      files: {
        src: ['package.json', '.jscsrc', '.jshintrc']
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    jscs: {
      src: ['Gruntfile.js', 'tasks/*.js'],
      options: {
        config: '.jscsrc',
        "excludeFiles": ['node_modules/**']
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jsonlint', 'jshint', 'jscs']);
};
