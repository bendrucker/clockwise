# clockwise [![Build Status](https://travis-ci.org/bendrucker/clockwise.svg?branch=master)](https://travis-ci.org/bendrucker/clockwise) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/clockwise.svg)](https://greenkeeper.io/)

> A simple, configurable clock


## Install

```sh
$ npm install --save clockwise
```


## Usage

```js
var Clock = require('clockwise')
var clock = new Clock()
clock.time() // => current time

clock.set(function timer () {
  return 1000
})
clock.time() // => time is 1000
```

## API

### `new Clock()`

Constructs a new clock instance that defaults to the normal clock

### `clock.time()` -> `Integer`

Returns the current time

### `clock.set(timer)` -> `clock`

##### `timer`

*Required*
Type: `function`

The new function to use to generate the current time

### `clock.restore()` -> `clock`

Restores the clock to the normal behavior

## License

MIT © [Ben Drucker](http://bendrucker.me)
