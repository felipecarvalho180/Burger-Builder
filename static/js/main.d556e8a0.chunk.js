(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__2z9NQ",BreadTop:"BurgerIngredient__BreadTop__2Pkwe",Seeds1:"BurgerIngredient__Seeds1__2k2x7",Seeds2:"BurgerIngredient__Seeds2__9Mret",Meat:"BurgerIngredient__Meat__1LdrR",Cheese:"BurgerIngredient__Cheese__1eqwP",Salad:"BurgerIngredient__Salad__2WBlr",Bacon:"BurgerIngredient__Bacon__2RZZH"}},14:function(e,t,a){e.exports={SideDrawer:"SideDrawer__SideDrawer__3wvlM",Open:"SideDrawer__Open__3xsf8",Close:"SideDrawer__Close__2S6c7",Logo:"SideDrawer__Logo__10IHv"}},15:function(e,t,a){e.exports={ContactData:"ContactData__ContactData__1w-C7",Input:"ContactData__Input__1VI8s"}},16:function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl__ibcUQ",Label:"BuildControl__Label__2VLnR",Less:"BuildControl__Less__3X6hg",More:"BuildControl__More__2eQpV"}},18:function(e,t,a){e.exports={Toolbar:"Toolbar__Toolbar__2hkfg",Tooblar:"Toolbar__Tooblar__dowYm",Logo:"Toolbar__Logo__24rue",DesktopOnly:"Toolbar__DesktopOnly__15Sc_"}},22:function(e,t,a){e.exports={NavigationItem:"NavigationItem__NavigationItem__bW8AN",active:"NavigationItem__active__1AibM"}},23:function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls__220uz",OrderButton:"BuildControls__OrderButton__1ScSk",enable:"BuildControls__enable__3XAWA"}},24:function(e,t,a){e.exports={Button:"Button__Button__ajevi",Success:"Button__Success__1DMln",Danger:"Button__Danger__18hYt"}},36:function(e,t,a){e.exports={Content:"Layout__Content__3KSp3"}},37:function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},38:function(e,t,a){e.exports={Logo:"Logo__Logo__2A07e"}},39:function(e,t,a){e.exports={NavigationItens:"NavigationItens__NavigationItens__1lroi"}},40:function(e,t,a){e.exports={DrawerToggle:"Menu__DrawerToggle__2oRip"}},41:function(e,t,a){e.exports={Backdrop:"Backdrop__Backdrop__eeZpu"}},42:function(e,t,a){e.exports={Burger:"Burger__Burger__2h2kL"}},43:function(e,t,a){e.exports={Modal:"Modal__Modal__cd320"}},45:function(e,t,a){e.exports={Loader:"Spinner__Loader__3dgUo",load6:"Spinner__load6__3Ebkm",round:"Spinner__round__2-YqU"}},46:function(e,t,a){e.exports={CheckOutSummary:"CheckOutSummary__CheckOutSummary__1M1Dy"}},50:function(e,t,a){e.exports=a(83)},55:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),o=a.n(c),l=a(17),i=(a(55),a(2)),s=a(3),u=a(5),d=a(4),m=a(6),p=function(e){return e.children},h=a(36),_=a.n(h),g=a(18),f=a.n(g),b=a(37),E=a.n(b),v=a(38),C=a.n(v),y=function(e){return r.a.createElement("div",{className:C.a.Logo},r.a.createElement("img",{src:E.a,alt:"MyBurger"}))},k=a(39),O=a.n(k),w=a(22),B=a.n(w),N=function(e){return r.a.createElement("li",{className:B.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?B.a.active:null},e.children))},S=function(e){return r.a.createElement("ul",{className:O.a.NavigationItens},r.a.createElement(N,{link:"/"},"Burger Builder"),r.a.createElement(N,{link:"/"},"Check Out"))},j=a(40),I=a.n(j),D=function(e){return r.a.createElement("div",{onClick:e.show,className:I.a.DrawerToggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},x=function(e){return r.a.createElement("header",{className:f.a.Toolbar},r.a.createElement(D,{show:e.clicked}),r.a.createElement("div",{className:f.a.Logo},r.a.createElement(y,null)),r.a.createElement("nav",{className:f.a.DesktopOnly},r.a.createElement(S,null)))},L=a(14),H=a.n(L),M=a(41),T=a.n(M),P=function(e){return e.show?r.a.createElement("div",{className:T.a.Backdrop,onClick:e.clicked}):null},A=function(e){var t=[H.a.SideDrawer,H.a.Close];return e.open&&(t=[H.a.SideDrawer,H.a.Open]),r.a.createElement(p,null,r.a.createElement(P,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:H.a.Logo},r.a.createElement(y,null)),r.a.createElement("nav",null,r.a.createElement(S,null))))},R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showsideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showsideDrawer:!1})},a.sideDrawerOpenHandler=function(){a.setState(function(e){return{showsideDrawer:!e.showsideDrawer}})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(x,{clicked:this.sideDrawerOpenHandler}),r.a.createElement(A,{closed:this.sideDrawerClosedHandler,open:this.state.showsideDrawer}),r.a.createElement("main",{className:_.a.Content},this.props.children))}}]),t}(n.Component),U=a(12),W=a(19),Y=a(49),q=a(42),z=a.n(q),F=a(11),Q=a.n(F),V=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:Q.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:Q.a.BreadTop},r.a.createElement("div",{className:Q.a.Seeds1}),r.a.createElement("div",{className:Q.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:Q.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:Q.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:Q.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:Q.a.Bacon});break;default:e=null}return e}}]),t}(n.Component),Z=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(Y.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(V,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start add ingredients!")),r.a.createElement("div",{className:z.a.Burger},r.a.createElement(V,{type:"bread-top"}),t,r.a.createElement(V,{type:"bread-bottom"}))},J=a(16),X=a.n(J),K=function(e){return r.a.createElement("div",{className:X.a.BuildControl},r.a.createElement("div",{className:X.a.Label},e.label),r.a.createElement("button",{className:X.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:X.a.More,onClick:e.added},"More"))},$=a(23),G=a.n($),ee=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],te=function(e){return r.a.createElement("div",{className:G.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),ee.map(function(t){return r.a.createElement(K,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:G.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},ae=a(43),ne=a.n(ae),re=function(e){return r.a.createElement(p,null,r.a.createElement(P,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:ne.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},ce=a(24),oe=a.n(ce),le=function(e){return r.a.createElement("button",{className:[oe.a.Button,oe.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ie=function(e){var t=Object.keys(e.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])});return r.a.createElement(p,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(le,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(le,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},se=a(44),ue=a.n(se).a.create({baseURL:"https://react-my-app-1690d.firebaseio.com/"}),de=a(45),me=a.n(de),pe=function(){return r.a.createElement("div",{className:me.a.Loader},"Loading...")},he={salad:.5,cheese:.4,meat:1.3,bacon:.7},_e=function(e,t){return function(a){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(m.a)(n,a),Object(s.a)(n,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(re,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),n}(n.Component)}(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:4,purchasable:!1,purchasing:!1,loading:!1,error:!1},a.addIngredientsHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(W.a)({},a.state.ingredients);n[e]=t;var r=he[e],c=a.state.totalPrice+r;a.setState({totalPrice:c,ingredients:n}),a.updatePurchaseIngredients(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(W.a)({},a.state.ingredients);r[e]=n;var c=he[e],o=a.state.totalPrice-c;a.setState({totalPrice:o,ingredients:r}),a.updatePurchaseIngredients(r)}},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){var e=[];for(var t in a.state.ingredients)e.push(encodeURIComponent(t)+"="+encodeURIComponent(a.state.ingredients[t]));e.push("price="+a.state.totalPrice);var n=e.join("&");a.props.history.push({pathname:"/checkout",search:"?"+n})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),ue.get("https://react-my-app-1690d.firebaseio.com/ingredients.json").then(function(t){e.setState({ingredients:t.data})}).catch(function(t){e.setState({error:!0})})}},{key:"updatePurchaseIngredients",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(W.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",null,"Ingredients can't be loaded"):r.a.createElement(pe,null);return this.state.ingredients&&(n=r.a.createElement(p,null,r.a.createElement(Z,{ingredients:this.state.ingredients}),r.a.createElement(te,{ingredientAdded:this.addIngredientsHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,price:this.state.totalPrice,ordered:this.purchaseHandler})),a=r.a.createElement(ie,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.state.totalPrice})),this.state.loading&&(a=r.a.createElement(pe,null)),r.a.createElement(p,null,r.a.createElement(re,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),n)}}]),t}(n.Component),ue),ge=a(46),fe=a.n(ge),be=function(e){return r.a.createElement("div",{className:fe.a.CheckOutSummary},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(Z,{ingredients:e.ingredients})),r.a.createElement(le,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(le,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},Ee=a(15),ve=a.n(Ee),Ce=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",address:{street:"",postalCode:""},loading:!1},a.orderHandler=function(e){e.preventDefault(),a.setState({loading:!0});var t={ingredients:a.props.ingredients,price:a.props.price,customer:{name:"Felipe",address:{street:"Ana Margarida",zipcode:"25645030",country:"Brazil"},email:"felipecarvalho180@gmail.com"},deliveryMethod:"fastest"};ue.post("/orders.json",t).then(function(e){a.setState({loading:!1}),a.props.history.push("/")}).catch(function(e){a.setState({loading:!1})}),console.log(a.props.ingredients),console.log(a.props.price)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=r.a.createElement("form",null,r.a.createElement("input",{className:ve.a.Input,type:"text",name:"name",placeholder:"Your name"}),r.a.createElement("input",{className:ve.a.Input,type:"email",name:"email",placeholder:"Your Mail"}),r.a.createElement("input",{className:ve.a.Input,type:"text",name:"street",placeholder:"Street"}),r.a.createElement("input",{className:ve.a.Input,type:"text",name:"postal",placeholder:"Postal Code"}),r.a.createElement(le,{clicked:this.orderHandler,btnType:"Success"},"ORDER"));return this.state.loading&&(e=r.a.createElement(pe,null)),r.a.createElement("div",{className:ve.a.ContactData},r.a.createElement("h4",null,"Enter your Contact Data"),e)}}]),t}(n.Component),ye=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,price:0},a.checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=new URLSearchParams(this.props.location.search),t={},a=0,n=!0,r=!1,c=void 0;try{for(var o,l=e.entries()[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;"price"===i[0]?a=i[1]:t[i[0]]=+i[1]}}catch(s){r=!0,c=s}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}this.setState({ingredients:t,totalPrice:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(be,{ingredients:this.state.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(U.a,{path:this.props.match.path+"/contact-data",render:function(t){return r.a.createElement(Ce,Object.assign({ingredients:e.state.ingredients,price:e.state.totalPrice},t))}}))}}]),t}(n.Component),ke=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R,null,r.a.createElement(U.c,null,r.a.createElement(U.a,{path:"/checkout",component:ye}),r.a.createElement(U.a,{path:"/",exact:!0,component:_e}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=r.a.createElement(l.a,null,r.a.createElement(ke,null));o.a.render(Oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.d556e8a0.chunk.js.map