"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[523],{4523:(s,e,a)=>{a.r(e),a.d(e,{default:()=>n});var t=a(5043),r=a(8891),c=a(579);const n=()=>{const[s,e]=(0,t.useState)([]),[a,n]=(0,t.useState)(!0),[l,d]=(0,t.useState)(null),[o,i]=(0,t.useState)(""),[u,b]=(0,t.useState)([]),[h,p]=(0,t.useState)(null),[m,j]=(0,t.useState)(!1),[x,N]=(0,t.useState)(!1);(0,t.useEffect)((()=>{(async()=>{const s=localStorage.getItem("authToken");n(!0);try{const a=await fetch("https://prasad-gz5p.onrender.com/api/brands/",{headers:{Authorization:`Token ${s}`}});if(!a.ok)throw new Error("Failed to fetch brands data");const t=await a.json();e(t)}catch(l){d(l.message)}finally{n(!1)}})()}),[]);const g=s=>{(async s=>{j(!0);try{const e=await fetch("https://prasad-gz5p.onrender.com/api/products/");if(!e.ok)throw new Error("Network response was not ok");const a=(await e.json()).filter((e=>e.brandID===s));console.log(a),b(a),p(s),N(!0)}catch(e){d(e.message)}finally{j(!1)}})(s)};if(a)return(0,c.jsx)("div",{className:"loading-messageb30",children:(0,c.jsx)(r.A,{})});if(l)return(0,c.jsxs)("div",{className:"error-messageb30",children:["Error: ",l]});const f=s.filter((s=>s.brandName.toLowerCase().includes(o.toLowerCase())));return(0,c.jsx)("div",{className:"brand-list-containerb30",children:x?(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"selectasupplierb30",children:(0,c.jsx)("h3",{children:"Please select a Supplier to Buy Products"})}),(0,c.jsxs)("div",{className:"back-button-contb30",children:[(0,c.jsx)("button",{className:"back-buttonb30",onClick:()=>{N(!1),b([]),p(null)},children:"Back"}),(0,c.jsxs)("h2",{className:"product-headb30",children:["Products for Brand ID: ",h]})]}),(0,c.jsx)("div",{className:"product-list-card-containerb30",children:u.map((s=>(0,c.jsxs)("div",{className:"product-list-cardb30",children:[(0,c.jsx)("img",{src:s.productImage,alt:s.productCategory,className:"product-list-imageb30"}),(0,c.jsx)("h2",{className:"product-list-titleb30",children:s.productCategory}),(0,c.jsx)("p",{className:"product-list-descriptionb30",children:s.productDescription}),(0,c.jsxs)("p",{className:"product-list-volumeb30",children:["Volume: ",s.productVolume]}),(0,c.jsxs)("p",{className:"product-list-priceb30",children:["Price: $",s.productPrice]})]},s.productid)))})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{className:"brand-list-titleb30",children:"Brand List"}),(0,c.jsx)("input",{type:"text",placeholder:"Search brands...",className:"search-barb30",value:o,onChange:s=>i(s.target.value)}),(0,c.jsx)("div",{className:"card-containerb30",children:f.map((s=>(0,c.jsxs)("div",{className:"brand-cardb30",children:[(0,c.jsx)("div",{className:"logo-containerb30",children:(0,c.jsx)("img",{src:s.brandLogo,alt:s.brandName,className:"brand-logob30"})}),(0,c.jsx)("h2",{className:"brand-nameb30",children:s.brandName}),(0,c.jsx)("button",{className:"update-buttonb30",onClick:()=>g(s.brandID),children:"View Products"})]},s.brandID)))})]})})}},8891:(s,e,a)=>{a.d(e,{A:()=>r});a(5043);var t=a(579);const r=()=>(0,t.jsx)("div",{className:"dot-spinnerb26",children:Array.from({length:8},((s,e)=>(0,t.jsx)("div",{className:`dot-spinner__dotb26 dot-spinner__dotb26--${e+1}`},e)))})}}]);
//# sourceMappingURL=523.85e32fdc.chunk.js.map