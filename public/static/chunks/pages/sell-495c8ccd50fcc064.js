(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6276],{67038:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sell",function(){return t(79274)}])},15676:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var a=t(85893);t(67294);var i=t(35289),o=t.n(i);function r(e){let{maxWidth:n,children:t}=e;return(0,a.jsx)("div",{className:"".concat(o().container," ").concat(o()[n]),children:t})}},3704:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var a=t(85893),i=t(13610);t(67294);var o=t(53487),r=t(31231),c=t(69700),s=t.n(c);function l(e){var n,t,c,l;let{nft:d}=e,{contract:_,isLoading:u}=(0,i.cqn)(o.YJ,"marketplace-v3"),{data:m,isLoading:f}=(0,i.aBe)(_,{tokenContract:o.f2,tokenId:d.metadata.id}),{data:p,isLoading:h}=(0,i.QQ5)(_,{tokenContract:o.f2,tokenId:d.metadata.id});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.CHu,{metadata:d.metadata,className:s().nftImage}),(0,a.jsxs)("p",{className:s().nftTokenId,children:["Token ID #",d.metadata.id]}),(0,a.jsx)("p",{className:s().nftName,children:d.metadata.name}),(0,a.jsx)("div",{className:s().priceContainer,children:u||f||h?(0,a.jsx)(r.Z,{width:"100%",height:"100%"}):m&&m[0]?(0,a.jsx)("div",{className:s().nftPriceContainer,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:s().nftPriceLabel,children:"Price"}),(0,a.jsx)("p",{className:s().nftPriceValue,children:"".concat(null===(n=m[0])||void 0===n?void 0:n.currencyValuePerToken.displayValue,"\n          ").concat(null===(t=m[0])||void 0===t?void 0:t.currencyValuePerToken.symbol)})]})}):p&&p[0]?(0,a.jsx)("div",{className:s().nftPriceContainer,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:s().nftPriceLabel,children:"Minimum Bid"}),(0,a.jsx)("p",{className:s().nftPriceValue,children:"".concat(null===(c=p[0])||void 0===c?void 0:c.minimumBidCurrencyValue.displayValue,"\n          ").concat(null===(l=p[0])||void 0===l?void 0:l.minimumBidCurrencyValue.symbol)})]})}):(0,a.jsx)("div",{className:s().nftPriceContainer,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:s().nftPriceLabel,children:"Price"}),(0,a.jsx)("p",{className:s().nftPriceValue,children:"Not for sale"})]})})})]})}},57467:function(e,n,t){"use strict";t.d(n,{Z:function(){return _}});var a=t(85893),i=t(41664),o=t.n(i);t(67294);var r=t(53487),c=t(31231),s=t(3704),l=t(60018),d=t.n(l);function _(e){let{isLoading:n,data:t,overrideOnclickBehavior:i,emptyText:l="No NFTs found for this collection."}=e;return(0,a.jsx)("div",{className:d().nftGridContainer,children:n?[...Array(20)].map((e,n)=>(0,a.jsx)("div",{className:d().nftContainer,children:(0,a.jsx)(c.Z,{width:"100%",height:"312px"},n)},n)):t&&t.length>0?t.map(e=>i?(0,a.jsx)("div",{className:d().nftContainer,onClick:()=>i(e),children:(0,a.jsx)(s.Z,{nft:e})},e.metadata.id):(0,a.jsx)(o(),{href:"/token/".concat(r.f2,"/").concat(e.metadata.id),className:d().nftContainer,children:(0,a.jsx)(s.Z,{nft:e})},e.metadata.id)):(0,a.jsx)("p",{children:l})})}},31231:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var a=t(85893);t(67294);var i=t(35425),o=t.n(i);function r(e){let{height:n,width:t}=e;return(0,a.jsx)("div",{style:{width:t,height:n,borderRadius:"inherit"},className:o().skeleton})}},79274:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var a=t(85893),i=t(13610),o=t(67294),r=t(15676),c=t(57467),s=t(53487),l=t(6175),d=t.n(l),_=t(87536),u=t(64100),m=t.n(u),f=t(21176),p=t.n(f),h=t(11163),x=t(86501),C=t(24655);function T(e){let{nft:n}=e,t=(0,h.useRouter)(),{contract:r}=(0,i.cqn)(s.YJ,"marketplace-v3"),{contract:c}=(0,i.cqn)(s.f2),{mutateAsync:l}=(0,i.U7J)(r),{mutateAsync:d}=(0,i.gZ8)(r),[u,f]=(0,o.useState)("direct"),{register:T,handleSubmit:k}=(0,_.cI)({defaultValues:{nftContractAddress:s.f2,tokenId:n.metadata.id,startDate:new Date,endDate:new Date,floorPrice:"0",buyoutPrice:"0"}});async function N(){let e=await (null==c?void 0:c.call("isApprovedForAll",[n.owner,s.YJ]));if(!e){let e=await (null==c?void 0:c.call("setApprovalForAll",[s.YJ,!0]));e&&x.ZP.success("Marketplace approval granted",{icon:"\uD83D\uDC4D",style:C.Z,position:"bottom-center"})}return!0}let{register:g,handleSubmit:j}=(0,_.cI)({defaultValues:{nftContractAddress:s.f2,tokenId:n.metadata.id,startDate:new Date,endDate:new Date,price:"0"}});async function b(e){await N();let n=await l({assetContractAddress:e.nftContractAddress,tokenId:e.tokenId,buyoutBidAmount:e.buyoutPrice,minimumBidAmount:e.floorPrice,startTimestamp:new Date(e.startDate),endTimestamp:new Date(e.endDate)});return n}async function v(e){await N();let n=await d({assetContractAddress:e.nftContractAddress,tokenId:e.tokenId,pricePerToken:e.price,startTimestamp:new Date(e.startDate),endTimestamp:new Date(e.endDate)});return n}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.x7,{position:"bottom-center",reverseOrder:!1}),(0,a.jsxs)("div",{className:m().saleInfoContainer,style:{marginTop:-42},children:[(0,a.jsxs)("div",{className:p().tabs,children:[(0,a.jsx)("h3",{className:"".concat(p().tab," \n        ").concat("direct"===u?p().activeTab:""),onClick:()=>f("direct"),children:"Direct"}),(0,a.jsx)("h3",{className:"".concat(p().tab," \n        ").concat("auction"===u?p().activeTab:""),onClick:()=>f("auction"),children:"Auction"})]}),(0,a.jsxs)("div",{className:"".concat("direct"===u?m().activeTabContent:p().tabContent),style:{flexDirection:"column"},children:[(0,a.jsx)("h4",{className:m().formSectionTitle,children:"When "}),(0,a.jsx)("legend",{className:m().legend,children:" Listing Starts on "}),(0,a.jsx)("input",{className:m().input,type:"datetime-local",...g("startDate"),"aria-label":"Auction Start Date"}),(0,a.jsx)("legend",{className:m().legend,children:" Listing Ends on "}),(0,a.jsx)("input",{className:m().input,type:"datetime-local",...g("endDate"),"aria-label":"Auction End Date"}),(0,a.jsx)("h4",{className:m().formSectionTitle,children:"Price "}),(0,a.jsx)("legend",{className:m().legend,children:" Price per token"}),(0,a.jsx)("input",{className:m().input,type:"number",step:1e-6,...g("price")}),(0,a.jsx)(i.tnh,{contractAddress:s.YJ,action:async()=>{await j(v)()},onError:e=>{(0,x.ZP)("Listed Failed! Reason: ".concat(e.cause),{icon:"❌",style:C.Z,position:"bottom-center"})},onSuccess:e=>{(0,x.ZP)("Listed Successfully!",{icon:"\uD83E\uDD73",style:C.Z,position:"bottom-center"}),t.push("/token/".concat(s.f2,"/").concat(n.metadata.id))},children:"Create Direct Listing"})]}),(0,a.jsxs)("div",{className:"".concat("auction"===u?m().activeTabContent:p().tabContent),style:{flexDirection:"column"},children:[(0,a.jsx)("h4",{className:m().formSectionTitle,children:"When "}),(0,a.jsx)("legend",{className:m().legend,children:" Auction Starts on "}),(0,a.jsx)("input",{className:m().input,type:"datetime-local",...T("startDate"),"aria-label":"Auction Start Date"}),(0,a.jsx)("legend",{className:m().legend,children:" Auction Ends on "}),(0,a.jsx)("input",{className:m().input,type:"datetime-local",...T("endDate"),"aria-label":"Auction End Date"}),(0,a.jsx)("h4",{className:m().formSectionTitle,children:"Price "}),(0,a.jsx)("legend",{className:m().legend,children:" Allow bids starting from "}),(0,a.jsx)("input",{className:m().input,step:1e-6,type:"number",...T("floorPrice")}),(0,a.jsx)("legend",{className:m().legend,children:" Buyout price "}),(0,a.jsx)("input",{className:m().input,type:"number",step:1e-6,...T("buyoutPrice")}),(0,a.jsx)(i.tnh,{contractAddress:s.YJ,action:async()=>await k(b)(),onError:e=>{(0,x.ZP)("Listed Failed! Reason: ".concat(e.cause),{icon:"❌",style:C.Z,position:"bottom-center"})},onSuccess:e=>{(0,x.ZP)("Listed Successfully!",{icon:"\uD83E\uDD73",style:C.Z,position:"bottom-center"}),t.push("/token/".concat(s.f2,"/").concat(n.metadata.id))},children:"Create Auction Listing"})]})]})]})}function k(){let{contract:e}=(0,i.cqn)(s.f2),n=(0,i.SFn)(),{data:t,isLoading:l}=(0,i.YZw)(e,n),[_,u]=(0,o.useState)();return(0,a.jsxs)(r.Z,{maxWidth:"lg",children:[(0,a.jsx)("h1",{children:"Sell NFTs"}),_?(0,a.jsxs)("div",{className:d().container,style:{marginTop:0},children:[(0,a.jsx)("div",{className:d().metadataContainer,children:(0,a.jsxs)("div",{className:d().imageContainer,children:[(0,a.jsx)(i.CHu,{metadata:_.metadata,className:d().image}),(0,a.jsx)("button",{onClick:()=>{u(void 0)},className:d().crossButton,children:"X"})]})}),(0,a.jsxs)("div",{className:d().listingContainer,children:[(0,a.jsx)("p",{children:"You’re about to list the following item for sale."}),(0,a.jsx)("h1",{className:d().title,children:_.metadata.name}),(0,a.jsxs)("p",{className:d().collectionName,children:["Token ID #",_.metadata.id]}),(0,a.jsx)("div",{className:d().pricingContainer,children:(0,a.jsx)(T,{nft:_})})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"Select which NFT you’d like to sell below."}),(0,a.jsx)(c.Z,{data:t,isLoading:l,overrideOnclickBehavior:e=>{u(e)},emptyText:"Looks like you don't own any NFTs in this collection. Head to the buy page to buy some!"})]})]})}},24655:function(e,n){"use strict";n.Z={borderRadius:"4px",background:"#222528",color:"#fff","white-space":"pre-wrap","word-break":"break-word"}},35289:function(e){e.exports={container:"Container_container__WAGEk",xs:"Container_xs__lmLxX",sm:"Container_sm__NxnH_",md:"Container_md__R9xsg",lg:"Container_lg__ri4gN",xl:"Container_xl__2fgyR"}},69700:function(e){e.exports={nftImage:"NFT_nftImage__XUpsb",nftTokenId:"NFT_nftTokenId__KPWzm",nftName:"NFT_nftName__El7OO",priceContainer:"NFT_priceContainer__Eh8FZ",nftPriceContainer:"NFT_nftPriceContainer__GBfIg",nftPriceLabel:"NFT_nftPriceLabel__NgamC",nftPriceValue:"NFT_nftPriceValue__bDpQk"}},35425:function(e){e.exports={skeleton:"Skeleton_skeleton__2C_Ou",pulse:"Skeleton_pulse__kM_6B"}},60018:function(e){e.exports={nftGridContainer:"Buy_nftGridContainer__d7KMb",nftContainer:"Buy_nftContainer__SfnF6",title:"Buy_title__pWos_"}},21176:function(e){e.exports={profileHeader:"Profile_profileHeader__arpuo",coverImage:"Profile_coverImage__yIjJ_",profilePicture:"Profile_profilePicture__fsn1m",profileName:"Profile_profileName__GAb9p",tabs:"Profile_tabs__KIjhj",tab:"Profile_tab__fUg_d",activeTab:"Profile_activeTab__405ra",tabContent:"Profile_tabContent__O8tOH",activeTabContent:"Profile_activeTabContent__HPUSR"}},64100:function(e){e.exports={title:"Sale_title__KY4qv",legend:"Sale_legend__EtwOE",input:"Sale_input__rrvct",formSectionTitle:"Sale_formSectionTitle__vui8X",activeTabContent:"Sale_activeTabContent__dxX_z"}},6175:function(e){e.exports={container:"Token_container__9s0fK",metadataContainer:"Token_metadataContainer__jhcGy",listingContainer:"Token_listingContainer__IhZxS",image:"Token_image__H7h2C",input:"Token_input__Odktg",contractMetadataContainer:"Token_contractMetadataContainer__juKmG",imageContainer:"Token_imageContainer__iA8Sc",crossButton:"Token_crossButton__kWnxP",collectionImage:"Token_collectionImage__niZfe",collectionName:"Token_collectionName__cFhKs",title:"Token_title__jJT0a",nftOwnerContainer:"Token_nftOwnerContainer__02bxs",nftOwnerImage:"Token_nftOwnerImage__vD_nJ",nftOwnerInfo:"Token_nftOwnerInfo__fGJDv",label:"Token_label__9Ed7k",nftOwnerAddress:"Token_nftOwnerAddress__3IWOZ",descriptionContainer:"Token_descriptionContainer__nhPLd",descriptionTitle:"Token_descriptionTitle__C0j5Z",traitsContainer:"Token_traitsContainer__tFYqd",traitContainer:"Token_traitContainer___o8Rp",eventsContainer:"Token_eventsContainer__T_8WP",traitValue:"Token_traitValue__YKY3f",traitName:"Token_traitName__2FHmj",eventContainer:"Token_eventContainer__ubrC_",txHashArrow:"Token_txHashArrow__IHgy1",pricingContainer:"Token_pricingContainer__WZR87",pricingInfo:"Token_pricingInfo__aZRmu",pricingValue:"Token_pricingValue__5ZXWr",buyButton:"Token_buyButton__AqcrL",listingTimeContainer:"Token_listingTimeContainer__KYs3v",listingTime:"Token_listingTime__TdHHY",or:"Token_or__N9F8M",btn:"Token_btn__HzDBb"}}},function(e){e.O(0,[1678,9774,2888,179],function(){return e(e.s=67038)}),_N_E=e.O()}]);