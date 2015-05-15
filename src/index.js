'use strict'

export default class Clock {
  time = getTime
  set (time) {
    return Object.assign(this, {time})
  }
  restore () {
    return Object.assign(this, {time: getTime})
  }
}

function getTime () {
  return new Date().getTime()
}
