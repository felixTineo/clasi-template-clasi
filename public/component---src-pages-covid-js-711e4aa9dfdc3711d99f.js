(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{J7O4:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Ff2n"),l=n("ODXe"),c=Object(r.createContext)(null),i=c.Provider;function u(){var e=Object(r.useContext)(c);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var s=n("4R65");function m(e){var t=e.children,n=e.className,c=e.id,u=e.placeholder,m=e.style,d=e.whenCreated,f=Object(o.a)(e,["children","className","id","placeholder","style","whenCreated"]),p=Object(r.useRef)(null),b=function(e,t){var n=Object(r.useState)(null),a=Object(l.a)(n,2),o=a[0],c=a[1];return Object(r.useEffect)((function(){if(null!==e.current&&null===o){var n=new s.Map(e.current,t);null!=t.center&&null!=t.zoom?n.setView(t.center,t.zoom):null!=t.bounds&&n.fitBounds(t.bounds,t.boundsOptions),null!=t.whenReady&&n.whenReady(t.whenReady),c(n)}}),[e,o,t]),o}(p,f),g=Object(r.useRef)(!1);Object(r.useEffect)((function(){null!=b&&!1===g.current&&null!=d&&(g.current=!0,d(b))}),[b,d]);var h=Object(r.useMemo)((function(){return b?{__version:1,map:b}:null}),[b]),O=h?a.a.createElement(i,{value:h},t):null!=u?u:null;return a.a.createElement("div",{ref:p,className:n,id:c,style:m},O)}n("i8i4");function d(e){function t(t,n){var o=e(t).current,l=o.instance,c=o.context;return Object(r.useImperativeHandle)(n,(function(){return l})),null==t.children?null:a.a.createElement(i,{value:c},t.children)}return Object(r.forwardRef)(t)}function f(e){function t(t,n){var a=e(t).current.instance;return Object(r.useImperativeHandle)(n,(function(){return a})),null}return Object(r.forwardRef)(t)}function p(e,t){return null==t?function(t,n){return Object(r.useRef)(e(t,n))}:function(n,a){var o=Object(r.useRef)(e(n,a)),l=Object(r.useRef)(n),c=o.current.instance;return Object(r.useEffect)((function(){l.current!==n&&(t(c,n,l.current),l.current=n)}),[c,n,a]),o}}function b(e,t){var n=Object(r.useRef)(t);Object(r.useEffect)((function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t}),[e,t])}function g(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}}),[e,t])}var h=n("rePB");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t){var n,r=null!=(n=e.pane)?n:t.pane;return r?w(w({},e),{},{pane:r}):e}function E(e,t){Object(r.useEffect)((function(){var n,r=null!=(n=t.layerContainer)?n:t.map;return r.addLayer(e.instance),function(){r.removeLayer(e.instance)}}),[t,e])}function j(e){return function(t){var n=u(),r=e(v(t,n),n);return b(n.map,t.attribution),g(r.current,t.eventHandlers),E(r.current,n),r}}var y=f(j(p((function(e,t){var n=e.url,r=Object(o.a)(e,["url"]);return{instance:new s.TileLayer(n,v(r,t)),context:t}}),(function(e,t,n){var r=t.opacity,a=t.zIndex;null!=r&&r!==n.opacity&&e.setOpacity(r),null!=a&&a!==n.zIndex&&e.setZIndex(a)}))));function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(e,t){return d(j(p(e,t)))}((function(e,t){var n=e.position,r=Object(o.a)(e,["position"]),a=new s.Marker(n,r);return{instance:a,context:C(C({},t),{},{overlayContainer:a})}}),(function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),null!=t.icon&&t.icon!==n.icon&&e.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),null!=e.dragging&&t.draggable!==n.draggable&&(!0===t.draggable?e.dragging.enable():e.dragging.disable())}));t.a=function(e){var t=e.lat,n=e.lng,r=e.height,o=e.zoom;return"undefined"!=typeof window?a.a.createElement(m,{center:{lat:t,lng:n},zoom:o,scrollWheelZoom:!1,style:{height:r}},a.a.createElement(y,{url:"https://api.mapbox.com/styles/v1/felixtineo/ckjsqy8dq3eu419oaxv4azw71/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZmVsaXh0aW5lbyIsImEiOiJja2IwdTYzaHQwMDYyMnZvOHltYXJrdmIwIn0.P0lczMOjIif3MGlqroU__A",attribution:'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}),a.a.createElement(I,{position:[t,n]})):a.a.createElement("span",null,"a")}},PmQ8:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("KTcv"),l=n("vOnD"),c=n("wBNj"),i=n("mBU7"),u=n("qTur"),s=l.b.div.withConfig({componentId:"w5i8ko-0"})(["margin-top:2rem;padding:4rem 2rem;background-color:",";background-image:",";background-position:center;background-repeat:no-repeat;background-size:cover;"],(function(e){return e.theme.main.primaryColor}),(function(e){return e.image?"linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url("+e.image+")":""})),m=l.b.p.withConfig({componentId:"w5i8ko-1"})(["color:#fff;display:flex;align-items:center;justify-content:center;text-align:center;@media(min-width:768px){text-align:left;}"]),d=l.b.div.withConfig({componentId:"w5i8ko-2"})(["display:flex;align-items:center;justify-content:center;"]),f=function(e){var t=e.title,n=e.image,r=e.onClick,o=e.buttonText,l=e.icon;return a.a.createElement(s,{image:n},a.a.createElement(c.Row,{align:"center"},a.a.createElement(c.Visible,{xs:!0},a.a.createElement(c.Col,{xs:12},a.a.createElement(d,null,a.a.createElement("img",{src:l,alt:t,style:{marginRight:".5rem"}})))),a.a.createElement(c.Col,{xs:12,md:9},a.a.createElement(m,null,a.a.createElement(c.Hidden,{xs:!0},a.a.createElement("img",{src:l,alt:t,style:{marginRight:".5rem"}})),t)),a.a.createElement(c.Col,{xs:12,md:3},a.a.createElement(u.a,{onClick:r,block:!0,primary:!0},o))))},p=n("Wbzz"),b=l.b.section.withConfig({componentId:"sc-1vtquln-0"})(["min-height:100vh;padding:4rem 0;"]),g=l.b.h2.withConfig({componentId:"sc-1vtquln-1"})(["color:",";text-align:center;margin:0;margin-bottom:4rem;"],(function(e){return e.theme.main.primaryColor}));t.a=function(){var e=Object(r.useContext)(o.a).home.properties;return a.a.createElement(b,{id:"properties"},a.a.createElement(c.Container,null,a.a.createElement(c.Row,null,a.a.createElement(c.Col,{xs:12},a.a.createElement(g,null,e.title)),a.a.createElement(c.Col,{xs:12},a.a.createElement(i.b,null)),a.a.createElement(c.Col,{xs:12},a.a.createElement(f,{image:e.bannerImage,buttonText:e.buttonText,title:e.footer,icon:"/icons/marker.svg",onClick:function(){return Object(p.navigate)("/properties")}})))))}},ZdHi:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("JzyJ"),l=n("vOnD"),c=n("wBNj"),i=n("KTcv"),u=l.b.section.withConfig({componentId:"j4rxx7-0"})(['margin-top:116.16px;background-image:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url("/covid.jpg");background-size:cover;background-repeat:no-repeat;']),s=l.b.div.withConfig({componentId:"j4rxx7-1"})(["height:70vh;display:flex;justify-content:center;align-items:center;@media(min-width:768px){justify-content:flex-start;}"]),m=l.b.h1.withConfig({componentId:"j4rxx7-2"})(["color:#fff;text-align:center;@media(min-width:768px){width:70%;text-align:left;}"]),d=function(){Object(r.useContext)(i.a).about;return a.a.createElement(u,null,a.a.createElement(c.Container,null,a.a.createElement(s,null,a.a.createElement(m,null,"PROTOCOLO COVID-19"))))},f=l.b.section.withConfig({componentId:"b1ehnv-0"})(["background-color:#F2F2F2;padding:6rem 0;padding-bottom:2rem;"]),p=l.b.div.withConfig({componentId:"b1ehnv-1"})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;height:100%;"]),b=l.b.h2.withConfig({componentId:"b1ehnv-2"})(["color:",";"],(function(e){return e.theme.main.primaryColor})),g=l.b.ul.withConfig({componentId:"b1ehnv-3"})(["list-style-type:disc;padding-left:2rem;color:#666;margin:1rem 0;"]),h=l.b.img.withConfig({componentId:"b1ehnv-4"})(["object-fit:cover;object-position:center;width:100%;"]),O=l.b.div.withConfig({componentId:"b1ehnv-5"})(["text-align:center;width:95%;a{color:",";}"],(function(e){return e.theme.main.primaryColor})),w=function(){Object(r.useContext)(i.a).about;return a.a.createElement(f,null,a.a.createElement(c.Container,null,a.a.createElement(c.Row,null,a.a.createElement(c.Col,{xs:12,md:6,push:{md:6}},a.a.createElement(h,{src:"/covid-description.jpg",alt:"historia"})),a.a.createElement(c.Col,{xs:12,md:6,pull:{md:6}},a.a.createElement(p,null,a.a.createElement(b,null,"MEDIDAS DE SEGURIDAD"),a.a.createElement("p",null,"Entendiendo las necesidades del mercado y de nuestros clientes, hemos implementado todas las medidas de seguridad para poder seguir funcionando lo más “normal posible” bajo estrictos protocolos."),a.a.createElement(g,null,a.a.createElement("li",null,"Mascarilla"),a.a.createElement("li",null,"Alcohol Gel"),a.a.createElement("li",null,"Desinfectante en spray para la suela de los zapatos"),a.a.createElement("li",null,"No más de 2 personas en la visita"),a.a.createElement("li",null,"Distanciamiento Social de 1 metro"),a.a.createElement("li",null,"Saludar de lejos")),a.a.createElement(O,null,a.a.createElement("p",null,"Antes de solicitar una visita puedes ver nuestras propiedades en los video recorrido de nuestra Página web y en nuestro canal de ",a.a.createElement("a",{rel:"noopener",target:"_blank",href:"https://www.youtube.com/c/LWPropiedades/featured"},"YouTube"),"."),a.a.createElement("p",null,"¡Nos cuidamos por nosotros y por ustedes!")))))))},v=n("PmQ8"),E=n("nrwI"),j=n("J7O4"),y=l.b.section.withConfig({componentId:"nec1de-0"})(["padding:4rem 0;"]),x=l.b.p.withConfig({componentId:"nec1de-1"})(["background-color:",";color:#fff;padding:2rem;text-align:center;font-weight:bold;margin:0;"],(function(e){return e.theme.main.primaryColor})),C=function(){var e=Object(r.useContext)(i.a).about.ubication,t=Object(r.useContext)(i.a).office,n=t.lat,o=t.lng;return a.a.createElement(y,null,a.a.createElement(x,null,e.title),n&&a.a.createElement(j.a,{lat:parseFloat(o),lng:parseFloat(n),height:300,zoom:18}),a.a.createElement(c.Row,null,a.a.createElement(c.Col,{xs:12},a.a.createElement(E.a,null))))};t.default=function(e){var t=e.data;return a.a.createElement(o.a,{data:JSON.parse(t.initial.data)},a.a.createElement(d,null),a.a.createElement(w,null),a.a.createElement(v.a,null),a.a.createElement(C,null))}},nrwI:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("vOnD"),l=n("wBNj"),c=n("KTcv"),i=n("qTur"),u=n("Wbzz"),s=o.b.div.withConfig({componentId:"sc-5j4wy4-0"})(["padding:2rem 0;"]),m=o.b.p.withConfig({componentId:"sc-5j4wy4-1"})(["text-align:center;@media(min-width:768px){text-align:left;}"]),d=o.b.div.withConfig({componentId:"sc-5j4wy4-2"})(["height:1px;background-color:#dadada;width:100%;"]);t.a=function(){var e=Object(r.useContext)(c.a).home.contact.title;return a.a.createElement(r.Fragment,null,a.a.createElement(l.Container,null,a.a.createElement(s,null,a.a.createElement(l.Row,{align:"center"},a.a.createElement(l.Col,{xs:12,md:9},a.a.createElement(m,null,e)),a.a.createElement(l.Col,{xs:12,md:3},a.a.createElement(i.a,{outlined:!0,primary:!0,block:!0,onClick:function(){return Object(u.navigate)("/contact")}},"Contáctanos"))))),a.a.createElement(d,null))}}}]);
//# sourceMappingURL=component---src-pages-covid-js-711e4aa9dfdc3711d99f.js.map