(this.webpackJsonpchooseyourcocktail=this.webpackJsonpchooseyourcocktail||[]).push([[0],{110:function(e,t,c){},111:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),i=c.n(a),s=c(26),r=c.n(s),l=c(52),o=(c(96),c.p,c(14)),j=c(9),d=c(13),b=c(19),u=c(20),h=c(21),O=c(116),x=c(117),p=c.p+"static/media/cychome.5ba342f6.png";function m(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)("h1",{className:"landingHeading",children:" What will you be drinking tonight ? "}),Object(n.jsx)(x.a,{className:"pt-3 mr-5 landingImage float-left",src:p}),Object(n.jsx)("p",{className:"p-3 mt-5  landingText",children:"Welcome to chooseyourcocktail.com, a great place to decide what you are going to be drinking this evening or possibly this afternoon. to get started go ahead and click on the choose your cocktail button on the top left and search through a huge database of cocktails. once you have found a few cocktails that you like go ahead and sign up so that you can save your favorites for future use. Drink responsibly and Enjoy, Cheers! "})]})})}var f=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(m,{})})}}]),c}(i.a.Component),g=c(121),k=c(122),v=function(){var e=Object(j.b)().loginWithRedirect;return Object(n.jsx)("button",{className:"btn btn-light buttonText ",onClick:function(){return e()},children:"Log In"})},N=function(){var e=Object(j.b)().logout;return Object(n.jsx)("button",{className:"btn btn-light btn-block buttonText",onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},y=function(){var e=Object(j.b)().loginWithRedirect;return Object(n.jsx)("button",{className:"btn btn-light btn-block buttonText",onClick:function(){return e({screen_hint:"signup"})},children:"Sign Up"})},C=function(){return Object(j.b)().isAuthenticated?Object(n.jsx)("span",{className:"buttonText",children:Object(n.jsx)(N,{})}):Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"buttonText",children:Object(n.jsx)(v,{})}),Object(n.jsx)("span",{className:"buttonText",children:Object(n.jsx)(y,{})})]})},w=c(119),T=function(){return Object(j.b)().isAuthenticated?Object(n.jsx)("span",{className:"buttonText",children:Object(n.jsx)(w.a.Item,{href:"/favorites",children:"Favorite Cocktails"})}):Object(n.jsx)("div",{})},S=function(e){Object(j.b)().isAuthenticated;return Object(n.jsx)("div",{className:"",children:Object(n.jsxs)(g.a,{bg:"light",expand:"lg",children:[Object(n.jsx)(g.a.Brand,{href:"/choose",children:Object(n.jsx)("h2",{className:"navHeader float-right pt-4\r ",children:"Choose Your Cocktail"})}),Object(n.jsx)(k.a,{className:"ml-auto color-navbar "}),Object(n.jsx)(T,{}),Object(n.jsx)(C,{})]})})},D=c(10),I=c.n(D),A=c(42),E=c(17),B=c(7),F=c(86),P=c(118),L=c(22),R=c.n(L),q=c(40),H=c(123),_=c(120);function z(e){var t=e.recipe;console.log(t);for(var c=[],a=[],i=0,s=Object.keys(t);i<s.length;i++){var r=s[i];r.includes("strIngredient")&&null!=t[r]&&c.push(t[r]),r.includes("strMeasure")&&null!=t[r]&&a.push(t[r])}return Object(n.jsxs)("div",{className:"Cocktails pb-2",children:[Object(n.jsx)("table",{className:"pb-2",children:c.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e}),Object(n.jsx)("td",{children:"  "})," ",Object(n.jsxs)("td",{children:[" ",a[t]]})]})}))}),t.strInstructions]})}var G=function(){return Object(n.jsx)("div",{className:"spinner",children:Object(n.jsx)(x.a,{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})},V=c(32),W=function(e,t){switch(t.type){case"SET_DRINKS":return Object(V.a)(Object(V.a)({},e),{},{Drinks:t.payload});case"SET_FAVORITES":return Object(V.a)(Object(V.a)({},e),{},{Favorites:t.payload});case"ADD_FAVORITE":return Object(V.a)(Object(V.a)({},e),{},{Favorites:e.Favorites.concat(t.payload)});case"DELETE_FAVORITE":var c=e.Favorites,n=e.Favorites.indexOf(t.payload);return n>-1&&c.splice(n,1),Object(V.a)(Object(V.a)({},e),{},{Favorites:c});default:return e}},X={Drinks:[],Favorites:""},Z=Object(a.createContext)(X),K=function(e){var t=e.children,c=Object(a.useReducer)(W,X),i=Object(B.a)(c,2),s=i[0],r=i[1];return Object(n.jsx)(Z.Provider,{value:[s,r],children:t})},Y=c(57),Q=c(87);function J(e){var t=Object(j.b)().getAccessTokenSilently,c=Object(a.useState)(!0),i=Object(B.a)(c,2),s=i[0],r=i[1],l=Object(a.useContext)(Z),o=Object(B.a)(l,2),d=(o[0],o[1]);function b(){return(b=Object(E.a)(I.a.mark((function e(c){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return n=e.sent,e.next=6,R.a.ajax({url:"/api/favorites/"+c,method:"POST",headers:{Authorization:"Bearer ".concat(n)}});case 6:return e.next=8,d({type:"DELETE_FAVORITE",payload:c});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return s?Object(n.jsx)(Y.a,{icon:Q.a,size:"2x",color:"#AC1010",onClick:function(){(function(e){return b.apply(this,arguments)})(e.id).then((e.id,void r(!s)))}}):Object(n.jsx)(U,{})}var M=c(76);function U(e){var t=Object(j.b)().loginWithRedirect,c=Object(j.b)().isAuthenticated,i=Object(j.b)().getAccessTokenSilently,s=Object(a.useState)(!0),r=Object(B.a)(s,2),l=r[0],o=r[1],d=Object(a.useContext)(Z),b=Object(B.a)(d,2);b[0],b[1];function u(){return(u=Object(E.a)(I.a.mark((function e(t){var c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i();case 3:return c=e.sent,e.next=6,R.a.ajax({url:"/api/favorites/"+t,method:"POST",headers:{Authorization:"Bearer ".concat(c)}});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return c?l?Object(n.jsx)(Y.a,{icon:M.a,size:"2x",color:"#AC1010",onClick:function(){(function(e){return u.apply(this,arguments)})(e.id).then((e.id,void o(!l)))}}):Object(n.jsx)(J,{}):Object(n.jsx)(Y.a,{onClick:function(){return t({screen_hint:"signup"})},icon:M.a,size:"2x",color:"#AC1010"})}function $(e){var t,c,i=Object(j.b)().isAuthenticated,s=Object(q.useSpring)({to:{opacity:1},from:{opacity:0}}),r=Object(a.useContext)(Z),l=Object(B.a)(r,2),o=l[0];l[1];return i?(t=o.Favorites,c=e.id,-1!=t.indexOf(parseInt(c))?Object(n.jsx)(q.animated.div,{style:s,children:Object(n.jsx)(J,{id:e.id,isFave:!0},e.key)}):Object(n.jsx)(q.animated.div,{style:s,children:Object(n.jsx)(U,{id:e.id,isFave:!1},e.key)})):Object(n.jsxs)(q.animated.div,{style:s,children:[" ",Object(n.jsx)(U,{id:e.id,isFave:!1},e.key)]})}function ee(e){var t=Object(a.useState)(""),c=Object(B.a)(t,2),i=c[0],s=c[1],r=Object(a.useState)(!1),l=Object(B.a)(r,2),o=l[0],j=l[1],d=function(){return j(!1)},b=function(){return j(!0)},u=Object(q.useSpring)({to:{opacity:1},from:{opacity:0}});function h(){return(h=Object(E.a)(I.a.mark((function e(t){var c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.ajax({url:"/api/cocktailAPI/recipe/"+t,method:"GET"});case 3:return c=e.sent,e.next=6,s(c);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return console.log("props.drinks "+e.drinks),!0===e.loading?Object(n.jsx)("div",{children:Object(n.jsx)(G,{})}):0===e.drinks.length||null===e.drinks||"None Foun"===e.drinks?Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"No Results"})}):Object(n.jsx)(q.animated.div,{style:u,children:Object(n.jsx)(P.a,{children:Object(n.jsx)(O.a,{children:e.drinks.map((function(e){return Object(n.jsxs)(H.a,{id:e.idDrink,className:"shadow float-left col-md-3  card-spacing\r ",children:[Object(n.jsx)(H.a.Header,{className:"container-fluid",children:Object(n.jsx)($,{id:e.idDrink},e.idDrink)}),Object(n.jsx)(H.a.Img,{variant:"top",className:"mt-1",src:e.strDrinkThumb}),Object(n.jsxs)(H.a.Body,{children:[Object(n.jsx)(H.a.Title,{className:"card-Title Cocktails",children:e.strDrink}),Object(n.jsxs)(_.a,{show:o,onHide:d,children:[Object(n.jsx)(_.a.Header,{closeButton:!0,children:Object(n.jsx)(_.a.Title,{children:i.strDrink})}),Object(n.jsxs)(_.a.Body,{children:[Object(n.jsx)(z,{recipe:i}),Object(n.jsx)(F.a,{variant:"danger",onClick:d,children:"Close"})]})]},i.idDrink),Object(n.jsx)(F.a,{className:"shadow-sm text-align-center",variant:"secondary",onClick:function(){return function(e){return h.apply(this,arguments)}(e.idDrink).then(b)},children:"Click here for full recipe"})]})]},e.idDrink)}))})})})}var te=function(e){var t=e.currentPage,c=(e.drinksPerPage,e.totalDrinks),a=e.paginate,i=e.visibleRange,s=e.pageNumbers;return console.log(t),c<9||s.length<1?Object(n.jsx)("div",{}):3==s.length?Object(n.jsx)("div",{className:"container  row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)("nav",{className:"pt-0  ",children:Object(n.jsx)("ul",{className:"pagination",children:i.map((function(e){return Object(n.jsx)("li",{className:"page-item",children:Object(n.jsx)("a",{onClick:function(){return a(e)},href:"#",className:"page-link",children:e})},e)}))})})})}):1===t?Object(n.jsx)("div",{className:"container  row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)("nav",{className:"pt-0  ",children:Object(n.jsxs)("ul",{className:"pagination",children:[i.map((function(e){return Object(n.jsx)("li",{className:"page-item",children:Object(n.jsx)("a",{onClick:function(){return a(e)},href:"#",className:"page-link",children:e})},e)})),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+3)},href:"#",className:"page-link",children:"..."})}),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(s.length)},href:"#",className:"page-link",children:s.length})}),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+1)},href:"#",className:"page-link",children:"next"})},t)]})})})}):t<=2?Object(n.jsx)("div",{className:"container  row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)("nav",{className:"pt-0  ",children:Object(n.jsxs)("ul",{className:"pagination",children:[Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t-1)},href:"#",className:"page-link",children:"previous"})},t-1),i.map((function(e){return Object(n.jsx)("li",{className:"page-item",children:Object(n.jsx)("a",{onClick:function(){return a(e)},href:"#",className:"page-link",children:e})},e)})),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+3)},href:"#",className:"page-link",children:"..."})}),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(s[s.length-1])},href:"#",className:"page-link",children:s[s.length-1]})},s[s.length-1]),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+1)},href:"#",className:"page-link",children:"next"})},t)]})})})}):3===t?Object(n.jsx)("div",{className:"container  row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)("nav",{className:"pt-0  ",children:Object(n.jsxs)("ul",{className:"pagination",children:[Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t-1)},href:"#",className:"page-link",children:"previous"})},5*t),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(s[0])},href:"#",className:"page-link",children:s[0]})},4*t),i.map((function(e){return Object(n.jsx)("li",{className:"page-item",children:Object(n.jsx)("a",{onClick:function(){return a(e)},href:"#",className:"page-link",children:e})},e)})),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+3)},href:"#",className:"page-link",children:"..."})}),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(s[s.length-1])},href:"#",className:"page-link",children:s[s.length-1]})},3*t),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+1)},href:"#",className:"page-link",children:"next"})},2*t)]})})})}):t+1>=s.length?Object(n.jsx)("div",{className:"container  row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)("nav",{className:"pt-0  ",children:Object(n.jsxs)("ul",{className:"pagination",children:[Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t-1)},href:"#",className:"page-link",children:"previous"})},2*t),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t-3)},href:"#",className:"page-link",children:"..."})}),i.map((function(e){return Object(n.jsx)("li",{className:"page-item",children:Object(n.jsx)("a",{onClick:function(){return a(e)},href:"#",className:"page-link",children:e})},e)}))]})})})}):i[2]>=5?Object(n.jsx)("div",{className:"container  row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)("nav",{className:"pt-0  ",children:Object(n.jsxs)("ul",{className:"pagination",children:[Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t-1)},href:"#",className:"page-link",children:"previous"})},2*t),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(s[0])},href:"#",className:"page-link",children:s[0]})},3*t),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t-3)},href:"#",className:"page-link",children:"..."})}),i.map((function(e){return Object(n.jsx)("li",{className:"page-item",children:Object(n.jsx)("a",{onClick:function(){return a(e)},href:"#",className:"page-link",children:e})},e)})),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+3)},href:"#",className:"page-link",children:"..."})}),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(s[s.length-1])},href:"#",className:"page-link",children:s[s.length-1]})},s[s.length-1]),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+1)},href:"#",className:"page-link",children:"next"})},t)]})})})}):Object(n.jsx)("div",{className:"container  row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)("nav",{className:"pt-0  ",children:Object(n.jsxs)("ul",{className:"pagination",children:[Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t-1)},href:"#",className:"page-link",children:"previous"})},2*t),s.map((function(e){return Object(n.jsx)("li",{data:e,className:"page-item",children:Object(n.jsx)("a",{data:e,onClick:function(){return a(e)},href:"#",className:"page-link",children:e})},e)})),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+1)},href:"#",className:"page-link",children:"next"})},3*t)]})})})})};function ce(e){for(var t,c=Object(a.useContext)(Z),i=Object(B.a)(c,2),s=(i[0],i[1]),r=Object(a.useState)([]),l=Object(B.a)(r,2),o=l[0],d=l[1],b=Object(a.useState)(""),u=Object(B.a)(b,2),h=u[0],x=u[1],p=Object(a.useState)("Liquor"),m=Object(B.a)(p,2),f=m[0],g=m[1],k=Object(a.useState)(!0),v=Object(B.a)(k,2),N=v[0],y=v[1],C=Object(a.useState)(""),w=Object(B.a)(C,2),T=w[0],S=w[1],D=(Object(j.b)().getAccessTokenSilently,Object(a.useState)(!1)),L=Object(B.a)(D,2),q=L[0],H=L[1],_=Object(a.useState)(1),z=Object(B.a)(_,2),G=z[0],V=z[1],W=Object(a.useState)(9),X=Object(B.a)(W,1)[0],K=o.length,Y=G*X,Q=Y-X,J=o.slice(Q,Y),M=[],U=1;U<=Math.ceil(K/X);U++)M.push(U);for(var $=[],ce=G-1;ce<=G+1;ce++)ce>0&&ce<=M.length&&$.push(ce);function ne(e,t){return ae.apply(this,arguments)}function ae(){return(ae=Object(E.a)(I.a.mark((function e(t,c){var n,a,i;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Liquor"!==c){e.next=16;break}return e.prev=1,H(!0),e.next=5,R.a.ajax({url:"/api/cocktailAPI/"+t.toLowerCase(),method:"GET"});case 5:return n=e.sent,e.next=8,d(n);case 8:H(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:e.next=46;break;case 16:if("Ingredient"!==c){e.next=32;break}return e.prev=17,H(!0),e.next=21,R.a.ajax({url:"/api/cocktailAPI/"+t.toLowerCase(),method:"GET"});case 21:return a=e.sent,e.next=24,d(a);case 24:H(!1),e.next=30;break;case 27:e.prev=27,e.t1=e.catch(17),console.log(e.t1);case 30:e.next=46;break;case 32:if("Cocktail"!==c){e.next=46;break}return e.prev=33,H(!0),e.next=37,R.a.ajax({url:"/api/cocktailAPI/Cocktail/"+t.toLowerCase(),method:"GET"});case 37:return i=e.sent,e.next=40,d(i);case 40:H(!1),e.next=46;break;case 43:e.prev=43,e.t2=e.catch(33),console.log(e.t2);case 46:case"end":return e.stop()}}),e,null,[[1,11],[17,27],[33,43]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){fetch("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic").then((function(e){return e.json()})).then((function(e){y(!0),s({type:"SET_DRINKS",payload:e.drinks}),d(e.drinks)}),(function(e){y(!0),S(e)}))}),[]),T?Object(n.jsxs)("div",{children:["Error: ",T.message]}):N?Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{className:"pt-2",children:Object(n.jsxs)("form",{className:"pt-5 choice",children:[Object(n.jsx)("input",{type:"text",name:"liquor",className:"mr-1",value:h,onKeyPress:function(e){return function(e,t,c){console.log(e.key),"Enter"===e.key&&(e.preventDefault(),ne(t=t,c))}(e,h,f)},onChange:function(e){x(e.target.value)}}),Object(n.jsxs)("select",(t={className:"Cocktails"},Object(A.a)(t,"className","mr-1"),Object(A.a)(t,"value",f),Object(A.a)(t,"onChange",(function(e){g(e.target.value)})),Object(A.a)(t,"children",[Object(n.jsx)("option",{value:"Liquor",children:"Liquor"}),Object(n.jsx)("option",{value:"Ingredient",children:"Ingredient"}),Object(n.jsx)("option",{value:"Cocktail",children:"Cocktail"})]),t)),Object(n.jsx)(F.a,{className:"btn btn-danger",onClick:function(e){!function(e,t,c){e.preventDefault(),ne(t=t,c)}(e,h,f)},children:"Search"})]})}),Object(n.jsxs)(O.a,{children:[Object(n.jsx)("p",{className:"pt-3 pb-3 topText",children:"If you are a logged in user , click on the bookmark icon at the top left of the cocktail card to add that cocktail to your favorites"}),Object(n.jsx)(ee,{drinks:J,loading:q}),Object(n.jsx)(P.a,{children:Object(n.jsx)(te,{currentPage:G,paginate:function(e){return V(e)},drinksPerPage:X,totalDrinks:o.length,visibleRange:$,pageNumbers:M})})]})]}):Object(n.jsx)("div",{children:"Loading..."})}function ne(){Object(j.b)().getAccessTokenSilently;return Object(n.jsx)("div",{children:Object(n.jsx)(ce,{})})}var ae=c(88);function ie(){return new ae.a.webAuth({domain:"dev-4xzrdhpo.us.auth0.com",client_id:"bimEc9IgODOXPIScjou3ZpYBZQiiw3HX"}).crossOriginVerification(),Object(n.jsx)("div",{})}var se=c.p+"static/media/ingredients.30a6beaa.jpg",re=c.p+"static/media/liquor.a04514bc.jpg",le=c.p+"static/media/tools.f5dd0a6e.jpg",oe=c.p+"static/media/fun.8d2d16c8.jpg";function je(){return Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)("div",{className:"card float-left col-md-6  col-12",children:Object(n.jsxs)("a",{href:"/Basics/liquor",children:[Object(n.jsx)("img",{className:"pt-3 card-img-top  basicsImage",src:re,alt:"Card image cap"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("h1",{className:"pt-2  basicsText",children:"The Liquor"})})]})}),Object(n.jsx)("div",{className:"card float-right col-md-6  col-12",children:Object(n.jsxs)("a",{href:"/Basics/ingredients",children:[Object(n.jsx)("img",{className:"pt-3 card-img-top basicsImage",src:se,alt:"Card image cap"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("h1",{className:"pt-2  basicsText",children:"The Ingredients"})})]})}),Object(n.jsx)("div",{className:"card float-left col-md-6  col-12",children:Object(n.jsxs)("a",{href:"/Basics/tools",children:[Object(n.jsx)("img",{className:"pt-3 card-img-top  basicsImage",src:le,alt:"Card image cap"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("h1",{className:"pt-2  basicsText",children:"The Tools"})})]})}),Object(n.jsx)("div",{className:"card float-right col-md-6 ",children:Object(n.jsxs)("a",{href:"/Basics/fun",children:[Object(n.jsx)("img",{className:"pt-3 card-img-top  basicsImage ",src:oe,alt:"Card image cap"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("h1",{className:"pt-2  basicsText",children:"The Fun"})})]})})]})})}function de(){return Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)("h1",{children:"The Basics Of Liquor "}),Object(n.jsx)("p",{className:"Cocktails",children:"Liquor has a long and varied history that started even before the invent of the still in the 8th century. Before that time most liquor was of low alcohol content (usually 14% or less) and was primarily used as medicine. While most liquor is now somewhere in the neighborhood of 40% abv or 80 proof some even as high as 75% abv you would be very hard pressed to find someone that would consider liquor a true medicine. Depending on where you are from, you might be drinking it neat, On ice, chilled, hot, or mixed with 6 other ingredients.  "})]})})}var be=Object(j.c)((function(){console.log();var e=Object(j.b)().user,t=e.name,c=e.picture,a=e.email;e.sub;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"row align-items-center profile-header",children:[Object(n.jsx)("div",{className:"col-md-2 mb-3",children:Object(n.jsx)("img",{src:c,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})}),Object(n.jsxs)("div",{className:"col-md text-center text-md-left",children:[Object(n.jsx)("h2",{children:t}),Object(n.jsx)("p",{className:"lead text-muted",children:a})]})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("pre",{className:"col-12 text-light bg-dark p-4"})})]})}),{onRedirecting:function(){return Object(n.jsx)(G,{})}}),ue=c(90),he=function(e){var t=e.component,c=Object(ue.a)(e,["component"]);return Object(n.jsx)(o.a,Object(V.a)({component:Object(j.c)(t,{onRedirecting:function(){return Object(n.jsx)(G,{})}})},c))},Oe=(c(85),c(110),Object(j.c)((function(){var e=Object(a.useContext)(Z),t=Object(B.a)(e,2),c=t[0],i=(t[1],Object(j.b)().user),s=(i.sub,Object(j.b)().getAccessTokenSilently,Object(a.useState)([])),r=Object(B.a)(s,2),l=(r[0],r[1],Object(a.useState)("")),o=Object(B.a)(l,2),d=o[0],b=o[1],u=i.picture,h=[],x=Object(a.useState)(!1),p=Object(B.a)(x,2),m=p[0],f=p[1],g=function(){return f(!1)},k=function(){return f(!0)};function v(){return(v=Object(E.a)(I.a.mark((function e(t){var c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.ajax({url:"/api/cocktailAPI/recipe/"+t,method:"GET"});case 3:return c=e.sent,e.next=6,b(c);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return function(e,t){for(var c=0;c<t.length;c++)for(var n=0;n<e.length;n++)e[n].idDrink===t[c].toString()&&h.push(e[n])}(c.Drinks,c.Favorites),Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)("h1",{className:" favoriteHeader pb-3 pt-3",children:Object(n.jsxs)("u",{children:[" ",i.nickname,"'s  favorite cocktails"]})}),Object(n.jsx)("img",{className:" rounded-circle  mx-auto d-block pb-2",src:u}),Object(n.jsx)("h6",{className:"favoriteHeader",children:" to remove a cocktail from your favorites, click on the bookmark again and it will be removed"}),h.map((function(e){return Object(n.jsxs)(H.a,{id:e.idDrink,className:"shadow float-left col-md-3 card-spacing",children:[Object(n.jsx)(H.a.Header,{className:"container-fluid",children:Object(n.jsx)($,{id:e.idDrink},e.idDrink)}),Object(n.jsx)(H.a.Img,{variant:"top",className:"mt-1",src:e.strDrinkThumb}),Object(n.jsxs)(H.a.Body,{children:[Object(n.jsx)(H.a.Title,{className:"card-Title Cocktails",children:e.strDrink}),Object(n.jsxs)(_.a,{show:m,onHide:g,children:[Object(n.jsx)(_.a.Header,{closeButton:!0,children:Object(n.jsx)(_.a.Title,{children:d.strDrink})}),Object(n.jsxs)(_.a.Body,{children:[Object(n.jsx)(z,{recipe:d}),Object(n.jsx)(F.a,{variant:"danger",onClick:g,children:"Close"})]})]},d.idDrink),Object(n.jsx)(F.a,{className:"shadow-sm",variant:"secondary",onClick:function(){return function(e){return v.apply(this,arguments)}(e.idDrink).then(k)},children:"Click here for full recipe"})]})]},e.idDrink)}))]})})}),{onRedirecting:function(){return Object(n.jsx)(G,{})}}));function xe(){var e=Object(a.useContext)(Z),t=Object(B.a)(e,2),c=(t[0],t[1]),i=Object(a.useState)(!0),s=Object(B.a)(i,2),r=(s[0],s[1]),l=Object(a.useState)(""),o=Object(B.a)(l,2),d=(o[0],o[1]),b=Object(j.b)(),u=(b.user,b.isAuthenticated),h=Object(j.b)().getAccessTokenSilently;return Object(a.useEffect)((function(){var e="9973533";console.log(e),fetch("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic").then((function(e){return e.json()})).then((function(e){r(!0),c({type:"SET_DRINKS",payload:e.drinks})}),(function(e){r(!0),d(e)})).then(u?Object(E.a)(I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:return t=e.sent,e.next=6,R.a.ajax({url:"/api/favorites/",method:"GET",headers:{Authorization:"Bearer ".concat(t)}});case 6:return n=e.sent,e.next=9,console.log(n);case 9:return e.next=11,c({type:"SET_FAVORITES",payload:n[0].favorite_id});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))):{})}),[]),Object(n.jsx)("div",{})}var pe=function(){return Object(j.b)().isLoading?Object(n.jsx)(G,{}):Object(n.jsxs)(K,{children:[Object(n.jsx)(xe,{}),Object(n.jsx)(S,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/",children:Object(n.jsx)(f,{})}),Object(n.jsx)(o.a,{path:"/home",children:Object(n.jsx)(f,{})}),Object(n.jsx)(o.a,{path:"/choose",children:Object(n.jsx)(ne,{})}),Object(n.jsx)(o.a,{path:"/cov",children:Object(n.jsx)(ie,{})}),Object(n.jsx)(o.a,{path:"/Basics/ingredients",children:Object(n.jsx)("ingredients",{})}),Object(n.jsx)(o.a,{path:"/Basics/liquor",children:Object(n.jsx)(de,{})}),Object(n.jsx)(o.a,{path:"/Basics",children:Object(n.jsx)(je,{})}),Object(n.jsx)(he,{path:"/Profile",children:Object(n.jsx)(be,{})}),Object(n.jsx)(he,{path:"/favorites",children:Object(n.jsx)(Oe,{})})]})]})},me=function(e){var t=e.children,c=Object(o.f)();return Object(n.jsx)(j.a,{domain:"dev-4xzrdhpo.us.auth0.com",clientId:"bimEc9IgODOXPIScjou3ZpYBZQiiw3HX",redirectUri:window.location.origin,onRedirectCallback:function(e){c.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},audience:"https://express.sample",children:t})},fe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,124)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(l.a,{children:Object(n.jsx)(me,{domain:"dev-4xzrdhpo.us.auth0.com",client_id:"bimEc9IgODOXPIScjou3ZpYBZQiiw3HX",audience:"https://express.sample",useRefreshTokens:!0,cacheLocation:"localstorage",children:Object(n.jsx)(pe,{})})}),document.getElementById("root")),fe()},96:function(e,t,c){}},[[111,1,2]]]);
//# sourceMappingURL=main.9b7f075d.chunk.js.map