(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{J7O4:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Ff2n"),c=n("ODXe"),l=Object(r.createContext)(null),i=l.Provider;function u(){var e=Object(r.useContext)(l);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var s=n("4R65");function m(e){var t=e.children,n=e.className,l=e.id,u=e.placeholder,m=e.style,d=e.whenCreated,p=Object(o.a)(e,["children","className","id","placeholder","style","whenCreated"]),f=Object(r.useRef)(null),b=function(e,t){var n=Object(r.useState)(null),a=Object(c.a)(n,2),o=a[0],l=a[1];return Object(r.useEffect)((function(){if(null!==e.current&&null===o){var n=new s.Map(e.current,t);null!=t.center&&null!=t.zoom?n.setView(t.center,t.zoom):null!=t.bounds&&n.fitBounds(t.bounds,t.boundsOptions),null!=t.whenReady&&n.whenReady(t.whenReady),l(n)}}),[e,o,t]),o}(f,p),g=Object(r.useRef)(!1);Object(r.useEffect)((function(){null!=b&&!1===g.current&&null!=d&&(g.current=!0,d(b))}),[b,d]);var h=Object(r.useMemo)((function(){return b?{__version:1,map:b}:null}),[b]),w=h?a.a.createElement(i,{value:h},t):null!=u?u:null;return a.a.createElement("div",{ref:f,className:n,id:l,style:m},w)}n("i8i4");function d(e){function t(t,n){var o=e(t).current,c=o.instance,l=o.context;return Object(r.useImperativeHandle)(n,(function(){return c})),null==t.children?null:a.a.createElement(i,{value:l},t.children)}return Object(r.forwardRef)(t)}function p(e){function t(t,n){var a=e(t).current.instance;return Object(r.useImperativeHandle)(n,(function(){return a})),null}return Object(r.forwardRef)(t)}function f(e,t){return null==t?function(t,n){return Object(r.useRef)(e(t,n))}:function(n,a){var o=Object(r.useRef)(e(n,a)),c=Object(r.useRef)(n),l=o.current.instance;return Object(r.useEffect)((function(){c.current!==n&&(t(l,n,c.current),c.current=n)}),[l,n,a]),o}}function b(e,t){var n=Object(r.useRef)(t);Object(r.useEffect)((function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t}),[e,t])}function g(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}}),[e,t])}var h=n("rePB");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t){var n,r=null!=(n=e.pane)?n:t.pane;return r?x(x({},e),{},{pane:r}):e}function E(e,t){Object(r.useEffect)((function(){var n,r=null!=(n=t.layerContainer)?n:t.map;return r.addLayer(e.instance),function(){r.removeLayer(e.instance)}}),[t,e])}function O(e){return function(t){var n=u(),r=e(v(t,n),n);return b(n.map,t.attribution),g(r.current,t.eventHandlers),E(r.current,n),r}}var j=p(O(f((function(e,t){var n=e.url,r=Object(o.a)(e,["url"]);return{instance:new s.TileLayer(n,v(r,t)),context:t}}),(function(e,t,n){var r=t.opacity,a=t.zIndex;null!=r&&r!==n.opacity&&e.setOpacity(r),null!=a&&a!==n.zIndex&&e.setZIndex(a)}))));function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(e,t){return d(O(f(e,t)))}((function(e,t){var n=e.position,r=Object(o.a)(e,["position"]),a=new s.Marker(n,r);return{instance:a,context:C(C({},t),{},{overlayContainer:a})}}),(function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),null!=t.icon&&t.icon!==n.icon&&e.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),null!=e.dragging&&t.draggable!==n.draggable&&(!0===t.draggable?e.dragging.enable():e.dragging.disable())}));t.a=function(e){var t=e.lat,n=e.lng,r=e.height,o=e.zoom;return"undefined"!=typeof window?a.a.createElement(m,{center:{lat:t,lng:n},zoom:o,scrollWheelZoom:!1,style:{height:r}},a.a.createElement(j,{url:"https://api.mapbox.com/styles/v1/felixtineo/ckkigaae20ubv17pelsiz47wg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZmVsaXh0aW5lbyIsImEiOiJja2IwdTYzaHQwMDYyMnZvOHltYXJrdmIwIn0.P0lczMOjIif3MGlqroU__A",attribution:'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}),a.a.createElement(I,{position:[t,n]})):a.a.createElement("span",null,"a")}},PmQ8:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("KTcv"),c=n("vOnD"),l=n("wBNj"),i=n("mBU7"),u=n("qTur"),s=c.b.div.withConfig({componentId:"w5i8ko-0"})(["margin-top:2rem;padding:4rem 2rem;background-color:#000;background-image:",";background-position:center;background-repeat:no-repeat;background-size:cover;"],(function(e){return e.image?"linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url("+e.image+")":""})),m=c.b.p.withConfig({componentId:"w5i8ko-1"})(["color:#fff;display:flex;align-items:center;justify-content:center;text-align:center;@media(min-width:768px){text-align:left;}"]),d=c.b.div.withConfig({componentId:"w5i8ko-2"})(["display:flex;align-items:center;justify-content:center;"]),p=Object(c.b)(u.a).withConfig({componentId:"w5i8ko-3"})(["background-color:hsl(40,4%,85%);border-color:#DAD9D7;color:#000;&:hover{background-color:hsl(40,4%,75%);color:#000;}&:active{background-color:hsl(40,4%,85%);color:#000;}"]),f=function(e){var t=e.title,n=e.image,r=e.onClick,o=e.buttonText,c=e.icon;return a.a.createElement(s,{image:n},a.a.createElement(l.Row,{align:"center"},a.a.createElement(l.Visible,{xs:!0},a.a.createElement(l.Col,{xs:12},a.a.createElement(d,null,a.a.createElement("img",{src:c,alt:t,style:{marginRight:".5rem"}})))),a.a.createElement(l.Col,{xs:12,md:9},a.a.createElement(m,null,a.a.createElement(l.Hidden,{xs:!0},a.a.createElement("img",{src:c,alt:t,style:{marginRight:".5rem"}})),t)),a.a.createElement(l.Col,{xs:12,md:3},a.a.createElement(p,{onClick:r,block:!0,primary:!0},o))))},b=n("Wbzz"),g=c.b.section.withConfig({componentId:"sc-1vtquln-0"})(["min-height:100vh;padding:4rem 0;"]),h=c.b.h2.withConfig({componentId:"sc-1vtquln-1"})(["color:",";text-align:center;margin:0;margin-bottom:4rem;color:#2a2a2a;letter-spacing:0.5rem;"],(function(e){return e.theme.main.primaryColor}));t.a=function(){var e=Object(r.useContext)(o.a).home.properties;return a.a.createElement(g,{id:"properties"},a.a.createElement(l.Container,null,a.a.createElement(l.Row,null,a.a.createElement(l.Col,{xs:12},a.a.createElement(h,null,e.title)),a.a.createElement(l.Col,{xs:12},a.a.createElement(i.b,null)),a.a.createElement(l.Col,{xs:12},a.a.createElement(f,{image:e.bannerImage,buttonText:e.buttonText,title:e.footer,icon:"/icons/marker.svg",onClick:function(){return Object(b.navigate)("/properties")}})))))}},ZdHi:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("JzyJ"),c=n("vOnD"),l=n("wBNj"),i=n("KTcv"),u=c.b.section.withConfig({componentId:"j4rxx7-0"})(['background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url("/covid.jpg");background-size:cover;background-repeat:no-repeat;text-shadow:rgba(255,255,255,0.6) 1px 1px 1px,rgba(0,0,0,0.6) -1px -1px 1px;@media(min-width:768px){font-size:66px;letter-spacing:.1px;}']),s=c.b.div.withConfig({componentId:"j4rxx7-1"})(["height:70vh;display:flex;justify-content:center;align-items:center;@media(min-width:768px){justify-content:flex-start;}"]),m=c.b.h2.withConfig({componentId:"j4rxx7-2"})(["text-transform:uppercase;color:#212121;margin-top:145.39px;margin-bottom:0;background-color:#f2f1f0;padding:1.5rem;padding-top:2.3rem;letter-spacing:.5rem;text-align:center;"]),d=c.b.h1.withConfig({componentId:"j4rxx7-3"})(["color:#fff;text-align:center;@media(min-width:768px){width:70%;text-align:left;}"]),p=function(){Object(r.useContext)(i.a).about;return a.a.createElement(r.Fragment,null,a.a.createElement(m,null,"Protocolo COVID-19"),a.a.createElement(u,null,a.a.createElement(l.Container,null,a.a.createElement(s,null,a.a.createElement(d,null)))))},f=c.b.section.withConfig({componentId:"b1ehnv-0"})(["background-color:#F2F2F2;padding:6rem 0;padding-bottom:2rem;"]),b=c.b.div.withConfig({componentId:"b1ehnv-1"})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;height:100%;li{line-height:2rem;}"]),g=c.b.h2.withConfig({componentId:"b1ehnv-2"})(["letter-spacing:.5rem;font-size:28px;"]),h=c.b.ul.withConfig({componentId:"b1ehnv-3"})(["list-style-type:disc;padding-left:2rem;color:#666;margin:1rem 0;"]),w=c.b.img.withConfig({componentId:"b1ehnv-4"})(["object-fit:cover;object-position:center;width:100%;"]),x=c.b.div.withConfig({componentId:"b1ehnv-5"})(["text-align:center;a{color:",";}"],(function(e){return e.theme.main.primaryColor})),v=function(){Object(r.useContext)(i.a).about;return a.a.createElement(f,null,a.a.createElement(l.Container,null,a.a.createElement(l.Row,null,a.a.createElement(l.Col,{xs:12,md:6,push:{md:6}},a.a.createElement(w,{src:"/covid-description.jpg",alt:"historia"})),a.a.createElement(l.Col,{xs:12,md:6,pull:{md:6}},a.a.createElement(b,null,a.a.createElement(g,null,"MEDIDAS DE SEGURIDAD"),a.a.createElement("p",{style:{textAlign:"justify"}},"Entendiendo las necesidades del mercado y de nuestros clientes, hemos implementado todas las medidas de seguridad para poder seguir funcionando lo más “normal posible” bajo estrictos protocolos."),a.a.createElement(h,null,a.a.createElement("li",null,"Mascarilla"),a.a.createElement("li",null,"Alcohol Gel"),a.a.createElement("li",null,"Desinfectante en spray para la suela de los zapatos"),a.a.createElement("li",null,"No más de 2 personas en la visita"),a.a.createElement("li",null,"Distanciamiento Social de 1 metro"),a.a.createElement("li",null,"Saludar de lejos")),a.a.createElement(x,null,a.a.createElement("p",{style:{textAlign:"justify"}},"Antes de solicitar una visita puedes ver nuestras propiedades en los video recorrido de nuestra Página web y en nuestro canal de ",a.a.createElement("a",{style:{color:"#FF0000",textDecoration:"none"},rel:"noopener",target:"_blank",href:"https://www.youtube.com/c/LWPropiedades/featured"},"YouTube"),"."),a.a.createElement("p",null,"¡Nos cuidamos por nosotros y por ustedes!")))))))},E=n("PmQ8"),O=n("nrwI"),j=n("J7O4"),y=c.b.section.withConfig({componentId:"nec1de-0"})(["padding:4rem 0;"]),C=c.b.p.withConfig({componentId:"nec1de-1"})(["background-color:#000;color:#fff;padding:1rem;text-align:center;font-weight:bold;margin:0;"]),I=function(){var e=Object(r.useContext)(i.a).about.ubication,t=Object(r.useContext)(i.a).office,n=t.lat,o=t.lng;return a.a.createElement(y,null,a.a.createElement(C,null,e.title),n&&a.a.createElement(j.a,{lat:parseFloat(o),lng:parseFloat(n),height:300,zoom:18}),a.a.createElement(l.Row,null,a.a.createElement(l.Col,{xs:12},a.a.createElement(O.a,null))))};t.default=function(e){var t=e.data;return a.a.createElement(o.a,{data:JSON.parse(t.initial.data)},a.a.createElement(p,null),a.a.createElement(v,null),a.a.createElement(E.a,null),a.a.createElement(I,null))}},nrwI:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("vOnD"),c=n("wBNj"),l=n("KTcv"),i=(n("qTur"),n("Wbzz")),u=o.b.div.withConfig({componentId:"sc-5j4wy4-0"})(["padding:2rem 0;"]),s=o.b.p.withConfig({componentId:"sc-5j4wy4-1"})(["text-align:center;margin:0;@media(min-width:768px){text-align:left;font-size:1.5rem;}"]),m=o.b.div.withConfig({componentId:"sc-5j4wy4-2"})(["height:1px;background-color:#dadada;width:100%;"]),d=o.b.button.withConfig({componentId:"sc-5j4wy4-3"})(["cursor:pointer;background-color:hsl(0,0%,0%);border:1px solid #2a2a2a;min-height:44px;width:100%;color:#fff;font-family:\"Proxima Nova\",'Montserrat',sans-serif;font-size:28px;text-transform:uppercase;padding:.5rem 0;letter-spacing:0.35px;transition:250ms ease;&:hover{background-color:hsl(0,0%,10%);}"]);t.a=function(){Object(r.useContext)(l.a).home.contact.title;return a.a.createElement(r.Fragment,null,a.a.createElement(c.Container,null,a.a.createElement(u,null,a.a.createElement(c.Row,{align:"center"},a.a.createElement(c.Col,{xs:12,md:9},a.a.createElement(s,null,"¿Necesitas Vender, Arrendar o Comprar una propiedad?"),a.a.createElement(s,null,"Somos tu socio perfecto.")),a.a.createElement(c.Col,{xs:12,md:3},a.a.createElement(d,{outlined:!0,primary:!0,block:!0,onClick:function(){return Object(i.navigate)("/contact")}},"Contáctanos"))))),a.a.createElement(m,null))}}}]);
//# sourceMappingURL=component---src-pages-covid-js-040ddab59330fefe39bf.js.map