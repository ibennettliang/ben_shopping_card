(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orderConfirmation"],{"33fc":function(t,c,e){"use strict";e("4bb5")},4165:function(t,c,e){"use strict";e("c829")},"4bb5":function(t,c,e){},"4c16":function(t,c,e){"use strict";e("ad33")},"565b":function(t,c,e){"use strict";e("b9e2")},"75c9":function(t,c,e){"use strict";e.d(c,"a",(function(){return s}));var n=e("7a23"),a=e("5502");const s=t=>{const c=Object(a["b"])(),e=c.state.cartList,s=(t,e,n,a)=>{c.commit("changeCartItemInfo",{shopId:t,productId:e,productInfo:n,num:a})},o=Object(n["b"])(()=>{var c;const n=(null===(c=e[t])||void 0===c?void 0:c.productList)||{},a={};for(let t in n){const c=n[t];c.count>0&&(a[t]=c)}return a}),r=Object(n["b"])(()=>{var c;const n=(null===(c=e[t])||void 0===c?void 0:c.shopName)||"";return n}),i=Object(n["b"])(()=>{var c;const n=null===(c=e[t])||void 0===c?void 0:c.productList,a={total:0,price:0,allChecked:!0};if(n)for(let t in n){const c=n[t];a.total+=c.count,c.check&&(a.price+=c.count*c.price),c.count>0&&!c.check&&(a.allChecked=!1)}return a.price=a.price.toFixed(2),a});return{cartList:e,shopName:r,productList:o,calculations:i,changeCartItemInfo:s}}},ad33:function(t,c,e){},b957:function(t,c,e){"use strict";e.r(c);var n=e("7a23");const a={class:"wrapper"};function s(t,c,e,s,o,r){const i=Object(n["A"])("TopArea"),d=Object(n["A"])("ProductList"),_=Object(n["A"])("Order");return Object(n["t"])(),Object(n["f"])("div",a,[Object(n["j"])(i),Object(n["j"])(d),Object(n["j"])(_)])}const o={class:"top"},r={class:"top__header"},i=Object(n["i"])(" 确认订单 "),d=Object(n["h"])('<div class="top__receiver" data-v-015ffa62><div class="top__receiver__title" data-v-015ffa62>收货地址</div><div class="top__receiver__address" data-v-015ffa62>屌丝市屌丝区屌丝小区1楼</div><div class="top__receiver__info" data-v-015ffa62><span class="top__receiver__info__name" data-v-015ffa62>benenttliang</span><span class="top__receiver__info__name" data-v-015ffa62>18349244816</span></div><div class="iconfont top__receiver__icon" data-v-015ffa62></div></div>',1);function _(t,c,e,a,s,_){return Object(n["t"])(),Object(n["f"])("div",o,[Object(n["g"])("div",r,[Object(n["g"])("div",{class:"iconfont top__header__back",onClick:c[0]||(c[0]=(...t)=>a.handleBackClick&&a.handleBackClick(...t))},"  "),i]),d])}var l=e("6605"),b={name:"TopArea",setup(){const t=Object(l["d"])(),c=()=>{t.back()};return{handleBackClick:c}}},u=(e("565b"),e("6b0d")),p=e.n(u);const O=p()(b,[["render",_],["__scopeId","data-v-015ffa62"]]);var j=O;const v=t=>(Object(n["w"])("data-v-939cb15e"),t=t(),Object(n["u"])(),t),f={class:"products"},m={class:"products__title"},h={class:"products__wrapper"},C={class:"products__list"},g=["src"],k={class:"products__item__detail"},w={class:"products__item__title"},I={class:"products__item__price"},L=v(()=>Object(n["g"])("span",{class:"products__item__yen"},"¥ ",-1)),N={class:"products__item__total"},y=v(()=>Object(n["g"])("span",{class:"products__item__yen"},"¥ ",-1));function A(t,c,e,a,s,o){return Object(n["t"])(),Object(n["f"])("div",f,[Object(n["g"])("div",m,Object(n["C"])(a.shopName),1),Object(n["g"])("div",h,[Object(n["g"])("div",C,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(a.productList,t=>(Object(n["t"])(),Object(n["f"])("div",{key:t._id,class:"products__item"},[Object(n["g"])("img",{class:"products__item__img",src:t.imgUrl},null,8,g),Object(n["g"])("div",k,[Object(n["g"])("h4",w,Object(n["C"])(t.name),1),Object(n["g"])("p",I,[Object(n["g"])("span",null,[L,Object(n["i"])(" "+Object(n["C"])(t.price)+" x "+Object(n["C"])(t.count),1)]),Object(n["g"])("span",N,[y,Object(n["i"])(" "+Object(n["C"])((t.price*t.count).toFixed(2)),1)])])])]))),128))])])])}var S=e("75c9"),x={name:"ProductList",setup(){const t=Object(l["c"])(),c=t.params.id,{shopName:e,productList:n}=Object(S["a"])(c);return{shopName:e,productList:n}}};e("4c16");const B=p()(x,[["render",A],["__scopeId","data-v-939cb15e"]]);var P=B;const T=t=>(Object(n["w"])("data-v-541c5eb8"),t=t(),Object(n["u"])(),t),F={class:"order"},J={class:"order__price"},z=Object(n["i"])(" 实付金额 "),D=T(()=>Object(n["g"])("h3",{class:"mask__content__title"},"确认要离开收银台？",-1)),G=T(()=>Object(n["g"])("p",{class:"mask__content__desc"},"请尽快完成支付，否则将被取消",-1)),K={class:"mask__content__btns"};function U(t,c,e,a,s,o){return Object(n["t"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("div",F,[Object(n["g"])("div",J,[z,Object(n["g"])("b",null,"¥"+Object(n["C"])(a.calculations.price),1)]),Object(n["g"])("div",{class:"order__btn",onClick:c[0]||(c[0]=()=>a.handleShowConfirmChange(!0))}," 提交订单 ")]),Object(n["K"])(Object(n["g"])("div",{class:"mask",onClick:c[4]||(c[4]=()=>a.handleShowConfirmChange(!1))},[Object(n["g"])("div",{class:"mask__content",onClick:c[3]||(c[3]=Object(n["L"])(()=>{},["stop"]))},[D,G,Object(n["g"])("div",K,[Object(n["g"])("div",{class:"mask__content__btn mask__content__btn--first",onClick:c[1]||(c[1]=()=>a.handleConfirmOrder(!0))}," 取消订单 "),Object(n["g"])("div",{class:"mask__content__btn mask__content__btn--last",onClick:c[2]||(c[2]=()=>a.handleConfirmOrder(!1))}," 确认支付 ")])])],512),[[n["G"],a.showConfirm]])],64)}var q=e("5502"),E=e("b775");const H=(t,c,e)=>{const n=Object(l["d"])(),a=Object(q["b"])(),s=async s=>{const o=[];for(let t in e.value){const c=e.value[t];o.push({id:parseInt(c._id,10),num:c.count})}try{const e=await Object(E["b"])("/api/order",{addressId:1,shopId:t,shopName:c.value,isCanceled:s,products:o});0===(null===e||void 0===e?void 0:e.errno)&&(a.commit("clearCartData",t),n.push({name:"OrderList"}))}catch(r){}};return{handleConfirmOrder:s}},M=()=>{const t=Object(n["y"])(!1),c=c=>{t.value=c};return{showConfirm:t,handleShowConfirmChange:c}};var Q={name:"Order",setup(){const t=Object(l["c"])(),c=parseInt(t.params.id,10),{calculations:e,shopName:n,productList:a}=Object(S["a"])(c),{handleConfirmOrder:s}=H(c,n,a),{showConfirm:o,handleShowConfirmChange:r}=M();return{showConfirm:o,handleShowConfirmChange:r,calculations:e,handleConfirmOrder:s}}};e("4165");const R=p()(Q,[["render",U],["__scopeId","data-v-541c5eb8"]]);var V=R,W={name:"OrderConfirmation",components:{TopArea:j,ProductList:P,Order:V}};e("33fc");const X=p()(W,[["render",s],["__scopeId","data-v-1f6731da"]]);c["default"]=X},b9e2:function(t,c,e){},c829:function(t,c,e){}}]);
//# sourceMappingURL=orderConfirmation.bc48d34a.js.map