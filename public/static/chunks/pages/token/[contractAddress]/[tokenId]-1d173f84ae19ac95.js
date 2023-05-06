(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7276],{62131:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/token/[contractAddress]/[tokenId]",function(){return n(88988)}])},15676:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(85893);n(67294);var i=n(35289),r=n.n(i);function s(e){let{maxWidth:t,children:n}=e;return(0,a.jsx)("div",{className:"".concat(r().container," ").concat(r()[t]),children:n})}},31231:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(85893);n(67294);var i=n(35425),r=n.n(i);function s(e){let{height:t,width:n}=e;return(0,a.jsx)("div",{style:{width:n,height:t,borderRadius:"inherit"},className:r().skeleton})}},88988:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v},default:function(){return x}});var a=n(85893),i=n(13610),r=n(67294),s=n(15676),o=n(53487),l=n(6175),c=n.n(l),d=n(41664),u=n.n(d),m=n(67162),p=n(31231),f=n(86501),h=n(24655);let[g,_]=[(0,m.Z)(),(0,m.Z)()];var v=!0;function x(e){var t,n,l,d,m,v,x,y,b;let{nft:N,contractMetadata:k}=e,[j,w]=(0,r.useState)(),{contract:C,isLoading:T}=(0,i.cqn)(o.YJ,"marketplace-v3"),{contract:E}=(0,i.cqn)(o.f2),{data:O,isLoading:I}=(0,i.aBe)(C,{tokenContract:o.f2,tokenId:N.metadata.id}),{data:Z,isLoading:P}=(0,i.QQ5)(C,{tokenContract:o.f2,tokenId:N.metadata.id}),{data:A,isLoading:F}=(0,i.pc1)(E,"Transfer",{queryFilter:{filters:{tokenId:N.metadata.id},order:"desc"}});async function V(){let e;if(!j){(0,f.ZP)("Please enter a bid value",{icon:"❌",style:h.Z,position:"bottom-center"});return}if(null==Z?void 0:Z[0])e=await (null==C?void 0:C.englishAuctions.makeBid(Z[0].id,j));else if(null==O?void 0:O[0])e=await (null==C?void 0:C.offers.makeOffer({assetContractAddress:o.f2,tokenId:N.metadata.id,totalPrice:j}));else throw Error("No valid listing found for this NFT");return e}async function H(){let e;if(null==Z?void 0:Z[0])e=await (null==C?void 0:C.englishAuctions.buyoutAuction(Z[0].id));else if(null==O?void 0:O[0])e=await (null==C?void 0:C.directListings.buyFromListing(O[0].id,1));else throw Error("No valid listing found for this NFT");return e}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.x7,{position:"bottom-center",reverseOrder:!1}),(0,a.jsx)(s.Z,{maxWidth:"lg",children:(0,a.jsxs)("div",{className:c().container,children:[(0,a.jsxs)("div",{className:c().metadataContainer,children:[(0,a.jsx)(i.CHu,{metadata:N.metadata,className:c().image}),(0,a.jsxs)("div",{className:c().descriptionContainer,children:[(0,a.jsx)("h3",{className:c().descriptionTitle,children:"Description"}),(0,a.jsx)("p",{className:c().description,children:N.metadata.description}),(0,a.jsx)("h3",{className:c().descriptionTitle,children:"Traits"}),(0,a.jsx)("div",{className:c().traitsContainer,children:Object.entries((null==N?void 0:null===(t=N.metadata)||void 0===t?void 0:t.attributes)||{}).map(e=>{let[t,n]=e;return(0,a.jsxs)("div",{className:c().traitContainer,children:[(0,a.jsx)("p",{className:c().traitName,children:t}),(0,a.jsx)("p",{className:c().traitValue,children:(null==n?void 0:n.toString())||""})]},t)})}),(0,a.jsx)("h3",{className:c().descriptionTitle,children:"History"}),(0,a.jsx)("div",{className:c().traitsContainer,children:null==A?void 0:A.map((e,t)=>{var n,i,r,s;return(0,a.jsxs)("div",{className:c().eventsContainer,children:[(0,a.jsxs)("div",{className:c().eventContainer,children:[(0,a.jsx)("p",{className:c().traitName,children:"Event"}),(0,a.jsx)("p",{className:c().traitValue,children:t===A.length-1?"Mint":"Transfer"})]}),(0,a.jsxs)("div",{className:c().eventContainer,children:[(0,a.jsx)("p",{className:c().traitName,children:"From"}),(0,a.jsxs)("p",{className:c().traitValue,children:[null===(n=e.data.from)||void 0===n?void 0:n.slice(0,4),"...",null===(i=e.data.from)||void 0===i?void 0:i.slice(-2)]})]}),(0,a.jsxs)("div",{className:c().eventContainer,children:[(0,a.jsx)("p",{className:c().traitName,children:"To"}),(0,a.jsxs)("p",{className:c().traitValue,children:[null===(r=e.data.to)||void 0===r?void 0:r.slice(0,4),"...",null===(s=e.data.to)||void 0===s?void 0:s.slice(-2)]})]}),(0,a.jsx)("div",{className:c().eventContainer,children:(0,a.jsx)(u(),{className:c().txHashArrow,href:"".concat(o.t0,"/tx/").concat(e.transaction.transactionHash),target:"_blank",children:"↗"})})]},e.transaction.transactionHash)})})]})]}),(0,a.jsxs)("div",{className:c().listingContainer,children:[k&&(0,a.jsxs)("div",{className:c().contractMetadataContainer,children:[(0,a.jsx)(i.W85,{src:k.image,className:c().collectionImage}),(0,a.jsx)("p",{className:c().collectionName,children:k.name})]}),(0,a.jsx)("h1",{className:c().title,children:N.metadata.name}),(0,a.jsxs)("p",{className:c().collectionName,children:["Token ID #",N.metadata.id]}),(0,a.jsxs)(u(),{href:"/profile/".concat(N.owner),className:c().nftOwnerContainer,children:[(0,a.jsx)("div",{className:c().nftOwnerImage,style:{background:"linear-gradient(90deg, ".concat(g,", ").concat(_,")")}}),(0,a.jsxs)("div",{className:c().nftOwnerInfo,children:[(0,a.jsx)("p",{className:c().label,children:"Current Owner"}),(0,a.jsxs)("p",{className:c().nftOwnerAddress,children:[N.owner.slice(0,8),"...",N.owner.slice(-4)]})]})]}),(0,a.jsx)("div",{className:c().pricingContainer,children:(0,a.jsxs)("div",{className:c().pricingInfo,children:[(0,a.jsx)("p",{className:c().label,children:"Price"}),(0,a.jsx)("div",{className:c().pricingValue,children:T||I||P?(0,a.jsx)(p.Z,{width:"120",height:"24"}):(0,a.jsx)(a.Fragment,{children:O&&O[0]?(0,a.jsxs)(a.Fragment,{children:[null===(n=O[0])||void 0===n?void 0:n.currencyValuePerToken.displayValue," "+(null===(l=O[0])||void 0===l?void 0:l.currencyValuePerToken.symbol)]}):Z&&Z[0]?(0,a.jsxs)(a.Fragment,{children:[null===(d=Z[0])||void 0===d?void 0:d.buyoutCurrencyValue.displayValue," "+(null===(m=Z[0])||void 0===m?void 0:m.buyoutCurrencyValue.symbol)]}):"Not for sale"})}),(0,a.jsx)("div",{children:P?(0,a.jsx)(p.Z,{width:"120",height:"24"}):(0,a.jsx)(a.Fragment,{children:Z&&Z[0]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:c().label,style:{marginTop:12},children:"Bids starting from"}),(0,a.jsxs)("div",{className:c().pricingValue,children:[null===(v=Z[0])||void 0===v?void 0:v.minimumBidCurrencyValue.displayValue," "+(null===(x=Z[0])||void 0===x?void 0:x.minimumBidCurrencyValue.symbol)]})]})})})]})}),T||I||P?(0,a.jsx)(p.Z,{width:"100%",height:"164"}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.tnh,{contractAddress:o.YJ,action:async()=>await H(),className:c().btn,onSuccess:()=>{(0,f.ZP)("Purchase success!",{icon:"✅",style:h.Z,position:"bottom-center"})},onError:e=>{(0,f.ZP)("Purchase failed! Reason: ".concat(e.message),{icon:"❌",style:h.Z,position:"bottom-center"})},children:"Buy at asking price"}),(0,a.jsx)("div",{className:"".concat(c().listingTimeContainer," ").concat(c().or),children:(0,a.jsx)("p",{className:c().listingTime,children:"or"})}),(0,a.jsx)("input",{className:c().input,defaultValue:(null==Z?void 0:null===(y=Z[0])||void 0===y?void 0:null===(b=y.minimumBidCurrencyValue)||void 0===b?void 0:b.displayValue)||0,type:"number",step:1e-6,onChange:e=>{w(e.target.value)}}),(0,a.jsx)(i.tnh,{contractAddress:o.YJ,action:async()=>await V(),className:c().btn,onSuccess:()=>{(0,f.ZP)("Bid success!",{icon:"✅",style:h.Z,position:"bottom-center"})},onError:e=>{console.log(e),(0,f.ZP)("Bid failed! Reason: ".concat(e.message),{icon:"❌",style:h.Z,position:"bottom-center"})},children:"Place bid"})]})]})]})})]})}},67162:function(e,t,n){"use strict";function a(){let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}n.d(t,{Z:function(){return a}})},24655:function(e,t){"use strict";t.Z={borderRadius:"4px",background:"#222528",color:"#fff","white-space":"pre-wrap","word-break":"break-word"}},35289:function(e){e.exports={container:"Container_container__WAGEk",xs:"Container_xs__lmLxX",sm:"Container_sm__NxnH_",md:"Container_md__R9xsg",lg:"Container_lg__ri4gN",xl:"Container_xl__2fgyR"}},35425:function(e){e.exports={skeleton:"Skeleton_skeleton__2C_Ou",pulse:"Skeleton_pulse__kM_6B"}},6175:function(e){e.exports={container:"Token_container__9s0fK",metadataContainer:"Token_metadataContainer__jhcGy",listingContainer:"Token_listingContainer__IhZxS",image:"Token_image__H7h2C",input:"Token_input__Odktg",contractMetadataContainer:"Token_contractMetadataContainer__juKmG",imageContainer:"Token_imageContainer__iA8Sc",crossButton:"Token_crossButton__kWnxP",collectionImage:"Token_collectionImage__niZfe",collectionName:"Token_collectionName__cFhKs",title:"Token_title__jJT0a",nftOwnerContainer:"Token_nftOwnerContainer__02bxs",nftOwnerImage:"Token_nftOwnerImage__vD_nJ",nftOwnerInfo:"Token_nftOwnerInfo__fGJDv",label:"Token_label__9Ed7k",nftOwnerAddress:"Token_nftOwnerAddress__3IWOZ",descriptionContainer:"Token_descriptionContainer__nhPLd",descriptionTitle:"Token_descriptionTitle__C0j5Z",traitsContainer:"Token_traitsContainer__tFYqd",traitContainer:"Token_traitContainer___o8Rp",eventsContainer:"Token_eventsContainer__T_8WP",traitValue:"Token_traitValue__YKY3f",traitName:"Token_traitName__2FHmj",eventContainer:"Token_eventContainer__ubrC_",txHashArrow:"Token_txHashArrow__IHgy1",pricingContainer:"Token_pricingContainer__WZR87",pricingInfo:"Token_pricingInfo__aZRmu",pricingValue:"Token_pricingValue__5ZXWr",buyButton:"Token_buyButton__AqcrL",listingTimeContainer:"Token_listingTimeContainer__KYs3v",listingTime:"Token_listingTime__TdHHY",or:"Token_or__N9F8M",btn:"Token_btn__HzDBb"}},86501:function(e,t,n){"use strict";let a,i;n.d(t,{x7:function(){return ei},ZP:function(){return er}});var r,s=n(67294);let o={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let n="",a="",i="";for(let r in e){let s=e[r];"@"==r[0]?"i"==r[1]?n=r+" "+s+";":a+="f"==r[1]?m(s,r):r+"{"+m(s,"k"==r[1]?"":t)+"}":"object"==typeof s?a+=m(s,t?t.replace(/([^,])+/g,e=>r.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):r):null!=s&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=m.p?m.p(r,s):r+":"+s+";")}return n+(t&&i?t+"{"+i+"}":i)+a},p={},f=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+f(e[n]);return t}return e},h=(e,t,n,a,i)=>{var r,s;let o=f(e),l=p[o]||(p[o]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(o));if(!p[l]){let t=o!==e?e:(e=>{let t,n,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(n=t[3].replace(u," ").trim(),a.unshift(a[0][n]=a[0][n]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);p[l]=m(i?{["@keyframes "+l]:t}:t,n?"":"."+l)}let h=n&&p.g?p.g:null;return n&&(p.g=p[l]),r=p[l],s=t,h?s.data=s.data.replace(h,r):-1===s.data.indexOf(r)&&(s.data=a?r+s.data:s.data+r),l},g=(e,t,n)=>e.reduce((e,a,i)=>{let r=t[i];if(r&&r.call){let e=r(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;r=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==r?"":r)},"");function _(e){let t=this||{},n=e.call?e(t.p):e;return h(n.unshift?n.raw?g(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,l(t.target),t.g,t.o,t.k)}_.bind({g:1});let v,x,y,b=_.bind({k:1});function N(e,t){let n=this||{};return function(){let a=arguments;function i(r,s){let o=Object.assign({},r),l=o.className||i.className;n.p=Object.assign({theme:x&&x()},o),n.o=/ *go\d+/.test(l),o.className=_.apply(n,a)+(l?" "+l:""),t&&(o.ref=s);let c=e;return e[0]&&(c=o.as||e,delete o.as),y&&c[0]&&y(o),v(c,o)}return t?t(i):i}}var k=e=>"function"==typeof e,j=(e,t)=>k(e)?e(t):e,w=(a=0,()=>(++a).toString()),C=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},T=new Map,E=e=>{if(T.has(e))return;let t=setTimeout(()=>{T.delete(e),A({type:4,toastId:e})},1e3);T.set(e,t)},O=e=>{let t=T.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&O(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return e.toasts.find(e=>e.id===n.id)?I(e,{type:1,toast:n}):I(e,{type:0,toast:n});case 3:let{toastId:a}=t;return a?E(a):e.toasts.forEach(e=>{E(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},Z=[],P={toasts:[],pausedAt:void 0},A=e=>{P=I(P,e),Z.forEach(e=>{e(P)})},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},V=(e={})=>{let[t,n]=(0,s.useState)(P);(0,s.useEffect)(()=>(Z.push(n),()=>{let e=Z.indexOf(n);e>-1&&Z.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var n,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||F[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},H=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||w()}),$=e=>(t,n)=>{let a=H(t,e,n);return A({type:2,toast:a}),a.id},B=(e,t)=>$("blank")(e,t);B.error=$("error"),B.success=$("success"),B.loading=$("loading"),B.custom=$("custom"),B.dismiss=e=>{A({type:3,toastId:e})},B.remove=e=>A({type:4,toastId:e}),B.promise=(e,t,n)=>{let a=B.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(B.success(j(t.success,e),{id:a,...n,...null==n?void 0:n.success}),e)).catch(e=>{B.error(j(t.error,e),{id:a,...n,...null==n?void 0:n.error})}),e};var D=(e,t)=>{A({type:1,toast:{id:e,height:t}})},M=()=>{A({type:5,time:Date.now()})},S=e=>{let{toasts:t,pausedAt:n}=V(e);(0,s.useEffect)(()=>{if(n)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(n<0){t.visible&&B.dismiss(t.id);return}return setTimeout(()=>B.dismiss(t.id),n)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,n]);let a=(0,s.useCallback)(()=>{n&&A({type:6,time:Date.now()})},[n]),i=(0,s.useCallback)((e,n)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:r}=n||{},s=t.filter(t=>(t.position||r)===(e.position||r)&&t.height),o=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<o&&e.visible).length;return s.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:D,startPause:M,endPause:a,calculateOffset:i}}},L=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,z=N("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,R=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y=N("div")`
  position: absolute;
`,W=N("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=N("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:n,iconTheme:a}=e;return void 0!==t?"string"==typeof t?s.createElement(q,null,t):t:"blank"===n?null:s.createElement(W,null,s.createElement(z,{...a}),"loading"!==n&&s.createElement(Y,null,"error"===n?s.createElement(L,{...a}):s.createElement(R,{...a})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,K=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,X=N("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=N("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,U=(e,t)=>{let n=e.includes("top")?1:-1,[a,i]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(n),K(n)];return{animation:t?`${b(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=s.memo(({toast:e,position:t,style:n,children:a})=>{let i=e.height?U(e.position||t||"top-center",e.visible):{opacity:0},r=s.createElement(J,{toast:e}),o=s.createElement(Q,{...e.ariaProps},j(e.message,e));return s.createElement(X,{className:e.className,style:{...i,...n,...e.style}},"function"==typeof a?a({icon:r,message:o}):s.createElement(s.Fragment,null,r,o))});r=s.createElement,m.p=void 0,v=r,x=void 0,y=void 0;var et=({id:e,className:t,style:n,onHeightUpdate:a,children:i})=>{let r=s.useCallback(t=>{if(t){let n=()=>{a(e,t.getBoundingClientRect().height)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return s.createElement("div",{ref:r,className:t,style:n},i)},en=(e,t)=>{let n=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...a}},ea=_`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:a,children:i,containerStyle:r,containerClassName:o})=>{let{toasts:l,handlers:c}=S(n);return s.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...r},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(n=>{let r=n.position||t,o=en(r,c.calculateOffset(n,{reverseOrder:e,gutter:a,defaultPosition:t}));return s.createElement(et,{id:n.id,key:n.id,onHeightUpdate:c.updateHeight,className:n.visible?ea:"",style:o},"custom"===n.type?j(n.message,n):i?i(n):s.createElement(ee,{toast:n,position:r}))}))},er=B}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=62131)}),_N_E=e.O()}]);