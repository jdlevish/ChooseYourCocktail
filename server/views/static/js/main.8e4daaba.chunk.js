(this.webpackJsonpchooseyourcocktail=this.webpackJsonpchooseyourcocktail||[]).push([[0],{109:function(e,t,c){},110:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),i=c.n(a),r=c(26),s=c.n(r),l=c(52),o=(c(94),c.p,c(14)),j=c(9),d=c(10),b=c(16),u=c(17),h=c(18),O=c(115),x=c(116),p=c.p+"static/media/cychome.5ba342f6.png";function m(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)("h1",{className:"landingHeading",children:" What will you be drinking tonight ? "}),Object(n.jsx)(x.a,{className:"pt-3 mr-5 landingImage float-left",src:p}),Object(n.jsx)("p",{className:"p-3 mt-5  landingText",children:"Welcome to chooseyourcocktail.com, a great place to decide what you are going to be drinking this evening or possibly this afternoon. to get started go ahead and click on the choose your cocktail button on the top left and search through a huge database of cocktails. once you have found a few cocktails that you like go ahead and sign up so that you can save your favorites for future use. Drink responsibly and Enjoy, Cheers! "})]})})}var f=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(m,{})})}}]),c}(i.a.Component),g=c(120),v=c(121),k=function(){var e=Object(j.b)().loginWithRedirect;return Object(n.jsx)("button",{className:"btn btn-light buttonText ",onClick:function(){return e()},children:"Log In"})},N=function(){var e=Object(j.b)().logout;return Object(n.jsx)("button",{className:"btn btn-light btn-block buttonText",onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},C=function(){var e=Object(j.b)().loginWithRedirect;return Object(n.jsx)("button",{className:"btn btn-light btn-block buttonText",onClick:function(){return e({screen_hint:"signup"})},children:"Sign Up"})},y=function(){return Object(j.b)().isAuthenticated?Object(n.jsx)("span",{className:"buttonText",children:Object(n.jsx)(N,{})}):Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"buttonText",children:Object(n.jsx)(k,{})}),Object(n.jsx)("span",{className:"buttonText",children:Object(n.jsx)(C,{})})]})},w=c(118),T=function(){return Object(j.b)().isAuthenticated?Object(n.jsx)("span",{className:"buttonText",children:Object(n.jsx)(w.a.Item,{href:"/favorites",children:"Favorite Cocktails"})}):Object(n.jsx)("div",{})},S=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(e){return Object(d.a)(this,c),t.call(this,e)}return Object(b.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"",children:Object(n.jsxs)(g.a,{bg:"light",expand:"lg",children:[Object(n.jsx)(g.a.Brand,{href:"/choose",children:Object(n.jsx)("h2",{className:"navHeader float-right pt-4\r ",children:"Choose Your Cocktail"})}),Object(n.jsx)(v.a,{className:"ml-auto color-navbar "}),Object(n.jsx)(T,{}),Object(n.jsx)(y,{})]})})}}]),c}(a.Component),D=c(11),I=c.n(D),E=c(41),A=c(20),F=c(7),B=c(85),P=c(117),L=c(22),R=c.n(L),q=c(40),H=c(122),_=c(119);function z(e){var t=e.recipe;console.log(t);for(var c=[],a=[],i=0,r=Object.keys(t);i<r.length;i++){var s=r[i];s.includes("strIngredient")&&null!=t[s]&&c.push(t[s]),s.includes("strMeasure")&&null!=t[s]&&a.push(t[s])}return Object(n.jsxs)("div",{className:"Cocktails pb-2",children:[Object(n.jsx)("table",{className:"pb-2",children:c.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e}),Object(n.jsx)("td",{children:"  "})," ",Object(n.jsxs)("td",{children:[" ",a[t]]})]})}))}),t.strInstructions]})}var G=function(){return Object(n.jsx)("div",{className:"spinner",children:Object(n.jsx)(x.a,{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})},W=c(32),V=function(e,t){switch(t.type){case"SET_DRINKS":return Object(W.a)(Object(W.a)({},e),{},{Drinks:t.payload});case"SET_FAVORITES":return Object(W.a)(Object(W.a)({},e),{},{Favorites:t.payload});case"ADD_FAVORITE":return Object(W.a)(Object(W.a)({},e),{},{Favorites:e.Favorites.concat(t.payload)});case"DELETE_FAVORITE":var c=e.Favorites,n=e.Favorites.indexOf(t.payload);return n>-1&&c.splice(n,1),Object(W.a)(Object(W.a)({},e),{},{Favorites:c});default:return e}},K={Drinks:[],Favorites:""},J=Object(a.createContext)(K),M=function(e){var t=e.children,c=Object(a.useReducer)(V,K),i=Object(F.a)(c,2),r=i[0],s=i[1];return Object(n.jsx)(J.Provider,{value:[r,s],children:t})},U=c(57),X=c(86);function Y(e){var t=Object(j.b)().getAccessTokenSilently,c=Object(a.useState)(!0),i=Object(F.a)(c,2),r=i[0],s=i[1],l=Object(a.useContext)(J),o=Object(F.a)(l,2),d=(o[0],o[1]);function b(){return(b=Object(A.a)(I.a.mark((function e(c){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return n=e.sent,e.next=6,R.a.ajax({url:"/api/favorites/"+c,method:"POST",headers:{Authorization:"Bearer ".concat(n)}});case 6:return e.next=8,d({type:"DELETE_FAVORITE",payload:c});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return r?Object(n.jsx)(U.a,{icon:X.a,size:"2x",color:"#AC1010",onClick:function(){(function(e){return b.apply(this,arguments)})(e.id).then((e.id,void s(!r)))}}):Object(n.jsx)(Q,{})}var Z=c(75);function Q(e){var t=Object(j.b)().loginWithRedirect,c=Object(j.b)().isAuthenticated,i=Object(j.b)().getAccessTokenSilently,r=Object(a.useState)(!0),s=Object(F.a)(r,2),l=s[0],o=s[1],d=Object(a.useContext)(J),b=Object(F.a)(d,2);b[0],b[1];function u(){return(u=Object(A.a)(I.a.mark((function e(t){var c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i();case 3:return c=e.sent,e.next=6,R.a.ajax({url:"/api/favorites/"+t,method:"POST",headers:{Authorization:"Bearer ".concat(c)}});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return c?l?Object(n.jsx)(U.a,{icon:Z.a,size:"2x",color:"#AC1010",onClick:function(){(function(e){return u.apply(this,arguments)})(e.id).then((e.id,void o(!l)))}}):Object(n.jsx)(Y,{}):Object(n.jsx)(U.a,{onClick:function(){return t({screen_hint:"signup"})},icon:Z.a,size:"2x",color:"#AC1010"})}function $(e){var t,c,i=Object(j.b)().isAuthenticated,r=Object(q.useSpring)({to:{opacity:1},from:{opacity:0}}),s=Object(a.useContext)(J),l=Object(F.a)(s,2),o=l[0];l[1];return i?(t=o.Favorites,c=e.id,-1!=t.indexOf(parseInt(c))?Object(n.jsx)(q.animated.div,{style:r,children:Object(n.jsx)(Y,{id:e.id,isFave:!0},e.key)}):Object(n.jsx)(q.animated.div,{style:r,children:Object(n.jsx)(Q,{id:e.id,isFave:!1},e.key)})):Object(n.jsxs)(q.animated.div,{style:r,children:[" ",Object(n.jsx)(Q,{id:e.id,isFave:!1},e.key)]})}function ee(e){var t=Object(a.useState)(""),c=Object(F.a)(t,2),i=c[0],r=c[1],s=Object(a.useState)(!1),l=Object(F.a)(s,2),o=l[0],j=l[1],d=function(){return j(!1)},b=function(){return j(!0)},u=Object(q.useSpring)({to:{opacity:1},from:{opacity:0}});function h(){return(h=Object(A.a)(I.a.mark((function e(t){var c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.ajax({url:"/api/cocktailAPI/recipe/"+t,method:"GET"});case 3:return c=e.sent,e.next=6,r(c);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return console.log("props.drinks "+e.drinks),!0===e.loading?Object(n.jsx)("div",{children:Object(n.jsx)(G,{})}):0===e.drinks.length||null===e.drinks||"None Foun"===e.drinks?Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"No Results"})}):Object(n.jsx)(q.animated.div,{style:u,children:Object(n.jsx)(P.a,{children:Object(n.jsx)(O.a,{children:e.drinks.map((function(e){return Object(n.jsxs)(H.a,{id:e.idDrink,className:"shadow float-left col-md-3  card-spacing\r ",children:[Object(n.jsx)(H.a.Header,{className:"container-fluid",children:Object(n.jsx)($,{id:e.idDrink},e.idDrink)}),Object(n.jsx)(H.a.Img,{variant:"top",className:"mt-1",src:e.strDrinkThumb}),Object(n.jsxs)(H.a.Body,{children:[Object(n.jsx)(H.a.Title,{className:"card-Title Cocktails",children:e.strDrink}),Object(n.jsxs)(_.a,{show:o,onHide:d,children:[Object(n.jsx)(_.a.Header,{closeButton:!0,children:Object(n.jsx)(_.a.Title,{children:i.strDrink})}),Object(n.jsxs)(_.a.Body,{children:[Object(n.jsx)(z,{recipe:i}),Object(n.jsx)(B.a,{variant:"danger",onClick:d,children:"Close"})]})]},i.idDrink),Object(n.jsx)(B.a,{className:"shadow-sm text-align-center",variant:"secondary",onClick:function(){return function(e){return h.apply(this,arguments)}(e.idDrink).then(b)},children:"Click here for full recipe"})]})]},e.idDrink)}))})})})}var te=function(e){var t=e.currentPage,c=(e.drinksPerPage,e.totalDrinks),a=e.paginate,i=e.visibleRange,r=e.pageNumbers;return console.log(t),c<9||r.length<1?Object(n.jsx)("div",{}):3==r.length?Object(n.jsx)("div",{className:"container  row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)("nav",{className:"pt-0  ",children:Object(n.jsx)("ul",{className:"pagination",children:i.map((function(e){return Object(n.jsx)("li",{className:"page-item",children:Object(n.jsx)("a",{onClick:function(){return a(e)},href:"#",className:"page-link",children:e})},e)}))})})})}):1===t?Object(n.jsx)("div",{className:"container  row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)("nav",{className:"pt-0  ",children:Object(n.jsxs)("ul",{className:"pagination",children:[i.map((function(e){return Object(n.jsx)("li",{className:"page-item",children:Object(n.jsx)("a",{onClick:function(){return a(e)},href:"#",className:"page-link",children:e})},e)})),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+3)},href:"#",className:"page-link",children:"..."})}),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(r.length)},href:"#",className:"page-link",children:r.length})}),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+1)},href:"#",className:"page-link",children:"next"})},t)]})})})}):t<=2?Object(n.jsx)("div",{className:"container  row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)("nav",{className:"pt-0  ",children:Object(n.jsxs)("ul",{className:"pagination",children:[Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t-1)},href:"#",className:"page-link",children:"previous"})},t-1),i.map((function(e){return Object(n.jsx)("li",{className:"page-item",children:Object(n.jsx)("a",{onClick:function(){return a(e)},href:"#",className:"page-link",children:e})},e)})),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+3)},href:"#",className:"page-link",children:"..."})}),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(r[r.length-1])},href:"#",className:"page-link",children:r[r.length-1]})},r[r.length-1]),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+1)},href:"#",className:"page-link",children:"next"})},t)]})})})}):3===t?Object(n.jsx)("div",{className:"container  row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)("nav",{className:"pt-0  ",children:Object(n.jsxs)("ul",{className:"pagination",children:[Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t-1)},href:"#",className:"page-link",children:"previous"})},5*t),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(r[0])},href:"#",className:"page-link",children:r[0]})},4*t),i.map((function(e){return Object(n.jsx)("li",{className:"page-item",children:Object(n.jsx)("a",{onClick:function(){return a(e)},href:"#",className:"page-link",children:e})},e)})),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+3)},href:"#",className:"page-link",children:"..."})}),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(r[r.length-1])},href:"#",className:"page-link",children:r[r.length-1]})},3*t),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+1)},href:"#",className:"page-link",children:"next"})},2*t)]})})})}):t+1>=r.length?Object(n.jsx)("div",{className:"container  row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)("nav",{className:"pt-0  ",children:Object(n.jsxs)("ul",{className:"pagination",children:[Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t-1)},href:"#",className:"page-link",children:"previous"})},2*t),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t-3)},href:"#",className:"page-link",children:"..."})}),i.map((function(e){return Object(n.jsx)("li",{className:"page-item",children:Object(n.jsx)("a",{onClick:function(){return a(e)},href:"#",className:"page-link",children:e})},e)}))]})})})}):i[2]>=5?Object(n.jsx)("div",{className:"container  row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)("nav",{className:"pt-0  ",children:Object(n.jsxs)("ul",{className:"pagination",children:[Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t-1)},href:"#",className:"page-link",children:"previous"})},2*t),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(r[0])},href:"#",className:"page-link",children:r[0]})},3*t),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t-3)},href:"#",className:"page-link",children:"..."})}),i.map((function(e){return Object(n.jsx)("li",{className:"page-item",children:Object(n.jsx)("a",{onClick:function(){return a(e)},href:"#",className:"page-link",children:e})},e)})),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+3)},href:"#",className:"page-link",children:"..."})}),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(r[r.length-1])},href:"#",className:"page-link",children:r[r.length-1]})},r[r.length-1]),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+1)},href:"#",className:"page-link",children:"next"})},t)]})})})}):Object(n.jsx)("div",{className:"container  row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)("nav",{className:"pt-0  ",children:Object(n.jsxs)("ul",{className:"pagination",children:[Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t-1)},href:"#",className:"page-link",children:"previous"})},2*t),r.map((function(e){return Object(n.jsx)("li",{data:e,className:"page-item",children:Object(n.jsx)("a",{data:e,onClick:function(){return a(e)},href:"#",className:"page-link",children:e})},e)})),Object(n.jsx)("li",{className:"pagination-control",children:Object(n.jsx)("a",{onClick:function(){return a(t+1)},href:"#",className:"page-link",children:"next"})},3*t)]})})})})};function ce(e){for(var t,c=Object(a.useContext)(J),i=Object(F.a)(c,2),r=(i[0],i[1]),s=Object(a.useState)([]),l=Object(F.a)(s,2),o=l[0],j=l[1],d=Object(a.useState)(""),b=Object(F.a)(d,2),u=b[0],h=b[1],x=Object(a.useState)("Liquor"),p=Object(F.a)(x,2),m=p[0],f=p[1],g=Object(a.useState)(!0),v=Object(F.a)(g,2),k=v[0],N=v[1],C=Object(a.useState)(""),y=Object(F.a)(C,2),w=y[0],T=y[1],S=Object(a.useState)(!1),D=Object(F.a)(S,2),L=D[0],q=D[1],H=Object(a.useState)(1),_=Object(F.a)(H,2),z=_[0],G=_[1],W=Object(a.useState)(9),V=Object(F.a)(W,1)[0],K=o.length,M=z*V,U=M-V,X=o.slice(U,M),Y=[],Z=1;Z<=Math.ceil(K/V);Z++)Y.push(Z);for(var Q=[],$=z-1;$<=z+1;$++)$>0&&$<=Y.length&&Q.push($);function ce(e,t){return ne.apply(this,arguments)}function ne(){return(ne=Object(A.a)(I.a.mark((function e(t,c){var n,a,i;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Liquor"!==c){e.next=16;break}return e.prev=1,q(!0),e.next=5,R.a.ajax({url:"/api/cocktailAPI/"+t.toLowerCase(),method:"GET"});case 5:return n=e.sent,e.next=8,j(n);case 8:q(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:e.next=46;break;case 16:if("Ingredient"!==c){e.next=32;break}return e.prev=17,q(!0),e.next=21,R.a.ajax({url:"/api/cocktailAPI/"+t.toLowerCase(),method:"GET"});case 21:return a=e.sent,e.next=24,j(a);case 24:q(!1),e.next=30;break;case 27:e.prev=27,e.t1=e.catch(17),console.log(e.t1);case 30:e.next=46;break;case 32:if("Cocktail"!==c){e.next=46;break}return e.prev=33,q(!0),e.next=37,R.a.ajax({url:"/api/cocktailAPI/Cocktail/"+t.toLowerCase(),method:"GET"});case 37:return i=e.sent,e.next=40,j(i);case 40:q(!1),e.next=46;break;case 43:e.prev=43,e.t2=e.catch(33),console.log(e.t2);case 46:case"end":return e.stop()}}),e,null,[[1,11],[17,27],[33,43]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){fetch("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic").then((function(e){return e.json()})).then((function(e){N(!0),r({type:"SET_DRINKS",payload:e.drinks}),j(e.drinks)}),(function(e){N(!0),T(e)}))}),[]),w?Object(n.jsxs)("div",{children:["Error: ",w.message]}):k?Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{className:"pt-2",children:Object(n.jsxs)("form",{className:"pt-5 choice",children:[Object(n.jsx)("input",{type:"text",name:"liquor",className:"mr-1",value:u,onKeyPress:function(e){return function(e,t,c){console.log(e.key),"Enter"===e.key&&(e.preventDefault(),ce(t=t,c))}(e,u,m)},onChange:function(e){h(e.target.value)}}),Object(n.jsxs)("select",(t={className:"Cocktails"},Object(E.a)(t,"className","mr-1"),Object(E.a)(t,"value",m),Object(E.a)(t,"onChange",(function(e){f(e.target.value)})),Object(E.a)(t,"children",[Object(n.jsx)("option",{value:"Liquor",children:"Liquor"}),Object(n.jsx)("option",{value:"Ingredient",children:"Ingredient"}),Object(n.jsx)("option",{value:"Cocktail",children:"Cocktail"})]),t)),Object(n.jsx)(B.a,{className:"btn btn-danger",onClick:function(e){!function(e,t,c){e.preventDefault(),ce(t=t,c)}(e,u,m)},children:"Search"})]})}),Object(n.jsxs)(O.a,{children:[Object(n.jsx)(ee,{drinks:X,loading:L}),Object(n.jsx)(P.a,{children:Object(n.jsx)(te,{currentPage:z,paginate:function(e){return G(e)},drinksPerPage:V,totalDrinks:o.length,visibleRange:Q,pageNumbers:Y})})]})]}):Object(n.jsx)("div",{children:"Loading..."})}var ne=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(ce,{})})}}]),c}(i.a.Component),ae=c.p+"static/media/ingredients.30a6beaa.jpg",ie=c.p+"static/media/liquor.a04514bc.jpg",re=c.p+"static/media/tools.f5dd0a6e.jpg",se=c.p+"static/media/fun.8d2d16c8.jpg";function le(){return Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)("div",{className:"card float-left col-md-6  col-12",children:Object(n.jsxs)("a",{href:"/Basics/liquor",children:[Object(n.jsx)("img",{className:"pt-3 card-img-top  basicsImage",src:ie,alt:"Card image cap"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("h1",{className:"pt-2  basicsText",children:"The Liquor"})})]})}),Object(n.jsx)("div",{className:"card float-right col-md-6  col-12",children:Object(n.jsxs)("a",{href:"/Basics/ingredients",children:[Object(n.jsx)("img",{className:"pt-3 card-img-top basicsImage",src:ae,alt:"Card image cap"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("h1",{className:"pt-2  basicsText",children:"The Ingredients"})})]})}),Object(n.jsx)("div",{className:"card float-left col-md-6  col-12",children:Object(n.jsxs)("a",{href:"/Basics/tools",children:[Object(n.jsx)("img",{className:"pt-3 card-img-top  basicsImage",src:re,alt:"Card image cap"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("h1",{className:"pt-2  basicsText",children:"The Tools"})})]})}),Object(n.jsx)("div",{className:"card float-right col-md-6 ",children:Object(n.jsxs)("a",{href:"/Basics/fun",children:[Object(n.jsx)("img",{className:"pt-3 card-img-top  basicsImage ",src:se,alt:"Card image cap"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("h1",{className:"pt-2  basicsText",children:"The Fun"})})]})})]})})}function oe(){return Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)("h1",{children:"The Basics Of Liquor "}),Object(n.jsx)("p",{className:"Cocktails",children:"Liquor has a long and varied history that started even before the invent of the still in the 8th century. Before that time most liquor was of low alcohol content (usually 14% or less) and was primarily used as medicine. While most liquor is now somewhere in the neighborhood of 40% abv or 80 proof some even as high as 75% abv you would be very hard pressed to find someone that would consider liquor a true medicine. Depending on where you are from, you might be drinking it neat, On ice, chilled, hot, or mixed with 6 other ingredients.  "})]})})}var je=Object(j.c)((function(){console.log();var e=Object(j.b)().user,t=e.name,c=e.picture,a=e.email;e.sub;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"row align-items-center profile-header",children:[Object(n.jsx)("div",{className:"col-md-2 mb-3",children:Object(n.jsx)("img",{src:c,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})}),Object(n.jsxs)("div",{className:"col-md text-center text-md-left",children:[Object(n.jsx)("h2",{children:t}),Object(n.jsx)("p",{className:"lead text-muted",children:a})]})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("pre",{className:"col-12 text-light bg-dark p-4"})})]})}),{onRedirecting:function(){return Object(n.jsx)(G,{})}}),de=c(88),be=function(e){var t=e.component,c=Object(de.a)(e,["component"]);return Object(n.jsx)(o.a,Object(W.a)({component:Object(j.c)(t,{onRedirecting:function(){return Object(n.jsx)(G,{})}})},c))},ue=(c(84),c(109),Object(j.c)((function(){var e=Object(a.useContext)(J),t=Object(F.a)(e,2),c=t[0],i=(t[1],Object(j.b)().user),r=(i.sub,Object(j.b)().getAccessTokenSilently,Object(a.useState)([])),s=Object(F.a)(r,2),l=(s[0],s[1],Object(a.useState)("")),o=Object(F.a)(l,2),d=o[0],b=o[1],u=i.picture,h=[],x=Object(a.useState)(!1),p=Object(F.a)(x,2),m=p[0],f=p[1],g=function(){return f(!1)},v=function(){return f(!0)};function k(){return(k=Object(A.a)(I.a.mark((function e(t){var c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.ajax({url:"/api/cocktailAPI/recipe/"+t,method:"GET"});case 3:return c=e.sent,e.next=6,b(c);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return function(e,t){for(var c=0;c<t.length;c++)for(var n=0;n<e.length;n++)e[n].idDrink===t[c].toString()&&h.push(e[n])}(c.Drinks,c.Favorites),Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)("h1",{className:" favoriteHeader pb-3 pt-3",children:Object(n.jsxs)("u",{children:[" ",i.nickname,"'s  favorite cocktails"]})}),Object(n.jsx)("img",{className:" rounded-circle  mx-auto d-block pb-2",src:u}),Object(n.jsx)("h6",{className:"favoriteHeader",children:" to remove a cocktail from your favorites, click on the bookmark again and it will be removed"}),h.map((function(e){return Object(n.jsxs)(H.a,{id:e.idDrink,className:"shadow float-left col-md-3 card-spacing",children:[Object(n.jsx)(H.a.Header,{className:"container-fluid",children:Object(n.jsx)($,{id:e.idDrink},e.idDrink)}),Object(n.jsx)(H.a.Img,{variant:"top",className:"mt-1",src:e.strDrinkThumb}),Object(n.jsxs)(H.a.Body,{children:[Object(n.jsx)(H.a.Title,{className:"card-Title Cocktails",children:e.strDrink}),Object(n.jsxs)(_.a,{show:m,onHide:g,children:[Object(n.jsx)(_.a.Header,{closeButton:!0,children:Object(n.jsx)(_.a.Title,{children:d.strDrink})}),Object(n.jsxs)(_.a.Body,{children:[Object(n.jsx)(z,{recipe:d}),Object(n.jsx)(B.a,{variant:"danger",onClick:g,children:"Close"})]})]},d.idDrink),Object(n.jsx)(B.a,{className:"shadow-sm",variant:"secondary",onClick:function(){return function(e){return k.apply(this,arguments)}(e.idDrink).then(v)},children:"Click here for full recipe"})]})]},e.idDrink)}))]})})}),{onRedirecting:function(){return Object(n.jsx)(G,{})}}));function he(){var e=Object(a.useContext)(J),t=Object(F.a)(e,2),c=(t[0],t[1]),i=Object(a.useState)(!0),r=Object(F.a)(i,2),s=(r[0],r[1]),l=Object(a.useState)(""),o=Object(F.a)(l,2),d=(o[0],o[1]),b=Object(j.b)(),u=(b.user,b.isAuthenticated),h=Object(j.b)().getAccessTokenSilently;return Object(a.useEffect)((function(){var e="9973533";console.log(e),fetch("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic").then((function(e){return e.json()})).then((function(e){s(!0),c({type:"SET_DRINKS",payload:e.drinks})}),(function(e){s(!0),d(e)})).then(u?Object(A.a)(I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:return t=e.sent,e.next=6,R.a.ajax({url:"/api/favorites/",method:"GET",headers:{Authorization:"Bearer ".concat(t)}});case 6:return n=e.sent,e.next=9,console.log(n);case 9:return e.next=11,c({type:"SET_FAVORITES",payload:n[0].favorite_id});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))):{})}),[]),Object(n.jsx)("div",{})}var Oe=function(){return Object(j.b)().isLoading?Object(n.jsx)(G,{}):Object(n.jsxs)(M,{children:[Object(n.jsx)(he,{}),Object(n.jsx)(S,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/",children:Object(n.jsx)(f,{})}),Object(n.jsx)(o.a,{path:"/home",children:Object(n.jsx)(f,{})}),Object(n.jsx)(o.a,{path:"/choose",children:Object(n.jsx)(ne,{})}),Object(n.jsx)(o.a,{path:"/Basics/ingredients",children:Object(n.jsx)("ingredients",{})}),Object(n.jsx)(o.a,{path:"/Basics/liquor",children:Object(n.jsx)(oe,{})}),Object(n.jsx)(o.a,{path:"/Basics",children:Object(n.jsx)(le,{})}),Object(n.jsx)(be,{path:"/Profile",children:Object(n.jsx)(je,{})}),Object(n.jsx)(be,{path:"/favorites",children:Object(n.jsx)(ue,{})})]})]})},xe=function(e){var t=e.children,c=Object(o.f)();return Object(n.jsx)(j.a,{domain:"dev-4xzrdhpo.us.auth0.com",clientId:"bimEc9IgODOXPIScjou3ZpYBZQiiw3HX",redirectUri:window.location.origin,onRedirectCallback:function(e){c.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},audience:"https://express.sample",children:t})},pe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,123)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};s.a.render(Object(n.jsx)(l.a,{children:Object(n.jsx)(xe,{children:Object(n.jsx)(Oe,{})})}),document.getElementById("root")),pe()},94:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.8e4daaba.chunk.js.map