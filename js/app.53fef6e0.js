(function(){var t={352:function(t,o,e){"use strict";var r=e(6369),n=function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],s=e(1001),p={},a=(0,s.Z)(p,n,i,!1,null,null,null),u=a.exports,c=e(2631),f=function(){var t=this,o=t._self._c;return o("div",{staticClass:"content-wrapper"},[o("span",{staticClass:"title",attrs:{"data-aos":"fade-down","data-aos-duration":"1400"}},[t._v("С Новым 2023 Годом!")]),o("transition",{attrs:{name:"titleTxt",appear:""}},[o("p",{staticClass:"inspiring-text"},[t._v(" Время идет. Эту мысль мы часто обдумываем, ощущая неумалимый ход времени, мы вспоминаем как недавно только начиналось то, что уже подходит к концу. Так же быстро прошел и этот год, так же быстро пройдет и следующий. Но всегда приятно остановиться и оглянуться назад, в это самое ушедшее прошлое. Мы делаем фотографии и видео именно для таких моментов. Они служат своего рода капсулой времени, запечатавшей в себе памятный осколок минувшего момента, каждый из которых уникален и ценен, именно тем, что его прожили мы. Мы были теми, кто надолго запечатал его в памяти своего телефона, тем самым доказав нескончаемому потоку событий своё существование. ")])]),o("span",{staticClass:"title photo"},[t._v("Фото альбом этого года")]),o("Cards"),o("span",{staticClass:"title photo",attrs:{"data-aos":"fade-down","data-aos-duration":"800"}},[t._v("Видео альбом этого года")]),o("Videos"),o("footer")],1)},d=[],h=function(){var t=this,o=t._self._c;return o("div",{staticClass:"cards-content"},t._l(t.picturesArr,(function(r){return o("div",{key:r,staticClass:"card-wrapper",attrs:{"data-aos":t.swichAOS(r),"data-aos-duration":"1500"}},[o("img",{attrs:{src:e(8156)(`./photo(${r}).jpg`),alt:"Картинка не загрузилась"}})])})),0)},l=[],v=(e(7658),{data(){return{picturesArr:[]}},created(){this.getPictures()},methods:{getPictures(){for(let t=1;t<15;t++)this.picturesArr.push(t)},swichAOS(t){return t%2?"fade-down-right":"fade-down-left"}}}),g=v,m=(0,s.Z)(g,h,l,!1,null,"2fcae02f",null),j=m.exports,_=function(){var t=this,o=t._self._c;return o("div",{staticClass:"video-content"},t._l(t.videosArr,(function(r){return o("div",{key:r,staticClass:"video-wrapper",attrs:{"data-aos":t.swichVideosAOS(r),"data-aos-duration":"1400"}},[o("video",{attrs:{width:"320",height:"240",controls:""}},[o("source",{attrs:{src:e(2961)(`./video(${r}).mp4`),type:"video/mp4"}}),t._v(" Похоже твой браузер не поддерживает видео теги ")])])})),0)},w=[],x={data(){return{videosArr:[]}},created(){this.getVideos()},methods:{getVideos(){for(let t=1;t<5;t++)this.videosArr.push(t)},swichVideosAOS(t){return t%2?"fade-down-right":"fade-down-left"}}},b=x,O=(0,s.Z)(b,_,w,!1,null,"7790df86",null),y=O.exports,C={name:"HomeView",components:{Cards:j,Videos:y}},k=C,A=(0,s.Z)(k,f,d,!1,null,"5571e572",null),P=A.exports;r.ZP.use(c.ZP);const Z=[{path:"/",name:"home",component:P}],V=new c.ZP({routes:Z});var T=V,E=e(6905),D=e.n(E);r.ZP.config.productionTip=!1,new r.ZP({router:T,mounted(){D().init()},render:t=>t(u)}).$mount("#app")},8156:function(t,o,e){var r={"./photo(1).jpg":5936,"./photo(10).jpg":3933,"./photo(11).jpg":123,"./photo(12).jpg":5655,"./photo(13).jpg":3251,"./photo(14).jpg":8965,"./photo(2).jpg":5400,"./photo(3).jpg":8589,"./photo(4).jpg":3904,"./photo(5).jpg":1677,"./photo(6).jpg":3523,"./photo(7).jpg":5943,"./photo(8).jpg":2690,"./photo(9).jpg":2518};function n(t){var o=i(t);return e(o)}function i(t){if(!e.o(r,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=i,t.exports=n,n.id=8156},2961:function(t,o,e){var r={"./video(1).mp4":3075,"./video(2).mp4":9163,"./video(3).mp4":2182,"./video(4).mp4":9486};function n(t){var o=i(t);return e(o)}function i(t){if(!e.o(r,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=i,t.exports=n,n.id=2961},5936:function(t,o,e){"use strict";t.exports=e.p+"img/photo(1).3785853b.jpg"},3933:function(t,o,e){"use strict";t.exports=e.p+"img/photo(10).46d54792.jpg"},123:function(t,o,e){"use strict";t.exports=e.p+"img/photo(11).cc648bc9.jpg"},5655:function(t,o,e){"use strict";t.exports=e.p+"img/photo(12).faf35509.jpg"},3251:function(t,o,e){"use strict";t.exports=e.p+"img/photo(13).667adac5.jpg"},8965:function(t,o,e){"use strict";t.exports=e.p+"img/photo(14).8630b2ea.jpg"},5400:function(t,o,e){"use strict";t.exports=e.p+"img/photo(2).22372592.jpg"},8589:function(t,o,e){"use strict";t.exports=e.p+"img/photo(3).f9f5386f.jpg"},3904:function(t,o,e){"use strict";t.exports=e.p+"img/photo(4).e831c308.jpg"},1677:function(t,o,e){"use strict";t.exports=e.p+"img/photo(5).8abab4a4.jpg"},3523:function(t,o,e){"use strict";t.exports=e.p+"img/photo(6).d0865be0.jpg"},5943:function(t,o,e){"use strict";t.exports=e.p+"img/photo(7).b0057053.jpg"},2690:function(t,o,e){"use strict";t.exports=e.p+"img/photo(8).24cd62a5.jpg"},2518:function(t,o,e){"use strict";t.exports=e.p+"img/photo(9).6173a317.jpg"},3075:function(t,o,e){"use strict";t.exports=e.p+"media/video(1).c6b18f20.mp4"},9163:function(t,o,e){"use strict";t.exports=e.p+"media/video(2).c9c5af41.mp4"},2182:function(t,o,e){"use strict";t.exports=e.p+"media/video(3).cf233327.mp4"},9486:function(t,o,e){"use strict";t.exports=e.p+"media/video(4).e35d418c.mp4"}},o={};function e(r){var n=o[r];if(void 0!==n)return n.exports;var i=o[r]={exports:{}};return t[r].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,r,n,i){if(!r){var s=1/0;for(c=0;c<t.length;c++){r=t[c][0],n=t[c][1],i=t[c][2];for(var p=!0,a=0;a<r.length;a++)(!1&i||s>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[a])}))?r.splice(a--,1):(p=!1,i<s&&(s=i));if(p){t.splice(c--,1);var u=n();void 0!==u&&(o=u)}}return o}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,n,i]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.p="/shards-of-our-memories/"}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,r){var n,i,s=r[0],p=r[1],a=r[2],u=0;if(s.some((function(o){return 0!==t[o]}))){for(n in p)e.o(p,n)&&(e.m[n]=p[n]);if(a)var c=a(e)}for(o&&o(r);u<s.length;u++)i=s[u],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(c)},r=self["webpackChunkhappy_new_year_story_about_five_friends"]=self["webpackChunkhappy_new_year_story_about_five_friends"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(352)}));r=e.O(r)})();
//# sourceMappingURL=app.53fef6e0.js.map