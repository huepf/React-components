!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactMultiSelect=t():e.ReactMultiSelect=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";e.exports=n(5)},function(e,t,n){e.exports=n(10)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=i(o),u=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onChange=function(e){e.stopPropagation();var t=n.props,r=t.itemData,o=t.onChange,a={key:r.key,value:r.value,checked:!r.checked};o&&o(a)},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.itemData,n=e.id;return a.default.createElement("li",{className:"multiple-select-item"},a.default.createElement("input",{id:n,type:"checkbox",className:"option-checkbox",checked:t.checked,onChange:this.onChange}),a.default.createElement("label",{className:"option-label",htmlFor:n},t.value))}}]),t}();l.propTypes={itemData:u.default.object.isRequired,id:u.default.oneOfType([u.default.number,u.default.string]).isRequired,onChange:u.default.func},t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(4));t.default=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=f(o),u=f(n(1)),i=f(n(12)),l=f(n(13)),c=f(n(14));function f(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p="value",d=1,h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onChangeHandler=function(e){var t,r=n.props,o=r.keyField,a=r.valueField,u=r.statusField,i=(s(t={},o,e.key),s(t,a,e.value),s(t,u,e.checked),t),l=n.state.dataSource.slice(0);l.find(function(t){return t.key===e.key}).checked=e.checked,n._callBackToParent(i),n.setState({dataSource:l})},n.onToggle=function(){n.setState(function(e){return{showOptionList:!e.showOptionList}},function(){n.searchInputBox&&n.state.showOptionList&&n.searchInputBox.focus()})},n.checkAllHandler=function(e){n.originalDataSource.forEach(function(t){t.checked=e});var t=n.state.searchText,r=n.originalDataSource.filter(function(e){return e[p].startsWith(t)});n.setState({dataSource:r}),n._callBackToParent(null)},n.onChangeSearchText=function(e){n.setState(function(t){var r=n.originalDataSource.filter(function(t){return t[p].startsWith(e)});return{searchText:e,dataSource:r}})},n.onClearSearch=function(){n.setState({searchText:""},function(){return n.onChangeSearchText("")})},n._close=function(){n.setState({showOptionList:!1})},n._handleDocumentClick=function(e){n.wrapper&&!n.wrapper.contains(e.target)&&n.state.showOptionList&&n._close()},n.searchInputBox=null,n.id="multiple-select-"+(e.id||d++),n.originalDataSource=n._convertDataSourceToState(e),n.state={searchText:"",showOptionList:!1,dataSource:n.originalDataSource},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){document.addEventListener("click",this._handleDocumentClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this._handleDocumentClick)}},{key:"_callBackToParent",value:function(e){var t=this._getSelectedItemKey(this.originalDataSource);this.props.onChange&&this.props.onChange(e,t)}},{key:"_convertDataSourceToState",value:function(e){var t=e.keyField,n=e.valueField,r=e.statusField;return e.dataSource.map(function(e){var o;return s(o={},"key",e[t]),s(o,p,e[n]),s(o,"checked",e[r]),o})}},{key:"_getSelectedItemKey",value:function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];r.checked&&t.push(r.key)}return t.join(",")}},{key:"_renderOptionAll",value:function(){if(this.props.hasAllOption){var e=this.originalDataSource.filter(function(e){return e.checked}).length===this.originalDataSource.length;return a.default.createElement(c.default,{id:this.id,checked:e,label:this.props.optionAllLabel,onChange:this.checkAllHandler})}return null}},{key:"_renderSearchBox",value:function(){var e=this;if(!this.props.hasSearchBox)return null;return a.default.createElement("div",{style:{width:"100%"}},a.default.createElement("input",{autoFocus:!0,onChange:function(t){return e.onChangeSearchText(t.target.value)},ref:function(t){return e.searchInputBox=t},value:this.state.searchText,type:"text",placeholder:"Search data",style:{width:"100%",border:"1px solid #ccc",padding:"5px 10px",boxSizing:"border-box"}}),a.default.createElement("button",{onClick:this.onClearSearch,style:{position:"absolute",right:"5px",width:"20px",height:"20px",border:0,margin:"5px",backgroundColor:"transparent",cursor:"pointer"}},"X"))}},{key:"render",value:function(){var e=this,t=this.props,n=t.noneSelectedLabel,r=t.maxDisplayItemCount;return a.default.createElement("div",{className:"multiple-select-container",id:this.id,ref:function(t){return e.wrapper=t}},a.default.createElement(i.default,{selectedItems:this.selectedItems,onToggle:this.onToggle,noneSelectedLabel:n,maxDisplayItemCount:r}),a.default.createElement("div",{className:"multiple-select-default multiple-select-options-container",style:{display:this.state.showOptionList?"block":"none"}},this._renderSearchBox(),this._renderOptionAll(),a.default.createElement(l.default,{id:this.id,dataSource:this.state.dataSource,onChange:this.onChangeHandler})))}},{key:"selectedItems",get:function(){return this.originalDataSource.filter(function(e){return e.checked})}}]),t}();h.propTypes={dataSource:u.default.arrayOf(u.default.object).isRequired,keyField:u.default.string,valueField:u.default.string,statusField:u.default.string,noneSelectedLabel:u.default.string,optionAllLabel:u.default.string,maxDisplayItemCount:u.default.number,onChange:u.default.func,hasAllOption:u.default.bool,hasSearchBox:u.default.bool},h.defaultProps={keyField:"key",valueField:p,statusField:"checked",hasAllOption:!0,hasSearchBox:!1},t.default=h},function(e,t,n){"use strict";
/** @license React v16.4.1
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6),o=n(7),a=n(8),u=n(9),i="function"==typeof Symbol&&Symbol.for,l=i?Symbol.for("react.element"):60103,c=i?Symbol.for("react.portal"):60106,f=i?Symbol.for("react.fragment"):60107,s=i?Symbol.for("react.strict_mode"):60108,p=i?Symbol.for("react.profiler"):60114,d=i?Symbol.for("react.provider"):60109,h=i?Symbol.for("react.context"):60110,y=i?Symbol.for("react.async_mode"):60111,b=i?Symbol.for("react.forward_ref"):60112;i&&Symbol.for("react.timeout");var m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);o(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function _(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||g}function O(){}function S(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||g}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=_.prototype;var k=S.prototype=new O;k.constructor=S,r(k,_.prototype),k.isPureReactComponent=!0;var w={current:null},j=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r=void 0,o={},a=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var c=Array(i),f=0;f<i;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:l,type:e,key:a,ref:u,props:o,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var E=/\/+/g,T=[];function R(e,t,n,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function I(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case l:case c:a=!0}}if(a)return n(r,e,""===t?"."+L(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var i=t+L(o=e[u],u);a+=I(o,i,n,r)}else if(null===e||void 0===e?i=null:i="function"==typeof(i=m&&e[m]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),u=0;!(o=e.next()).done;)a+=I(o=o.value,i=t+L(o,u++),n,r);else"object"===o&&v("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return a}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,u.thatReturnsArgument):null!=e&&(C(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n,e={$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function F(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(E,"$&/")+"/"),t=R(t,a,r,o),null==e||I(e,"",M,t),D(t)}var N={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=R(null,null,t,n),null==e||I(e,"",A,t),D(t)},count:function(e){return null==e?0:I(e,"",u.thatReturnsNull,null)},toArray:function(e){var t=[];return F(e,t,null,u.thatReturnsArgument),t},only:function(e){return C(e)||v("143"),e}},createRef:function(){return{current:null}},Component:_,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},Fragment:f,StrictMode:s,unstable_AsyncMode:y,unstable_Profiler:p,createElement:P,cloneElement:function(e,t,n){(null===e||void 0===e)&&v("267",e);var o=void 0,a=r({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(i=t.ref,c=w.current),void 0!==t.key&&(u=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)j.call(t,o)&&!x.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))a.children=n;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];a.children=f}return{$$typeof:l,type:e.type,key:u,ref:i,props:a,_owner:c}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:C,version:"16.4.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:w,assign:r}},$={default:N},B=$&&N||$;e.exports=B.default?B.default:B},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,i=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in n=Object(arguments[l]))o.call(n,c)&&(i[c]=n[c]);if(r){u=r(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(i[u[f]]=n[u[f]])}}return i}},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,a,u,i,l){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,o,a,u,i,l],s=0;(c=new Error(t.replace(/%s/g,function(){return f[s++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";var r=n(11);function o(){}e.exports=function(){function e(e,t,n,o,a,u){if(u!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=i(o),u=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={noneSelectedLabel:e.noneSelectedLabel},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return a.default.createElement("button",{type:"button",className:"multiple-select-default multiple-select-label",onClick:this.props.onToggle},a.default.createElement("span",{className:"text-display",title:this.selectedItemsString},this.selectedItemsString),a.default.createElement("b",{className:"caret"}))}},{key:"selectedItemsString",get:function(){var e=this.props,t=e.selectedItems,n=e.noneSelectedLabel,r=e.maxDisplayItemCount,o=t.map(function(e){return e.value}),a=n,u=o.length;return u>=r?a=u+" selected":u>=1&&(a=o.join(", ")),a}}]),t}();l.propTypes={selectedItems:u.default.arrayOf(u.default.object).isRequired,noneSelectedLabel:u.default.string,maxDisplayItemCount:u.default.number},l.defaultProps={noneSelectedLabel:"Select options",maxDisplayItemCount:3},t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=l(o),u=l(n(1)),i=l(n(2));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"_renderOptionList",value:function(){var e=this.props,t=e.dataSource,n=e.onChange,r=e.id;return t&&t.length?t.map(function(e,t){return a.default.createElement(i.default,{id:r+"-optionItem-"+t,key:r+"optionItem"+t,itemData:e,onChange:n})}):a.default.createElement("span",null,"No information")}},{key:"render",value:function(){return a.default.createElement("ul",{className:"multiple-select-options"},this._renderOptionList())}}]),t}();c.propTypes={dataSource:u.default.arrayOf(u.default.object).isRequired,id:u.default.oneOfType([u.default.number,u.default.string]).isRequired,onChange:u.default.func},t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=l(o),u=l(n(1)),i=l(n(2));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.changeHandler=function(e){var t=e.checked;n.props.onChange&&n.props.onChange(t)},n.itemData={key:"All",value:e.label},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.checked;return this.itemData.checked=n,a.default.createElement("ul",{className:"multiple-select-options multiple-select-option-all"},a.default.createElement(i.default,{id:t+"-optionItemAll",itemData:this.itemData,onChange:this.changeHandler}))}}]),t}();c.propTypes={onChange:u.default.func,id:u.default.oneOfType([u.default.number,u.default.string]).isRequired,label:u.default.string,checked:u.default.bool},c.defaultProps={label:"All",checked:!1},t.default=c}])});