"use strict";var faqs=document.querySelectorAll(".faq");faqs.forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("active")}))}));var navToggle=document.querySelector(".nav-toggle"),navLinks=document.querySelectorAll(".nav__link");navToggle.addEventListener("click",(function(){document.body.classList.toggle("nav-open")})),navLinks.forEach((function(e){e.addEventListener("click",(function(){document.body.classList.remove("nav-open")}))}));var header=document.querySelector(".header__navigation"),first=document.querySelector(".info"),headerHeight=header.offsetHeight;console.log(headerHeight);var firstHeight=first.offsetHeight;function _createForOfIteratorHelper(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=_unsupportedIterableToArray(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}console.log(firstHeight),window.addEventListener("scroll",(function(){window.scrollY>=firstHeight+headerHeight?(header.classList.add("header--fixed"),first.style.marginTop="".concat(headerHeight)):(header.classList.remove("header--fixed"),first.style.marginTop=null)}));var _step,scroll=document.querySelectorAll("a.nav__link"),_iterator=_createForOfIteratorHelper(scroll);try{var _loop=function(){var e=_step.value;e.addEventListener("click",(function(r){r.preventDefault();var t=e.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))};for(_iterator.s();!(_step=_iterator.n()).done;)_loop()}catch(e){_iterator.e(e)}finally{_iterator.f()}