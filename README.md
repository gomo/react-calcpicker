# react-calcpicker

[![Build Status](https://travis-ci.org/gomo/react-calcpicker.svg?branch=master)](https://travis-ci.org/gomo/react-calcpicker)
[![npm version](https://badge.fury.io/js/react-calcpicker.svg)](https://badge.fury.io/js/react-calcpicker)
[![dependencies Status](https://david-dm.org/gomo/react-calcpicker/status.svg)](https://david-dm.org/gomo/react-calcpicker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

https://gomo.github.io/react-calcpicker/

## History

### 2.3.1

* Fixed an issue where value did not change even if initialValue was updated.
* Updated webpack to ver3.

### 2.3.0

* Added shouldOpen option.

### 2.2.1

* Fixed a bug that did not respond when calling delete() after opening the calculator dialog.
* Fixed a bug when you first press 0.
* Changed to append the number to the dispay when input a number after opening the calculator dialog.

### 2.2.0

* Added wrapperClass option.
* Changed the name of the className option to buttonClass. (className is still working.)
* Fixed the title line-height.

### 2.1.0

 * Added closeOnOutsideClick option.
 * Added exclusionGroup option.

### 2.0.0

 * Added properties to change the size of the button, and ceased designating the button size in CSS.

#### migration

 * The `size` element of the buttons property has been renamed to `span`.

### 1.2.0

 * Changed to be able to add title to calculator dialog.

### 1.1.0

 * Added support zIndex.

### 1.0.1

 * Fixed github url for package.json

### 1.0.0

 * First release.
