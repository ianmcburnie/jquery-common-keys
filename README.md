# jquery-common-keys

<p>
    <a href="https://travis-ci.org/ianmcburnie/jquery-common-keys"><img src="https://api.travis-ci.org/ianmcburnie/jquery-common-keys.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/ianmcburnie/jquery-common-keys?branch=master'><img src='https://coveralls.io/repos/ianmcburnie/jquery-common-keys/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-common-keys"><img src="https://david-dm.org/ianmcburnie/jquery-common-keys.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-common-keys#info=devDependencies"><img src="https://david-dm.org/ianmcburnie/jquery-common-keys/dev-status.svg" alt="devDependency status" /></a>
</p>

jQuery collection plugin that triggers events for common accessibility keys, e.g. enter, space, esc, arrows for `keydown` and `keyup` events. If you only require `keydown` events, please use [jquery-common-keydown](https://github.com/ianmcburnie/jquery-common-keydown) instead.

```js
$(collection).commonKeys();
```

## Experimental

This plugin is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible. Until v1.0.0 release, please use the caret range specifier in your package.json to pin to a fixed minor version.

## Install

<strike>
```
npm install @ebay/jquery-common-keys
```
</strike>

```js
npm install jquery-common-keys
```

**NOTE: The @ebay package scope is no longer supported. In order to receive latest NPM updates, please use the non-scoped version of this package.**


## Example

```html
<div tabindex="0" role="button">Fake Button</div>

$('div[role=button]').commonKeys().on('spaceKeyDown enterKeyDown', function(e) {
    // activate fake button
});
```

*NOTE:* this example is for demo purposes only. Never use a `div` tag for a button!

## Events

* `enterKeyDown`
* `escapeKeyDown`
* `spaceKeyDown`
* `pageUpKeyDown`
* `pageDownKeyDown`
* `endKeyDown`
* `homeKeyDown`
* `leftArrowKeyDown`
* `upArrowKeyDown`
* `rightArrowKeyDown`
* `downArrowKeyDown`

* `enterKeyUp`
* `escapeKeyUp`
* `spaceKeyUp`
* `pageUpKeyUp`
* `pageDownKeyUp`
* `endKeyUp`
* `homeKeyUp`
* `leftArrowKeyUp`
* `upArrowKeyUp`
* `rightArrowKeyUp`
* `downArrowKeyUp`

## Constants

```js
$.fn.commonKeys.keyCodes = {
    ENTER: 13,
    ESCAPE: 27,
    SPACE: 32,
    PAGEUP: 33,
    PAGEDOWN: 34,
    END: 35,
    HOME: 36,
    LEFTARROW: 37,
    UPARROW: 38,
    RIGHTARROW: 39,
    DOWNARROW: 40
};
```

## Dependencies

* [jquery](https://jquery.com/)
* [jquery-common-keydown](https://github.com/ianmcburnie/jquery-common-keydown)

## Bundling

This plugin currently supports bundling via [Lasso.js](https://github.com/lasso-js/lasso). Simply add the following dependencies to your browser.json file:

`js
{
    "dependencies":[
        {"require-run": "jquery"},
        {"require-run": "@ebay/jquery-common-keys"}
    ]
}
`

## Development

Run `npm start` for test driven development. All tests are located in `test.js`.

Execute `npm run` to view all available CLI scripts:

* `npm start` test driven development: watches code and re-tests after any change
* `npm test` runs tests & generates reports (see reports section below)
* `npm run lint` lints code and reports to jshint.txt
* `npm run minify` builds minified version of code
* `npm run build` cleans, lints, tests and minifies (called on `npm prepublish` hook)
* `npm run clean` deletes all generated test reports and coverage files

## Reports

Each test run will generate the following reports:

* `/test_reports/coverage` contains Istanbul code coverage report
* `/test_reports/html` contains HTML test report
* `/test_reports/junit` contains JUnit test report

## CI Build

https://travis-ci.org/ianmcburnie/jquery-common-keys

## Code Coverage

https://coveralls.io/github/ianmcburnie/jquery-common-keys?branch=master
