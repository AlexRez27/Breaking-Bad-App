(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2625121f"],{"0b83":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("Loader"):n("div",{staticClass:"quote"},[t.noData?n("h4",[t._v(" We found no quotes 😞 ")]):n("div",{staticClass:"quote__block"},[n("h3",{staticClass:"quote__title"},[t._v(" We found this quotes ")]),t._l(t.quotes,(function(e){return n("div",{key:e.quote_id,staticClass:"quote__card"},[n("blockquote",{staticClass:"quote__text"},[t._v(" "+t._s(e.quote)+" ")]),n("p",[n("b",[t._v(t._s(e.author))]),t._v(" ("),n("em",[t._v(t._s(e.series))]),t._v(" ) ")])])}))],2),n("router-link",{attrs:{to:"/"}},[n("button",{staticClass:"quote__btn waves-effect waves-light btn"},[t._v(" Back to home ")])])],1)],1)},o=[],u=n("5530"),r=n("1da1"),s=(n("96cf"),n("ac1f"),n("466d"),n("555f")),c=n("2f62"),i={name:"QuoteInfo",components:{Loader:s["a"]},computed:Object(c["c"])(["getInfo"]),data:function(){return{loading:!0,noData:!0,quotes:[]}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getData({entity:"quotes"});case 2:for(n=0;n<t.getInfo.length;n++)t.getInfo[n].quote.toLowerCase().match(t.$route.params.value)&&t.quotes.push(t.getInfo[n]);t.quotes.length?t.noData=!1:t.noData=!0,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},methods:Object(u["a"])({},Object(c["b"])(["getData"]))},l=i,d=(n("9158"),n("2877")),f=Object(d["a"])(l,a,o,!1,null,null,null);e["default"]=f.exports},"466d":function(t,e,n){"use strict";var a=n("d784"),o=n("825a"),u=n("50c4"),r=n("1d80"),s=n("8aa5"),c=n("14c3");a("match",1,(function(t,e,n){return[function(e){var n=r(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n):new RegExp(e)[t](String(n))},function(t){var a=n(e,t,this);if(a.done)return a.value;var r=o(t),i=String(this);if(!r.global)return c(r,i);var l=r.unicode;r.lastIndex=0;var d,f=[],v=0;while(null!==(d=c(r,i))){var _=String(d[0]);f[v]=_,""===_&&(r.lastIndex=s(i,u(r.lastIndex),l)),v++}return 0===v?null:f}]}))},9158:function(t,e,n){"use strict";n("c2c5")},c2c5:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2625121f.94e60363.js.map