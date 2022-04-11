(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(n,e,t){n.exports=t(37)},37:function(n,e,t){"use strict";t.r(e);var a,r,o=t(0),c=t.n(o),i=t(19),s=t.n(i),l=t(40),d=t(24),p=t(3),u=t(4),b=Object(u.a)(a||(a=Object(p.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  body {\n    font: 14px 'Roboto', sans-serif;\n    background: #ecf1f8;\n    color: #333;\n    -webkit-font-smoothing: antialiased !important;\n  }\n\n  ul {\n    list-style: none;\n  }\n"]))),g=u.c.div(r||(r=Object(p.a)(["\n  height: 80px;\n  padding: 0 30px;\n  background: #79c991;\n  color: #FFF;\n\n  display: flex;\n  align-items: center;\n"])));function m(){return c.a.createElement(g,null,c.a.createElement("h1",null,"PipeClone"))}var x=t(9),h=t(22);var f,E,v,y,j=Object(o.createContext)({}),O=t(25),w=t(41),k=t(42),F=u.c.div(f||(f=Object(p.a)(["\n  position: relative;\n  background: #FFF;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  padding: 15px;\n  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);\n  border-top: 20px solid rgba(230, 236, 245, 0.4);\n  cursor: grab;\n\n  header {\n    position: absolute;\n    top: -22px;\n    left: 15px;\n  }\n\n  p {\n    font-weight: 500;\n    line-height: 20px;\n  }\n\n  img {\n    width: 24px;\n    height: 24px;\n    border-radius: 2px;\n    margin-top: 5px;\n  }\n\n  ","\n"])),function(n){return n.isDragging&&Object(u.b)(E||(E=Object(p.a)(["\n    border: 2px dashed rgba(0, 0, 0, 0.2);\n    padding-top: 31px;\n    border-radius: 0;\n    background: transparent;\n    box-shadow: none;\n    cursor: grabbing;\n\n    p, img, header {\n      opacity: 0;\n    }\n  "])))}),C=u.c.span(v||(v=Object(p.a)(["\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  display: inline-block;\n  background: ",";\n"])),function(n){return n.color});function D(n){var e=n.data,t=n.index,a=n.listIndex,r=Object(o.useRef)(),i=Object(o.useContext)(j).move,s=Object(w.a)({item:{type:"CARD",index:t,listIndex:a},collect:function(n){return{isDragging:n.isDragging()}}}),l=Object(x.a)(s,2),d=l[0].isDragging,p=l[1],u=Object(k.a)({accept:"CARD",hover:function(n,e){var o=n.listIndex,c=a,s=n.index,l=t;if(s!==l||o!==c){var d=r.current.getBoundingClientRect(),p=(d.bottom-d.top)/2,u=e.getClientOffset().y-d.top;s<l&&u<p||s>l&&u>p||(i(o,c,s,l),n.index=l,n.listIndex=c)}}});return p((0,Object(x.a)(u,2)[1])(r)),c.a.createElement(F,{ref:r,isDragging:d},c.a.createElement("header",null,e.labels.map(function(n){return c.a.createElement(C,{key:n,color:n})})),c.a.createElement("p",null,e.content),e.user&&c.a.createElement("img",{src:e.user,alt:""}))}var z,R=u.c.div(y||(y=Object(p.a)(["\n  padding: 0 15px;\n  height: 100%;\n  flex: 0 0 320px;\n  opacity: ",";\n\n  & + div {\n    border-left: 1px solid rgba(0, 0, 0, 0.05);\n  }\n\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 42px;\n\n    h2 {\n      font-weight: 500;\n      font-size: 16px;\n      padding: 0 10px;\n    }\n\n    button {\n      width: 42px;\n      height: 42px;\n      border-radius: 18px;\n      background: #3b5bfd;\n      border: 0;\n      cursor: pointer;\n    }\n  }\n\n  ul {\n    margin-top: 30px;\n  }\n"])),function(n){return n.done?.6:1});function I(n){var e=n.data,t=n.index;return c.a.createElement(R,{done:e.done},c.a.createElement("header",null,c.a.createElement("h2",null,e.title),e.creatable&&c.a.createElement("button",{type:"button"},c.a.createElement(O.a,{size:24,color:"#FFF"}))),c.a.createElement("ul",null,e.cards.map(function(n,e){return c.a.createElement(D,{key:n.id,listIndex:t,index:e,data:n})})))}var J=u.c.div(z||(z=Object(p.a)(["\n  display: flex;\n  padding: 30px 0;\n  height: calc(100% - 80px);\n"]))),S=[{title:"Tarefas",creatable:!0,cards:[{id:1,content:"Estudar NodeJS",labels:["#7159c1"],user:"https://github.com/clebsonsantos.png"},{id:2,content:"Fazer caf\xe9 expresso.",labels:["#7159c1"],user:"https://github.com/clebsonsantos.png"},{id:3,content:"Estudar Jest",labels:["#7159c1"],user:"https://github.com/clebsonsantos.png"},{id:4,content:"Estudar ElectronJs e testar build",labels:["#54e1f7"],user:"https://github.com/clebsonsantos.png"},{id:5,content:"Subir atualiza\xe7\xf5es para o sistema",labels:["#54e1f7"],user:"https://github.com/clebsonsantos.png"}]},{title:"Fazendo",creatable:!1,cards:[{id:6,content:"Comprar novas capsulas para a cafeteira",labels:[],user:"https://github.com/clebsonsantos.png"}]},{title:"Pausado",creatable:!1,cards:[{id:7,content:"Descobrir como chegar \xe0 lua antes de Elon",labels:["#7159c1"],user:"https://github.com/clebsonsantos.png"},{id:8,content:"Testes e deploy ReactJS",labels:["#54e1f7"],user:"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png"},{id:9,content:"Aprender a cultivar caf\xe9 dentro de casa",labels:[]}]},{title:"Conclu\xeddo",creatable:!1,done:!0,cards:[{id:10,content:"Dormir pelo menos 6 horas",labels:[]},{id:12,content:"Aprender Postgres",labels:["#54e1f7"]},{id:13,content:"Subir deploy aws",labels:["#7159c1"]}]}];function A(){var n=Object(o.useState)(S),e=Object(x.a)(n,2),t=e[0],a=e[1];return c.a.createElement(j.Provider,{value:{lists:t,move:function(n,e,r,o){a(Object(h.a)(t,function(t){var a=t[n].cards[r];t[n].cards.splice(r,1),t[e].cards.splice(o,0,a)}))}}},c.a.createElement(J,null,t.map(function(n,e){return c.a.createElement(I,{key:n.title,index:e,data:n})})))}var P=function(){return c.a.createElement(l.a,{backend:d.a},c.a.createElement(m,null),c.a.createElement(A,null),c.a.createElement(b,null))};s.a.render(c.a.createElement(P,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.580e9467.chunk.js.map