(window["webpackJsonpm3-evaluacion-final"]=window["webpackJsonpm3-evaluacion-final"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/no-results.079e83c0.gif"},22:function(e,a,t){e.exports=t.p+"static/media/mrs-mee.a68be4a1.gif"},25:function(e,a,t){e.exports=t(43)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(15),s=t.n(n),l=(t(30),t(16)),i=t(17),m=t(23),o=t(18),u=t(7),h=t(24),f=t(6),_=(t(31),function(e){var a=e.filterCharacters;return c.a.createElement("div",{className:"page__filters"},c.a.createElement("label",{htmlFor:"finder",className:"finder__label"}),c.a.createElement("input",{type:"text",className:"finder__input",id:"finder",onChange:a}))}),d=t(5),p=(t(32),function(e){var a=e.character,t=a.image,r=a.name,n=a.species;return c.a.createElement("div",{className:"character__card"},c.a.createElement("img",{src:t,alt:r,className:"character__image"}),c.a.createElement("div",{className:"character__data"},c.a.createElement("h2",{className:"card__name"},r),c.a.createElement("p",{className:"character__species"},n)))}),E=t(19),g=t.n(E),N=(t(33),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"no-results__text"},"Lo siento, no hay resultados para esa b\xfasqueda"),c.a.createElement("img",{src:g.a,alt:"",className:"no-results__image"}))}),v=function(e){var a=e.data,t=a.characters,r=a.filterName,n=t.filter((function(e){return!r||e.name.toLowerCase().includes(r)}));return n.length?c.a.createElement("ol",{className:"character__list"},n.map((function(e){return c.a.createElement("li",{className:"list__character",key:e.id,id:e.id},c.a.createElement(d.b,{to:"/character/".concat(e.id),className:"character__link"},c.a.createElement(p,{character:e})))}))):c.a.createElement(N,null)},b=function(e){var a=e.data,t=e.filterCharacters;return c.a.createElement(c.a.Fragment,null,c.a.createElement(_,{filterCharacters:t}),c.a.createElement(v,{data:a}))},y=function(){return c.a.createElement("p",{className:"loading__text"},"Cargando...")},k=t(22),C=t.n(k),j={alive:"fas fa-heart",dead:"fas fa-skull",unknow:"fas fa-question"},w={human:"fas fa-male",alien:"fab fa-reddit-alien"},S=(t(39),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"loading__text"},"Ese personaje no lo tenemos en el directorio "),c.a.createElement("img",{src:C.a,alt:"mrs-Mee character",className:"not-found__img"}),c.a.createElement(d.b,{to:"/",className:"app__back"},"Volver al listado"))}),F=function(e){var a=parseInt(e.routeData.match.params.id),t=e.characters,r=e.isFetching,n=t.find((function(e){return e.id===a}));if(r)return c.a.createElement(y,null);if(a>t.length||a<0)return c.a.createElement(S,null);var s,l=n.image,i=n.name,m=n.status,o=n.species,u=n.origin,h=n.episode;s="Alive"===m?j.alive:"Dead"===m?j.dead:j.unknow;var f="Human"===o?w.human:w.alien;return c.a.createElement("div",{className:"characterDetail__containter"},c.a.createElement("div",{className:"characterCard__container"},c.a.createElement(d.b,{to:"/",className:"app__back"},"Volver"),c.a.createElement("div",{className:"characterDetail__card"},c.a.createElement("img",{src:l,alt:i,className:"character__image"}),c.a.createElement("div",{className:"character__data"},c.a.createElement("h2",{className:"character__name"},i),c.a.createElement("p",{className:"character__status"},"Status:",c.a.createElement("i",{className:"status__icon ".concat(s)}," ",m)),c.a.createElement("p",{className:"character__species"},"Specie:",c.a.createElement("i",{className:"specie__icon ".concat(f)}," ",o)),c.a.createElement("p",{className:"character__origin"},"Origen: ",u.name),c.a.createElement("p",{className:"character__episodes"},"N\xba de Episodios en los que sale: ",h.length)))))},O=(t(40),function(){return c.a.createElement("header",{className:"page__header"},c.a.createElement("div",{className:"title__container"},c.a.createElement("h1",{className:"page__title"},"Directorio de personajes de Rick y Morty")))}),x=(t(41),function(){return c.a.createElement("footer",{className:"page_footer"},c.a.createElement("p",{className:"footer__copy"},"Ricky and Morty Directory by",c.a.createElement("a",{href:"https://github.com/patriciaSR",target:"_blanck",className:"github__link"}," @patriciaSR ")),c.a.createElement("p",{className:"footer__copy"},"@2019"))}),D=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()}))},A=(t(42),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={characters:[],filterName:"",isFetching:!0,species:[]},t.getCharactersArr=t.getCharactersArr.bind(Object(u.a)(t)),t.filterCharacters=t.filterCharacters.bind(Object(u.a)(t)),t.getSpecies=t.getSpecies.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"getCharactersArr",value:function(){var e=this;D().then((function(a){e.setState({characters:a.results,isFetching:!1,species:e.getSpecies(a.results)})}))}},{key:"filterCharacters",value:function(e){var a=e.currentTarget.value.toLowerCase();this.setState({filterName:a})}},{key:"componentDidMount",value:function(){this.getCharactersArr()}},{key:"getSpecies",value:function(e){return e.reduce((function(e,a){return e.includes(a.species)||e.push(a.species),e}),[])}},{key:"render",value:function(){var e=this,a=this.state,t=a.isFetching,r=a.characters;return c.a.createElement("div",{className:"app"},c.a.createElement(O,null),c.a.createElement("main",{className:"page__main"},t?c.a.createElement(y,null):c.a.createElement(f.c,null,c.a.createElement(f.a,{exact:!0,path:"/",render:function(){return c.a.createElement(b,{data:e.state,filterCharacters:e.filterCharacters})}}),c.a.createElement(f.a,{path:"/character/:id",render:function(e){return c.a.createElement(F,{characters:r,isFetching:t,routeData:e})}}))),c.a.createElement(x,null))}}]),a}(c.a.Component));s.a.render(c.a.createElement(d.a,null," ",c.a.createElement(A,null)," "),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.30b9f461.chunk.js.map