import { useEffect } from 'react';

var useOutsideClick = function useOutsideClick(ref, callback) {
  var handleClick = function handleClick(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };
  useEffect(function () {
    document.addEventListener('click', handleClick);
    return function () {
      document.removeEventListener('click', handleClick);
    };
  });
};

export { useOutsideClick };
