# grunt-buddyjs

> Grunt module for running Buddy.js

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-buddyjs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-buddyjs');
```

## The "buddyjs" task

### Overview
This task is a wrapper around [buddy.js](https://github.com/danielstjules/buddy.js), a magic number detector.

In your project's Gruntfile, add a section named `buddyjs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  buddyjs: {
    src: ['file1.js', 'file2.js'],
    options: {
      // ...
    }
  },
});
```

### Options

#### options.ignore
Type: `Array`
Default value: `[0, 1]`

Numbers that will be ignored in the processing.

#### options.disableIgnore
Type: `Boolean`
Default value: `false`

Disables the ignore list.

#### options.enforceConst
Type: `Boolean`
Default value: `false`

Enforce literals to be declared with the `const` keyword.

#### options.noColor
Type: `Boolean`
Default value: `false`

#### options.reporter
Type: `String`
Default value: `simple`

Reporter to use. Options available are `simple`, `json` and `detailed`.

### Usage Examples

The following configuration would disable ignoring `0` and `1` as magic numbers
and report as JSON.

```js
grunt.initConfig({
  buddyjs: {
    src: ["lib/*.js"],
    options: {
      disableIgnore: true,
      reporter: "json"
    }
  },
});
```

## Release History
* **v0.1.0** - Initial release.
