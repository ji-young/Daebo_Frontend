(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],{147:function(e,t,a){e.exports=a.p+"static/media/\ub0c9\uc7a5\uace0\uc2a4\ubab0.28a0058c.png"},148:function(e,t,a){e.exports=a.p+"static/media/\ub0c9\uc7a5\uace0\uc2a4\ubab0.28a0058c.png"},163:function(e,t,a){e.exports=a(284)},283:function(e,t,a){},284:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),c=a(22),i=a(47),s=a(7),u=a(340),m=a(324),p=a(337),d=a(322),g=a(347),f=a(286),h=a(348),E=a(56),b=a.n(E),j=a(320),v=a(143),y=a.n(v),O=a(13);function x(e){return{type:"ADD_JARYO",name:e}}function S(e){return{type:"DEL_JARYO",name:e}}function C(e){return{type:"SET_USERINFO",userinfo:e}}function N(e){return{type:"SET_RECIP",data:e}}var k=Object(j.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},table:{padding:"checkbox"},iconButton:{margin:3},TableContainer:{margin:1}}}));var I=Object(O.b)((function(e){return{jaryo:e.jaryo}}),(function(e){return{AddJaryo:function(t){e(x(t))},DelJaryo:function(t){e(S(t))}}}))((function(e){var t=k(),a=Object(n.useState)(""),l=Object(s.a)(a,2),o=l[0],c=l[1];return console.log(e),r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(m.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:10,sm:10,md:10},r.a.createElement(g.a,{value:o,onChange:function(e){e.preventDefault(),c(e.target.value)},fullWidth:!0,className:t.input,placeholder:"  \ub0c9\uc7a5\uace0 \uc7ac\ub8cc\ub97c \ucd94\uac00\ud558\uc138\uc694."})),r.a.createElement(m.a,{item:!0,xs:2,sm:2,md:2},r.a.createElement(f.a,{type:"submit",className:t.iconButton,"aria-label":"search"},r.a.createElement(y.a,{onClick:function(t){t.preventDefault(),""!==o&&(e.AddJaryo(o),c(""))}}))))))})),w=Object(j.a)((function(e){return{root:{paddingTop:70},root2:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},input:{marginLeft:e.spacing(1),flex:1,alignContent:"center"},img:{width:"60%",height:"60%"},img2:{width:"50%",height:"30%"}}}));var T=Object(i.e)(Object(O.b)((function(e){return{test:e.test,jaryo:e.jaryo}}),(function(e){return{AddJaryo:function(t){e(x(t))},DelJaryo:function(t){e(S(t))}}}))((function(e){var t=w(),a=Object(n.useState)(""),l=Object(s.a)(a,2);return l[0],l[1],r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(u.a,{padding:1},r.a.createElement(m.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement(I,null))),r.a.createElement(d.a,null,r.a.createElement(m.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:10,sm:10,md:10},r.a.createElement(g.a,{value:e.value,onChange:e.onChange,fullWidth:!0,className:t.input,placeholder:"\ud0a4\uc6cc\ub4dc\ub97c #\uc73c\ub85c \uad6c\ubd84\ud574 \uc785\ub825\ud558\uc138\uc694.",inputProps:{"aria-label":"search google maps"}})),r.a.createElement(m.a,{item:!0,xs:2,sm:2,md:2},r.a.createElement(f.a,{className:t.iconButton,"aria-label":"search"},r.a.createElement(b.a,{onClick:e.onClick}))))),r.a.createElement(u.a,{className:t.root2},e.jaryo.map((function(t){return r.a.createElement(h.a,{spacing:2,label:t.name,onDelete:function(){var a;a=t.name,e.DelJaryo(a)},color:"default"})})))))})));var _=a(20),F=a.n(_);function A(e,t){return F.a.post("http://localhost:8000/recipe/algo/",{headers:{"Content-type":"application/json"},tag:e,ingredients:t}).then((function(e){return e.data}))}var D=a(11),J=a(103),R=a.n(J),W=a(10),B=a(17),z=a(145),U=a(5),L=a(83),M=a(333),P=a(334),q=a(335),H=a(327),Y=a(344),Z=a(331),$=a(329),G=a(330),V=a(328),K=a(149),Q=a(343),X=a(325),ee=a(326),te=a(150),ae=Object(j.a)((function(e){return{text:{fontWeight:"bold",fontSize:20,color:"#4CAF50"}}})),ne=Object(U.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(Q.a),re=Object(U.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(X.a),le=Object(U.a)((function(e){return{root:{padding:e.spacing(2)}}}))(ee.a);function oe(e){for(var t=ae(),a=[],n=function(t){a.push([]),e.data[t].cook_method.split(".").forEach((function(e){0==e.length&&" "==e&&null==e&&"."==e||a[t].push(r.a.createElement("p",null,e))}))},l=0;l<2;l++)n(l);var o=r.a.useState("panel1"),c=Object(s.a)(o,2),i=c[0],u=c[1],m=function(e){return function(t,a){u(!!a&&e)}};return r.a.createElement("div",null,r.a.createElement(ne,{square:!0,expanded:"panel1"===i,onChange:m("panel1")},r.a.createElement(re,{"aria-controls":"panel1d-content",id:"panel1d-header"},r.a.createElement("img",{src:e.data[0].img,alt:e.data[0].name,height:"50",width:"50"})," \xa0\xa0",r.a.createElement(te.a,null,e.data[0].name)),r.a.createElement(le,null,r.a.createElement(te.a,null,r.a.createElement("p",{className:t.text},"\uc774\ubbf8\uc9c0"),r.a.createElement("img",{src:e.data[0].img,alt:e.data[0].name,height:"400",width:"500"}),r.a.createElement("p",{className:t.text},"\ub808\uc2dc\ud53c \uc774\ub984"),e.data[0].name,r.a.createElement("p",{className:t.text},"\ub808\uc2dc\ud53c \uc7ac\ub8cc"),e.data[0].ingredients,r.a.createElement("p",{className:t.text},"\ub9cc\ub4dc\ub294\ub370 \uac78\ub9ac\ub294 \uc2dc\uac04"),e.data[0].time_req,r.a.createElement("p",{className:t.text},"\ub9cc\ub4dc\ub294 \ubc29\ubc95"),"\x1f",0==a[0].length&&r.a.createElement("p",null,"\ub9cc\ub4dc\ub294 \ubc29\ubc95\uc774 \uc5c6\uc5b4\uc694 ^.\u3160"),0!=a[0].length&&a[0]))),r.a.createElement(ne,{square:!0,expanded:"panel2"===i,onChange:m("panel2")},r.a.createElement(re,{"aria-controls":"panel2d-content",id:"panel2d-header"},r.a.createElement("img",{src:e.data[1].img,alt:e.data[1].name,height:"50",width:"50"})," \xa0\xa0",r.a.createElement(te.a,null,e.data[1].name)),r.a.createElement(le,null,r.a.createElement(te.a,null,r.a.createElement("p",{className:t.text},"\uc774\ubbf8\uc9c0"),r.a.createElement("img",{src:e.data[1].img,alt:e.data[1].name,height:"400",width:"500"}),r.a.createElement("p",{className:t.text},"\ub808\uc2dc\ud53c \uc774\ub984"),e.data[1].name,r.a.createElement("p",{className:t.text},"\ub808\uc2dc\ud53c \uc7ac\ub8cc"),e.data[1].ingredients,r.a.createElement("p",{className:t.text},"\ub9cc\ub4dc\ub294\ub370 \uac78\ub9ac\ub294 \uc2dc\uac04"),e.data[1].time_req,r.a.createElement("p",{className:t.text},"\ub9cc\ub4dc\ub294 \ubc29\ubc95"),"\x1f",0==a[1].length&&r.a.createElement("p",null,"\ub9cc\ub4dc\ub294 \ubc29\ubc95\uc774 \uc5c6\uc5b4\uc694 ^.\u3160"),0!=a[1].length&&a[1]))))}var ce=a(345),ie=a(99),se=a.n(ie),ue=Object(j.a)((function(e){return{paper:{position:"absolute",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(3,3,3,3)},root:{display:"flex",alignItems:"center","& > *":{margin:e.spacing(4,4,4,4)}},text:{fontWeight:"bold",fontSize:20,color:"#4CAF50"},texth1:{fontWeight:"bold",color:"#4CAF50",fontSize:30},icon:{color:"rgba(255, 255, 255, 0.54)"}}}));function me(e){var t=ue(),a=r.a.useState(!1),n=Object(s.a)(a,2),l=n[0],o=n[1],c=r.a.useState("paper"),i=Object(s.a)(c,2),m=i[0],p=i[1],d=r.a.useState(2),g=Object(s.a)(d,2),h=g[0],E=g[1],b=r.a.useState(-1),j=Object(s.a)(b,2),v=j[0],y=j[1],O=Object(K.a)(H.a)({width:"100%",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0}),x=[];e.cook_method.split(".").forEach((function(e){0==e.length&&" "==e&&null==e&&"."==e||x.push(r.a.createElement("p",null,e))}));var S=function(){o(!1)};var C,N=r.a.useRef(null);return r.a.useEffect((function(){if(l){var e=N.current;null!==e&&e.focus()}}),[l]),r.a.createElement("div",null,r.a.createElement(f.a,{onClick:(C="body",function(){o(!0),p(C)}),className:t.icon},r.a.createElement(se.a,null)),r.a.createElement(Y.a,{open:l,onClose:S,scroll:m,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},r.a.createElement(V.a,{id:"scroll-dialog-title"},r.a.createElement("h2",{className:t.texth1},"\ud83e\udd57\ub808\uc2dc\ud53c \uc0c1\uc138 \ud398\uc774\uc9c0")),r.a.createElement($.a,{dividers:"paper"===m},r.a.createElement(G.a,{id:"scroll-dialog-description",ref:N,tabIndex:-1},Object(D.a)(new Array(1)).map((function(){return"                                                 \n                \ud574\uc2dc\ud0dc\uadf8\ub85c \uac80\uc0c9\ub41c \ucd94\ucc9c \ub808\uc2dc\ud53c \uc785\ub2c8\ub2e4. \ud655\uc778\ud574\ubcf4\uc138\uc694 !               \n"})).join("\n")),r.a.createElement("p",{className:t.text},"\uc774\ubbf8\uc9c0"),r.a.createElement("img",{src:e.img,alt:e.name,height:"400",width:"500"}),r.a.createElement("p",{className:t.text},"\ub808\uc2dc\ud53c \uc774\ub984"),e.name,r.a.createElement("p",{className:t.text},"\ub808\uc2dc\ud53c \uc7ac\ub8cc"),e.ingredients,r.a.createElement("p",{className:t.text},"\ub9cc\ub4dc\ub294\ub370 \uac78\ub9ac\ub294 \uc2dc\uac04"),e.time_req,r.a.createElement("p",{className:t.text},"\ub9cc\ub4dc\ub294 \ubc29\ubc95"),"\x1f",0==x.length&&r.a.createElement("p",null,"\ub9cc\ub4dc\ub294 \ubc29\ubc95\uc774 \uc5c6\uc5b4\uc694 ^.\u3160"),0!=x.length&&x,r.a.createElement("p",{className:t.text},"\ud3c9\uc810\uc744 \ub9e4\uaca8\uc8fc\uc138\uc694."),r.a.createElement(ce.a,{name:"hover-feedback",value:h,precision:.5,onChange:function(e,t){E(t)},onChangeActive:function(e,t){y(t)}}),null!==h&&r.a.createElement(u.a,{ml:2},{.5:"0.5\uc810",1:"1\uc810",1.5:"1.5\uc810",2:"2\uc810",2.5:"2.5\uc810",3:"3\uc810",3.5:"3.5\uc810",4:"4\uc810",4.5:"4.5\uc810",5:"5\uc810"}[-1!==v?v:h]),r.a.createElement("br",null),r.a.createElement(O,{onClick:function(t){var a,n;t.preventDefault(),console.log(e.id),console.log(h),(a=e.id,n=h,F.a.post("http://localhost:8000/recipe/regScore/",{headers:{"Content-type":"application/json"},recipe:a,score:n}).then((function(e){return e.data}))).then((function(e){console.log(e)})),o(!1)},variant:"contained",color:"secondary"},"\ub4f1\ub85d"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",{className:t.texth1},"\ud83e\udd58 \ud68c\uc6d0\ub2d8\uacfc \uc720\uc0ac\ud55c \uc0ac\ub78c\ub4e4\uc774 \uc88b\uc544\ud558\ub294 \ub808\uc2dc\ud53c "),r.a.createElement("br",null),r.a.createElement("br",null),"nodata"!=e.collaborative&&r.a.createElement(oe,{data:e.collaborative})),r.a.createElement(Z.a,null,r.a.createElement(H.a,{onClick:S,color:"primary"},"\ub3cc\uc544\uac00\uae30"))))}var pe=a(342),de=a(332),ge=a(82);function fe(e,t){return Math.floor(Math.random()*(t-e+1))+e}var he=function(){return{labels:["time","ingredient","score"],datasets:[{data:[fe(0,100),fe(100,150),fe(150,250)],backgroundColor:["#CCC","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]}},Ee=(a(140)({displayName:"DynamicDoughnutExample",getInitialState:function(){return console.log("hi"),he()},componentWillMount:function(){var e=this;setInterval((function(){e.setState(he())}),5e3)},render:function(){return r.a.createElement("div",null,r.a.createElement(ge.a,{data:this.state}))}}),{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]});a(140)({displayName:"RadarExample",render:function(){return r.a.createElement("div",null,r.a.createElement(ge.b,{data:Ee}))}});function be(e){var t=r.a.useState(!1),a=Object(s.a)(t,2),l=a[0],o=(a[1],r.a.useState("paper")),c=Object(s.a)(o,2),i=(c[0],c[1],Object(j.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginTop:"10px"},text:{fontWeight:"bold",fontSize:20,color:"#FF0033"},text2:{fontWeight:"bold",fontSize:20,color:"#000099"},text3:{fontWeight:"bold",fontSize:20,color:"#FFCC00"}}}))),u=r.a.useRef(null);r.a.useEffect((function(){if(l){var e=u.current;null!==e&&e.focus()}}),[l]),console.log("recipecomparison");var m=[];console.log(e.data.recipes.recipes[1]);for(var p=0;p<e.data.recipes.recipes[1].length;p++)e.data.recipes.recipes[1][p].id!=e.id[1]&&e.data.recipes.recipes[1][p].id!=e.id2[2]||m.push(e.data.recipes.recipes[1][p]);console.log("temp./.."),console.log(m),console.log(e.id[1]),console.log(e.info[1]),console.log(e.id2[2]),console.log(e.info2[2]);var d=[],g=[];m[0].cook_method.split(".").forEach((function(e){0==e.length&&" "==e&&null==e&&"."==e||d.push(r.a.createElement("p",null,e))})),m[1].cook_method.split(".").forEach((function(e){0==e.length&&" "==e&&null==e&&"."==e||g.push(r.a.createElement("p",null,e))}));var f=i();return r.a.createElement(n.Fragment,null,r.a.createElement("p",{className:f.text},r.a.createElement("h3",null,"\ud83e\udd47 \ub808\uc2dc\ud53c 1")),r.a.createElement("img",{src:m[0].img,alt:m[0].name,height:"400",width:"500"}),r.a.createElement("p",{className:f.text2},r.a.createElement("h3",null,"\ud83e\udd48 \ub808\uc2dc\ud53c 2")),r.a.createElement("img",{src:m[1].img,alt:m[1].name,height:"400",width:"500"}),r.a.createElement("p",{className:f.text},r.a.createElement("h3",null,"\ud83e\udd47 \ub808\uc2dc\ud53c 1 \uc774\ub984 ")),m[0].name," ",r.a.createElement("br",null),r.a.createElement("p",{className:f.text2},r.a.createElement("h3",null,"\ud83e\udd48 \ub808\uc2dc\ud53c 2 \uc774\ub984 ")),m[1].name,"  ",r.a.createElement("br",null),r.a.createElement("p",{className:f.text},r.a.createElement("h3",null,"\ud83e\udd47 \ub808\uc2dc\ud53c 1 \uc7ac\ub8cc")),m[0].ingredients," ",r.a.createElement("br",null),r.a.createElement("p",{className:f.text2},r.a.createElement("h3",null,"\ud83e\udd48 \ub808\uc2dc\ud53c 2 \uc7ac\ub8cc ")),m[1].ingredients," ",r.a.createElement("br",null),r.a.createElement("p",{className:f.text},r.a.createElement("h3",null,"\ud83e\udd47 \ub808\uc2dc\ud53c 1 \ub9cc\ub4dc\ub294\ub370 \uac78\ub9ac\ub294 \uc2dc\uac04")),m[0].time_req," ",r.a.createElement("br",null),r.a.createElement("p",{className:f.text2},r.a.createElement("h3",null,"\ud83e\udd48 \ub808\uc2dc\ud53c 2 \ub9cc\ub4dc\ub294\ub370 \uac78\ub9ac\ub294 \uc2dc\uac04")),m[1].time_req," ",r.a.createElement("br",null),r.a.createElement("p",{className:f.text},r.a.createElement("h3",null,"\ud83e\udd47 \ub808\uc2dc\ud53c1 \ub9cc\ub4dc\ub294 \ubc29\ubc95")),"\x1f",d," ",r.a.createElement("br",null),r.a.createElement("p",{className:f.text2},r.a.createElement("h3",null,"\ud83e\udd48 \ub808\uc2dc\ud53c2 \ub9cc\ub4dc\ub294 \ubc29\ubc95")),"\x1f",g," ",r.a.createElement("br",null))}var je=Object(j.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginTop:"10px"},gridList:{},checkBox:{zIndex:9999},img:{width:"100%",height:"100%"},formControl:{margin:e.spacing(3)},text:{fontWeight:"bold",fontSize:20,color:"#4CAF50"},texth1:{fontWeight:"bold",color:"#4CAF50",fontSize:30}}})),ve=Object(U.a)({root:{color:L.a[400],"&$checked":{color:L.a[600]}},checked:{}})((function(e){return r.a.createElement(pe.a,Object.assign({color:"default"},e))})),ye=Object(K.a)(H.a)({width:"485px",height:"50px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",alignContent:"center",margin:"0 auto",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0});var Oe=Object(O.b)((function(e){return{recipes:e.recipes}}),(function(e){return{setRecipComparison:function(t){e(function(e){return{type:"SET_RECIP_COMPARISON",data:e}}(t))}}}))((function(e){var t=je(),a=r.a.useState([{"-1":!1}]),l=Object(s.a)(a,2),o=l[0],c=l[1],i={},u={},m={},p=[{0:0}],d=r.a.useState(p),g=Object(s.a)(d,2),h=g[0],E=g[1],b=[{0:{}}],j=r.a.useState(b),v=Object(s.a)(j,2),y=v[0],O=v[1],x=r.a.useState(p),S=Object(s.a)(x,2),C=S[0],N=S[1],k=r.a.useState(b),I=Object(s.a)(k,2),w=I[0],T=I[1];Object(n.useEffect)((function(){for(var t=0;t<e.recipes.recipes[1].length;t++)i[t]=!1;c(i);for(var a=0;a<2;a++)u[a]=0;E(u);for(var n=0;n<2;n++)m[n]={};O(m),N(u),T(m)}),[]);var _,A=function(e){return function(){var t=Object(z.a)(R.a.mark((function t(a){var n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!1!==Boolean(a.target.checked),c(Object(B.a)({},o,Object(W.a)({},e,n)));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},J=e.recipes.recipes[1],U=e.recipes.recipes[0],L=r.a.useState(!0),K=Object(s.a)(L,2),Q=(K[0],K[1],r.a.useState(!1)),X=Object(s.a)(Q,2),ee=X[0],te=X[1],ae=r.a.useState("paper"),ne=Object(s.a)(ae,2),re=ne[0],le=ne[1],oe=[],ce=function(){te(!1)},ie=r.a.useRef(null);return r.a.useEffect((function(){if(ee){var e=ie.current;null!==e&&e.focus()}}),[ee]),r.a.createElement("div",{className:t.root},r.a.createElement(ye,{onClick:(_="body",function(){for(var t,a,n=Object.keys(o).length,r=0,l=[],c=0;c<n;c++)console.log(o[c]),!0===o[c]&&(r+=1,console.log(e.recipes.recipes[1][0]),l.push(e.recipes.recipes[1][c].id));if(console.log("select_id_list"),console.log(l),2!=r)alert("checkbox 2\uac1c \ud45c\uc2dc\ud574\uc8fc\uc138\uc694.");else{var i=l[0],s=l[1];console.log(i),console.log(s),E(Object(B.a)({},h,{1:i})),N(Object(B.a)({},C,{2:s})),console.log("...stateIdValue..."),console.log(h),(t=l[0],a=l[1],F.a.post("http://localhost:8000/recipe/compare/",{headers:{"Content-type":"application/json"},id1:t,id2:a}).then((function(e){return e.data})).catch((function(e){console.log(e.respose)}))).then((function(e){var t=e[0],a=e[1];console.log(t),console.log(a),O(Object(B.a)({},y,{1:t})),T(Object(B.a)({},w,{2:a})),console.log("result"),console.log(e)})),console.log("select_img_list"),console.log(oe[0]),te(!0),le(_)}})},"recipe \ube44\uad50\ud558\ub7ec \uac00\uae30 go~ go~ (\u2714 \uccb4\ud06c\ubc15\uc2a4 2\uac1c) \ufe0e"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Y.a,{open:ee,onClose:ce,scroll:re,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},r.a.createElement(V.a,{id:"scroll-dialog-title",className:t.texth1},r.a.createElement("h3",null,"\u2b50\ufe0f \ub808\uc2dc\ud53c \ube44\uad50\ud574\ubcf4\uace0 \uacb0\uc815\ud558\uae30! go~ go~ ")),r.a.createElement($.a,{dividers:"paper"===re},r.a.createElement(G.a,{id:"scroll-dialog-description",ref:ie,tabIndex:-1},Object(D.a)(new Array(1)).map((function(){return"                                                 \n                \ub450 \ub808\uc2dc\ud53c\ub97c \ube44\uad50\ud569\ub2c8\ub2e4. \ub2e4\uc2dc \uace0\ub974\uc2dc\ub824\uba74 \u2757\ub3cc\uc544\uac00\uae30\u2757 \ud574\uc8fc\uc138\uc694.                 \n"})).join("\n")),r.a.createElement("div",null,e.setRecipComparison(h)||r.a.createElement(be,{data:e,id:h,info:y,id2:C,info2:w}))),r.a.createElement(Z.a,null,r.a.createElement(H.a,{onClick:ce,color:"primary"},"\ub3cc\uc544\uac00\uae30"))),r.a.createElement(de.a,null,r.a.createElement(M.a,{cellHeight:160,className:t.gridList,cols:3},J.map((function(e,a){return r.a.createElement(P.a,{key:e.img,cols:e.cols||1},r.a.createElement("img",{src:e.img,alt:e.title}),r.a.createElement(q.a,{title:e.title,titlePosition:"top",actionIcon:r.a.createElement(f.a,{"aria-label":"star ".concat(e.title),className:t.icon},r.a.createElement(ve,{onChange:A(a),name:"checkedG"})),actionPosition:"left",className:t.titleBar}),r.a.createElement(q.a,{title:e.name,actionIcon:r.a.createElement(me,{id:e.id,name:e.name,time_req:e.time_req,cook_method:e.cook_method,category:e.category,img:e.img,ingredients:e.ingredients,tags:e.tags,collaborative:U})}))})))))})),xe=a(336),Se=a(147),Ce=a.n(Se);var Ne=Object(i.e)(Object(O.b)((function(e){return{mode:e.mode,jaryo:e.jaryo,searchinput:e.searchinput}}),(function(e){return{SetRecip:function(t){e(N(t))},SetInput:function(t){e(function(e){return{type:"SET_SEARCHINPUT",input:e}}(t))},DelUserInfo:function(){e({type:"DEL_USERINFO"})}}}))((function(e){var t=w(),a=Object(n.useState)(""),l=Object(s.a)(a,2),o=l[0],c=l[1],i=r.a.useState(!1),d=Object(s.a)(i,2),g=d[0],f=d[1],h=r.a.useState(!1),E=Object(s.a)(h,2),b=E[0],j=E[1];return r.a.createElement(n.Fragment,null,r.a.createElement(u.a,{className:t.root,align:"center"},r.a.createElement(m.a,{container:!0,direction:"column",alignItems:"center",justify:"center"},r.a.createElement(m.a,{item:!0,xs:12,sm:6,md:6},"\ub808\uc2dc\ud53c"===e.type&&!b&&r.a.createElement("img",{className:t.img2,src:"./assets/main_logo.png"}),"\ub808\uc2dc\ud53c"===e.type&&b&&r.a.createElement("img",{className:t.img,src:Ce.a}),"\ub9db\uc9d1"===e.type&&r.a.createElement("img",{className:t.img,src:"./assets/main.jpg"}),"\uc5ec\ud589\uc9c0"===e.type&&r.a.createElement("img",{className:t.img,src:"./assets/\uc5ec\ud589.png"}))),r.a.createElement(m.a,{item:!0,xs:10,sm:6,md:4,lg:4},"\ub808\uc2dc\ud53c"===e.type&&r.a.createElement(T,{onChange:function(e){e.preventDefault(),c(e.target.value)},onClick:function(t){t.preventDefault(),""!==o&&(e.SetInput(o),c(""),j(!0),function t(a,n){return f(!1),console.log("\uc528\ubc1c\ub108\ub0d0"),new Promise((function(r){var l=A(a,n);l.then((function(t){e.SetRecip(t)})).then((function(){f(!0)})).catch((function(r){console.log(r.response),401==r.response.status?(alert("\ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694"),localStorage.removeItem("userInfo"),e.DelUserInfo(),e.history.push("/Login")):404==r.response.status?(alert("\ud574\ub2f9 \uc7ac\ub8cc\uc758 \uc870\ud569\uc744 \ucc3e\uc744\uc218 \uc5c6\uc5b4\uc694.\ud0a4\uc6cc\ub4dc\uc640 \uc7ac\ub8cc\ub97c \ubcc0\uacbd\ud558\uac70\ub098 \uc624\ud0c0\ub97c \ud655\uc778\ud558\uc138\uc694"),j(!1)):t(a,n)})),r(l)}))}(e.searchinput.input,e.jaryo))},value:o})),r.a.createElement("br",null)),b&&(g?r.a.createElement(Oe,null):r.a.createElement(u.a,{align:"center",margin:10},r.a.createElement(xe.a,null),r.a.createElement(p.a,{component:"legend"},"\uc7ac\ub8cc\uac00 \ub108\ubb34 \uc801\uc73c\uba74 \ub85c\ub529 \uc2dc\uac04\uc774 \uc18c\uc694\ub420\uc218 \uc788\uc5b4\uc694..!"))))})));var ke=Object(i.e)(Object(O.b)((function(e){return{mode:e.mode}}),(function(e){return{SetMode:function(t){e({type:"SET_TYPE",mode:t})}}}))((function(e){return console.log(e.mode),r.a.createElement("div",{style:{backgroundColor:"#599216"}},r.a.createElement(Ne,{type:e.mode.mode,onChange:function(t){e.SetMode("\ub808\uc2dc\ud53c")}}))}))),Ie=a(32),we=a(18),Te=a(43),_e=a(44),Fe=a(338),Ae=a(339),De=Object(j.a)((function(e){return{root:{paddingTop:90},TextField:{fullWidth:!0,marginTop:20},Button:{marginTop:20}}}));var Je=Object(i.e)(Object(O.b)((function(e){return{userinfo:e.userinfo}}),(function(e){return{SetUserInfo:function(t){e(C(t))}}}))((function(e){var t=De(),a=Object(n.useState)(""),l=Object(s.a)(a,2),o=l[0],c=l[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],p=u[1],d=Object(n.useState)(""),g=Object(s.a)(d,2),f=g[0],h=g[1],E=Object(n.useState)(""),b=Object(s.a)(E,2),j=b[0],v=b[1],y=Object(n.useState)(""),O=Object(s.a)(y,2),x=O[0],S=O[1],C=Object(n.useCallback)((function(e){c(e.target.value)}),[]),N=Object(n.useCallback)((function(e){p(e.target.value)}),[]),k=Object(n.useCallback)((function(e){h(e.target.value)}),[]),I=Object(n.useCallback)((function(e){v(e.target.value)}),[]),w=Object(n.useCallback)((function(e){S(e.target.value)}),[]),T=function(){return o.replace(/^[A-Za-z0-9+]*$/g,"")?!(o.length>10):o.length>10},_=function(){return!!m.replace(/^[A-Za-z0-9]{6,12}$/,"")},A=function(){return m===f},D=function(){return!!x.replace(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,"")};function J(){(function(e,t,a,n){return F.a.post("http://localhost:8000/rest-auth/registration/",{headers:{"Content-type":"application/json"},username:t,email:a,password1:n,password2:n}).then((function(e){return e}))})(0,j,x,m).then((function(t){console.log(t.statusText),"Created"==t.statusText?(alert("\uac00\uc785 \uc131\uacf5"),e.history.push("/Login")):alert("\uac00\uc785\uc2e4\ud328")}))}function R(){(function(e,t,a){return F.a.post("http://localhost:8000/rest-auth/login/",{headers:{"Content-type":"application/json"},username:e,email:t,password:a}).then((function(e){return e.data})).then((function(e){return{token:e.token,user:e.user}}))})(o,x,m).then((function(t){localStorage.setItem("userInfo",JSON.stringify({name:t.user,token:t.token,auth:!0})),e.SetUserInfo({token:t.token,name:t.user,auth:!0}),e.history.push("/Main")}))}return r.a.createElement(Fe.a,{maxWidth:"xs",align:"center"},r.a.createElement("form",{className:t.root,onSubmit:function(t){if(t.preventDefault(),"Join"===e.type){if(!0===T()||j.length>10||!0===_()||!1===A()||!0===D()||0===o.length||0===j.length||0===x.length||0===m.length||0===f.length)return alert("\ud68c\uc6d0\uac00\uc785 \uc591\uc2dd\uc5d0 \ub9de\ucdb0\uc11c \uc791\uc131\ud574\uc8fc\uc138\uc694.");J()}else R()},noValidate:!0,autoComplete:"off"},r.a.createElement("div",{className:"logo-area"},"login"===e.type?r.a.createElement("h1",{className:"logo-title"},"\ub85c\uadf8\uc778"):r.a.createElement("h1",{className:"logo-title"},"\ud68c\uc6d0\uac00\uc785"),r.a.createElement(Ae.a,{fullWidth:!0,className:t.TextField,required:!0,error:!0===T(),helperText:!0===T()?"\uc544\uc774\ub514\ub294 10\uc790\ub9ac \ub0b4\uc5d0\uc11c \uc601\ubb38\uc790, \uc22b\uc790 \uc870\ud569\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.":"\uc544\uc774\ub514\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694.",onChange:C,id:"name",label:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}),"login"===e.type&&r.a.createElement(Ae.a,{fullWidth:!0,className:t.TextField,required:!0,onChange:w,type:"email",error:!0===D(),helperText:!0===D()?"\uc774\uba54\uc77c \ud615\uc2dd\uc5d0 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.":"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",id:"email",label:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),"Join"===e.type&&r.a.createElement(Ae.a,{fullWidth:!0,className:t.TextField,required:!0,onChange:I,error:j.length>10,helperText:j.length>10?"\uc774\ub984\uc740 10\uae00\uc790 \uc774\ub0b4\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694.":"\uc774\ub984\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694.",id:"name",label:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),"Join"===e.type&&r.a.createElement(Ae.a,{fullWidth:!0,className:t.TextField,required:!0,onChange:w,type:"email",error:!0===D(),helperText:!0===D()?"\uc774\uba54\uc77c \ud615\uc2dd\uc5d0 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.":"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",id:"email",label:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),r.a.createElement(Ae.a,{fullWidth:!0,className:t.TextField,type:"password",onChange:N,error:!1!==_(),helperText:!1===_()?"\ube44\ubc00\ubc88\ud638 \uc785\ub825\ud574\uc8fc\uc138\uc694.":"\uc22b\uc790\uc640 \ubb38\uc790 \ud3ec\ud568 \ud615\ud0dc\uc758 6~12\uc790\ub9ac \uc785\ub2c8\ub2e4.",required:!0,id:"password",label:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}),"Join"===e.type&&r.a.createElement(Ae.a,{fullWidth:!0,onChange:k,id:"passwordConfirm",error:!0!==A(),helperText:!0===A()?"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.":"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",className:t.TextField,name:"passwordConfirm",type:"password",label:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"}),"login"===e.type?r.a.createElement(H.a,{type:"submit",fullWidth:!0,className:t.Button,size:"large",variant:"contained",color:"primary"},"\ub85c\uadf8\uc778"):r.a.createElement(H.a,{fullWidth:!0,type:"submit",className:t.Button,size:"large",variant:"contained",color:"primary"},"\ud68c\uc6d0\uac00\uc785"))))}))),Re=function(e){Object(_e.a)(a,e);var t=Object(Te.a)(a);function a(){return Object(Ie.a)(this,a),t.apply(this,arguments)}return Object(we.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Je,{type:"login"}))}}]),a}(r.a.Component),We=function(e){Object(_e.a)(a,e);var t=Object(Te.a)(a);function a(){return Object(Ie.a)(this,a),t.apply(this,arguments)}return Object(we.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Je,{type:"Join"}))}}]),a}(r.a.Component);var Be=Object(i.e)(Object(O.b)((function(e){return{userinfo:e.userinfo}}),(function(e){return{DelUserInfo:function(){e({type:"DEL_USERINFO"})}}}))((function(e){return r.a.createElement(u.a,null,r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,xs:8,md:10},r.a.createElement(H.a,{component:c.b,to:"/Main"},"9 To 5 ")),r.a.createElement(m.a,{item:!0,xs:4,md:2},e.userinfo.auth?r.a.createElement("div",null,r.a.createElement(m.a,{container:!0},r.a.createElement(H.a,{fullWidth:!0,size:"large",color:"secondary",onClick:function(){localStorage.removeItem("userInfo"),e.DelUserInfo(),e.history.push("/Login")}},"LOGOUT "))):r.a.createElement("div",null,r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,xs:6,md:6},r.a.createElement(H.a,{fullWidth:!0,size:"large",color:"primary",component:c.b,to:"/Login"},"Login ")),r.a.createElement(m.a,{item:!0,xs:6,md:6},r.a.createElement(H.a,{fullWidth:!0,size:"large",color:"secondary",component:c.b,to:"/Join"},"Join ")))))))})));function ze(){return r.a.createElement("div",null,r.a.createElement(Be,null))}var Ue=Object(j.a)((function(e){return{root:{flexGrow:1,paddingTop:130},paper:{height:120}}}));function Le(){var e=Ue();return r.a.createElement(Fe.a,{className:e.root,align:"center"},r.a.createElement(te.a,null,"\uc548\ub155\ud558\uc138\uc694 \uc800\ud76c\ub294 \ube45\ub370\ud76c\ud130\uc785\ub2c8\ub2e4."),r.a.createElement(m.a,{container:!0,spacing:3},r.a.createElement(m.a,{item:!0,xs:3},r.a.createElement(d.a,{className:e.paper},"1",r.a.createElement(te.a,null,"\ub9db\uc9d1 \ucd94\ucc9c\uc744 \ubc1b\uc544\ubcf4\uc138\uc694."))),r.a.createElement(m.a,{item:!0,xs:3},r.a.createElement(d.a,{className:e.paper},"2",r.a.createElement(te.a,null,"\uc5ec\ud589\uc758 \uc74c\uc2dd \uacc4\ud68d\uc744 \uc9dc\ubcf4\uc138\uc694."))),r.a.createElement(m.a,{item:!0,xs:3},r.a.createElement(d.a,{className:e.paper},"3",r.a.createElement(te.a,null,"\uc9c0\uae08 \ub9cc\ub4e4\uc218 \uc788\ub294 \ub808\uc2dc\ud53c\ub97c \ucc3e\uc544\ubcf4\uc138\uc694."))),r.a.createElement(m.a,{item:!0,xs:3},r.a.createElement(d.a,{className:e.paper},"4",r.a.createElement(te.a,null,"\ubc29\ubb38\ud55c \ub9db\uc9d1\uc744 \uac80\uc99d\ud574\ubcf4\uc138\uc694")))))}var Me=function(e){Object(_e.a)(a,e);var t=Object(Te.a)(a);function a(){return Object(Ie.a)(this,a),t.apply(this,arguments)}return Object(we.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ze,null),r.a.createElement(Le,null))}}]),a}(r.a.Component),Pe=a(148),qe=a.n(Pe),He=Object(j.a)((function(e){return{img:{},loading:{}}}));var Ye=Object(i.e)(Object(O.b)((function(e){return{mode:e.mode,userinfo:e.userinfo,searchinput:e.searchinput,jaryo:e.jaryo}}),(function(e){return{SetRecip:function(t){e(N(t))},DelUserInfo:function(){e({type:"DEL_USERINFO"})}}}))((function(e){var t,a=He(),l=r.a.useState("\uac80\uc0c9\ud0c0\uc785"),o=Object(s.a)(l,2),c=(o[0],o[1],r.a.useState(!1)),i=Object(s.a)(c,2),p=i[0],h=i[1];function E(t,a,n){return console.log("\uc528\ubc1c\ub108\ub0d0"),new Promise((function(e){e(A(t,a))})).then((function(t){e.SetRecip(t)})).then((function(){h(!0)})).catch((function(t){console.log(t.response),401==t.response.status?(alert("\ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694"),localStorage.removeItem("userInfo"),e.DelUserInfo(),e.history.push("/Login")):404==t.response.status&&(alert("\ud574\ub2f9 \uc7ac\ub8cc\uc758 \uc870\ud569\uc744 \ucc3e\uc744\uc218 \uc5c6\uc5b4\uc694.\ud0a4\uc6cc\ub4dc\uc640 \uc7ac\ub8cc\ub97c \ubcc0\uacbd\ud574\ubcf4\uc138\uc694"),e.history.push("/Main"))}))}return Object(n.useEffect)((function(){""!==e.searchinput.input?E(e.searchinput.input,e.jaryo,0):E(JSON.parse(localStorage.getItem("searchinput")),JSON.parse(localStorage.getItem("jaryo")),0)})),console.log(e),r.a.createElement("div",null,r.a.createElement(u.a,{align:"center"},r.a.createElement(m.a,{item:!0,xs:10,sm:7,md:4,lg:4},r.a.createElement("img",{className:a.img,src:qe.a}),r.a.createElement(d.a,null,r.a.createElement(m.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:8,sm:8,md:8},r.a.createElement(g.a,{value:t,onChange:function(e){e.preventDefault(),t=e.target.value},fullWidth:!0,inputProps:{"aria-label":"search google maps"}})),r.a.createElement(m.a,{item:!0,xs:2,sm:2,md:2},r.a.createElement(f.a,{"aria-label":"search"},r.a.createElement(b.a,{margin:10,onClick:function(a){var n,r;a.preventDefault(),console.log("!!"),console.log(t),""!==t?(n=t,r=e.jaryo,h(!1),new Promise((function(e){e(A(n,r))})).then((function(t){e.SetRecip(t)})).then((function(){h(!0)})).catch((function(t){console.log(t.response),401==t.response.status?(alert("\ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694"),localStorage.removeItem("userInfo"),e.DelUserInfo(),e.history.push("/Login")):404==t.response.status&&(alert("\ud574\ub2f9 \uc7ac\ub8cc\uc758 \uc870\ud569\uc744 \ucc3e\uc744\uc218 \uc5c6\uc5b4\uc694.\ud0a4\uc6cc\ub4dc\uc640 \uc7ac\ub8cc\ub97c \ubcc0\uacbd\ud574\ubcf4\uc138\uc694"),e.history.push("/Main"))}))):E(JSON.parse(localStorage.getItem("searchinput")),JSON.parse(localStorage.getItem("jaryo")))}}))))))),p?r.a.createElement(Oe,null):r.a.createElement(u.a,{align:"center",margin:20},r.a.createElement(xe.a,{className:a.loading})))}))),Ze=function(e){Object(_e.a)(a,e);var t=Object(Te.a)(a);function a(){var e;Object(Ie.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).checkUser=function(){var t=e.props;t.setUserTemp,t.history},e}return Object(we.a)(a,[{key:"componentDidMount",value:function(){console.log("base"),this.checkUser()}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),a}(n.Component),$e=Object(i.e)(Object(O.b)((function(e){return{userinfo:e.userinfo}}),(function(e){return{setUserTemp:function(t){e(C(t))}}}))(Ze));var Ge=Object(O.b)((function(e){return{userinfo:e.userinfo}}))((function(e){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement($e,null),r.a.createElement(ze,null),r.a.createElement(i.a,{path:"/Main",render:function(){return r.a.createElement(ke,{auth:e.userinfo.auth})}}),r.a.createElement(i.a,{path:"/Login",component:Re}),r.a.createElement(i.a,{exact:!0,path:"/",component:Re}),r.a.createElement(i.a,{path:"/Join",component:We}),r.a.createElement(i.a,{path:"/About",component:Me}),r.a.createElement(i.a,{path:"/Result/:mode",component:Ye})))})),Ve=a(54),Ke={something:1},Qe={token:"",name:"",auth:!1},Xe=[],et=[],tt={mode:"\ub808\uc2dc\ud53c"},at={input:""},nt=Object(Ve.b)({searchinput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.type),t.type){case"SET_SEARCHINPUT":return localStorage.setItem("searchinput",JSON.stringify(t.input)),Object(B.a)({},e,{input:t.input});default:return e}},recipes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.type),t.type){case"SET_RECIP":return Object(B.a)({},e,{recipes:t.data});default:return e}},mode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.type),t.type){case"SET_TYPE":return Object(B.a)({},e,{mode:t.mode});default:return e}},something:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.type),t.type){case"SET_SOMETHIG":return Object(B.a)({},e,{something:t.something});default:return e}},jaryo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.type),t.type){case"SET_JARYO":return localStorage.setItem("jaryo",JSON.stringify(Object(B.a)({},e,{jaryo:t.jaryo}))),Object(B.a)({},e,{jaryo:t.jaryo});case"ADD_JARYO":return localStorage.setItem("jaryo",JSON.stringify([].concat(Object(D.a)(e),[{name:t.name}]))),[{name:t.name}].concat(Object(D.a)(e));case"DEL_JARYO":var a=Object(D.a)(e),n=a.findIndex((function(e){return e.name===t.name}));return n>-1&&a.splice(n,1),localStorage.setItem("jaryo",JSON.stringify(a)),a;default:return e}},userinfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.type),t.type){case"SET_USERINFO":return F.a.defaults.headers.common.Authorization="jwt "+t.userinfo.token,Object(B.a)({},e,{token:t.userinfo.token,name:t.userinfo.name,auth:!0});case"DEL_USERINFO":return F.a.defaults.headers.common.Authorization=void 0,Object(B.a)({},e,{token:"",name:"",auth:!1});default:return e}}}),rt=Object(Ve.c)(nt);a(283);var lt=function(){return r.a.createElement(O.a,{store:rt},r.a.createElement(Ge,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(lt,null)),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.18d012f4.chunk.js.map