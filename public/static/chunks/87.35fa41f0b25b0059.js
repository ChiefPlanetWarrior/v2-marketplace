"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87],{45924:function(t,r,e){e.d(r,{S:function(){return n}});var a=e(17249),s=e(42497);class n{get chainId(){return this._chainId}constructor(t,r,e){(0,a._)(this,"contractWrapper",void 0),(0,a._)(this,"storage",void 0),(0,a._)(this,"erc721",void 0),(0,a._)(this,"_chainId",void 0),(0,a._)(this,"transfer",(0,s.cS)(async(t,r)=>this.erc721.transfer.prepare(t,r))),(0,a._)(this,"setApprovalForAll",(0,s.cS)(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r))),(0,a._)(this,"setApprovalForToken",(0,s.cS)(async(t,r)=>s.aT.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await (0,s.cT)(t),r]}))),this.contractWrapper=t,this.storage=r,this.erc721=new s.at(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t){return t&&(t=await (0,s.cT)(t)),this.erc721.getOwned(t)}async getOwnedTokenIds(t){return t&&(t=await (0,s.cT)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}}},70087:function(t,r,e){e.r(r),e.d(r,{Multiwrap:function(){return c}});var a=e(17249),s=e(42497),n=e(45924),o=e(61744);e(13550),e(62822),e(71770),e(96200),e(54098),e(2162),e(64063);class c extends n.S{constructor(t,r,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.c_(t,r,o,n);super(p,e,i),(0,a._)(this,"abi",void 0),(0,a._)(this,"encoder",void 0),(0,a._)(this,"estimator",void 0),(0,a._)(this,"metadata",void 0),(0,a._)(this,"app",void 0),(0,a._)(this,"events",void 0),(0,a._)(this,"roles",void 0),(0,a._)(this,"royalties",void 0),(0,a._)(this,"owner",void 0),(0,a._)(this,"wrap",(0,s.cS)(async(t,r,e)=>{let a=await (0,s.d6)(r,this.storage),n=await (0,s.cT)(e||await this.contractWrapper.getSignerAddress()),o=await this.toTokenStructList(t);return s.aT.fromContractWrapper({contractWrapper:this.contractWrapper,method:"wrap",args:[o,a,n],parse:t=>{let r=this.contractWrapper.parseLogs("TokensWrapped",t?.logs);if(0===r.length)throw Error("TokensWrapped event not found");let e=r[0].args.tokenIdOfWrappedToken;return{id:e,receipt:t,data:()=>this.get(e)}}})})),(0,a._)(this,"unwrap",(0,s.cS)(async(t,r)=>{let e=await (0,s.cT)(r||await this.contractWrapper.getSignerAddress());return s.aT.fromContractWrapper({contractWrapper:this.contractWrapper,method:"unwrap",args:[t,e]})})),this.abi=s.e.parse(o||[]),this.metadata=new s.ah(this.contractWrapper,s.d5,this.storage),this.app=new s.aV(this.contractWrapper,this.metadata,this.storage),this.roles=new s.ai(this.contractWrapper,c.contractRoles),this.encoder=new s.ag(this.contractWrapper),this.estimator=new s.aN(this.contractWrapper),this.events=new s.aO(this.contractWrapper),this.royalties=new s.aj(this.contractWrapper,this.metadata),this.owner=new s.aS(this.contractWrapper)}async getWrappedContents(t){let r=await this.contractWrapper.readContract.getWrappedContents(t),e=[],a=[],n=[];for(let t of r)switch(t.tokenType){case 0:{let r=await (0,s.bV)(this.contractWrapper.getProvider(),t.assetContract);e.push({contractAddress:t.assetContract,quantity:o.formatUnits(t.totalAmount,r.decimals)});break}case 1:a.push({contractAddress:t.assetContract,tokenId:t.tokenId});break;case 2:n.push({contractAddress:t.assetContract,tokenId:t.tokenId,quantity:t.totalAmount.toString()})}return{erc20Tokens:e,erc721Tokens:a,erc1155Tokens:n}}async toTokenStructList(t){let r=[],e=this.contractWrapper.getProvider(),a=await this.contractWrapper.getSignerAddress();if(t.erc20Tokens)for(let a of t.erc20Tokens){let t=await (0,s.bU)(e,a.quantity,a.contractAddress),n=await (0,s.bZ)(this.contractWrapper,a.contractAddress,t);if(!n)throw Error(`ERC20 token with contract address "${a.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${a.contractAddress}").setAllowance("${this.getAddress()}", ${a.quantity});

`);r.push({assetContract:a.contractAddress,totalAmount:t,tokenId:0,tokenType:0})}if(t.erc721Tokens)for(let e of t.erc721Tokens){let t=await (0,s.cW)(this.contractWrapper.getProvider(),this.getAddress(),e.contractAddress,e.tokenId,a);if(!t)throw Error(`ERC721 token "${e.tokenId}" with contract address "${e.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${e.contractAddress}").setApprovalForToken("${this.getAddress()}", ${e.tokenId});

`);r.push({assetContract:e.contractAddress,totalAmount:0,tokenId:e.tokenId,tokenType:1})}if(t.erc1155Tokens)for(let e of t.erc1155Tokens){let t=await (0,s.cW)(this.contractWrapper.getProvider(),this.getAddress(),e.contractAddress,e.tokenId,a);if(!t)throw Error(`ERC1155 token "${e.tokenId}" with contract address "${e.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${e.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);r.push({assetContract:e.contractAddress,totalAmount:e.quantity,tokenId:e.tokenId,tokenType:2})}return r}async prepare(t,r,e){return s.aT.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,a._)(c,"contractRoles",["admin","transfer","minter","unwrap","asset"])}}]);