(this["webpackJsonpblockchain-demo"]=this["webpackJsonpblockchain-demo"]||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t.p+"static/media/sprite.4859caa7.svg"},,,,,function(e,n,t){e.exports=function(){return new Worker(t.p+"610538a06ea2e2844c10.worker.js")}},,,,,,,,function(e,n,t){e.exports=t.p+"static/media/mining.9064981b.svg"},function(e,n,t){e.exports=t.p+"static/media/loading.7627687e.svg"},,,,function(e,n,t){e.exports=t(41)},,,,,function(e,n,t){},function(e,n,t){},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),i=t(6),r=t.n(i),l=(t(32),t(33),t(7)),o=t(1),s=t(14),u=t.n(s),m=function(e,n){return function(t){t(d(e,!1,!1,n))}},d=function(e,n,t,a){return function(c){c({type:"ADD_BLOCK_START"});var i=new u.a;i.postMessage(JSON.stringify({timestamp:(new Date).toLocaleString(),prevHash:n||0,data:e,index:t||0,difficulty:a})),i.onmessage=function(e){c(f(e.data)),i.terminate()}}},f=function(e){return{type:"ADD_BLOCK_SUCCESS",block:e}},h=function(e,n){return{type:"MODIFY_BLOCK",data:e,index:n}},v=function(e,n){return function(t){var a=new u.a;t(k(e.index)),a.postMessage(JSON.stringify({timestamp:e.timestamp,prevHash:e.previousHash,data:e.data,index:e.index,difficulty:n})),a.onmessage=function(e){t(E(e.data)),a.terminate()}}},k=function(e){return{type:"REVALIDATE_BLOCK_START",index:e}},E=function(e){return{type:"REVALIDATE_BLOCK_SUCCESS",block:e}},b=function(e){return{type:"CHANGE_DIFFICULTY",level:e}},p=t(9),g=t.n(p),_=t(19),N=t(20),O=t(25),C=t(21),y=function(e,n){return Object(O.a)({},e,{},n)},x=function(){function e(){Object(_.a)(this,e)}return Object(N.a)(e,[{key:"setDifficulty",value:function(e){this.difficulty=e}},{key:"hashBlock",value:function(e){var n=JSON.stringify(e),t=this.toHex(n);return C.ethers.utils.keccak256(t)}},{key:"calculateNonce",value:function(e){var n=JSON.parse(JSON.stringify(e)),t=0;n.nonce=t;for(var a=this.hashBlock(n);a.substring(2,this.difficulty+2)!==this.getLeadingZeros();)t++,n.nonce=t,a=this.hashBlock(n);return t}},{key:"verifyBlock",value:function(e){var n={timestamp:e.timestamp,data:e.data,previousHash:e.previousHash,index:e.index,nonce:e.nonce};return this.hashBlock(n)===e.hash}},{key:"getLeadingZeros",value:function(){for(var e="",n=0;n<this.difficulty;n++)e=e.concat("0");return e}},{key:"toHex",value:function(e){for(var n="",t=0;t<e.length;t++)n+=e.charCodeAt(t).toString(16);return"0x"+n}}]),e}(),B=(t(38),t(15));var S=function(e){var n=c.a.useState(!1),t=Object(l.a)(n,2),a=t[0],i=t[1],r=new x,s=Object(o.c)(),u=Object(o.d)((function(e){return e.revalidatingBlock})),m=u.includes(e.block.index),d=Math.min.apply(Math,u)<0,f=Object(o.d)((function(e){return e.difficulty})),k=function(e){return r.verifyBlock(e)};return c.a.useEffect((function(){i(!0)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(B.a,{in:!!e.block.index,timeout:500,mountOnEnter:!0,unmountOnExit:!0,classNames:"faded"},c.a.createElement("svg",{className:"narrow_down"},c.a.createElement("use",{xlinkHref:"".concat(g.a,"#icon-chevron-down")}))),c.a.createElement(B.a,{in:a,timeout:500,classNames:"faded"},c.a.createElement("div",{className:"block"},c.a.createElement("div",{className:"title"},c.a.createElement("div",{className:"title__label"},c.a.createElement("span",null,"DATA")),c.a.createElement("input",{type:"text",className:"title__input",value:e.block.data,onChange:function(n){return t=n,a=e.block.index,void s(h(t.target.value,a));var t,a}})),c.a.createElement("div",{className:"prehash"},c.a.createElement("p",{className:"prehash__title"},"Previous Hash"),c.a.createElement("div",{className:"prehash__value\n                ".concat(k(e.block)?"prehash__value-right":"prehash__value-wrong","\n              ")},e.block.previousHash)),c.a.createElement("div",{className:"hash"},c.a.createElement("div",{className:"hash__title"},"Hash"),c.a.createElement("div",{className:"hash__value ".concat(k(e.block)?"hash__value-right":"hash__value-wrong")},c.a.createElement("span",null,e.block.hash))),c.a.createElement("div",{className:"detail"},c.a.createElement("div",{className:"index"},0===e.block.index?"GENESIS BLOCK":"BLOCK #".concat(e.block.index)),c.a.createElement("div",{className:"timestamp"},e.block.timestamp),k(e.block)?c.a.createElement("div",{className:"nonce"},e.block.nonce):c.a.createElement("button",{className:"nonce fix",onClick:function(){return function(e,n){s(v(e,n))}(e.block,f)},disabled:d||m},m?"Mining...":c.a.createElement("svg",{className:"fix_icon"},c.a.createElement("use",{xlinkHref:"".concat(g.a,"#icon-wrench")})))))))};t(39);var A=function(){var e=Object(o.c)(),n=Object(o.d)((function(e){return e.difficulty})),t=Object(a.useState)(n),i=Object(l.a)(t,2),r=i[0],s=i[1];return c.a.createElement("div",{className:"reset"},c.a.createElement("div",{className:"difficulty"},"Current Difficulty Level:",c.a.createElement("span",null,n)),c.a.createElement("div",{className:"configure__diff"},c.a.createElement("button",{className:"configure__diff-incre",onClick:function(){s(r+1)}},"+"),c.a.createElement("span",null,r),c.a.createElement("button",{className:"configure__diff-decre",onClick:function(){r>1&&s(r-1)}},"-")),c.a.createElement("button",{className:"reset-btn btn",onClick:function(){return t=r,void(n!==r&&e(b(t)));var t}},"Change Difficulty"))},j=(t(40),t(22)),w=t.n(j);var D=Object(o.b)((function(e){return{prevHash:e.blockChain[e.blockChain.length-1],index:e.blockChain.length,difficulty:e.difficulty,isMining:e.isMining}}),(function(e){return{addBlock:function(n,t,a,c){return e(d(n,t,a,c))}}}))((function(e){var n=c.a.useState(""),t=Object(l.a)(n,2),a=t[0],i=t[1];return c.a.createElement("div",{className:"add__block"},c.a.createElement("div",{className:"title"},c.a.createElement("div",{className:"title__label"},c.a.createElement("span",null,"DATA")),c.a.createElement("input",{type:"text",className:"title__input",placeholder:"Add your data",onChange:function(e){i(e.target.value)}})),!0===e.isMining?c.a.createElement("img",{src:w.a,alt:"mining",className:"mining"}):c.a.createElement("button",{className:"add",onClick:function(){return e.addBlock(a,e.prevHash.hash,e.index,e.difficulty)}},c.a.createElement("svg",{className:"add-icon"},c.a.createElement("use",{xlinkHref:"".concat(g.a,"#icon-add")})),c.a.createElement("span",null,"Add New Block")))})),L=t(23),H=t.n(L);var T=function(e){var n=Object(o.c)(),t=Object(o.d)((function(e){return e.blockChain})),i=Object(o.d)((function(e){return e.difficulty})),r=Object(o.d)((function(e){return e.isMining})),l=Object(a.useCallback)((function(){return n(m("Welcome to Blockchain Demo",i))}),[i,n]);c.a.useEffect((function(){l()}),[l]);var s="";return s=!0===r&&0===t.length?c.a.createElement("div",{className:"main-content"},c.a.createElement("img",{src:H.a,alt:"spinner",className:"spinner"}),c.a.createElement("p",null,"Mining Genesis Block!!")):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"main-content"},c.a.createElement("h1",null,"Blockchain"),c.a.createElement("div",{className:"blockchain"},t.map((function(e,n){return c.a.createElement(S,{block:e,key:n})}))),c.a.createElement(D,null)),c.a.createElement("div",{className:"right-side"},c.a.createElement(A,null))),c.a.createElement("div",{className:"App"},s)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=t(8),I=t(24),K=t(10),R={blockChain:[],isMining:!1,difficulty:4,revalidatingBlock:[]},F=function(e,n){return y(e,{isMining:!0})},J=function(e,n){return y(e,{blockChain:[].concat(Object(K.a)(e.blockChain),[n.block]),isMining:!1})},U=function(e,n){var t=Object(K.a)(e.blockChain),a=t[n.index];a.data=n.data;var c=new x,i=c.hashBlock(a);t[n.index].hash=i;for(var r=n.index+1;r<t.length;r++)t[r].previousHash=t[r-1].hash,t[r].hash=c.hashBlock(t[r]);return y(e,{blockChain:t})},V=function(e,n){return y(e,{revalidatingBlock:[].concat(Object(K.a)(e.revalidatingBlock),[n.index])})},G=function(e,n){var t=Object(K.a)(e.blockChain);t.splice(n.block.index,1,n.block);for(var a=n.block.index;a<t.length;a++)a>0&&(t[a].previousHash=t[a-1].hash);var c=e.revalidatingBlock.filter((function(e){return e!==n.block.index}));return y(e,{blockChain:t,revalidatingBlock:c})},W=function(e,n){return y(e,{difficulty:n.level,blockChain:[]})},Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.c,P=Object(M.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_BLOCK_START":return F(e);case"ADD_BLOCK_SUCCESS":return J(e,n);case"MODIFY_BLOCK":return U(e,n);case"REVALIDATE_BLOCK_START":return V(e,n);case"REVALIDATE_BLOCK_SUCCESS":return G(e,n);case"CHANGE_DIFFICULTY":return W(e,n);default:return e}}),Y(Object(M.a)(I.a)));r.a.render(c.a.createElement(o.a,{store:P},c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[27,1,2]]]);
//# sourceMappingURL=main.2bb554ce.chunk.js.map