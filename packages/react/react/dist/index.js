'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var useOutsideClick = function useOutsideClick(ref, callback) {
  var handleClick = function handleClick(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };
  react.useEffect(function () {
    document.addEventListener('click', handleClick);
    return function () {
      document.removeEventListener('click', handleClick);
    };
  });
};

exports.useOutsideClick = useOutsideClick;
