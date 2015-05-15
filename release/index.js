'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

'use strict';

var Clock = (function () {
  function Clock() {
    _classCallCheck(this, Clock);

    this.time = getTime;
  }

  _createClass(Clock, [{
    key: 'set',
    value: function set(time) {
      return _extends(this, { time: time });
    }
  }, {
    key: 'restore',
    value: function restore() {
      return _extends(this, { time: getTime });
    }
  }]);

  return Clock;
})();

exports['default'] = Clock;

function getTime() {
  return new Date().getTime();
}
module.exports = exports['default'];