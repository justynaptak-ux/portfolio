(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"7oih":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=(a("xfY5"),a("+ZDr")),s=a.n(n);a("lw3w"),a("emEt").default.enqueue;a("Wa66");var o=function(){return i.a.createElement("nav",{className:"container"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(s.a,{to:"/about/",style:{textDecoration:"none"}},"About")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/",style:{textDecoration:"none"}}," ","Home"))))},l=(a("ae5o"),function(){return i.a.createElement("div",{className:"footercontainer"},i.a.createElement("h5",{className:"footerdescription"},i.a.createElement("b",null,"Let's talk,")," ",i.a.createElement("br",null),"I am open to any UX/UI or web development opportunity. ",i.a.createElement("br",null),"I am always very involved in my projects and put a lot of effort in them. ",i.a.createElement("br",null)," You can see the results on this site."),i.a.createElement("h6",{className:"mail"},"e-mail: justyna.ptak.ux@gmail.com ",i.a.createElement("br",null)),i.a.createElement("h6",null,"copyrights: Justyna Ptak"))});t.a=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),i.a.createElement(o,null),i.a.createElement("main",null,t),i.a.createElement(l,null))}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),u=r(a("q1tI")),d=r(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),a=p(t);return h[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},r&&u.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),u.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return u.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return u.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+u+s+o+a+r+t+n+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=u.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=u.default.createElement(k,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?u.default.createElement("picture",null,i(r),o):o})),k=u.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:d,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=u.default.createRef(),a.placeholderRef=t.placeholderRef||u.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=p(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,m=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,w=e.loading,x=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,_=(0,l.default)({opacity:L?1:0,transition:V?"opacity "+b+"ms":"none"},o),C="boolean"==typeof v?"lightgray":v,z={transitionDelay:b+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},V&&z,o,f),q={title:t,alt:this.state.isVisible?"":a,style:T,className:p,itemProp:E};if(h){var P=h,W=g(h);return u.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},u.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),C&&u.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&z)}),W.base64&&u.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:q,imageVariants:P,generateSources:N}),W.tracedSVG&&u.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:q,imageVariants:P,generateSources:I}),this.state.isVisible&&u.default.createElement("picture",null,S(P),u.default.createElement(k,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:x})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:w},W,{imageVariants:P}))}}))}if(m){var F=m,j=g(m),H=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete H.display,u.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},C&&u.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},V&&z)}),j.base64&&u.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:q,imageVariants:F,generateSources:N}),j.tracedSVG&&u.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:q,imageVariants:F,generateSources:I}),this.state.isVisible&&u.default.createElement("picture",null,S(F),u.default.createElement(k,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:x})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:w},j,{imageVariants:F}))}}))}return null},t}(u.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),C=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});V.propTypes={resolutions:_,sizes:C,fixed:d.default.oneOfType([_,d.default.arrayOf(_)]),fluid:d.default.oneOfType([C,d.default.arrayOf(C)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var z=V;t.default=z},EK0E:function(e,t,a){"use strict";var r,i=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),l=a("czNK"),u=a("ZD67"),d=a("0/R4"),c=a("s5qY"),f=a("s5qY"),p=!i.ActiveXObject&&"ActiveXObject"in i,g=o.getWeak,h=Object.isExtensible,m=u.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(d(e)){var t=g(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return u.def(c(this,"WeakMap"),e,t)}},y=e.exports=a("4LiD")("WeakMap",v,b,u,!0,!0);f&&p&&(l((r=u.getConstructor(v,"WeakMap")).prototype,b),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];s(t,e,(function(t,i){if(d(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},Wa66:function(e,t,a){},ZD67:function(e,t,a){"use strict";var r=a("3Lyj"),i=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),l=a("SlkY"),u=a("CkkT"),d=a("aagx"),c=a("s5qY"),f=u(5),p=u(6),g=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var a=v(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var u=e((function(e,r){o(e,u,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=r&&l(r,a,e[n],e)}));return r(u.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).delete(e):a&&d(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).has(e):a&&d(a,this._i)}}),u},def:function(e,t,a){var r=i(n(t),!0);return!0===r?h(e).set(t,a):r[e._i]=a,e},ufstore:h}},ZHwO:function(e,t,a){},ae5o:function(e,t,a){},lw3w:function(e,t,a){var r;e.exports=(r=a("rzlk"))&&r.default||r},qncB:function(e,t,a){var r=a("XKFU"),i=a("vhPU"),n=a("eeVq"),s=a("/e88"),o="["+s+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(e,t,a){var i={},o=n((function(){return!!s[e]()||"​"!="​"[e]()})),l=i[e]=o?t(c):s[e];a&&(i[a]=l),r(r.P+r.F*o,"String",i)},c=d.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),i=a.n(r),n=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},xfY5:function(e,t,a){"use strict";var r=a("dyZX"),i=a("aagx"),n=a("LZWt"),s=a("Xbzi"),o=a("apmT"),l=a("eeVq"),u=a("kJMx").f,d=a("EemH").f,c=a("hswa").f,f=a("qncB").trim,p=r.Number,g=p,h=p.prototype,m="Number"==n(a("Kuth")(h)),v="trim"in String.prototype,b=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var a,r,i,n=(t=v?t.trim():f(t,3)).charCodeAt(0);if(43===n||45===n){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+t}for(var s,l=t.slice(2),u=0,d=l.length;u<d;u++)if((s=l.charCodeAt(u))<48||s>i)return NaN;return parseInt(l,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof p&&(m?l((function(){h.valueOf.call(a)})):"Number"!=n(a))?s(new g(b(t)),a,p):b(t)};for(var y,E=a("nh4g")?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;E.length>S;S++)i(g,y=E[S])&&!i(p,y)&&c(p,y,d(g,y));p.prototype=h,h.constructor=p,a("KroJ")(r,"Number",p)}}}]);
//# sourceMappingURL=commons-02a405eebb8baae034d2.js.map