webpackJsonp([0],{255:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),c=a(3),s=o(c),i=a(7),f=(o(i),a(17)),d=a(67),m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(d),b=a(114),p=(o(b),function(e){function t(e){n(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={book:null},a.loadBook=a.loadBook.bind(a),a}return r(t,e),u(t,[{key:"componentDidMount",value:function(){this.loadBook(this.props.match.params.bookId)}},{key:"loadBook",value:function(e){var t=this;m.get(e).then(function(e){return t.setState({book:e})})}},{key:"render",value:function(){var e=this.state.book;return e?s.default.createElement("div",{className:"search-books"},s.default.createElement("div",{className:"search-books-bar"},s.default.createElement(f.Link,{className:"close-search",to:"/"},"Close"),s.default.createElement("div",{className:"search-books-input-wrapper"},s.default.createElement("input",{type:"text",name:"searchTerm",value:e.title,readOnly:!0}))),s.default.createElement("div",{className:"bookshelf"},s.default.createElement("h2",{className:"bookshelf-title"}," "),s.default.createElement("div",{className:"bookshelf-books"},s.default.createElement("ol",{className:"books-grid"},s.default.createElement("li",null,s.default.createElement("div",{className:"book"},s.default.createElement("div",{className:"book-top"},s.default.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'+e.imageLinks.thumbnail+'")'}})),s.default.createElement("div",{className:"book-title"},e.title),s.default.createElement("div",{className:"book-authors"},e.authors.map(function(e){return s.default.createElement("span",{key:e},e,s.default.createElement("br",null))})),s.default.createElement("div",{className:"book-authors"},e.subtitle))))))):s.default.createElement("p",null,"Loading book")}}]),t}(c.Component));t.default=p}});