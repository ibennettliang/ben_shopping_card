(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop"],{"07be":function(t,c,e){},"0e6d":function(t,c,e){},"2cfc":function(t,c,e){},"5f6f":function(t,c,e){"use strict";e.r(c);var a=e("7a23");const n=t=>(Object(a["w"])("data-v-5121c098"),t=t(),Object(a["u"])(),t),s={class:"wrapper"},o={class:"search"},i=n(()=>Object(a["g"])("div",{class:"search__content"},[Object(a["g"])("span",{class:"search__content__icon iconfont"},""),Object(a["g"])("input",{class:"search__content__input",placeholder:"请输入商品名称"})],-1));function r(t,c,e,n,r,l){const d=Object(a["A"])("ShopInfo"),b=Object(a["A"])("Content"),_=Object(a["A"])("Cart");return Object(a["t"])(),Object(a["f"])("div",s,[Object(a["g"])("div",o,[Object(a["g"])("div",{class:"search__back iconfont",onClick:c[0]||(c[0]=(...t)=>n.handleBackClick&&n.handleBackClick(...t))},"  "),i]),Object(a["K"])(Object(a["j"])(d,{item:n.item,hideBorder:!0},null,8,["item"]),[[a["G"],n.item.imgUrl]]),Object(a["j"])(b,{shopName:n.item.name},null,8,["shopName"]),Object(a["j"])(_)])}var l=e("6605"),d=e("b775"),b=e("d7d0");const _=t=>(Object(a["w"])("data-v-773c02bc"),t=t(),Object(a["u"])(),t),u={class:"content"},p={class:"category"},j=["onClick"],h={class:"product"},O=["src"],m={class:"product__item__detail"},C={class:"product__item__title"},g={class:"product__item__sales"},v={class:"product__item__price"},k=_(()=>Object(a["g"])("span",{class:"product__item__yen"},"¥",-1)),f={class:"product__item__origin"},I={class:"product__number"},w=["onClick"],L=["onClick"];function y(t,c,e,n,s,o){return Object(a["t"])(),Object(a["f"])("div",u,[Object(a["g"])("div",p,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(n.categories,t=>(Object(a["t"])(),Object(a["f"])("div",{class:Object(a["p"])({category__item:!0,"category__item--active":n.currentTab===t.tab}),key:t.name,onClick:()=>n.handleTabClick(t.tab)},Object(a["C"])(t.name),11,j))),128))]),Object(a["g"])("div",h,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(n.list,t=>(Object(a["t"])(),Object(a["f"])("div",{class:"product__item",key:t._id},[Object(a["g"])("img",{class:"product__item__img",src:t.imgUrl},null,8,O),Object(a["g"])("div",m,[Object(a["g"])("h4",C,Object(a["C"])(t.name),1),Object(a["g"])("p",g,"月售 "+Object(a["C"])(t.sales)+" 件",1),Object(a["g"])("p",v,[k,Object(a["i"])(Object(a["C"])(t.price)+" ",1),Object(a["g"])("span",f,"¥"+Object(a["C"])(t.oldPrice),1)])]),Object(a["g"])("div",I,[Object(a["g"])("span",{class:"product__number__minus iconfont",onClick:()=>{n.changeCartItem(n.shopId,t._id,t,-1,e.shopName)}},"",8,w),Object(a["i"])(" "+Object(a["C"])(n.getProductCartCount(n.shopId,t._id))+" ",1),Object(a["g"])("span",{class:"product__number__plus iconfont",onClick:()=>{n.changeCartItem(n.shopId,t._id,t,1,e.shopName)}},"",8,L)])]))),128))])])}var P=e("5502"),S=e("75c9");const T=[{name:"全部商品",tab:"all"},{name:"秒杀",tab:"seckill"},{name:"新鲜水果",tab:"fruit"}],N=()=>{const t=Object(a["y"])(T[0].tab),c=c=>{t.value=c};return{currentTab:t,handleTabClick:c}},B=(t,c)=>{const e=Object(a["x"])({list:[]}),n=async()=>{var a;const n=await Object(d["a"])(`/api/shop/${c}/products`,{tab:t.value});0===(null===n||void 0===n?void 0:n.errno)&&null!==n&&void 0!==n&&null!==(a=n.data)&&void 0!==a&&a.length&&(e.list=n.data)};Object(a["I"])(()=>{n()});const{list:s}=Object(a["D"])(e);return{list:s}},x=()=>{const t=Object(P["b"])(),{cartList:c,changeCartItemInfo:e}=Object(S["a"])(),a=(c,e)=>{t.commit("changeShopName",{shopId:c,shopName:e})},n=(t,c,n,s,o)=>{e(t,c,n,s),a(t,o)},s=(t,e)=>{var a,n,s;return(null===c||void 0===c||null===(a=c[t])||void 0===a||null===(n=a.productList)||void 0===n||null===(s=n[e])||void 0===s?void 0:s.count)||0};return{cartList:c,changeCartItem:n,getProductCartCount:s}};var A={name:"Content",props:["shopName"],setup(){const t=Object(l["c"])(),c=t.params.id,{currentTab:e,handleTabClick:a}=N(),{list:n}=B(e,c),{changeCartItem:s,cartList:o,getProductCartCount:i}=x();return{categories:T,currentTab:e,handleTabClick:a,list:n,shopId:c,changeCartItem:s,cartList:o,getProductCartCount:i}}},D=(e("e194"),e("6b0d")),H=e.n(D);const M=H()(A,[["render",y],["__scopeId","data-v-773c02bc"]]);var U=M;const z=t=>(Object(a["w"])("data-v-5204b470"),t=t(),Object(a["u"])(),t),J={class:"cart"},G={key:0,class:"product"},K={class:"product__header"},F=["innerHTML"],$=Object(a["i"])(" 全选 "),q={class:"product__header__clear"},E=["innerHTML","onClick"],Q=["src"],R={class:"product__item__detail"},V={class:"product__item__title"},W={class:"product__item__price"},X=z(()=>Object(a["g"])("span",{class:"product__item__yen"},"¥",-1)),Y={class:"product__item__origin"},Z={class:"product__number"},tt=["onClick"],ct=["onClick"],et={class:"check"},at={class:"check__icon"},nt={class:"check__icon__tag"},st={class:"check__info"},ot=Object(a["i"])(" 总计："),it={class:"check__info__price"},rt={class:"check__btn"},lt=Object(a["i"])(" 去结算 ");function dt(t,c,e,n,s,o){const i=Object(a["A"])("router-link");return Object(a["t"])(),Object(a["f"])(a["a"],null,[n.showCart&&n.calculations.total>0?(Object(a["t"])(),Object(a["f"])("div",{key:0,class:"mask",onClick:c[0]||(c[0]=(...t)=>n.handleCartShowChange&&n.handleCartShowChange(...t))})):Object(a["e"])("",!0),Object(a["g"])("div",J,[n.showCart&&n.calculations.total>0?(Object(a["t"])(),Object(a["f"])("div",G,[Object(a["g"])("div",K,[Object(a["g"])("div",{class:"product__header__all",onClick:c[1]||(c[1]=()=>n.setCartItemsChecked(n.shopId))},[Object(a["g"])("span",{class:"product__header__icon iconfont",innerHTML:n.calculations.allChecked?"":""},null,8,F),$]),Object(a["g"])("div",q,[Object(a["g"])("span",{class:"product__header__clear__btn",onClick:c[2]||(c[2]=()=>n.cleanCartProducts(n.shopId))},"清空购物车")])]),(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(n.productList,t=>(Object(a["t"])(),Object(a["f"])("div",{key:t._id,class:"product__item"},[Object(a["g"])("div",{class:"product__item__checked iconfont",innerHTML:t.check?"":"",onClick:()=>n.changeCartItemChecked(n.shopId,t._id)},null,8,E),Object(a["g"])("img",{class:"product__item__img",src:t.imgUrl},null,8,Q),Object(a["g"])("div",R,[Object(a["g"])("h4",V,Object(a["C"])(t.name),1),Object(a["g"])("p",W,[X,Object(a["i"])(Object(a["C"])(t.price)+" ",1),Object(a["g"])("span",Y,"¥"+Object(a["C"])(t.oldPrice),1)])]),Object(a["g"])("div",Z,[Object(a["g"])("span",{class:"product__number__minus iconfont",onClick:()=>{n.changeCartItemInfo(n.shopId,t._id,t,-1)}},"",8,tt),Object(a["i"])(" "+Object(a["C"])(t.count||0)+" ",1),Object(a["g"])("span",{class:"product__number__plus iconfont",onClick:()=>{n.changeCartItemInfo(n.shopId,t._id,t,1)}},"",8,ct)])]))),128))])):Object(a["e"])("",!0),Object(a["g"])("div",et,[Object(a["g"])("div",at,[Object(a["g"])("img",{src:"http://www.dell-lee.com/imgs/vue3/basket.png",class:"check__icon__img",onClick:c[3]||(c[3]=(...t)=>n.handleCartShowChange&&n.handleCartShowChange(...t))}),Object(a["g"])("div",nt,Object(a["C"])(n.calculations.total),1)]),Object(a["g"])("div",st,[ot,Object(a["g"])("span",it,"¥ "+Object(a["C"])(n.calculations.price),1)]),Object(a["K"])(Object(a["g"])("div",rt,[Object(a["j"])(i,{to:{path:"/orderConfirmation/"+n.shopId}},{default:Object(a["J"])(()=>[lt]),_:1},8,["to"])],512),[[a["G"],n.calculations.total>0]])])])],64)}const bt=t=>{const c=Object(P["b"])(),{productList:e,calculations:a,changeCartItemInfo:n}=Object(S["a"])(t),s=(t,e)=>{c.commit("changeCartItemChecked",{shopId:t,productId:e})},o=t=>{c.commit("cleanCartProducts",{shopId:t})},i=t=>{c.commit("setCartItemsChecked",{shopId:t})};return{calculations:a,productList:e,cleanCartProducts:o,changeCartItemInfo:n,changeCartItemChecked:s,setCartItemsChecked:i}},_t=()=>{const t=Object(a["y"])(!1),c=()=>{t.value=!t.value};return{showCart:t,handleCartShowChange:c}};var ut={name:"Cart",setup(){const t=Object(l["c"])(),c=t.params.id,{calculations:e,productList:a,cleanCartProducts:n,changeCartItemInfo:s,changeCartItemChecked:o,setCartItemsChecked:i}=bt(c),{showCart:r,handleCartShowChange:d}=_t();return{calculations:e,shopId:c,productList:a,cleanCartProducts:n,changeCartItemInfo:s,changeCartItemChecked:o,setCartItemsChecked:i,showCart:r,handleCartShowChange:d}}};e("cdb1");const pt=H()(ut,[["render",dt],["__scopeId","data-v-5204b470"]]);var jt=pt;const ht=()=>{const t=Object(l["c"])(),c=Object(a["x"])({item:{}}),e=async()=>{const e=await Object(d["a"])("/api/shop/"+t.params.id);0===(null===e||void 0===e?void 0:e.errno)&&null!==e&&void 0!==e&&e.data&&(c.item=e.data)},{item:n}=Object(a["D"])(c);return{item:n,getItemData:e}},Ot=()=>{const t=Object(l["d"])(),c=()=>{t.back()};return c};var mt={name:"Shop",components:{ShopInfo:b["a"],Content:U,Cart:jt},setup(){const{item:t,getItemData:c}=ht(),e=Ot();return c(),{item:t,handleBackClick:e}}};e("9660");const Ct=H()(mt,[["render",r],["__scopeId","data-v-5121c098"]]);c["default"]=Ct},"75c9":function(t,c,e){"use strict";e.d(c,"a",(function(){return s}));var a=e("7a23"),n=e("5502");const s=t=>{const c=Object(n["b"])(),e=c.state.cartList,s=(t,e,a,n)=>{c.commit("changeCartItemInfo",{shopId:t,productId:e,productInfo:a,num:n})},o=Object(a["b"])(()=>{var c;const a=(null===(c=e[t])||void 0===c?void 0:c.productList)||{},n={};for(let t in a){const c=a[t];c.count>0&&(n[t]=c)}return n}),i=Object(a["b"])(()=>{var c;const a=(null===(c=e[t])||void 0===c?void 0:c.shopName)||"";return a}),r=Object(a["b"])(()=>{var c;const a=null===(c=e[t])||void 0===c?void 0:c.productList,n={total:0,price:0,allChecked:!0};if(a)for(let t in a){const c=a[t];n.total+=c.count,c.check&&(n.price+=c.count*c.price),c.count>0&&!c.check&&(n.allChecked=!1)}return n.price=n.price.toFixed(2),n});return{cartList:e,shopName:i,productList:o,calculations:r,changeCartItemInfo:s}}},9660:function(t,c,e){"use strict";e("2cfc")},a868:function(t,c,e){},cdb1:function(t,c,e){"use strict";e("07be")},d7d0:function(t,c,e){"use strict";var a=e("7a23");const n={class:"shop"},s=["src"],o={class:"shop__content__title"},i={class:"shop__content__tags"},r={class:"shop__content__tag"},l={class:"shop__content__tag"},d={class:"shop__content__tag"},b={class:"shop__content__highlight"};function _(t,c,e,_,u,p){return Object(a["t"])(),Object(a["f"])("div",n,[Object(a["g"])("img",{src:e.item.imgUrl,class:"shop__img"},null,8,s),Object(a["g"])("div",{class:Object(a["p"])({shop__content:!0,"shop__content--bordered":!e.hideBorder})},[Object(a["g"])("div",o,Object(a["C"])(e.item.name),1),Object(a["g"])("div",i,[Object(a["g"])("span",r,"月售: "+Object(a["C"])(e.item.sales),1),Object(a["g"])("span",l,"起送: "+Object(a["C"])(e.item.expressLimit),1),Object(a["g"])("span",d,"基础运费: "+Object(a["C"])(e.item.expressPrice),1)]),Object(a["g"])("p",b,Object(a["C"])(e.item.slogan),1)],2)])}var u={name:"ShopInfo",props:["item","hideBorder"]},p=(e("dc36"),e("6b0d")),j=e.n(p);const h=j()(u,[["render",_],["__scopeId","data-v-6cd9f502"]]);c["a"]=h},dc36:function(t,c,e){"use strict";e("0e6d")},e194:function(t,c,e){"use strict";e("a868")}}]);
//# sourceMappingURL=shop.ec153af2.js.map