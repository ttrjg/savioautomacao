function fd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function dd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uc={exports:{}},Bo={},cc={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr=Symbol.for("react.element"),pd=Symbol.for("react.portal"),md=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),vd=Symbol.for("react.profiler"),yd=Symbol.for("react.provider"),gd=Symbol.for("react.context"),wd=Symbol.for("react.forward_ref"),xd=Symbol.for("react.suspense"),Sd=Symbol.for("react.memo"),Ed=Symbol.for("react.lazy"),ks=Symbol.iterator;function kd(e){return e===null||typeof e!="object"?null:(e=ks&&e[ks]||e["@@iterator"],typeof e=="function"?e:null)}var fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dc=Object.assign,pc={};function Mn(e,t,n){this.props=e,this.context=t,this.refs=pc,this.updater=n||fc}Mn.prototype.isReactComponent={};Mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mc(){}mc.prototype=Mn.prototype;function pa(e,t,n){this.props=e,this.context=t,this.refs=pc,this.updater=n||fc}var ma=pa.prototype=new mc;ma.constructor=pa;dc(ma,Mn.prototype);ma.isPureReactComponent=!0;var Cs=Array.isArray,hc=Object.prototype.hasOwnProperty,ha={current:null},vc={key:!0,ref:!0,__self:!0,__source:!0};function yc(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)hc.call(t,r)&&!vc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Pr,type:e,key:l,ref:i,props:o,_owner:ha.current}}function Cd(e,t){return{$$typeof:Pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function va(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pr}function Pd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ps=/\/+/g;function Al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pd(""+e.key):t.toString(36)}function br(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Pr:case pd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Al(i,0):r,Cs(o)?(n="",e!=null&&(n=e.replace(Ps,"$&/")+"/"),br(o,t,n,"",function(u){return u})):o!=null&&(va(o)&&(o=Cd(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Ps,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Cs(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Al(l,a);i+=br(l,t,n,s,o)}else if(s=kd(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Al(l,a++),i+=br(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function zr(e,t,n){if(e==null)return e;var r=[],o=0;return br(e,r,"","",function(l){return t.call(n,l,o++)}),r}function _d(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},eo={transition:null},Nd={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:eo,ReactCurrentOwner:ha};A.Children={map:zr,forEach:function(e,t,n){zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return zr(e,function(){t++}),t},toArray:function(e){return zr(e,function(t){return t})||[]},only:function(e){if(!va(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Mn;A.Fragment=md;A.Profiler=vd;A.PureComponent=pa;A.StrictMode=hd;A.Suspense=xd;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nd;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dc({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=ha.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)hc.call(t,s)&&!vc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Pr,type:e.type,key:o,ref:l,props:r,_owner:i}};A.createContext=function(e){return e={$$typeof:gd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yd,_context:e},e.Consumer=e};A.createElement=yc;A.createFactory=function(e){var t=yc.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:wd,render:e}};A.isValidElement=va;A.lazy=function(e){return{$$typeof:Ed,_payload:{_status:-1,_result:e},_init:_d}};A.memo=function(e,t){return{$$typeof:Sd,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=eo.transition;eo.transition={};try{e()}finally{eo.transition=t}};A.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};A.useCallback=function(e,t){return we.current.useCallback(e,t)};A.useContext=function(e){return we.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return we.current.useDeferredValue(e)};A.useEffect=function(e,t){return we.current.useEffect(e,t)};A.useId=function(){return we.current.useId()};A.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return we.current.useMemo(e,t)};A.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};A.useRef=function(e){return we.current.useRef(e)};A.useState=function(e){return we.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return we.current.useTransition()};A.version="18.2.0";cc.exports=A;var _=cc.exports;const y=dd(_),ui=fd({__proto__:null,default:y},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld=_,jd=Symbol.for("react.element"),Md=Symbol.for("react.fragment"),$d=Object.prototype.hasOwnProperty,Od=Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zd={key:!0,ref:!0,__self:!0,__source:!0};function gc(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)$d.call(t,r)&&!zd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:jd,type:e,key:l,ref:i,props:o,_owner:Od.current}}Bo.Fragment=Md;Bo.jsx=gc;Bo.jsxs=gc;uc.exports=Bo;var g=uc.exports,ci={},wc={exports:{}},ze={},xc={exports:{}},Sc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,O){var z=M.length;M.push(O);e:for(;0<z;){var J=z-1>>>1,oe=M[J];if(0<o(oe,O))M[J]=O,M[z]=oe,z=J;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var O=M[0],z=M.pop();if(z!==O){M[0]=z;e:for(var J=0,oe=M.length,$r=oe>>>1;J<$r;){var Tt=2*(J+1)-1,zl=M[Tt],It=Tt+1,Or=M[It];if(0>o(zl,z))It<oe&&0>o(Or,zl)?(M[J]=Or,M[It]=z,J=It):(M[J]=zl,M[Tt]=z,J=Tt);else if(It<oe&&0>o(Or,z))M[J]=Or,M[It]=z,J=It;else break e}}return O}function o(M,O){var z=M.sortIndex-O.sortIndex;return z!==0?z:M.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],p=1,m=null,h=3,S=!1,w=!1,v=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(M){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=M)r(u),O.sortIndex=O.expirationTime,t(s,O);else break;O=n(u)}}function x(M){if(v=!1,d(M),!w)if(n(s)!==null)w=!0,$l(P);else{var O=n(u);O!==null&&Ol(x,O.startTime-M)}}function P(M,O){w=!1,v&&(v=!1,f($),$=-1),S=!0;var z=h;try{for(d(O),m=n(s);m!==null&&(!(m.expirationTime>O)||M&&!Be());){var J=m.callback;if(typeof J=="function"){m.callback=null,h=m.priorityLevel;var oe=J(m.expirationTime<=O);O=e.unstable_now(),typeof oe=="function"?m.callback=oe:m===n(s)&&r(s),d(O)}else r(s);m=n(s)}if(m!==null)var $r=!0;else{var Tt=n(u);Tt!==null&&Ol(x,Tt.startTime-O),$r=!1}return $r}finally{m=null,h=z,S=!1}}var L=!1,C=null,$=-1,G=5,R=-1;function Be(){return!(e.unstable_now()-R<G)}function An(){if(C!==null){var M=e.unstable_now();R=M;var O=!0;try{O=C(!0,M)}finally{O?Rn():(L=!1,C=null)}}else L=!1}var Rn;if(typeof c=="function")Rn=function(){c(An)};else if(typeof MessageChannel<"u"){var Es=new MessageChannel,cd=Es.port2;Es.port1.onmessage=An,Rn=function(){cd.postMessage(null)}}else Rn=function(){N(An,0)};function $l(M){C=M,L||(L=!0,Rn())}function Ol(M,O){$=N(function(){M(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,$l(P))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(M){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var z=h;h=O;try{return M()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,O){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var z=h;h=M;try{return O()}finally{h=z}},e.unstable_scheduleCallback=function(M,O,z){var J=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?J+z:J):z=J,M){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=z+oe,M={id:p++,callback:O,priorityLevel:M,startTime:z,expirationTime:oe,sortIndex:-1},z>J?(M.sortIndex=z,t(u,M),n(s)===null&&M===n(u)&&(v?(f($),$=-1):v=!0,Ol(x,z-J))):(M.sortIndex=oe,t(s,M),w||S||(w=!0,$l(P))),M},e.unstable_shouldYield=Be,e.unstable_wrapCallback=function(M){var O=h;return function(){var z=h;h=O;try{return M.apply(this,arguments)}finally{h=z}}}})(Sc);xc.exports=Sc;var Ad=xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=_,Oe=Ad;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kc=new Set,or={};function Gt(e,t){En(e,t),En(e+"Capture",t)}function En(e,t){for(or[e]=t,e=0;e<t.length;e++)kc.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fi=Object.prototype.hasOwnProperty,Rd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_s={},Ns={};function Td(e){return fi.call(Ns,e)?!0:fi.call(_s,e)?!1:Rd.test(e)?Ns[e]=!0:(_s[e]=!0,!1)}function Id(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fd(e,t,n,r){if(t===null||typeof t>"u"||Id(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ya=/[\-:]([a-z])/g;function ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ya,ga);fe[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ya,ga);fe[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ya,ga);fe[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function wa(e,t,n,r){var o=fe.hasOwnProperty(t)?fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fd(t,n,o,r)&&(n=null),r||o===null?Td(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ar=Symbol.for("react.element"),tn=Symbol.for("react.portal"),nn=Symbol.for("react.fragment"),xa=Symbol.for("react.strict_mode"),di=Symbol.for("react.profiler"),Cc=Symbol.for("react.provider"),Pc=Symbol.for("react.context"),Sa=Symbol.for("react.forward_ref"),pi=Symbol.for("react.suspense"),mi=Symbol.for("react.suspense_list"),Ea=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),_c=Symbol.for("react.offscreen"),Ls=Symbol.iterator;function Tn(e){return e===null||typeof e!="object"?null:(e=Ls&&e[Ls]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Rl;function Wn(e){if(Rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rl=t&&t[1]||""}return`
`+Rl+e}var Tl=!1;function Il(e,t){if(!e||Tl)return"";Tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wn(e):""}function Dd(e){switch(e.tag){case 5:return Wn(e.type);case 16:return Wn("Lazy");case 13:return Wn("Suspense");case 19:return Wn("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function hi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nn:return"Fragment";case tn:return"Portal";case di:return"Profiler";case xa:return"StrictMode";case pi:return"Suspense";case mi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pc:return(e.displayName||"Context")+".Consumer";case Cc:return(e._context.displayName||"Context")+".Provider";case Sa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ea:return t=e.displayName||null,t!==null?t:hi(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return hi(e(t))}catch{}}return null}function Vd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hi(t);case 8:return t===xa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ud(e){var t=Nc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rr(e){e._valueTracker||(e._valueTracker=Ud(e))}function Lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Nc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vi(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function js(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jc(e,t){t=t.checked,t!=null&&wa(e,"checked",t,!1)}function yi(e,t){jc(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gi(e,t.type,n):t.hasOwnProperty("defaultValue")&&gi(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ms(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gi(e,t,n){(t!=="number"||ho(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qn=Array.isArray;function mn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function wi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $s(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Qn(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function Mc(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Os(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $c(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$c(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,Oc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hd=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){Hd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kn[t]=Kn[e]})});function zc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+t).trim():t+"px"}function Ac(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=zc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Bd=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Si(e,t){if(t){if(Bd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Ei(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ki=null;function ka(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ci=null,hn=null,vn=null;function zs(e){if(e=Lr(e)){if(typeof Ci!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Xo(t),Ci(e.stateNode,e.type,t))}}function Rc(e){hn?vn?vn.push(e):vn=[e]:hn=e}function Tc(){if(hn){var e=hn,t=vn;if(vn=hn=null,zs(e),t)for(e=0;e<t.length;e++)zs(t[e])}}function Ic(e,t){return e(t)}function Fc(){}var Fl=!1;function Dc(e,t,n){if(Fl)return e(t,n);Fl=!0;try{return Ic(e,t,n)}finally{Fl=!1,(hn!==null||vn!==null)&&(Fc(),Tc())}}function ir(e,t){var n=e.stateNode;if(n===null)return null;var r=Xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Pi=!1;if(ct)try{var In={};Object.defineProperty(In,"passive",{get:function(){Pi=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{Pi=!1}function Zd(e,t,n,r,o,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Gn=!1,vo=null,yo=!1,_i=null,Wd={onError:function(e){Gn=!0,vo=e}};function Qd(e,t,n,r,o,l,i,a,s){Gn=!1,vo=null,Zd.apply(Wd,arguments)}function Yd(e,t,n,r,o,l,i,a,s){if(Qd.apply(this,arguments),Gn){if(Gn){var u=vo;Gn=!1,vo=null}else throw Error(E(198));yo||(yo=!0,_i=u)}}function Jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function As(e){if(Jt(e)!==e)throw Error(E(188))}function Xd(e){var t=e.alternate;if(!t){if(t=Jt(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return As(o),e;if(l===r)return As(o),t;l=l.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Uc(e){return e=Xd(e),e!==null?Hc(e):null}function Hc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hc(e);if(t!==null)return t;e=e.sibling}return null}var Bc=Oe.unstable_scheduleCallback,Rs=Oe.unstable_cancelCallback,Kd=Oe.unstable_shouldYield,Gd=Oe.unstable_requestPaint,q=Oe.unstable_now,Jd=Oe.unstable_getCurrentPriorityLevel,Ca=Oe.unstable_ImmediatePriority,Zc=Oe.unstable_UserBlockingPriority,go=Oe.unstable_NormalPriority,qd=Oe.unstable_LowPriority,Wc=Oe.unstable_IdlePriority,Zo=null,nt=null;function bd(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Zo,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:n1,e1=Math.log,t1=Math.LN2;function n1(e){return e>>>=0,e===0?32:31-(e1(e)/t1|0)|0}var Ir=64,Fr=4194304;function Yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Yn(a):(l&=i,l!==0&&(r=Yn(l)))}else i=n&~o,i!==0?r=Yn(i):l!==0&&(r=Yn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),o=1<<n,r|=e[n],t&=~o;return r}function r1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Xe(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=r1(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Ni(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qc(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function Dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _r(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function l1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Xe(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Pa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var D=0;function Yc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xc,_a,Kc,Gc,Jc,Li=!1,Dr=[],kt=null,Ct=null,Pt=null,ar=new Map,sr=new Map,gt=[],i1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ts(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function Fn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Lr(t),t!==null&&_a(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function a1(e,t,n,r,o){switch(t){case"focusin":return kt=Fn(kt,e,t,n,r,o),!0;case"dragenter":return Ct=Fn(Ct,e,t,n,r,o),!0;case"mouseover":return Pt=Fn(Pt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return ar.set(l,Fn(ar.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,sr.set(l,Fn(sr.get(l)||null,e,t,n,r,o)),!0}return!1}function qc(e){var t=Vt(e.target);if(t!==null){var n=Jt(t);if(n!==null){if(t=n.tag,t===13){if(t=Vc(n),t!==null){e.blockedOn=t,Jc(e.priority,function(){Kc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ji(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ki=r,n.target.dispatchEvent(r),ki=null}else return t=Lr(n),t!==null&&_a(t),e.blockedOn=n,!1;t.shift()}return!0}function Is(e,t,n){to(e)&&n.delete(t)}function s1(){Li=!1,kt!==null&&to(kt)&&(kt=null),Ct!==null&&to(Ct)&&(Ct=null),Pt!==null&&to(Pt)&&(Pt=null),ar.forEach(Is),sr.forEach(Is)}function Dn(e,t){e.blockedOn===t&&(e.blockedOn=null,Li||(Li=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,s1)))}function ur(e){function t(o){return Dn(o,e)}if(0<Dr.length){Dn(Dr[0],e);for(var n=1;n<Dr.length;n++){var r=Dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&Dn(kt,e),Ct!==null&&Dn(Ct,e),Pt!==null&&Dn(Pt,e),ar.forEach(t),sr.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)qc(n),n.blockedOn===null&&gt.shift()}var yn=mt.ReactCurrentBatchConfig,xo=!0;function u1(e,t,n,r){var o=D,l=yn.transition;yn.transition=null;try{D=1,Na(e,t,n,r)}finally{D=o,yn.transition=l}}function c1(e,t,n,r){var o=D,l=yn.transition;yn.transition=null;try{D=4,Na(e,t,n,r)}finally{D=o,yn.transition=l}}function Na(e,t,n,r){if(xo){var o=ji(e,t,n,r);if(o===null)Kl(e,t,r,So,n),Ts(e,r);else if(a1(o,e,t,n,r))r.stopPropagation();else if(Ts(e,r),t&4&&-1<i1.indexOf(e)){for(;o!==null;){var l=Lr(o);if(l!==null&&Xc(l),l=ji(e,t,n,r),l===null&&Kl(e,t,r,So,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Kl(e,t,r,null,n)}}var So=null;function ji(e,t,n,r){if(So=null,e=ka(r),e=Vt(e),e!==null)if(t=Jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return So=e,null}function bc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jd()){case Ca:return 1;case Zc:return 4;case go:case qd:return 16;case Wc:return 536870912;default:return 16}default:return 16}}var xt=null,La=null,no=null;function e0(){if(no)return no;var e,t=La,n=t.length,r,o="value"in xt?xt.value:xt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return no=o.slice(e,1<r?1-r:void 0)}function ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vr(){return!0}function Fs(){return!1}function Ae(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Vr:Fs,this.isPropagationStopped=Fs,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},isPersistent:Vr}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=Ae($n),Nr=X({},$n,{view:0,detail:0}),f1=Ae(Nr),Vl,Ul,Vn,Wo=X({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vn&&(Vn&&e.type==="mousemove"?(Vl=e.screenX-Vn.screenX,Ul=e.screenY-Vn.screenY):Ul=Vl=0,Vn=e),Vl)},movementY:function(e){return"movementY"in e?e.movementY:Ul}}),Ds=Ae(Wo),d1=X({},Wo,{dataTransfer:0}),p1=Ae(d1),m1=X({},Nr,{relatedTarget:0}),Hl=Ae(m1),h1=X({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),v1=Ae(h1),y1=X({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),g1=Ae(y1),w1=X({},$n,{data:0}),Vs=Ae(w1),x1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E1[e])?!!t[e]:!1}function Ma(){return k1}var C1=X({},Nr,{key:function(e){if(e.key){var t=x1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?S1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P1=Ae(C1),_1=X({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Us=Ae(_1),N1=X({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),L1=Ae(N1),j1=X({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),M1=Ae(j1),$1=X({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O1=Ae($1),z1=[9,13,27,32],$a=ct&&"CompositionEvent"in window,Jn=null;ct&&"documentMode"in document&&(Jn=document.documentMode);var A1=ct&&"TextEvent"in window&&!Jn,t0=ct&&(!$a||Jn&&8<Jn&&11>=Jn),Hs=String.fromCharCode(32),Bs=!1;function n0(e,t){switch(e){case"keyup":return z1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rn=!1;function R1(e,t){switch(e){case"compositionend":return r0(t);case"keypress":return t.which!==32?null:(Bs=!0,Hs);case"textInput":return e=t.data,e===Hs&&Bs?null:e;default:return null}}function T1(e,t){if(rn)return e==="compositionend"||!$a&&n0(e,t)?(e=e0(),no=La=xt=null,rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return t0&&t.locale!=="ko"?null:t.data;default:return null}}var I1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!I1[e.type]:t==="textarea"}function o0(e,t,n,r){Rc(r),t=Eo(t,"onChange"),0<t.length&&(n=new ja("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,cr=null;function F1(e){h0(e,0)}function Qo(e){var t=an(e);if(Lc(t))return e}function D1(e,t){if(e==="change")return t}var l0=!1;if(ct){var Bl;if(ct){var Zl="oninput"in document;if(!Zl){var Ws=document.createElement("div");Ws.setAttribute("oninput","return;"),Zl=typeof Ws.oninput=="function"}Bl=Zl}else Bl=!1;l0=Bl&&(!document.documentMode||9<document.documentMode)}function Qs(){qn&&(qn.detachEvent("onpropertychange",i0),cr=qn=null)}function i0(e){if(e.propertyName==="value"&&Qo(cr)){var t=[];o0(t,cr,e,ka(e)),Dc(F1,t)}}function V1(e,t,n){e==="focusin"?(Qs(),qn=t,cr=n,qn.attachEvent("onpropertychange",i0)):e==="focusout"&&Qs()}function U1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(cr)}function H1(e,t){if(e==="click")return Qo(t)}function B1(e,t){if(e==="input"||e==="change")return Qo(t)}function Z1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:Z1;function fr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!fi.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function Ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xs(e,t){var n=Ys(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ys(n)}}function a0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?a0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function s0(){for(var e=window,t=ho();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ho(e.document)}return t}function Oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function W1(e){var t=s0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&a0(n.ownerDocument.documentElement,n)){if(r!==null&&Oa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Xs(n,l);var i=Xs(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Q1=ct&&"documentMode"in document&&11>=document.documentMode,on=null,Mi=null,bn=null,$i=!1;function Ks(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$i||on==null||on!==ho(r)||(r=on,"selectionStart"in r&&Oa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&fr(bn,r)||(bn=r,r=Eo(Mi,"onSelect"),0<r.length&&(t=new ja("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=on)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ln={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},Wl={},u0={};ct&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete ln.animationend.animation,delete ln.animationiteration.animation,delete ln.animationstart.animation),"TransitionEvent"in window||delete ln.transitionend.transition);function Yo(e){if(Wl[e])return Wl[e];if(!ln[e])return e;var t=ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in u0)return Wl[e]=t[n];return e}var c0=Yo("animationend"),f0=Yo("animationiteration"),d0=Yo("animationstart"),p0=Yo("transitionend"),m0=new Map,Gs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,t){m0.set(e,t),Gt(t,[e])}for(var Ql=0;Ql<Gs.length;Ql++){var Yl=Gs[Ql],Y1=Yl.toLowerCase(),X1=Yl[0].toUpperCase()+Yl.slice(1);zt(Y1,"on"+X1)}zt(c0,"onAnimationEnd");zt(f0,"onAnimationIteration");zt(d0,"onAnimationStart");zt("dblclick","onDoubleClick");zt("focusin","onFocus");zt("focusout","onBlur");zt(p0,"onTransitionEnd");En("onMouseEnter",["mouseout","mouseover"]);En("onMouseLeave",["mouseout","mouseover"]);En("onPointerEnter",["pointerout","pointerover"]);En("onPointerLeave",["pointerout","pointerover"]);Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xn));function Js(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yd(r,t,void 0,e),e.currentTarget=null}function h0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;Js(o,a,u),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;Js(o,a,u),l=s}}}if(yo)throw e=_i,yo=!1,_i=null,e}function B(e,t){var n=t[Ti];n===void 0&&(n=t[Ti]=new Set);var r=e+"__bubble";n.has(r)||(v0(t,e,2,!1),n.add(r))}function Xl(e,t,n){var r=0;t&&(r|=4),v0(n,e,r,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[Hr]){e[Hr]=!0,kc.forEach(function(n){n!=="selectionchange"&&(K1.has(n)||Xl(n,!1,e),Xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hr]||(t[Hr]=!0,Xl("selectionchange",!1,t))}}function v0(e,t,n,r){switch(bc(t)){case 1:var o=u1;break;case 4:o=c1;break;default:o=Na}n=o.bind(null,t,n,e),o=void 0,!Pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Kl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Vt(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Dc(function(){var u=l,p=ka(n),m=[];e:{var h=m0.get(e);if(h!==void 0){var S=ja,w=e;switch(e){case"keypress":if(ro(n)===0)break e;case"keydown":case"keyup":S=P1;break;case"focusin":w="focus",S=Hl;break;case"focusout":w="blur",S=Hl;break;case"beforeblur":case"afterblur":S=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=p1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=L1;break;case c0:case f0:case d0:S=v1;break;case p0:S=M1;break;case"scroll":S=f1;break;case"wheel":S=O1;break;case"copy":case"cut":case"paste":S=g1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Us}var v=(t&4)!==0,N=!v&&e==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var c=u,d;c!==null;){d=c;var x=d.stateNode;if(d.tag===5&&x!==null&&(d=x,f!==null&&(x=ir(c,f),x!=null&&v.push(pr(c,x,d)))),N)break;c=c.return}0<v.length&&(h=new S(h,w,null,n,p),m.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",h&&n!==ki&&(w=n.relatedTarget||n.fromElement)&&(Vt(w)||w[ft]))break e;if((S||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,S?(w=n.relatedTarget||n.toElement,S=u,w=w?Vt(w):null,w!==null&&(N=Jt(w),w!==N||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=u),S!==w)){if(v=Ds,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Us,x="onPointerLeave",f="onPointerEnter",c="pointer"),N=S==null?h:an(S),d=w==null?h:an(w),h=new v(x,c+"leave",S,n,p),h.target=N,h.relatedTarget=d,x=null,Vt(p)===u&&(v=new v(f,c+"enter",w,n,p),v.target=d,v.relatedTarget=N,x=v),N=x,S&&w)t:{for(v=S,f=w,c=0,d=v;d;d=bt(d))c++;for(d=0,x=f;x;x=bt(x))d++;for(;0<c-d;)v=bt(v),c--;for(;0<d-c;)f=bt(f),d--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break t;v=bt(v),f=bt(f)}v=null}else v=null;S!==null&&qs(m,h,S,v,!1),w!==null&&N!==null&&qs(m,N,w,v,!0)}}e:{if(h=u?an(u):window,S=h.nodeName&&h.nodeName.toLowerCase(),S==="select"||S==="input"&&h.type==="file")var P=D1;else if(Zs(h))if(l0)P=B1;else{P=U1;var L=V1}else(S=h.nodeName)&&S.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=H1);if(P&&(P=P(e,u))){o0(m,P,n,p);break e}L&&L(e,h,u),e==="focusout"&&(L=h._wrapperState)&&L.controlled&&h.type==="number"&&gi(h,"number",h.value)}switch(L=u?an(u):window,e){case"focusin":(Zs(L)||L.contentEditable==="true")&&(on=L,Mi=u,bn=null);break;case"focusout":bn=Mi=on=null;break;case"mousedown":$i=!0;break;case"contextmenu":case"mouseup":case"dragend":$i=!1,Ks(m,n,p);break;case"selectionchange":if(Q1)break;case"keydown":case"keyup":Ks(m,n,p)}var C;if($a)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else rn?n0(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(t0&&n.locale!=="ko"&&(rn||$!=="onCompositionStart"?$==="onCompositionEnd"&&rn&&(C=e0()):(xt=p,La="value"in xt?xt.value:xt.textContent,rn=!0)),L=Eo(u,$),0<L.length&&($=new Vs($,e,null,n,p),m.push({event:$,listeners:L}),C?$.data=C:(C=r0(n),C!==null&&($.data=C)))),(C=A1?R1(e,n):T1(e,n))&&(u=Eo(u,"onBeforeInput"),0<u.length&&(p=new Vs("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=C))}h0(m,t)})}function pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=ir(e,n),l!=null&&r.unshift(pr(e,l,o)),l=ir(e,t),l!=null&&r.push(pr(e,l,o))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qs(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=ir(n,l),s!=null&&i.unshift(pr(n,s,a))):o||(s=ir(n,l),s!=null&&i.push(pr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var G1=/\r\n?/g,J1=/\u0000|\uFFFD/g;function bs(e){return(typeof e=="string"?e:""+e).replace(G1,`
`).replace(J1,"")}function Br(e,t,n){if(t=bs(t),bs(e)!==t&&n)throw Error(E(425))}function ko(){}var Oi=null,zi=null;function Ai(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ri=typeof setTimeout=="function"?setTimeout:void 0,q1=typeof clearTimeout=="function"?clearTimeout:void 0,eu=typeof Promise=="function"?Promise:void 0,b1=typeof queueMicrotask=="function"?queueMicrotask:typeof eu<"u"?function(e){return eu.resolve(null).then(e).catch(ep)}:Ri;function ep(e){setTimeout(function(){throw e})}function Gl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ur(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var On=Math.random().toString(36).slice(2),tt="__reactFiber$"+On,mr="__reactProps$"+On,ft="__reactContainer$"+On,Ti="__reactEvents$"+On,tp="__reactListeners$"+On,np="__reactHandles$"+On;function Vt(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tu(e);e!==null;){if(n=e[tt])return n;e=tu(e)}return t}e=n,n=e.parentNode}return null}function Lr(e){return e=e[tt]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function an(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Xo(e){return e[mr]||null}var Ii=[],sn=-1;function At(e){return{current:e}}function Z(e){0>sn||(e.current=Ii[sn],Ii[sn]=null,sn--)}function H(e,t){sn++,Ii[sn]=e.current,e.current=t}var Ot={},ve=At(Ot),ke=At(!1),Wt=Ot;function kn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function Co(){Z(ke),Z(ve)}function nu(e,t,n){if(ve.current!==Ot)throw Error(E(168));H(ve,t),H(ke,n)}function y0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,Vd(e)||"Unknown",o));return X({},n,r)}function Po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Wt=ve.current,H(ve,e),H(ke,ke.current),!0}function ru(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=y0(e,t,Wt),r.__reactInternalMemoizedMergedChildContext=e,Z(ke),Z(ve),H(ve,e)):Z(ke),H(ke,n)}var it=null,Ko=!1,Jl=!1;function g0(e){it===null?it=[e]:it.push(e)}function rp(e){Ko=!0,g0(e)}function Rt(){if(!Jl&&it!==null){Jl=!0;var e=0,t=D;try{var n=it;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}it=null,Ko=!1}catch(o){throw it!==null&&(it=it.slice(e+1)),Bc(Ca,Rt),o}finally{D=t,Jl=!1}}return null}var un=[],cn=0,_o=null,No=0,Te=[],Ie=0,Qt=null,at=1,st="";function Ft(e,t){un[cn++]=No,un[cn++]=_o,_o=e,No=t}function w0(e,t,n){Te[Ie++]=at,Te[Ie++]=st,Te[Ie++]=Qt,Qt=e;var r=at;e=st;var o=32-Xe(r)-1;r&=~(1<<o),n+=1;var l=32-Xe(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,at=1<<32-Xe(t)+o|n<<o|r,st=l+e}else at=1<<l|n<<o|r,st=e}function za(e){e.return!==null&&(Ft(e,1),w0(e,1,0))}function Aa(e){for(;e===_o;)_o=un[--cn],un[cn]=null,No=un[--cn],un[cn]=null;for(;e===Qt;)Qt=Te[--Ie],Te[Ie]=null,st=Te[--Ie],Te[Ie]=null,at=Te[--Ie],Te[Ie]=null}var Me=null,je=null,W=!1,Ye=null;function x0(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,je=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qt!==null?{id:at,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,je=null,!0):!1;default:return!1}}function Fi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Di(e){if(W){var t=je;if(t){var n=t;if(!ou(e,t)){if(Fi(e))throw Error(E(418));t=_t(n.nextSibling);var r=Me;t&&ou(e,t)?x0(r,n):(e.flags=e.flags&-4097|2,W=!1,Me=e)}}else{if(Fi(e))throw Error(E(418));e.flags=e.flags&-4097|2,W=!1,Me=e}}}function lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function Zr(e){if(e!==Me)return!1;if(!W)return lu(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ai(e.type,e.memoizedProps)),t&&(t=je)){if(Fi(e))throw S0(),Error(E(418));for(;t;)x0(e,t),t=_t(t.nextSibling)}if(lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Me?_t(e.stateNode.nextSibling):null;return!0}function S0(){for(var e=je;e;)e=_t(e.nextSibling)}function Cn(){je=Me=null,W=!1}function Ra(e){Ye===null?Ye=[e]:Ye.push(e)}var op=mt.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Lo=At(null),jo=null,fn=null,Ta=null;function Ia(){Ta=fn=jo=null}function Fa(e){var t=Lo.current;Z(Lo),e._currentValue=t}function Vi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gn(e,t){jo=e,Ta=fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(Ta!==e)if(e={context:e,memoizedValue:t,next:null},fn===null){if(jo===null)throw Error(E(308));fn=e,jo.dependencies={lanes:0,firstContext:e}}else fn=fn.next=e;return t}var Ut=null;function Da(e){Ut===null?Ut=[e]:Ut.push(e)}function E0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Da(t)):(n.next=o.next,o.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,dt(e,n)}return o=r.interleaved,o===null?(t.next=t,Da(r)):(t.next=o.next,o.next=t),r.interleaved=t,dt(e,n)}function oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pa(e,n)}}function iu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Mo(e,t,n,r){var o=e.updateQueue;yt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==i&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(l!==null){var m=o.baseState;i=0,p=u=s=null,a=l;do{var h=a.lane,S=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(h=t,S=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){m=w.call(S,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,h=typeof w=="function"?w.call(S,m,h):w,h==null)break e;m=X({},m,h);break e;case 2:yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else S={eventTime:S,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=S,s=m):p=p.next=S,i|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(p===null&&(s=m),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Xt|=i,e.lanes=i,e.memoizedState=m}}function au(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var C0=new Ec.Component().refs;function Ui(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Go={isMounted:function(e){return(e=e._reactInternals)?Jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),o=jt(e),l=ut(r,o);l.payload=t,n!=null&&(l.callback=n),t=Nt(e,l,o),t!==null&&(Ke(t,e,o,r),oo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),o=jt(e),l=ut(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Nt(e,l,o),t!==null&&(Ke(t,e,o,r),oo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=jt(e),o=ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=Nt(e,o,r),t!==null&&(Ke(t,e,r,n),oo(t,e,r))}};function su(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!fr(n,r)||!fr(o,l):!0}function P0(e,t,n){var r=!1,o=Ot,l=t.contextType;return typeof l=="object"&&l!==null?l=Ve(l):(o=Ce(t)?Wt:ve.current,r=t.contextTypes,l=(r=r!=null)?kn(e,o):Ot),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Go,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function uu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Go.enqueueReplaceState(t,t.state,null)}function Hi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=C0,Va(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ve(l):(l=Ce(t)?Wt:ve.current,o.context=kn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ui(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Go.enqueueReplaceState(o,o.state,null),Mo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Un(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;a===C0&&(a=o.refs={}),i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Wr(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cu(e){var t=e._init;return t(e._payload)}function _0(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Mt(f,c),f.index=0,f.sibling=null,f}function l(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,d,x){return c===null||c.tag!==6?(c=oi(d,f.mode,x),c.return=f,c):(c=o(c,d),c.return=f,c)}function s(f,c,d,x){var P=d.type;return P===nn?p(f,c,d.props.children,x,d.key):c!==null&&(c.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===vt&&cu(P)===c.type)?(x=o(c,d.props),x.ref=Un(f,c,d),x.return=f,x):(x=co(d.type,d.key,d.props,null,f.mode,x),x.ref=Un(f,c,d),x.return=f,x)}function u(f,c,d,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=li(d,f.mode,x),c.return=f,c):(c=o(c,d.children||[]),c.return=f,c)}function p(f,c,d,x,P){return c===null||c.tag!==7?(c=Zt(d,f.mode,x,P),c.return=f,c):(c=o(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=oi(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ar:return d=co(c.type,c.key,c.props,null,f.mode,d),d.ref=Un(f,null,c),d.return=f,d;case tn:return c=li(c,f.mode,d),c.return=f,c;case vt:var x=c._init;return m(f,x(c._payload),d)}if(Qn(c)||Tn(c))return c=Zt(c,f.mode,d,null),c.return=f,c;Wr(f,c)}return null}function h(f,c,d,x){var P=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return P!==null?null:a(f,c,""+d,x);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ar:return d.key===P?s(f,c,d,x):null;case tn:return d.key===P?u(f,c,d,x):null;case vt:return P=d._init,h(f,c,P(d._payload),x)}if(Qn(d)||Tn(d))return P!==null?null:p(f,c,d,x,null);Wr(f,d)}return null}function S(f,c,d,x,P){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(d)||null,a(c,f,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ar:return f=f.get(x.key===null?d:x.key)||null,s(c,f,x,P);case tn:return f=f.get(x.key===null?d:x.key)||null,u(c,f,x,P);case vt:var L=x._init;return S(f,c,d,L(x._payload),P)}if(Qn(x)||Tn(x))return f=f.get(d)||null,p(c,f,x,P,null);Wr(c,x)}return null}function w(f,c,d,x){for(var P=null,L=null,C=c,$=c=0,G=null;C!==null&&$<d.length;$++){C.index>$?(G=C,C=null):G=C.sibling;var R=h(f,C,d[$],x);if(R===null){C===null&&(C=G);break}e&&C&&R.alternate===null&&t(f,C),c=l(R,c,$),L===null?P=R:L.sibling=R,L=R,C=G}if($===d.length)return n(f,C),W&&Ft(f,$),P;if(C===null){for(;$<d.length;$++)C=m(f,d[$],x),C!==null&&(c=l(C,c,$),L===null?P=C:L.sibling=C,L=C);return W&&Ft(f,$),P}for(C=r(f,C);$<d.length;$++)G=S(C,f,$,d[$],x),G!==null&&(e&&G.alternate!==null&&C.delete(G.key===null?$:G.key),c=l(G,c,$),L===null?P=G:L.sibling=G,L=G);return e&&C.forEach(function(Be){return t(f,Be)}),W&&Ft(f,$),P}function v(f,c,d,x){var P=Tn(d);if(typeof P!="function")throw Error(E(150));if(d=P.call(d),d==null)throw Error(E(151));for(var L=P=null,C=c,$=c=0,G=null,R=d.next();C!==null&&!R.done;$++,R=d.next()){C.index>$?(G=C,C=null):G=C.sibling;var Be=h(f,C,R.value,x);if(Be===null){C===null&&(C=G);break}e&&C&&Be.alternate===null&&t(f,C),c=l(Be,c,$),L===null?P=Be:L.sibling=Be,L=Be,C=G}if(R.done)return n(f,C),W&&Ft(f,$),P;if(C===null){for(;!R.done;$++,R=d.next())R=m(f,R.value,x),R!==null&&(c=l(R,c,$),L===null?P=R:L.sibling=R,L=R);return W&&Ft(f,$),P}for(C=r(f,C);!R.done;$++,R=d.next())R=S(C,f,$,R.value,x),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?$:R.key),c=l(R,c,$),L===null?P=R:L.sibling=R,L=R);return e&&C.forEach(function(An){return t(f,An)}),W&&Ft(f,$),P}function N(f,c,d,x){if(typeof d=="object"&&d!==null&&d.type===nn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Ar:e:{for(var P=d.key,L=c;L!==null;){if(L.key===P){if(P=d.type,P===nn){if(L.tag===7){n(f,L.sibling),c=o(L,d.props.children),c.return=f,f=c;break e}}else if(L.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===vt&&cu(P)===L.type){n(f,L.sibling),c=o(L,d.props),c.ref=Un(f,L,d),c.return=f,f=c;break e}n(f,L);break}else t(f,L);L=L.sibling}d.type===nn?(c=Zt(d.props.children,f.mode,x,d.key),c.return=f,f=c):(x=co(d.type,d.key,d.props,null,f.mode,x),x.ref=Un(f,c,d),x.return=f,f=x)}return i(f);case tn:e:{for(L=d.key;c!==null;){if(c.key===L)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=o(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=li(d,f.mode,x),c.return=f,f=c}return i(f);case vt:return L=d._init,N(f,c,L(d._payload),x)}if(Qn(d))return w(f,c,d,x);if(Tn(d))return v(f,c,d,x);Wr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,d),c.return=f,f=c):(n(f,c),c=oi(d,f.mode,x),c.return=f,f=c),i(f)):n(f,c)}return N}var Pn=_0(!0),N0=_0(!1),jr={},rt=At(jr),hr=At(jr),vr=At(jr);function Ht(e){if(e===jr)throw Error(E(174));return e}function Ua(e,t){switch(H(vr,t),H(hr,e),H(rt,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xi(t,e)}Z(rt),H(rt,t)}function _n(){Z(rt),Z(hr),Z(vr)}function L0(e){Ht(vr.current);var t=Ht(rt.current),n=xi(t,e.type);t!==n&&(H(hr,e),H(rt,n))}function Ha(e){hr.current===e&&(Z(rt),Z(hr))}var Q=At(0);function $o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ql=[];function Ba(){for(var e=0;e<ql.length;e++)ql[e]._workInProgressVersionPrimary=null;ql.length=0}var lo=mt.ReactCurrentDispatcher,bl=mt.ReactCurrentBatchConfig,Yt=0,Y=null,ne=null,le=null,Oo=!1,er=!1,yr=0,lp=0;function de(){throw Error(E(321))}function Za(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Wa(e,t,n,r,o,l){if(Yt=l,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,lo.current=e===null||e.memoizedState===null?up:cp,e=n(r,o),er){l=0;do{if(er=!1,yr=0,25<=l)throw Error(E(301));l+=1,le=ne=null,t.updateQueue=null,lo.current=fp,e=n(r,o)}while(er)}if(lo.current=zo,t=ne!==null&&ne.next!==null,Yt=0,le=ne=Y=null,Oo=!1,t)throw Error(E(300));return e}function Qa(){var e=yr!==0;return yr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Ue(){if(ne===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,ne=e;else{if(e===null)throw Error(E(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function gr(e,t){return typeof t=="function"?t(e):t}function ei(e){var t=Ue(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,u=l;do{var p=u.lane;if((Yt&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=m,i=r):s=s.next=m,Y.lanes|=p,Xt|=p}u=u.next}while(u!==null&&u!==l);s===null?i=r:s.next=a,Ge(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Y.lanes|=l,Xt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ti(e){var t=Ue(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ge(l,t.memoizedState)||(Ee=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function j0(){}function M0(e,t){var n=Y,r=Ue(),o=t(),l=!Ge(r.memoizedState,o);if(l&&(r.memoizedState=o,Ee=!0),r=r.queue,Ya(z0.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,wr(9,O0.bind(null,n,r,o,t),void 0,null),ie===null)throw Error(E(349));Yt&30||$0(n,t,o)}return o}function $0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function O0(e,t,n,r){t.value=n,t.getSnapshot=r,A0(t)&&R0(e)}function z0(e,t,n){return n(function(){A0(t)&&R0(e)})}function A0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function R0(e){var t=dt(e,1);t!==null&&Ke(t,e,1,-1)}function fu(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:e},t.queue=e,e=e.dispatch=sp.bind(null,Y,e),[t.memoizedState,e]}function wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function T0(){return Ue().memoizedState}function io(e,t,n,r){var o=qe();Y.flags|=e,o.memoizedState=wr(1|t,n,void 0,r===void 0?null:r)}function Jo(e,t,n,r){var o=Ue();r=r===void 0?null:r;var l=void 0;if(ne!==null){var i=ne.memoizedState;if(l=i.destroy,r!==null&&Za(r,i.deps)){o.memoizedState=wr(t,n,l,r);return}}Y.flags|=e,o.memoizedState=wr(1|t,n,l,r)}function du(e,t){return io(8390656,8,e,t)}function Ya(e,t){return Jo(2048,8,e,t)}function I0(e,t){return Jo(4,2,e,t)}function F0(e,t){return Jo(4,4,e,t)}function D0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function V0(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4,4,D0.bind(null,t,e),n)}function Xa(){}function U0(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Za(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function H0(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Za(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function B0(e,t,n){return Yt&21?(Ge(n,t)||(n=Qc(),Y.lanes|=n,Xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function ip(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=bl.transition;bl.transition={};try{e(!1),t()}finally{D=n,bl.transition=r}}function Z0(){return Ue().memoizedState}function ap(e,t,n){var r=jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},W0(e))Q0(t,n);else if(n=E0(e,t,n,r),n!==null){var o=ge();Ke(n,e,r,o),Y0(n,t,r)}}function sp(e,t,n){var r=jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(W0(e))Q0(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,Ge(a,i)){var s=t.interleaved;s===null?(o.next=o,Da(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=E0(e,t,o,r),n!==null&&(o=ge(),Ke(n,e,r,o),Y0(n,t,r))}}function W0(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Q0(e,t){er=Oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Y0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pa(e,n)}}var zo={readContext:Ve,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},up={readContext:Ve,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:du,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,io(4194308,4,D0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ap.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:fu,useDebugValue:Xa,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=fu(!1),t=e[0];return e=ip.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=qe();if(W){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ie===null)throw Error(E(349));Yt&30||$0(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,du(z0.bind(null,r,l,e),[e]),r.flags|=2048,wr(9,O0.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=qe(),t=ie.identifierPrefix;if(W){var n=st,r=at;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cp={readContext:Ve,useCallback:U0,useContext:Ve,useEffect:Ya,useImperativeHandle:V0,useInsertionEffect:I0,useLayoutEffect:F0,useMemo:H0,useReducer:ei,useRef:T0,useState:function(){return ei(gr)},useDebugValue:Xa,useDeferredValue:function(e){var t=Ue();return B0(t,ne.memoizedState,e)},useTransition:function(){var e=ei(gr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:j0,useSyncExternalStore:M0,useId:Z0,unstable_isNewReconciler:!1},fp={readContext:Ve,useCallback:U0,useContext:Ve,useEffect:Ya,useImperativeHandle:V0,useInsertionEffect:I0,useLayoutEffect:F0,useMemo:H0,useReducer:ti,useRef:T0,useState:function(){return ti(gr)},useDebugValue:Xa,useDeferredValue:function(e){var t=Ue();return ne===null?t.memoizedState=e:B0(t,ne.memoizedState,e)},useTransition:function(){var e=ti(gr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:j0,useSyncExternalStore:M0,useId:Z0,unstable_isNewReconciler:!1};function Nn(e,t){try{var n="",r=t;do n+=Dd(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ni(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dp=typeof WeakMap=="function"?WeakMap:Map;function X0(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ro||(Ro=!0,bi=r),Bi(e,t)},n}function K0(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Bi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Bi(e,t),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function pu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=_p.bind(null,e,t,n),t.then(e,e))}function mu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var pp=mt.ReactCurrentOwner,Ee=!1;function ye(e,t,n,r){t.child=e===null?N0(t,null,n,r):Pn(t,e.child,n,r)}function vu(e,t,n,r,o){n=n.render;var l=t.ref;return gn(t,o),r=Wa(e,t,n,r,l,o),n=Qa(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pt(e,t,o)):(W&&n&&za(t),t.flags|=1,ye(e,t,r,o),t.child)}function yu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!ns(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,G0(e,t,l,r,o)):(e=co(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:fr,n(i,r)&&e.ref===t.ref)return pt(e,t,o)}return t.flags|=1,e=Mt(l,r),e.ref=t.ref,e.return=t,t.child=e}function G0(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(fr(l,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,pt(e,t,o)}return Zi(e,t,n,r,o)}function J0(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(pn,Le),Le|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(pn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,H(pn,Le),Le|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,H(pn,Le),Le|=r;return ye(e,t,o,n),t.child}function q0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zi(e,t,n,r,o){var l=Ce(n)?Wt:ve.current;return l=kn(t,l),gn(t,o),n=Wa(e,t,n,r,l,o),r=Qa(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pt(e,t,o)):(W&&r&&za(t),t.flags|=1,ye(e,t,n,o),t.child)}function gu(e,t,n,r,o){if(Ce(n)){var l=!0;Po(t)}else l=!1;if(gn(t,o),t.stateNode===null)ao(e,t),P0(t,n,r),Hi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Ce(n)?Wt:ve.current,u=kn(t,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&uu(t,i,r,u),yt=!1;var h=t.memoizedState;i.state=h,Mo(t,r,i,o),s=t.memoizedState,a!==r||h!==s||ke.current||yt?(typeof p=="function"&&(Ui(t,n,p,r),s=t.memoizedState),(a=yt||su(t,n,a,r,h,s,u))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,k0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:We(t.type,a),i.props=u,m=t.pendingProps,h=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ve(s):(s=Ce(n)?Wt:ve.current,s=kn(t,s));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==m||h!==s)&&uu(t,i,r,s),yt=!1,h=t.memoizedState,i.state=h,Mo(t,r,i,o);var w=t.memoizedState;a!==m||h!==w||ke.current||yt?(typeof S=="function"&&(Ui(t,n,S,r),w=t.memoizedState),(u=yt||su(t,n,u,r,h,w,s)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Wi(e,t,n,r,l,o)}function Wi(e,t,n,r,o,l){q0(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&ru(t,n,!1),pt(e,t,l);r=t.stateNode,pp.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Pn(t,e.child,null,l),t.child=Pn(t,null,a,l)):ye(e,t,a,l),t.memoizedState=r.state,o&&ru(t,n,!0),t.child}function b0(e){var t=e.stateNode;t.pendingContext?nu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nu(e,t.context,!1),Ua(e,t.containerInfo)}function wu(e,t,n,r,o){return Cn(),Ra(o),t.flags|=256,ye(e,t,n,r),t.child}var Qi={dehydrated:null,treeContext:null,retryLane:0};function Yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function ef(e,t,n){var r=t.pendingProps,o=Q.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(Q,o&1),e===null)return Di(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=el(i,r,0,null),e=Zt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Yi(n),t.memoizedState=Qi,e):Ka(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return mp(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Mt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=Mt(a,l):(l=Zt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Yi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Qi,r}return l=e.child,e=l.sibling,r=Mt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ka(e,t){return t=el({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qr(e,t,n,r){return r!==null&&Ra(r),Pn(t,e.child,null,n),e=Ka(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mp(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=ni(Error(E(422))),Qr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=el({mode:"visible",children:r.children},o,0,null),l=Zt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Pn(t,e.child,null,i),t.child.memoizedState=Yi(i),t.memoizedState=Qi,l);if(!(t.mode&1))return Qr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(E(419)),r=ni(l,r,void 0),Qr(e,t,i,r)}if(a=(i&e.childLanes)!==0,Ee||a){if(r=ie,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,dt(e,o),Ke(r,e,o,-1))}return ts(),r=ni(Error(E(421))),Qr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Np.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,je=_t(o.nextSibling),Me=t,W=!0,Ye=null,e!==null&&(Te[Ie++]=at,Te[Ie++]=st,Te[Ie++]=Qt,at=e.id,st=e.overflow,Qt=t),t=Ka(t,r.children),t.flags|=4096,t)}function xu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vi(e.return,t,n)}function ri(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function tf(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ye(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xu(e,n,t);else if(e.tag===19)xu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&$o(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ri(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&$o(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ri(t,!0,n,null,l);break;case"together":ri(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ao(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hp(e,t,n){switch(t.tag){case 3:b0(t),Cn();break;case 5:L0(t);break;case 1:Ce(t.type)&&Po(t);break;case 4:Ua(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;H(Lo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?ef(e,t,n):(H(Q,Q.current&1),e=pt(e,t,n),e!==null?e.sibling:null);H(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,J0(e,t,n)}return pt(e,t,n)}var nf,Xi,rf,of;nf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xi=function(){};rf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ht(rt.current);var l=null;switch(n){case"input":o=vi(e,o),r=vi(e,r),l=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":o=wi(e,o),r=wi(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ko)}Si(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(or.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(or.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&B("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};of=function(e,t,n,r){n!==r&&(t.flags|=4)};function Hn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vp(e,t,n){var r=t.pendingProps;switch(Aa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ce(t.type)&&Co(),pe(t),null;case 3:return r=t.stateNode,_n(),Z(ke),Z(ve),Ba(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(na(Ye),Ye=null))),Xi(e,t),pe(t),null;case 5:Ha(t);var o=Ht(vr.current);if(n=t.type,e!==null&&t.stateNode!=null)rf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return pe(t),null}if(e=Ht(rt.current),Zr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[tt]=t,r[mr]=l,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Xn.length;o++)B(Xn[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":js(r,l),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},B("invalid",r);break;case"textarea":$s(r,l),B("invalid",r)}Si(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Br(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Br(r.textContent,a,e),o=["children",""+a]):or.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&B("scroll",r)}switch(n){case"input":Rr(r),Ms(r,l,!0);break;case"textarea":Rr(r),Os(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ko)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$c(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[tt]=t,e[mr]=r,nf(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ei(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Xn.length;o++)B(Xn[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":js(e,r),o=vi(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),B("invalid",e);break;case"textarea":$s(e,r),o=wi(e,r),B("invalid",e);break;default:o=r}Si(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Ac(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Oc(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&lr(e,s):typeof s=="number"&&lr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(or.hasOwnProperty(l)?s!=null&&l==="onScroll"&&B("scroll",e):s!=null&&wa(e,l,s,i))}switch(n){case"input":Rr(e),Ms(e,r,!1);break;case"textarea":Rr(e),Os(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?mn(e,!!r.multiple,l,!1):r.defaultValue!=null&&mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)of(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Ht(vr.current),Ht(rt.current),Zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(l=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return pe(t),null;case 13:if(Z(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&je!==null&&t.mode&1&&!(t.flags&128))S0(),Cn(),t.flags|=98560,l=!1;else if(l=Zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(E(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(E(317));l[tt]=t}else Cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),l=!1}else Ye!==null&&(na(Ye),Ye=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?re===0&&(re=3):ts())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return _n(),Xi(e,t),e===null&&dr(t.stateNode.containerInfo),pe(t),null;case 10:return Fa(t.type._context),pe(t),null;case 17:return Ce(t.type)&&Co(),pe(t),null;case 19:if(Z(Q),l=t.memoizedState,l===null)return pe(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Hn(l,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=$o(e),i!==null){for(t.flags|=128,Hn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Q,Q.current&1|2),t.child}e=e.sibling}l.tail!==null&&q()>Ln&&(t.flags|=128,r=!0,Hn(l,!1),t.lanes=4194304)}else{if(!r)if(e=$o(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Hn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!W)return pe(t),null}else 2*q()-l.renderingStartTime>Ln&&n!==1073741824&&(t.flags|=128,r=!0,Hn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=q(),t.sibling=null,n=Q.current,H(Q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return es(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function yp(e,t){switch(Aa(t),t.tag){case 1:return Ce(t.type)&&Co(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(),Z(ke),Z(ve),Ba(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ha(t),null;case 13:if(Z(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(Q),null;case 4:return _n(),null;case 10:return Fa(t.type._context),null;case 22:case 23:return es(),null;case 24:return null;default:return null}}var Yr=!1,he=!1,gp=typeof WeakSet=="function"?WeakSet:Set,j=null;function dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Ki(e,t,n){try{n()}catch(r){K(e,t,r)}}var Su=!1;function wp(e,t){if(Oi=xo,e=s0(),Oa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,u=0,p=0,m=e,h=null;t:for(;;){for(var S;m!==n||o!==0&&m.nodeType!==3||(a=i+o),m!==l||r!==0&&m.nodeType!==3||(s=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(S=m.firstChild)!==null;)h=m,m=S;for(;;){if(m===e)break t;if(h===n&&++u===o&&(a=i),h===l&&++p===r&&(s=i),(S=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=S}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(zi={focusedElem:e,selectionRange:n},xo=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,N=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:We(t.type,v),N);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(x){K(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return w=Su,Su=!1,w}function tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Ki(t,n,l)}o=o.next}while(o!==r)}}function qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lf(e){var t=e.alternate;t!==null&&(e.alternate=null,lf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[mr],delete t[Ti],delete t[tp],delete t[np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function af(e){return e.tag===5||e.tag===3||e.tag===4}function Eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||af(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ji(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ko));else if(r!==4&&(e=e.child,e!==null))for(Ji(e,t,n),e=e.sibling;e!==null;)Ji(e,t,n),e=e.sibling}function qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qi(e,t,n),e=e.sibling;e!==null;)qi(e,t,n),e=e.sibling}var se=null,Qe=!1;function ht(e,t,n){for(n=n.child;n!==null;)sf(e,t,n),n=n.sibling}function sf(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Zo,n)}catch{}switch(n.tag){case 5:he||dn(n,t);case 6:var r=se,o=Qe;se=null,ht(e,t,n),se=r,Qe=o,se!==null&&(Qe?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Qe?(e=se,n=n.stateNode,e.nodeType===8?Gl(e.parentNode,n):e.nodeType===1&&Gl(e,n),ur(e)):Gl(se,n.stateNode));break;case 4:r=se,o=Qe,se=n.stateNode.containerInfo,Qe=!0,ht(e,t,n),se=r,Qe=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Ki(n,t,i),o=o.next}while(o!==r)}ht(e,t,n);break;case 1:if(!he&&(dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,ht(e,t,n),he=r):ht(e,t,n);break;default:ht(e,t,n)}}function ku(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gp),t.forEach(function(r){var o=Lp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,Qe=!1;break e;case 3:se=a.stateNode.containerInfo,Qe=!0;break e;case 4:se=a.stateNode.containerInfo,Qe=!0;break e}a=a.return}if(se===null)throw Error(E(160));sf(l,i,o),se=null,Qe=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){K(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uf(t,e),t=t.sibling}function uf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),Je(e),r&4){try{tr(3,e,e.return),qo(3,e)}catch(v){K(e,e.return,v)}try{tr(5,e,e.return)}catch(v){K(e,e.return,v)}}break;case 1:Ze(t,e),Je(e),r&512&&n!==null&&dn(n,n.return);break;case 5:if(Ze(t,e),Je(e),r&512&&n!==null&&dn(n,n.return),e.flags&32){var o=e.stateNode;try{lr(o,"")}catch(v){K(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&jc(o,l),Ei(a,i);var u=Ei(a,l);for(i=0;i<s.length;i+=2){var p=s[i],m=s[i+1];p==="style"?Ac(o,m):p==="dangerouslySetInnerHTML"?Oc(o,m):p==="children"?lr(o,m):wa(o,p,m,u)}switch(a){case"input":yi(o,l);break;case"textarea":Mc(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?mn(o,!!l.multiple,S,!1):h!==!!l.multiple&&(l.defaultValue!=null?mn(o,!!l.multiple,l.defaultValue,!0):mn(o,!!l.multiple,l.multiple?[]:"",!1))}o[mr]=l}catch(v){K(e,e.return,v)}}break;case 6:if(Ze(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(v){K(e,e.return,v)}}break;case 3:if(Ze(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ur(t.containerInfo)}catch(v){K(e,e.return,v)}break;case 4:Ze(t,e),Je(e);break;case 13:Ze(t,e),Je(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(qa=q())),r&4&&ku(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||p,Ze(t,e),he=u):Ze(t,e),Je(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(j=e,p=e.child;p!==null;){for(m=j=p;j!==null;){switch(h=j,S=h.child,h.tag){case 0:case 11:case 14:case 15:tr(4,h,h.return);break;case 1:dn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){K(r,n,v)}}break;case 5:dn(h,h.return);break;case 22:if(h.memoizedState!==null){Pu(m);continue}}S!==null?(S.return=h,j=S):Pu(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=m.stateNode,s=m.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=zc("display",i))}catch(v){K(e,e.return,v)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(v){K(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ze(t,e),Je(e),r&4&&ku(e);break;case 21:break;default:Ze(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(af(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(lr(o,""),r.flags&=-33);var l=Eu(e);qi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Eu(e);Ji(e,a,i);break;default:throw Error(E(161))}}catch(s){K(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xp(e,t,n){j=e,cf(e)}function cf(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Yr;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||he;a=Yr;var u=he;if(Yr=i,(he=s)&&!u)for(j=o;j!==null;)i=j,s=i.child,i.tag===22&&i.memoizedState!==null?_u(o):s!==null?(s.return=i,j=s):_u(o);for(;l!==null;)j=l,cf(l),l=l.sibling;j=o,Yr=a,he=u}Cu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,j=l):Cu(e)}}function Cu(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&au(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}au(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&ur(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}he||t.flags&512&&Gi(t)}catch(h){K(t,t.return,h)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Pu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function _u(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qo(4,t)}catch(s){K(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){K(t,o,s)}}var l=t.return;try{Gi(t)}catch(s){K(t,l,s)}break;case 5:var i=t.return;try{Gi(t)}catch(s){K(t,i,s)}}}catch(s){K(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var Sp=Math.ceil,Ao=mt.ReactCurrentDispatcher,Ga=mt.ReactCurrentOwner,De=mt.ReactCurrentBatchConfig,T=0,ie=null,ee=null,ce=0,Le=0,pn=At(0),re=0,xr=null,Xt=0,bo=0,Ja=0,nr=null,Se=null,qa=0,Ln=1/0,lt=null,Ro=!1,bi=null,Lt=null,Xr=!1,St=null,To=0,rr=0,ea=null,so=-1,uo=0;function ge(){return T&6?q():so!==-1?so:so=q()}function jt(e){return e.mode&1?T&2&&ce!==0?ce&-ce:op.transition!==null?(uo===0&&(uo=Qc()),uo):(e=D,e!==0||(e=window.event,e=e===void 0?16:bc(e.type)),e):1}function Ke(e,t,n,r){if(50<rr)throw rr=0,ea=null,Error(E(185));_r(e,n,r),(!(T&2)||e!==ie)&&(e===ie&&(!(T&2)&&(bo|=n),re===4&&wt(e,ce)),Pe(e,r),n===1&&T===0&&!(t.mode&1)&&(Ln=q()+500,Ko&&Rt()))}function Pe(e,t){var n=e.callbackNode;o1(e,t);var r=wo(e,e===ie?ce:0);if(r===0)n!==null&&Rs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Rs(n),t===1)e.tag===0?rp(Nu.bind(null,e)):g0(Nu.bind(null,e)),b1(function(){!(T&6)&&Rt()}),n=null;else{switch(Yc(r)){case 1:n=Ca;break;case 4:n=Zc;break;case 16:n=go;break;case 536870912:n=Wc;break;default:n=go}n=gf(n,ff.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ff(e,t){if(so=-1,uo=0,T&6)throw Error(E(327));var n=e.callbackNode;if(wn()&&e.callbackNode!==n)return null;var r=wo(e,e===ie?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Io(e,r);else{t=r;var o=T;T|=2;var l=pf();(ie!==e||ce!==t)&&(lt=null,Ln=q()+500,Bt(e,t));do try{Cp();break}catch(a){df(e,a)}while(1);Ia(),Ao.current=l,T=o,ee!==null?t=0:(ie=null,ce=0,t=re)}if(t!==0){if(t===2&&(o=Ni(e),o!==0&&(r=o,t=ta(e,o))),t===1)throw n=xr,Bt(e,0),wt(e,r),Pe(e,q()),n;if(t===6)wt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Ep(o)&&(t=Io(e,r),t===2&&(l=Ni(e),l!==0&&(r=l,t=ta(e,l))),t===1))throw n=xr,Bt(e,0),wt(e,r),Pe(e,q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Dt(e,Se,lt);break;case 3:if(wt(e,r),(r&130023424)===r&&(t=qa+500-q(),10<t)){if(wo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ri(Dt.bind(null,e,Se,lt),t);break}Dt(e,Se,lt);break;case 4:if(wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Xe(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sp(r/1960))-r,10<r){e.timeoutHandle=Ri(Dt.bind(null,e,Se,lt),r);break}Dt(e,Se,lt);break;case 5:Dt(e,Se,lt);break;default:throw Error(E(329))}}}return Pe(e,q()),e.callbackNode===n?ff.bind(null,e):null}function ta(e,t){var n=nr;return e.current.memoizedState.isDehydrated&&(Bt(e,t).flags|=256),e=Io(e,t),e!==2&&(t=Se,Se=n,t!==null&&na(t)),e}function na(e){Se===null?Se=e:Se.push.apply(Se,e)}function Ep(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ge(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~Ja,t&=~bo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function Nu(e){if(T&6)throw Error(E(327));wn();var t=wo(e,0);if(!(t&1))return Pe(e,q()),null;var n=Io(e,t);if(e.tag!==0&&n===2){var r=Ni(e);r!==0&&(t=r,n=ta(e,r))}if(n===1)throw n=xr,Bt(e,0),wt(e,t),Pe(e,q()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dt(e,Se,lt),Pe(e,q()),null}function ba(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(Ln=q()+500,Ko&&Rt())}}function Kt(e){St!==null&&St.tag===0&&!(T&6)&&wn();var t=T;T|=1;var n=De.transition,r=D;try{if(De.transition=null,D=1,e)return e()}finally{D=r,De.transition=n,T=t,!(T&6)&&Rt()}}function es(){Le=pn.current,Z(pn)}function Bt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,q1(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Aa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Co();break;case 3:_n(),Z(ke),Z(ve),Ba();break;case 5:Ha(r);break;case 4:_n();break;case 13:Z(Q);break;case 19:Z(Q);break;case 10:Fa(r.type._context);break;case 22:case 23:es()}n=n.return}if(ie=e,ee=e=Mt(e.current,null),ce=Le=t,re=0,xr=null,Ja=bo=Xt=0,Se=nr=null,Ut!==null){for(t=0;t<Ut.length;t++)if(n=Ut[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Ut=null}return e}function df(e,t){do{var n=ee;try{if(Ia(),lo.current=zo,Oo){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Oo=!1}if(Yt=0,le=ne=Y=null,er=!1,yr=0,Ga.current=null,n===null||n.return===null){re=1,xr=t,ee=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=ce,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=mu(i);if(S!==null){S.flags&=-257,hu(S,i,a,l,t),S.mode&1&&pu(l,u,t),t=S,s=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(s),t.updateQueue=v}else w.add(s);break e}else{if(!(t&1)){pu(l,u,t),ts();break e}s=Error(E(426))}}else if(W&&a.mode&1){var N=mu(i);if(N!==null){!(N.flags&65536)&&(N.flags|=256),hu(N,i,a,l,t),Ra(Nn(s,a));break e}}l=s=Nn(s,a),re!==4&&(re=2),nr===null?nr=[l]:nr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=X0(l,s,t);iu(l,f);break e;case 1:a=s;var c=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Lt===null||!Lt.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=K0(l,a,t);iu(l,x);break e}}l=l.return}while(l!==null)}hf(n)}catch(P){t=P,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function pf(){var e=Ao.current;return Ao.current=zo,e===null?zo:e}function ts(){(re===0||re===3||re===2)&&(re=4),ie===null||!(Xt&268435455)&&!(bo&268435455)||wt(ie,ce)}function Io(e,t){var n=T;T|=2;var r=pf();(ie!==e||ce!==t)&&(lt=null,Bt(e,t));do try{kp();break}catch(o){df(e,o)}while(1);if(Ia(),T=n,Ao.current=r,ee!==null)throw Error(E(261));return ie=null,ce=0,re}function kp(){for(;ee!==null;)mf(ee)}function Cp(){for(;ee!==null&&!Kd();)mf(ee)}function mf(e){var t=yf(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?hf(e):ee=t,Ga.current=null}function hf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yp(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(n=vp(n,t,Le),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function Dt(e,t,n){var r=D,o=De.transition;try{De.transition=null,D=1,Pp(e,t,n,r)}finally{De.transition=o,D=r}return null}function Pp(e,t,n,r){do wn();while(St!==null);if(T&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(l1(e,l),e===ie&&(ee=ie=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xr||(Xr=!0,gf(go,function(){return wn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=De.transition,De.transition=null;var i=D;D=1;var a=T;T|=4,Ga.current=null,wp(e,n),uf(n,e),W1(zi),xo=!!Oi,zi=Oi=null,e.current=n,xp(n),Gd(),T=a,D=i,De.transition=l}else e.current=n;if(Xr&&(Xr=!1,St=e,To=o),l=e.pendingLanes,l===0&&(Lt=null),bd(n.stateNode),Pe(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ro)throw Ro=!1,e=bi,bi=null,e;return To&1&&e.tag!==0&&wn(),l=e.pendingLanes,l&1?e===ea?rr++:(rr=0,ea=e):rr=0,Rt(),null}function wn(){if(St!==null){var e=Yc(To),t=De.transition,n=D;try{if(De.transition=null,D=16>e?16:e,St===null)var r=!1;else{if(e=St,St=null,To=0,T&6)throw Error(E(331));var o=T;for(T|=4,j=e.current;j!==null;){var l=j,i=l.child;if(j.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(j=u;j!==null;){var p=j;switch(p.tag){case 0:case 11:case 15:tr(8,p,l)}var m=p.child;if(m!==null)m.return=p,j=m;else for(;j!==null;){p=j;var h=p.sibling,S=p.return;if(lf(p),p===u){j=null;break}if(h!==null){h.return=S,j=h;break}j=S}}}var w=l.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var N=v.sibling;v.sibling=null,v=N}while(v!==null)}}j=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,j=i;else e:for(;j!==null;){if(l=j,l.flags&2048)switch(l.tag){case 0:case 11:case 15:tr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,j=f;break e}j=l.return}}var c=e.current;for(j=c;j!==null;){i=j;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,j=d;else e:for(i=c;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qo(9,a)}}catch(P){K(a,a.return,P)}if(a===i){j=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,j=x;break e}j=a.return}}if(T=o,Rt(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Zo,e)}catch{}r=!0}return r}finally{D=n,De.transition=t}}return!1}function Lu(e,t,n){t=Nn(n,t),t=X0(e,t,1),e=Nt(e,t,1),t=ge(),e!==null&&(_r(e,1,t),Pe(e,t))}function K(e,t,n){if(e.tag===3)Lu(e,e,n);else for(;t!==null;){if(t.tag===3){Lu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){e=Nn(n,e),e=K0(t,e,1),t=Nt(t,e,1),e=ge(),t!==null&&(_r(t,1,e),Pe(t,e));break}}t=t.return}}function _p(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ce&n)===n&&(re===4||re===3&&(ce&130023424)===ce&&500>q()-qa?Bt(e,0):Ja|=n),Pe(e,t)}function vf(e,t){t===0&&(e.mode&1?(t=Fr,Fr<<=1,!(Fr&130023424)&&(Fr=4194304)):t=1);var n=ge();e=dt(e,t),e!==null&&(_r(e,t,n),Pe(e,n))}function Np(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vf(e,n)}function Lp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),vf(e,n)}var yf;yf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,hp(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,W&&t.flags&1048576&&w0(t,No,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ao(e,t),e=t.pendingProps;var o=kn(t,ve.current);gn(t,n),o=Wa(null,t,r,e,o,n);var l=Qa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(l=!0,Po(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Va(t),o.updater=Go,t.stateNode=o,o._reactInternals=t,Hi(t,r,e,n),t=Wi(null,t,r,!0,l,n)):(t.tag=0,W&&l&&za(t),ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ao(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Mp(r),e=We(r,e),o){case 0:t=Zi(null,t,r,e,n);break e;case 1:t=gu(null,t,r,e,n);break e;case 11:t=vu(null,t,r,e,n);break e;case 14:t=yu(null,t,r,We(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Zi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),gu(e,t,r,o,n);case 3:e:{if(b0(t),e===null)throw Error(E(387));r=t.pendingProps,l=t.memoizedState,o=l.element,k0(e,t),Mo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Nn(Error(E(423)),t),t=wu(e,t,r,n,o);break e}else if(r!==o){o=Nn(Error(E(424)),t),t=wu(e,t,r,n,o);break e}else for(je=_t(t.stateNode.containerInfo.firstChild),Me=t,W=!0,Ye=null,n=N0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),r===o){t=pt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return L0(t),e===null&&Di(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ai(r,o)?i=null:l!==null&&Ai(r,l)&&(t.flags|=32),q0(e,t),ye(e,t,i,n),t.child;case 6:return e===null&&Di(t),null;case 13:return ef(e,t,n);case 4:return Ua(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),vu(e,t,r,o,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,H(Lo,r._currentValue),r._currentValue=i,l!==null)if(Ge(l.value,i)){if(l.children===o.children&&!ke.current){t=pt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=ut(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Vi(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(E(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Vi(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,gn(t,n),o=Ve(o),r=r(o),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,o=We(r,t.pendingProps),o=We(r.type,o),yu(e,t,r,o,n);case 15:return G0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),ao(e,t),t.tag=1,Ce(r)?(e=!0,Po(t)):e=!1,gn(t,n),P0(t,r,o),Hi(t,r,o,n),Wi(null,t,r,!0,e,n);case 19:return tf(e,t,n);case 22:return J0(e,t,n)}throw Error(E(156,t.tag))};function gf(e,t){return Bc(e,t)}function jp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new jp(e,t,n,r)}function ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mp(e){if(typeof e=="function")return ns(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sa)return 11;if(e===Ea)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function co(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")ns(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case nn:return Zt(n.children,o,l,t);case xa:i=8,o|=8;break;case di:return e=Fe(12,n,t,o|2),e.elementType=di,e.lanes=l,e;case pi:return e=Fe(13,n,t,o),e.elementType=pi,e.lanes=l,e;case mi:return e=Fe(19,n,t,o),e.elementType=mi,e.lanes=l,e;case _c:return el(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cc:i=10;break e;case Pc:i=9;break e;case Sa:i=11;break e;case Ea:i=14;break e;case vt:i=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Fe(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Zt(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function el(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=_c,e.lanes=n,e.stateNode={isHidden:!1},e}function oi(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function li(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $p(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function rs(e,t,n,r,o,l,i,a,s){return e=new $p(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Fe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Va(l),e}function Op(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wf(e){if(!e)return Ot;e=e._reactInternals;e:{if(Jt(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ce(n))return y0(e,n,t)}return t}function xf(e,t,n,r,o,l,i,a,s){return e=rs(n,r,!0,e,o,l,i,a,s),e.context=wf(null),n=e.current,r=ge(),o=jt(n),l=ut(r,o),l.callback=t??null,Nt(n,l,o),e.current.lanes=o,_r(e,o,r),Pe(e,r),e}function tl(e,t,n,r){var o=t.current,l=ge(),i=jt(o);return n=wf(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(o,t,i),e!==null&&(Ke(e,o,i,l),oo(e,o,i)),i}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ju(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function os(e,t){ju(e,t),(e=e.alternate)&&ju(e,t)}function zp(){return null}var Sf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ls(e){this._internalRoot=e}nl.prototype.render=ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));tl(e,t,null,null)};nl.prototype.unmount=ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kt(function(){tl(null,e,null,null)}),t[ft]=null}};function nl(e){this._internalRoot=e}nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&qc(e)}};function is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mu(){}function Ap(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=Fo(i);l.call(u)}}var i=xf(t,r,e,0,null,!1,!1,"",Mu);return e._reactRootContainer=i,e[ft]=i.current,dr(e.nodeType===8?e.parentNode:e),Kt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Fo(s);a.call(u)}}var s=rs(e,0,!1,null,null,!1,!1,"",Mu);return e._reactRootContainer=s,e[ft]=s.current,dr(e.nodeType===8?e.parentNode:e),Kt(function(){tl(t,s,n,r)}),s}function ol(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Fo(i);a.call(s)}}tl(t,i,e,o)}else i=Ap(n,t,e,o,r);return Fo(i)}Xc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Yn(t.pendingLanes);n!==0&&(Pa(t,n|1),Pe(t,q()),!(T&6)&&(Ln=q()+500,Rt()))}break;case 13:Kt(function(){var r=dt(e,1);if(r!==null){var o=ge();Ke(r,e,1,o)}}),os(e,1)}};_a=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ge();Ke(t,e,134217728,n)}os(e,134217728)}};Kc=function(e){if(e.tag===13){var t=jt(e),n=dt(e,t);if(n!==null){var r=ge();Ke(n,e,t,r)}os(e,t)}};Gc=function(){return D};Jc=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Ci=function(e,t,n){switch(t){case"input":if(yi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Xo(r);if(!o)throw Error(E(90));Lc(r),yi(r,o)}}}break;case"textarea":Mc(e,n);break;case"select":t=n.value,t!=null&&mn(e,!!n.multiple,t,!1)}};Ic=ba;Fc=Kt;var Rp={usingClientEntryPoint:!1,Events:[Lr,an,Xo,Rc,Tc,ba]},Bn={findFiberByHostInstance:Vt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Tp={bundleType:Bn.bundleType,version:Bn.version,rendererPackageName:Bn.rendererPackageName,rendererConfig:Bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uc(e),e===null?null:e.stateNode},findFiberByHostInstance:Bn.findFiberByHostInstance||zp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kr.isDisabled&&Kr.supportsFiber)try{Zo=Kr.inject(Tp),nt=Kr}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rp;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!is(t))throw Error(E(200));return Op(e,t,null,n)};ze.createRoot=function(e,t){if(!is(e))throw Error(E(299));var n=!1,r="",o=Sf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=rs(e,1,!1,null,null,n,!1,r,o),e[ft]=t.current,dr(e.nodeType===8?e.parentNode:e),new ls(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Uc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Kt(e)};ze.hydrate=function(e,t,n){if(!rl(t))throw Error(E(200));return ol(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!is(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Sf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=xf(t,null,e,1,n??null,o,!1,l,i),e[ft]=t.current,dr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new nl(t)};ze.render=function(e,t,n){if(!rl(t))throw Error(E(200));return ol(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!rl(e))throw Error(E(40));return e._reactRootContainer?(Kt(function(){ol(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};ze.unstable_batchedUpdates=ba;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rl(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return ol(e,t,n,!1,r)};ze.version="18.2.0-next-9e3b772b8-20220608";function Ef(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ef)}catch(e){console.error(e)}}Ef(),wc.exports=ze;var Ip=wc.exports,$u=Ip;ci.createRoot=$u.createRoot,ci.hydrateRoot=$u.hydrateRoot;const Fp=_.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var Dp=Object.defineProperty,Do=Object.getOwnPropertySymbols,kf=Object.prototype.hasOwnProperty,Cf=Object.prototype.propertyIsEnumerable,Ou=(e,t,n)=>t in e?Dp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zu=(e,t)=>{for(var n in t||(t={}))kf.call(t,n)&&Ou(e,n,t[n]);if(Do)for(var n of Do(t))Cf.call(t,n)&&Ou(e,n,t[n]);return e},Au=(e,t)=>{var n={};for(var r in e)kf.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Do)for(var r of Do(e))t.indexOf(r)<0&&Cf.call(e,r)&&(n[r]=e[r]);return n};const qt=_.forwardRef((e,t)=>{const n=e,{alt:r,color:o,size:l,weight:i,mirrored:a,children:s,weights:u}=n,p=Au(n,["alt","color","size","weight","mirrored","children","weights"]),m=_.useContext(Fp),{color:h="currentColor",size:S,weight:w="regular",mirrored:v=!1}=m,N=Au(m,["color","size","weight","mirrored"]);return y.createElement("svg",zu(zu({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l??S,height:l??S,fill:o??h,viewBox:"0 0 256 256",transform:a||v?"scale(-1, 1)":void 0},N),p),!!r&&y.createElement("title",null,r),s,u.get(i??w))});qt.displayName="IconBase";const Vp=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M224,56l-96,88L32,56Z",opacity:"0.2"}),y.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"}))]]),Up=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),y.createElement("path",{d:"M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164ZM176,28H80A52.06,52.06,0,0,0,28,80v96a52.06,52.06,0,0,0,52,52h96a52.06,52.06,0,0,0,52-52V80A52.06,52.06,0,0,0,176,28Zm44,148a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V80A44.05,44.05,0,0,1,80,36h96a44.05,44.05,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z"}))]]),Hp=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,64V192H40V64Z",opacity:"0.2"}),y.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M224,120v16a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H216A8,8,0,0,1,224,120Zm-8,56H40a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V184A8,8,0,0,0,216,176Zm0-128H40a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"}))]]),Bp=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z",opacity:"0.2"}),y.createElement("path",{d:"M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M221.59,160.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a6.13,6.13,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L95.73,34.49a14,14,0,0,0-14.56-8.38A54.24,54.24,0,0,0,34,80c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,221.59,160.3ZM176,210C104.32,210,46,151.68,46,80A42.23,42.23,0,0,1,82.67,38h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L84.73,113.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,176,210Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M220.78,162.13,173.56,141A12,12,0,0,0,162.18,142a3.37,3.37,0,0,0-.38.28L137,163.42a3.93,3.93,0,0,1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9,3.9,0,0,1,.18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12,12,0,0,0,1-11.36L93.9,35.28a12,12,0,0,0-12.48-7.19A52.25,52.25,0,0,0,36,80c0,77.2,62.8,140,140,140a52.25,52.25,0,0,0,51.91-45.42A12,12,0,0,0,220.78,162.13ZM220,173.58A44.23,44.23,0,0,1,176,212C103.22,212,44,152.78,44,80A44.23,44.23,0,0,1,82.42,36a3.87,3.87,0,0,1,.48,0,4,4,0,0,1,3.67,2.49l21.11,47.14a4,4,0,0,1-.23,3.6l-21.19,25.2c-.1.13-.2.25-.29.39a12,12,0,0,0-.78,11.75c8.69,17.79,26.61,35.58,44.6,44.27a12,12,0,0,0,11.79-.87l.37-.28,24.83-21.12a3.93,3.93,0,0,1,3.57-.27l47.21,21.16A4,4,0,0,1,220,173.58Z"}))]]),Zp=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M187.3,159.06A36.09,36.09,0,0,1,152,188a84.09,84.09,0,0,1-84-84A36.09,36.09,0,0,1,96.94,68.7,12,12,0,0,1,110,75.1l11.48,23a12,12,0,0,1-.75,12l-8.52,12.78a44.56,44.56,0,0,0,20.91,20.91l12.78-8.52a12,12,0,0,1,12-.75l23,11.48A12,12,0,0,1,187.3,159.06ZM236,128A108,108,0,0,1,78.77,224.15L46.34,235A20,20,0,0,1,21,209.66l10.81-32.43A108,108,0,1,1,236,128Zm-24,0A84,84,0,1,0,55.27,170.06a12,12,0,0,1,1,9.81l-9.93,29.79,29.79-9.93a12.1,12.1,0,0,1,3.8-.62,12,12,0,0,1,6,1.62A84,84,0,0,0,212,128Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M128,32A96,96,0,0,0,44.89,176.07L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47A96,96,0,1,0,128,32Zm24,152a80,80,0,0,1-80-80,32,32,0,0,1,32-32l16,32-12.32,18.47a48.19,48.19,0,0,0,25.85,25.85L152,136l32,16A32,32,0,0,1,152,184Z",opacity:"0.2"}),y.createElement("path",{d:"M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.62-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M152.58,145.23l23,11.48A24,24,0,0,1,152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-40,24a8,8,0,0,0-4.42-7.16l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88A40,40,0,0,0,192,152Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M186.68,146.63l-32-16a6,6,0,0,0-6,.38L133,141.46A42.49,42.49,0,0,1,114.54,123L125,107.33a6,6,0,0,0,.38-6l-16-32A6,6,0,0,0,104,66a38,38,0,0,0-38,38,86.1,86.1,0,0,0,86,86,38,38,0,0,0,38-38A6,6,0,0,0,186.68,146.63ZM152,178a74.09,74.09,0,0,1-74-74,26,26,0,0,1,22.42-25.75l12.66,25.32-10.39,15.58a6,6,0,0,0-.54,5.63,54.43,54.43,0,0,0,29.07,29.07,6,6,0,0,0,5.63-.54l15.58-10.39,25.32,12.66A26,26,0,0,1,152,178ZM128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M185.79,148.42l-32-16a4,4,0,0,0-4,.25l-16.64,11.1a44.56,44.56,0,0,1-20.91-20.91l11.1-16.64a4,4,0,0,0,.25-4l-16-32A4,4,0,0,0,104,68a36,36,0,0,0-36,36,84.09,84.09,0,0,0,84,84,36,36,0,0,0,36-36A4,4,0,0,0,185.79,148.42ZM152,180a76.08,76.08,0,0,1-76-76,28,28,0,0,1,25.58-27.9l13.8,27.61-11,16.54A4,4,0,0,0,104,124a52.43,52.43,0,0,0,28,28,4,4,0,0,0,3.76-.37l16.54-11,27.61,13.8A28,28,0,0,1,152,180ZM128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z"}))]]),Wp=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"}),y.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]);var Qp=Object.defineProperty,Yp=Object.defineProperties,Xp=Object.getOwnPropertyDescriptors,Ru=Object.getOwnPropertySymbols,Kp=Object.prototype.hasOwnProperty,Gp=Object.prototype.propertyIsEnumerable,Tu=(e,t,n)=>t in e?Qp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jp=(e,t)=>{for(var n in t||(t={}))Kp.call(t,n)&&Tu(e,n,t[n]);if(Ru)for(var n of Ru(t))Gp.call(t,n)&&Tu(e,n,t[n]);return e},qp=(e,t)=>Yp(e,Xp(t));const Pf=_.forwardRef((e,t)=>y.createElement(qt,qp(Jp({ref:t},e),{weights:Vp})));Pf.displayName="EnvelopeSimple";var bp=Object.defineProperty,em=Object.defineProperties,tm=Object.getOwnPropertyDescriptors,Iu=Object.getOwnPropertySymbols,nm=Object.prototype.hasOwnProperty,rm=Object.prototype.propertyIsEnumerable,Fu=(e,t,n)=>t in e?bp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,om=(e,t)=>{for(var n in t||(t={}))nm.call(t,n)&&Fu(e,n,t[n]);if(Iu)for(var n of Iu(t))rm.call(t,n)&&Fu(e,n,t[n]);return e},lm=(e,t)=>em(e,tm(t));const Vo=_.forwardRef((e,t)=>y.createElement(qt,lm(om({ref:t},e),{weights:Up})));Vo.displayName="InstagramLogo";var im=Object.defineProperty,am=Object.defineProperties,sm=Object.getOwnPropertyDescriptors,Du=Object.getOwnPropertySymbols,um=Object.prototype.hasOwnProperty,cm=Object.prototype.propertyIsEnumerable,Vu=(e,t,n)=>t in e?im(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fm=(e,t)=>{for(var n in t||(t={}))um.call(t,n)&&Vu(e,n,t[n]);if(Du)for(var n of Du(t))cm.call(t,n)&&Vu(e,n,t[n]);return e},dm=(e,t)=>am(e,sm(t));const _f=_.forwardRef((e,t)=>y.createElement(qt,dm(fm({ref:t},e),{weights:Hp})));_f.displayName="List";var pm=Object.defineProperty,mm=Object.defineProperties,hm=Object.getOwnPropertyDescriptors,Uu=Object.getOwnPropertySymbols,vm=Object.prototype.hasOwnProperty,ym=Object.prototype.propertyIsEnumerable,Hu=(e,t,n)=>t in e?pm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,gm=(e,t)=>{for(var n in t||(t={}))vm.call(t,n)&&Hu(e,n,t[n]);if(Uu)for(var n of Uu(t))ym.call(t,n)&&Hu(e,n,t[n]);return e},wm=(e,t)=>mm(e,hm(t));const Nf=_.forwardRef((e,t)=>y.createElement(qt,wm(gm({ref:t},e),{weights:Bp})));Nf.displayName="Phone";var xm=Object.defineProperty,Sm=Object.defineProperties,Em=Object.getOwnPropertyDescriptors,Bu=Object.getOwnPropertySymbols,km=Object.prototype.hasOwnProperty,Cm=Object.prototype.propertyIsEnumerable,Zu=(e,t,n)=>t in e?xm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Pm=(e,t)=>{for(var n in t||(t={}))km.call(t,n)&&Zu(e,n,t[n]);if(Bu)for(var n of Bu(t))Cm.call(t,n)&&Zu(e,n,t[n]);return e},_m=(e,t)=>Sm(e,Em(t));const Lf=_.forwardRef((e,t)=>y.createElement(qt,_m(Pm({ref:t},e),{weights:Zp})));Lf.displayName="WhatsappLogo";var Nm=Object.defineProperty,Lm=Object.defineProperties,jm=Object.getOwnPropertyDescriptors,Wu=Object.getOwnPropertySymbols,Mm=Object.prototype.hasOwnProperty,$m=Object.prototype.propertyIsEnumerable,Qu=(e,t,n)=>t in e?Nm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Om=(e,t)=>{for(var n in t||(t={}))Mm.call(t,n)&&Qu(e,n,t[n]);if(Wu)for(var n of Wu(t))$m.call(t,n)&&Qu(e,n,t[n]);return e},zm=(e,t)=>Lm(e,jm(t));const jf=_.forwardRef((e,t)=>y.createElement(qt,zm(Om({ref:t},e),{weights:Wp})));jf.displayName="X";const Mf="/assets/LogoCompleta-1b24085e.svg";function Am(){const[e,t]=_.useState(!1);function n(){t(!e),console.log(e);const r=document.querySelector(".Open"),o=document.querySelector(".Close"),l=document.querySelector(".Modal");e?(r.style.display="block",o.style.display="none",l.style.display="none"):(r.style.display="none",o.style.display="block",l.style.display="flex")}return g.jsxs("header",{children:[g.jsx("div",{className:"LogoContainer",children:g.jsx("img",{className:"Logo",src:Mf,alt:"Savio Automações logo"})}),window.innerWidth>768?g.jsx("nav",{children:g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{href:"/#processManagement",children:"Gestão"})}),g.jsx("li",{children:g.jsx("a",{href:"/#Benefits",children:"Vantagens"})}),g.jsx("li",{children:g.jsx("a",{href:"/#contact",children:" Contato"})})]})}):g.jsxs("div",{className:"ModalMenu",children:[g.jsx(jf,{className:"Close",onClick:n,size:32,weight:"bold",color:"#5CE1E6"}),g.jsx(_f,{className:"Open",onClick:n,size:32,weight:"fill",color:"#00FAA8"}),g.jsxs("div",{className:"Modal",children:[g.jsxs("nav",{children:[g.jsx("a",{href:"/",onClick:n,children:"Home"}),g.jsx("a",{href:"#processManagement",onClick:n,children:"Gestão"}),g.jsx("a",{href:"#Benefits",onClick:n,children:"Vantagens"}),g.jsx("a",{href:"#contact",onClick:n,children:"Contato"})]}),g.jsxs("div",{className:"Socials",children:[g.jsx("h2",{children:"Siga nosso instagram"}),g.jsx("a",{href:"https://www.instagram.com/savioautomacoes/",target:"_blank",children:g.jsx(Vo,{size:40,color:"#5CE1E6"})})]})]})]}),g.jsx("a",{className:"media",href:"https://www.instagram.com/savioautomacoes/",target:"_blank",children:g.jsx(Vo,{size:32,color:"#5CE1E6"})})]})}/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uo.apply(this,arguments)}var Et;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Et||(Et={}));const Yu="popstate";function Rm(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:a}=r.location;return ra("",{pathname:l,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:$f(o)}return Im(t,n,null,e)}function _e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function as(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Tm(){return Math.random().toString(36).substr(2,8)}function Xu(e,t){return{usr:e.state,key:e.key,idx:t}}function ra(e,t,n,r){return n===void 0&&(n=null),Uo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ll(t):t,{state:n,key:t&&t.key||r||Tm()})}function $f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ll(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Im(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=Et.Pop,s=null,u=p();u==null&&(u=0,i.replaceState(Uo({},i.state,{idx:u}),""));function p(){return(i.state||{idx:null}).idx}function m(){a=Et.Pop;let N=p(),f=N==null?null:N-u;u=N,s&&s({action:a,location:v.location,delta:f})}function h(N,f){a=Et.Push;let c=ra(v.location,N,f);n&&n(c,N),u=p()+1;let d=Xu(c,u),x=v.createHref(c);try{i.pushState(d,"",x)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(x)}l&&s&&s({action:a,location:v.location,delta:1})}function S(N,f){a=Et.Replace;let c=ra(v.location,N,f);n&&n(c,N),u=p();let d=Xu(c,u),x=v.createHref(c);i.replaceState(d,"",x),l&&s&&s({action:a,location:v.location,delta:0})}function w(N){let f=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof N=="string"?N:$f(N);return _e(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let v={get action(){return a},get location(){return e(o,i)},listen(N){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Yu,m),s=N,()=>{o.removeEventListener(Yu,m),s=null}},createHref(N){return t(o,N)},createURL:w,encodeLocation(N){let f=w(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:S,go(N){return i.go(N)}};return v}var Ku;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ku||(Ku={}));function Fm(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ll(t):t,o=Af(r.pathname||"/",n);if(o==null)return null;let l=Of(e);Dm(l);let i=null;for(let a=0;i==null&&a<l.length;++a)i=Xm(l[a],Jm(o));return i}function Of(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(_e(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=xn([r,s.relativePath]),p=n.concat(s);l.children&&l.children.length>0&&(_e(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Of(l.children,t,p,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Qm(u,l.index),routesMeta:p})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of zf(l.path))o(l,i,s)}),t}function zf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=zf(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Dm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ym(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vm=/^:\w+$/,Um=3,Hm=2,Bm=1,Zm=10,Wm=-2,Gu=e=>e==="*";function Qm(e,t){let n=e.split("/"),r=n.length;return n.some(Gu)&&(r+=Wm),t&&(r+=Hm),n.filter(o=>!Gu(o)).reduce((o,l)=>o+(Vm.test(l)?Um:l===""?Bm:Zm),r)}function Ym(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Xm(e,t){let{routesMeta:n}=e,r={},o="/",l=[];for(let i=0;i<n.length;++i){let a=n[i],s=i===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",p=Km({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!p)return null;Object.assign(r,p.params);let m=a.route;l.push({params:r,pathname:xn([o,p.pathname]),pathnameBase:bm(xn([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=xn([o,p.pathnameBase]))}return l}function Km(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Gm(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,p,m)=>{if(p==="*"){let h=a[m]||"";i=l.slice(0,l.length-h.length).replace(/(.)\/+$/,"$1")}return u[p]=qm(a[m]||"",p),u},{}),pathname:l,pathnameBase:i,pattern:e}}function Gm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),as(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Jm(e){try{return decodeURI(e)}catch(t){return as(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function qm(e,t){try{return decodeURIComponent(e)}catch(n){return as(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Af(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const xn=e=>e.join("/").replace(/\/\/+/g,"/"),bm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function eh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Rf=["post","put","patch","delete"];new Set(Rf);const th=["get",...Rf];new Set(th);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oa.apply(this,arguments)}const nh=_.createContext(null),rh=_.createContext(null),Tf=_.createContext(null),il=_.createContext(null),al=_.createContext({outlet:null,matches:[],isDataRoute:!1}),If=_.createContext(null);function ss(){return _.useContext(il)!=null}function oh(){return ss()||_e(!1),_.useContext(il).location}function lh(e,t){return ih(e,t)}function ih(e,t,n){ss()||_e(!1);let{navigator:r}=_.useContext(Tf),{matches:o}=_.useContext(al),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let s=oh(),u;if(t){var p;let v=typeof t=="string"?ll(t):t;a==="/"||(p=v.pathname)!=null&&p.startsWith(a)||_e(!1),u=v}else u=s;let m=u.pathname||"/",h=a==="/"?m:m.slice(a.length)||"/",S=Fm(e,{pathname:h}),w=fh(S&&S.map(v=>Object.assign({},v,{params:Object.assign({},i,v.params),pathname:xn([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:xn([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,n);return t&&w?_.createElement(il.Provider,{value:{location:oa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Et.Pop}},w):w}function ah(){let e=Ff(),t=eh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:o},n):null,l)}const sh=_.createElement(ah,null);class uh extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?_.createElement(al.Provider,{value:this.props.routeContext},_.createElement(If.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ch(e){let{routeContext:t,match:n,children:r}=e,o=_.useContext(nh);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(al.Provider,{value:t},r)}function fh(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,i=(r=n)==null?void 0:r.errors;if(i!=null){let a=l.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));a>=0||_e(!1),l=l.slice(0,Math.min(l.length,a+1))}return l.reduceRight((a,s,u)=>{let p=s.route.id?i==null?void 0:i[s.route.id]:null,m=null;n&&(m=s.route.errorElement||sh);let h=t.concat(l.slice(0,u+1)),S=()=>{let w;return p?w=m:s.route.Component?w=_.createElement(s.route.Component,null):s.route.element?w=s.route.element:w=a,_.createElement(ch,{match:s,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:w})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?_.createElement(uh,{location:n.location,revalidation:n.revalidation,component:m,error:p,children:S(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):S()},null)}var la=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(la||{});function dh(e){let t=_.useContext(rh);return t||_e(!1),t}function ph(e){let t=_.useContext(al);return t||_e(!1),t}function mh(e){let t=ph(),n=t.matches[t.matches.length-1];return n.route.id||_e(!1),n.route.id}function Ff(){var e;let t=_.useContext(If),n=dh(la.UseRouteError),r=mh(la.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function ia(e){_e(!1)}function hh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Et.Pop,navigator:l,static:i=!1}=e;ss()&&_e(!1);let a=t.replace(/^\/*/,"/"),s=_.useMemo(()=>({basename:a,navigator:l,static:i}),[a,l,i]);typeof r=="string"&&(r=ll(r));let{pathname:u="/",search:p="",hash:m="",state:h=null,key:S="default"}=r,w=_.useMemo(()=>{let v=Af(u,a);return v==null?null:{location:{pathname:v,search:p,hash:m,state:h,key:S},navigationType:o}},[a,u,p,m,h,S,o]);return w==null?null:_.createElement(Tf.Provider,{value:s},_.createElement(il.Provider,{children:n,value:w}))}function vh(e){let{children:t,location:n}=e;return lh(aa(t),n)}new Promise(()=>{});function aa(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,o)=>{if(!_.isValidElement(r))return;let l=[...t,o];if(r.type===_.Fragment){n.push.apply(n,aa(r.props.children,l));return}r.type!==ia&&_e(!1),!r.props.index||!r.props.children||_e(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=aa(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const yh="startTransition",Ju=ui[yh];function gh(e){let{basename:t,children:n,future:r,window:o}=e,l=_.useRef();l.current==null&&(l.current=Rm({window:o,v5Compat:!0}));let i=l.current,[a,s]=_.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},p=_.useCallback(m=>{u&&Ju?Ju(()=>s(m)):s(m)},[s,u]);return _.useLayoutEffect(()=>i.listen(p),[i,p]),_.createElement(hh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i})}var qu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(qu||(qu={}));var bu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bu||(bu={}));const wh="/assets/Banner-c6fb4afb.jpg",xh="/assets/circularBrush-92cf468e.svg",Sh="/assets/empresario-87b579a5.png";function en(e){return g.jsx("div",{className:"border",children:g.jsxs("div",{className:"card",children:[g.jsx("img",{src:e.Icon,alt:"Icone"}),g.jsx("h3",{children:e.Title}),g.jsx("p",{children:e.Content})]})})}function Eh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function kh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ch=function(){function e(n){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(kh(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=Eh(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),me="-ms-",Ho="-moz-",I="-webkit-",Df="comm",us="rule",cs="decl",Ph="@import",Vf="@keyframes",_h="@layer",Nh=Math.abs,sl=String.fromCharCode,Lh=Object.assign;function jh(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function Uf(e){return e.trim()}function Mh(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function sa(e,t){return e.indexOf(t)}function ue(e,t){return e.charCodeAt(t)|0}function Sr(e,t,n){return e.slice(t,n)}function be(e){return e.length}function fs(e){return e.length}function Gr(e,t){return t.push(e),e}function $h(e,t){return e.map(t).join("")}var ul=1,jn=1,Hf=0,Ne=0,b=0,zn="";function cl(e,t,n,r,o,l,i){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:ul,column:jn,length:i,return:""}}function Zn(e,t){return Lh(cl("",null,null,"",null,null,0),e,{length:-e.length},t)}function Oh(){return b}function zh(){return b=Ne>0?ue(zn,--Ne):0,jn--,b===10&&(jn=1,ul--),b}function $e(){return b=Ne<Hf?ue(zn,Ne++):0,jn++,b===10&&(jn=1,ul++),b}function ot(){return ue(zn,Ne)}function fo(){return Ne}function Mr(e,t){return Sr(zn,e,t)}function Er(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bf(e){return ul=jn=1,Hf=be(zn=e),Ne=0,[]}function Zf(e){return zn="",e}function po(e){return Uf(Mr(Ne-1,ua(e===91?e+2:e===40?e+1:e)))}function Ah(e){for(;(b=ot())&&b<33;)$e();return Er(e)>2||Er(b)>3?"":" "}function Rh(e,t){for(;--t&&$e()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return Mr(e,fo()+(t<6&&ot()==32&&$e()==32))}function ua(e){for(;$e();)switch(b){case e:return Ne;case 34:case 39:e!==34&&e!==39&&ua(b);break;case 40:e===41&&ua(e);break;case 92:$e();break}return Ne}function Th(e,t){for(;$e()&&e+b!==47+10;)if(e+b===42+42&&ot()===47)break;return"/*"+Mr(t,Ne-1)+"*"+sl(e===47?e:$e())}function Ih(e){for(;!Er(ot());)$e();return Mr(e,Ne)}function Fh(e){return Zf(mo("",null,null,null,[""],e=Bf(e),0,[0],e))}function mo(e,t,n,r,o,l,i,a,s){for(var u=0,p=0,m=i,h=0,S=0,w=0,v=1,N=1,f=1,c=0,d="",x=o,P=l,L=r,C=d;N;)switch(w=c,c=$e()){case 40:if(w!=108&&ue(C,m-1)==58){sa(C+=F(po(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:C+=po(c);break;case 9:case 10:case 13:case 32:C+=Ah(w);break;case 92:C+=Rh(fo()-1,7);continue;case 47:switch(ot()){case 42:case 47:Gr(Dh(Th($e(),fo()),t,n),s);break;default:C+="/"}break;case 123*v:a[u++]=be(C)*f;case 125*v:case 59:case 0:switch(c){case 0:case 125:N=0;case 59+p:f==-1&&(C=F(C,/\f/g,"")),S>0&&be(C)-m&&Gr(S>32?tc(C+";",r,n,m-1):tc(F(C," ","")+";",r,n,m-2),s);break;case 59:C+=";";default:if(Gr(L=ec(C,t,n,u,p,o,a,d,x=[],P=[],m),l),c===123)if(p===0)mo(C,t,L,L,x,l,m,a,P);else switch(h===99&&ue(C,3)===110?100:h){case 100:case 108:case 109:case 115:mo(e,L,L,r&&Gr(ec(e,L,L,0,0,o,a,d,o,x=[],m),P),o,P,m,a,r?x:P);break;default:mo(C,L,L,L,[""],P,0,a,P)}}u=p=S=0,v=f=1,d=C="",m=i;break;case 58:m=1+be(C),S=w;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&zh()==125)continue}switch(C+=sl(c),c*v){case 38:f=p>0?1:(C+="\f",-1);break;case 44:a[u++]=(be(C)-1)*f,f=1;break;case 64:ot()===45&&(C+=po($e())),h=ot(),p=m=be(d=C+=Ih(fo())),c++;break;case 45:w===45&&be(C)==2&&(v=0)}}return l}function ec(e,t,n,r,o,l,i,a,s,u,p){for(var m=o-1,h=o===0?l:[""],S=fs(h),w=0,v=0,N=0;w<r;++w)for(var f=0,c=Sr(e,m+1,m=Nh(v=i[w])),d=e;f<S;++f)(d=Uf(v>0?h[f]+" "+c:F(c,/&\f/g,h[f])))&&(s[N++]=d);return cl(e,t,n,o===0?us:a,s,u,p)}function Dh(e,t,n){return cl(e,t,n,Df,sl(Oh()),Sr(e,2,-2),0)}function tc(e,t,n,r){return cl(e,t,n,cs,Sr(e,0,r),Sr(e,r+1,-1),r)}function Sn(e,t){for(var n="",r=fs(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Vh(e,t,n,r){switch(e.type){case _h:if(e.children.length)break;case Ph:case cs:return e.return=e.return||e.value;case Df:return"";case Vf:return e.return=e.value+"{"+Sn(e.children,r)+"}";case us:e.value=e.props.join(",")}return be(n=Sn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Uh(e){var t=fs(e);return function(n,r,o,l){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,l)||"";return i}}function Hh(e){return function(t){t.root||(t=t.return)&&e(t)}}function Bh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Zh=function(t,n,r){for(var o=0,l=0;o=l,l=ot(),o===38&&l===12&&(n[r]=1),!Er(l);)$e();return Mr(t,Ne)},Wh=function(t,n){var r=-1,o=44;do switch(Er(o)){case 0:o===38&&ot()===12&&(n[r]=1),t[r]+=Zh(Ne-1,n,r);break;case 2:t[r]+=po(o);break;case 4:if(o===44){t[++r]=ot()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=sl(o)}while(o=$e());return t},Qh=function(t,n){return Zf(Wh(Bf(t),n))},nc=new WeakMap,Yh=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!nc.get(r))&&!o){nc.set(t,!0);for(var l=[],i=Qh(n,l),a=r.props,s=0,u=0;s<i.length;s++)for(var p=0;p<a.length;p++,u++)t.props[u]=l[s]?i[s].replace(/&\f/g,a[p]):a[p]+" "+i[s]}}},Xh=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Wf(e,t){switch(jh(e,t)){case 5103:return I+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return I+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return I+e+Ho+e+me+e+e;case 6828:case 4268:return I+e+me+e+e;case 6165:return I+e+me+"flex-"+e+e;case 5187:return I+e+F(e,/(\w+).+(:[^]+)/,I+"box-$1$2"+me+"flex-$1$2")+e;case 5443:return I+e+me+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return I+e+me+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return I+e+me+F(e,"shrink","negative")+e;case 5292:return I+e+me+F(e,"basis","preferred-size")+e;case 6060:return I+"box-"+F(e,"-grow","")+I+e+me+F(e,"grow","positive")+e;case 4554:return I+F(e,/([^-])(transform)/g,"$1"+I+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,I+"$1"),/(image-set)/,I+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,I+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,I+"box-pack:$3"+me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+I+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,I+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(be(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+I+"$2-$3$1"+Ho+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~sa(e,"stretch")?Wf(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ue(e,t+1)!==115)break;case 6444:switch(ue(e,be(e)-3-(~sa(e,"!important")&&10))){case 107:return F(e,":",":"+I)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+I+(ue(e,14)===45?"inline-":"")+"box$3$1"+I+"$2$3$1"+me+"$2box$3")+e}break;case 5936:switch(ue(e,t+11)){case 114:return I+e+me+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return I+e+me+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return I+e+me+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return I+e+me+e+e}return e}var Kh=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case cs:t.return=Wf(t.value,t.length);break;case Vf:return Sn([Zn(t,{value:F(t.value,"@","@"+I)})],o);case us:if(t.length)return $h(t.props,function(l){switch(Mh(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Sn([Zn(t,{props:[F(l,/:(read-\w+)/,":"+Ho+"$1")]})],o);case"::placeholder":return Sn([Zn(t,{props:[F(l,/:(plac\w+)/,":"+I+"input-$1")]}),Zn(t,{props:[F(l,/:(plac\w+)/,":"+Ho+"$1")]}),Zn(t,{props:[F(l,/:(plac\w+)/,me+"input-$1")]})],o)}return""})}},Gh=[Kh],Jh=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var N=v.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||Gh,l={},i,a=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var N=v.getAttribute("data-emotion").split(" "),f=1;f<N.length;f++)l[N[f]]=!0;a.push(v)});var s,u=[Yh,Xh];{var p,m=[Vh,Hh(function(v){p.insert(v)})],h=Uh(u.concat(o,m)),S=function(N){return Sn(Fh(N),h)};s=function(N,f,c,d){p=c,S(N?N+"{"+f.styles+"}":f.styles),d&&(w.inserted[f.name]=!0)}}var w={key:n,sheet:new Ch({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:s};return w.sheet.hydrate(a),w},Qf={exports:{}},V={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=typeof Symbol=="function"&&Symbol.for,ds=ae?Symbol.for("react.element"):60103,ps=ae?Symbol.for("react.portal"):60106,fl=ae?Symbol.for("react.fragment"):60107,dl=ae?Symbol.for("react.strict_mode"):60108,pl=ae?Symbol.for("react.profiler"):60114,ml=ae?Symbol.for("react.provider"):60109,hl=ae?Symbol.for("react.context"):60110,ms=ae?Symbol.for("react.async_mode"):60111,vl=ae?Symbol.for("react.concurrent_mode"):60111,yl=ae?Symbol.for("react.forward_ref"):60112,gl=ae?Symbol.for("react.suspense"):60113,qh=ae?Symbol.for("react.suspense_list"):60120,wl=ae?Symbol.for("react.memo"):60115,xl=ae?Symbol.for("react.lazy"):60116,bh=ae?Symbol.for("react.block"):60121,e2=ae?Symbol.for("react.fundamental"):60117,t2=ae?Symbol.for("react.responder"):60118,n2=ae?Symbol.for("react.scope"):60119;function Re(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ds:switch(e=e.type,e){case ms:case vl:case fl:case pl:case dl:case gl:return e;default:switch(e=e&&e.$$typeof,e){case hl:case yl:case xl:case wl:case ml:return e;default:return t}}case ps:return t}}}function Yf(e){return Re(e)===vl}V.AsyncMode=ms;V.ConcurrentMode=vl;V.ContextConsumer=hl;V.ContextProvider=ml;V.Element=ds;V.ForwardRef=yl;V.Fragment=fl;V.Lazy=xl;V.Memo=wl;V.Portal=ps;V.Profiler=pl;V.StrictMode=dl;V.Suspense=gl;V.isAsyncMode=function(e){return Yf(e)||Re(e)===ms};V.isConcurrentMode=Yf;V.isContextConsumer=function(e){return Re(e)===hl};V.isContextProvider=function(e){return Re(e)===ml};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ds};V.isForwardRef=function(e){return Re(e)===yl};V.isFragment=function(e){return Re(e)===fl};V.isLazy=function(e){return Re(e)===xl};V.isMemo=function(e){return Re(e)===wl};V.isPortal=function(e){return Re(e)===ps};V.isProfiler=function(e){return Re(e)===pl};V.isStrictMode=function(e){return Re(e)===dl};V.isSuspense=function(e){return Re(e)===gl};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fl||e===vl||e===pl||e===dl||e===gl||e===qh||typeof e=="object"&&e!==null&&(e.$$typeof===xl||e.$$typeof===wl||e.$$typeof===ml||e.$$typeof===hl||e.$$typeof===yl||e.$$typeof===e2||e.$$typeof===t2||e.$$typeof===n2||e.$$typeof===bh)};V.typeOf=Re;Qf.exports=V;var r2=Qf.exports,Xf=r2,o2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kf={};Kf[Xf.ForwardRef]=o2;Kf[Xf.Memo]=l2;var i2=!0;function Gf(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var hs=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||i2===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Jf=function(t,n,r){hs(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function a2(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var s2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},u2=/[A-Z]|^ms/g,c2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,qf=function(t){return t.charCodeAt(1)===45},rc=function(t){return t!=null&&typeof t!="boolean"},ii=Bh(function(e){return qf(e)?e:e.replace(u2,"-$&").toLowerCase()}),oc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(c2,function(r,o,l){return et={name:o,styles:l,next:et},o})}return s2[t]!==1&&!qf(t)&&typeof n=="number"&&n!==0?n+"px":n};function kr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return et={name:n.name,styles:n.styles,next:et},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)et={name:r.name,styles:r.styles,next:et},r=r.next;var o=n.styles+";";return o}return f2(e,t,n)}case"function":{if(e!==void 0){var l=et,i=n(e);return et=l,kr(e,t,i)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function f2(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=kr(e,t,n[o])+";";else for(var l in n){var i=n[l];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=l+"{"+t[i]+"}":rc(i)&&(r+=ii(l)+":"+oc(l,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var a=0;a<i.length;a++)rc(i[a])&&(r+=ii(l)+":"+oc(l,i[a])+";");else{var s=kr(e,t,i);switch(l){case"animation":case"animationName":{r+=ii(l)+":"+s+";";break}default:r+=l+"{"+s+"}"}}}return r}var lc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,et,vs=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,l="";et=void 0;var i=t[0];i==null||i.raw===void 0?(o=!1,l+=kr(r,n,i)):l+=i[0];for(var a=1;a<t.length;a++)l+=kr(r,n,t[a]),o&&(l+=i[a]);lc.lastIndex=0;for(var s="",u;(u=lc.exec(l))!==null;)s+="-"+u[1];var p=a2(l)+s;return{name:p,styles:l,next:et}},d2=function(t){return t()},p2=ui["useInsertionEffect"]?ui["useInsertionEffect"]:!1,bf=p2||d2,ys={}.hasOwnProperty,ed=_.createContext(typeof HTMLElement<"u"?Jh({key:"css"}):null);ed.Provider;var td=function(t){return _.forwardRef(function(n,r){var o=_.useContext(ed);return t(n,o,r)})},nd=_.createContext({}),ca="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",m2=function(t,n){var r={};for(var o in n)ys.call(n,o)&&(r[o]=n[o]);return r[ca]=t,r},h2=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return hs(n,r,o),bf(function(){return Jf(n,r,o)}),null},v2=td(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[ca],l=[r],i="";typeof e.className=="string"?i=Gf(t.registered,l,e.className):e.className!=null&&(i=e.className+" ");var a=vs(l,void 0,_.useContext(nd));i+=t.key+"-"+a.name;var s={};for(var u in e)ys.call(e,u)&&u!=="css"&&u!==ca&&(s[u]=e[u]);return s.ref=n,s.className=i,_.createElement(_.Fragment,null,_.createElement(h2,{cache:t,serialized:a,isStringTag:typeof o=="string"}),_.createElement(o,s))}),y2=v2,g2=g.Fragment;function te(e,t,n){return ys.call(t,"css")?g.jsx(y2,m2(e,t),n):g.jsx(e,t,n)}function rd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return vs(t)}var k=function(){var t=rd.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},w2=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var l=t[r];if(l!=null){var i=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))i=e(l);else{i="";for(var a in l)l[a]&&a&&(i&&(i+=" "),i+=a)}break}default:i=l}i&&(o&&(o+=" "),o+=i)}}return o};function x2(e,t,n){var r=[],o=Gf(e,r,n);return r.length<2?n:o+t(r)}var S2=function(t){var n=t.cache,r=t.serializedArr;return bf(function(){for(var o=0;o<r.length;o++)Jf(n,r[o],!1)}),null},ai=td(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,p=new Array(u),m=0;m<u;m++)p[m]=arguments[m];var h=vs(p,t.registered);return r.push(h),hs(t,h,!1),t.key+"-"+h.name},l=function(){for(var u=arguments.length,p=new Array(u),m=0;m<u;m++)p[m]=arguments[m];return x2(t.registered,o,w2(p))},i={css:o,cx:l,theme:_.useContext(nd)},a=e.children(i);return n=!0,_.createElement(_.Fragment,null,_.createElement(S2,{cache:t,serializedArr:r}),a)}),E2=Object.defineProperty,k2=(e,t,n)=>t in e?E2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jr=(e,t,n)=>(k2(e,typeof t!="symbol"?t+"":t,n),n),fa=new Map,qr=new WeakMap,ic=0,C2=void 0;function P2(e){return e?(qr.has(e)||(ic+=1,qr.set(e,ic.toString())),qr.get(e)):"0"}function _2(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?P2(e.root):e[t]}`).toString()}function N2(e){let t=_2(e),n=fa.get(t);if(!n){const r=new Map;let o;const l=new IntersectionObserver(i=>{i.forEach(a=>{var s;const u=a.isIntersecting&&o.some(p=>a.intersectionRatio>=p);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(p=>{p(u,a)})})},e);o=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},fa.set(t,n)}return n}function od(e,t,n={},r=C2){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:l,elements:i}=N2(n);let a=i.get(e)||[];return i.has(e)||i.set(e,a),a.push(t),l.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(i.delete(e),l.unobserve(e)),i.size===0&&(l.disconnect(),fa.delete(o))}}function L2(e){return typeof e.children!="function"}var ac=class extends _.Component{constructor(e){super(e),Jr(this,"node",null),Jr(this,"_unobserveCb",null),Jr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Jr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),L2(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:l}=this.props;this._unobserveCb=od(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:S,entry:w}=this.state;return e({inView:S,entry:w,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:l,onChange:i,skip:a,trackVisibility:s,delay:u,initialInView:p,fallbackInView:m,...h}=this.props;return _.createElement(t||"div",{ref:this.handleNode,...h},e)}};function ld({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:l,skip:i,initialInView:a,fallbackInView:s,onChange:u}={}){var p;const[m,h]=_.useState(null),S=_.useRef(),[w,v]=_.useState({inView:!!a,entry:void 0});S.current=u,_.useEffect(()=>{if(i||!m)return;let d;return d=od(m,(x,P)=>{v({inView:x,entry:P}),S.current&&S.current(x,P),P.isIntersecting&&l&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,m,o,r,l,i,n,s,t]);const N=(p=w.entry)==null?void 0:p.target,f=_.useRef();!m&&N&&!l&&!i&&f.current!==N&&(f.current=N,v({inView:!!a,entry:void 0}));const c=[h,w.inView,w.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var id={exports:{}},U={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gs=Symbol.for("react.element"),ws=Symbol.for("react.portal"),Sl=Symbol.for("react.fragment"),El=Symbol.for("react.strict_mode"),kl=Symbol.for("react.profiler"),Cl=Symbol.for("react.provider"),Pl=Symbol.for("react.context"),j2=Symbol.for("react.server_context"),_l=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),jl=Symbol.for("react.memo"),Ml=Symbol.for("react.lazy"),M2=Symbol.for("react.offscreen"),ad;ad=Symbol.for("react.module.reference");function He(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gs:switch(e=e.type,e){case Sl:case kl:case El:case Nl:case Ll:return e;default:switch(e=e&&e.$$typeof,e){case j2:case Pl:case _l:case Ml:case jl:case Cl:return e;default:return t}}case ws:return t}}}U.ContextConsumer=Pl;U.ContextProvider=Cl;U.Element=gs;U.ForwardRef=_l;U.Fragment=Sl;U.Lazy=Ml;U.Memo=jl;U.Portal=ws;U.Profiler=kl;U.StrictMode=El;U.Suspense=Nl;U.SuspenseList=Ll;U.isAsyncMode=function(){return!1};U.isConcurrentMode=function(){return!1};U.isContextConsumer=function(e){return He(e)===Pl};U.isContextProvider=function(e){return He(e)===Cl};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gs};U.isForwardRef=function(e){return He(e)===_l};U.isFragment=function(e){return He(e)===Sl};U.isLazy=function(e){return He(e)===Ml};U.isMemo=function(e){return He(e)===jl};U.isPortal=function(e){return He(e)===ws};U.isProfiler=function(e){return He(e)===kl};U.isStrictMode=function(e){return He(e)===El};U.isSuspense=function(e){return He(e)===Nl};U.isSuspenseList=function(e){return He(e)===Ll};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Sl||e===kl||e===El||e===Nl||e===Ll||e===M2||typeof e=="object"&&e!==null&&(e.$$typeof===Ml||e.$$typeof===jl||e.$$typeof===Cl||e.$$typeof===Pl||e.$$typeof===_l||e.$$typeof===ad||e.getModuleId!==void 0)};U.typeOf=He;id.exports=U;var $2=id.exports;k`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;k`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;k`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;k`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;k`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;k`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const O2=k`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,z2=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,A2=k`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,R2=k`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T2=k`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xs=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,I2=k`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,F2=k`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,D2=k`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,V2=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,U2=k`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,H2=k`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,B2=k`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Z2({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=xs,iterationCount:o=1}){return rd`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function W2(e){return e==null}function Q2(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function sd(e,t){return n=>n?e():t()}function Cr(e){return sd(e,()=>null)}function da(e){return Cr(()=>({opacity:0}))(e)}const Ss=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:l=0,keyframes:i=xs,triggerOnce:a=!1,className:s,style:u,childClassName:p,childStyle:m,children:h,onVisibilityChange:S}=e,w=_.useMemo(()=>Z2({keyframes:i,duration:o}),[o,i]);return W2(h)?null:Q2(h)?te(X2,{...e,animationStyles:w,children:String(h)}):$2.isFragment(h)?te(ud,{...e,animationStyles:w}):te(g2,{children:_.Children.map(h,(v,N)=>{if(!_.isValidElement(v))return null;const f=r+(t?N*o*n:0);switch(v.type){case"ol":case"ul":return te(ai,{children:({cx:c})=>te(v.type,{...v.props,className:c(s,v.props.className),style:Object.assign({},u,v.props.style),children:te(Ss,{...e,children:v.props.children})})});case"li":return te(ac,{threshold:l,triggerOnce:a,onChange:S,children:({inView:c,ref:d})=>te(ai,{children:({cx:x})=>te(v.type,{...v.props,ref:d,className:x(p,v.props.className),css:Cr(()=>w)(c),style:Object.assign({},m,v.props.style,da(!c),{animationDelay:f+"ms"})})})});default:return te(ac,{threshold:l,triggerOnce:a,onChange:S,children:({inView:c,ref:d})=>te("div",{ref:d,className:s,css:Cr(()=>w)(c),style:Object.assign({},u,da(!c),{animationDelay:f+"ms"}),children:te(ai,{children:({cx:x})=>te(v.type,{...v.props,className:x(p,v.props.className),style:Object.assign({},m,v.props.style)})})})})}})})},Y2={display:"inline-block",whiteSpace:"pre"},X2=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:l=1e3,fraction:i=0,triggerOnce:a=!1,className:s,style:u,children:p,onVisibilityChange:m}=e,{ref:h,inView:S}=ld({triggerOnce:a,threshold:i,onChange:m});return sd(()=>te("div",{ref:h,className:s,style:Object.assign({},u,Y2),children:p.split("").map((w,v)=>te("span",{css:Cr(()=>t)(S),style:{animationDelay:o+v*l*r+"ms"},children:w},v))}),()=>te(ud,{...e,children:p}))(n)},ud=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:l,children:i,onVisibilityChange:a}=e,{ref:s,inView:u}=ld({triggerOnce:r,threshold:n,onChange:a});return te("div",{ref:s,className:o,css:Cr(()=>t)(u),style:Object.assign({},l,da(!u)),children:i})};k`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;k`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;k`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;k`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;k`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const K2=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,G2=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,J2=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,q2=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,b2=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,ev=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,tv=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,nv=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,rv=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,ov=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,lv=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,iv=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,av=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function sv(e,t,n){switch(n){case"bottom-left":return t?G2:z2;case"bottom-right":return t?J2:A2;case"down":return e?t?b2:T2:t?q2:R2;case"left":return e?t?tv:I2:t?ev:xs;case"right":return e?t?rv:D2:t?nv:F2;case"top-left":return t?ov:V2;case"top-right":return t?lv:U2;case"up":return e?t?av:B2:t?iv:H2;default:return t?K2:O2}}const si=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,l=_.useMemo(()=>sv(t,r,n),[t,n,r]);return te(Ss,{keyframes:l,...o})};k`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;k`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;k`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;k`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;k`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;k`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;const uv=k`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;const cv=e=>te(Ss,{keyframes:uv,...e});k`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;k`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function fv(){return g.jsxs(g.Fragment,{children:[g.jsxs("section",{id:"banner",children:[g.jsxs("div",{className:"Image",children:[g.jsx("img",{className:"BannerImg",src:wh,alt:"Graficos de gestão"}),g.jsx("div",{className:"mask"})]}),g.jsxs("div",{className:"content",children:[g.jsxs("p",{className:"title",children:["Sua empresa possui processos ",g.jsx("span",{children:"repetitivos e confusos?"})]}),g.jsx("br",{}),g.jsxs("p",{className:"text",children:["Nossa assessoria ",g.jsx("span",{children:"transformará a gestão da sua empresa,"})," simplificando e automatizando seus processos ",g.jsx("span",{children:"proporcionando agilidade e reduzindo ao máximo os erros!"})]})]})]}),g.jsx(si,{cascade:!0,damping:1,duration:1250,delay:100,children:g.jsxs("section",{id:"processManagement",children:[g.jsxs("div",{className:"content",children:[g.jsx("h2",{className:"title",children:"Gestão de processos"}),g.jsx("p",{className:"text",children:"Com a Sávio Automações, oferecemos conhecimento e tecnologia que proporcionam controle, gestão, planejamento e automação de rotinas para a sua empresa. Isso não só otimiza processos e reduz custos operacionais, mas também ajuda a evitar erros significativos no processo. "})]}),g.jsxs("div",{className:"Image",children:[g.jsx("img",{src:xh,alt:"Brush",className:"Brush"}),g.jsx("img",{src:Sh,alt:"Dois empresarios conversando",className:"Empresario"}),g.jsx("div",{className:"mask"})]})]})}),g.jsx(si,{cascade:!0,damping:1,duration:1250,delay:100,children:g.jsxs("section",{id:"Benefits",children:[g.jsxs("div",{className:"BenefitsHeader",children:[g.jsx("h2",{className:"title",children:"Vantagens"}),g.jsx("p",{className:"text",children:"Os processos administrativos frequentemente possuem uma quantidade significativa de burocracia, papelada e formalidades, o que resulta em um investimento considerável de tempo para o preenchimento de documentos e a comunicação entre os funcionários."})]}),g.jsxs("div",{className:"cardWrap",children:[g.jsx(en,{Title:"Automação de processos",Content:"Automatizar os processos libera tempo valioso em sua empresa, eliminando desperdício em preenchimento de relatórios e documentos. Assim sendo necessário apenas acompanhar os indicadores.",Icon:`\\src\\assets\\IconAuto.png\r
              `}),g.jsx(en,{Title:"Confiabilidade",Content:"Proporcionamos um processo altamente padronizado, assegurando não apenas confiabilidade e agilidade, mas também prevenindo qualquer possibilidade de perdas de informações cruciais e minimizando ao máximo os erros humanos.",Icon:"\\src\\assets\\IconConf.png"}),g.jsx(en,{Title:"Documentos digitais",Content:"A introdução de documentos digitais em sua empresa otimiza seu processo, proporcionando uma execução mais ágil e confiável. Facilitando o preenchimento, registro e distribuição de documentos entre colaboradores.",Icon:"\\src\\assets\\IconDigi.png"}),g.jsx(en,{Title:"Dashbord",Content:"A implementação de um sistema de gestão permitirá que você monitore seu processo de maneira intuitiva, proporcionando uma visão clara e precisa das possíveis causas de ineficiência em sua empresa.",Icon:"\\src\\assets\\IconDash.png"}),g.jsx(en,{Title:"Transparência",Content:"Assegurar transparência nos processos administrativos é crucial para a empresa, promovendo confiança e, consequentemente, fortalecendo a colaboração entre os membros da equipe.",Icon:"\\src\\assets\\IconTransp.png"}),g.jsx(en,{Title:"Custo operacional",Content:"Conseguimos reduzir em mais de 90% o tempo dedicado a não conformidades no processo, proporcionando uma significativa ampliação do tempo disponível para atividades cruciais, e até mesmo permitindo uma redução no montante operacionais.",Icon:"\\src\\assets\\IconSMoney.png"})]})]})}),g.jsx(si,{cascade:!0,damping:1,duration:1250,delay:100,children:g.jsx("section",{id:"contact",children:g.jsxs("div",{className:"contact",children:[g.jsx("h2",{children:"Contato"}),g.jsxs("div",{className:"content",children:[g.jsxs("div",{className:"contacts",children:[g.jsx("p",{children:"Entre em contato com a Savio Automações, queremos tirar suas dúvidas, ouvir suas críticas e sugestões."}),g.jsxs("div",{className:"phone",children:[g.jsx(Nf,{size:32,color:"white"}),g.jsx("p",{children:"43 9 9170-7903"})]}),g.jsxs("div",{className:"phone",children:[g.jsx(Pf,{size:32,color:"white"}),g.jsx("p",{children:"renan.savio@savioautomacoes.com"})]}),g.jsx(cv,{cascade:!0,duration:1e3,delay:150,children:g.jsxs("a",{href:"https://api.whatsapp.com/send?phone=+5543991707903&text=Ol%C3%A1%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.",className:"button",target:"_blank",children:[g.jsx(Lf,{size:32}),"Entrar em contato"]})})]}),window.innerWidth>768?g.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117243.28316562435!2d-51.23597447013018!3d-23.32110626951117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb435a57af586d%3A0x23ac11a5c614f971!2sLondrina%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1666788242365!5m2!1spt-BR!2sbr",width:"650",height:"450",loading:"lazy"}):g.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117243.28316562435!2d-51.23597447013018!3d-23.32110626951117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb435a57af586d%3A0x23ac11a5c614f971!2sLondrina%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1666788242365!5m2!1spt-BR!2sbr",width:"375",height:"375",loading:"lazy"})]})]})})})]})}function dv(){return g.jsx("div",{children:g.jsx("h1",{children:"Automation"})})}function sc(){const e=Ff();return console.error(e),g.jsxs("div",{id:"error-page",children:[g.jsx("h1",{children:"Oops!"}),g.jsx("p",{children:"Sorry, an unexpected error has occurred."}),g.jsx("p",{children:g.jsx("i",{children:e.statusText||e.message})})]})}function pv(){return g.jsx(g.Fragment,{children:g.jsxs(vh,{children:[g.jsx(ia,{path:"/",element:g.jsx(fv,{}),errorElement:g.jsx(sc,{})}),g.jsx(ia,{path:"/automacao",element:g.jsx(dv,{}),errorElement:g.jsx(sc,{})})]})})}function mv(){return g.jsxs("div",{className:"footer",children:[g.jsxs("div",{className:"logo",children:[g.jsx("img",{src:Mf}),g.jsx("p",{children:"©2021 Savio Automações."}),g.jsx("p",{children:"Todos os direitos reservados."}),g.jsx("div",{className:"dev",children:g.jsxs("p",{children:["desenvolvido por: ",g.jsx("strong",{children:g.jsx("a",{href:"https://www.anbarmarketing.com.br",target:"_blank",children:"Anbar Marketing"})})]})})]}),g.jsxs("div",{className:"Socials",children:[g.jsx("h2",{children:"Nossas redes sociais"}),g.jsx("div",{className:"Social",children:g.jsx("a",{href:"https://www.instagram.com/savioautomacoes/",target:"_blank",children:g.jsx(Vo,{size:32,color:"white"})})})]})]})}ci.createRoot(document.getElementById("root")).render(g.jsx(y.StrictMode,{children:g.jsxs(gh,{children:[g.jsx(Am,{}),g.jsx(pv,{}),g.jsx(mv,{})]})}));
