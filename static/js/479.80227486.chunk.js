"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[479,249,630,775,156],{4479:(e,s,a)=>{a.r(s),a.d(s,{default:()=>g});var t=a(5043),n=a(3216),o=a(3775),r=a(8249),i=a(579);const l=(0,t.lazy)((()=>a.e(523).then(a.bind(a,4523)))),c=(0,t.lazy)((()=>a.e(799).then(a.bind(a,3799)))),d=(0,t.lazy)((()=>a.e(734).then(a.bind(a,6734)))),u=(0,t.lazy)((()=>a.e(323).then(a.bind(a,1323)))),m=(0,t.lazy)((()=>a.e(299).then(a.bind(a,9680)))),h=(0,t.lazy)((()=>a.e(407).then(a.bind(a,5407)))),p=(0,t.lazy)((()=>a.e(298).then(a.bind(a,6298)))),g=()=>{const[e,s]=(0,t.useState)({username:"",mobile_number:""}),[a,g]=(0,t.useState)(!!localStorage.getItem("authToken")),[j,b]=(0,t.useState)(null);(0,t.useEffect)((()=>{a&&(async()=>{const e=localStorage.getItem("authToken");try{const a=await fetch("https://prasad-gz5p.onrender.com/api/user/details/",{headers:{Authorization:`Token ${e}`}});if(!a.ok)throw new Error("Failed to fetch customer details");const t=await a.json();s({username:t.username,mobile_number:t.mobile_number})}catch(j){b(j.message)}})()}),[a]);return(0,i.jsxs)(i.Fragment,{children:[a&&(0,i.jsx)(t.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading Navbar..."}),children:(0,i.jsx)(m,{userName:e.username,onLogout:async()=>{const e=localStorage.getItem("authToken");try{await fetch("https://prasad-gz5p.onrender.com/api/logout/",{method:"POST",headers:{Authorization:`Token ${e}`,"Content-Type":"application/json"}}),localStorage.removeItem("authToken"),g(!1)}catch(j){console.error("Logout failed:",j)}},className:"nav-styles"})}),(0,i.jsx)(t.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:(0,i.jsxs)(n.BV,{children:[(0,i.jsx)(n.qh,{path:"/",element:(0,i.jsx)(n.C5,{to:a?"/bbrands":"/login"})}),(0,i.jsx)(n.qh,{path:"/login",element:a?(0,i.jsx)(n.C5,{to:"/bbrands"}):(0,i.jsx)(r.default,{onLoginSuccess:()=>{g(!0)}})}),(0,i.jsx)(n.qh,{path:"/register",element:(0,i.jsx)(o.default,{})}),(0,i.jsx)(n.qh,{path:"/bbrands",element:a?(0,i.jsx)(l,{}):(0,i.jsx)(n.C5,{to:"/login"})}),(0,i.jsx)(n.qh,{path:"/border-history",element:a?(0,i.jsx)(p,{}):(0,i.jsx)(n.C5,{to:"/login"})}),(0,i.jsx)(n.qh,{path:"/bView-Cart",element:a?(0,i.jsx)(c,{}):(0,i.jsx)(n.C5,{to:"/login"})}),(0,i.jsx)(n.qh,{path:"/bcheckout",element:a?(0,i.jsx)(d,{}):(0,i.jsx)(n.C5,{to:"/login"})}),(0,i.jsx)(n.qh,{path:"/binvoice",element:a?(0,i.jsx)(u,{}):(0,i.jsx)(n.C5,{to:"/login"})}),(0,i.jsx)(n.qh,{path:"/bsupplier",element:a?(0,i.jsx)(h,{}):(0,i.jsx)(n.C5,{to:"/login"})})]})})]})}},8249:(e,s,a)=>{a.r(s),a.d(s,{default:()=>l});var t=a(5043),n=a(3216),o=a(3910),r=a(7929),i=a(579);const l=e=>{let{onLoginSuccess:s}=e;const[a,l]=(0,t.useState)({mobile_number:"",password:""}),[c,d]=(0,t.useState)(null),[u,m]=(0,t.useState)(!1),[h,p]=(0,t.useState)(!1),g=(0,n.Zp)(),j=e=>{const{name:s,value:t}=e.target;l({...a,[s]:t})};return(0,i.jsx)("div",{className:"mainContainer010",children:(0,i.jsx)("div",{className:"login-page010",children:(0,i.jsxs)("div",{className:"container010",children:[(0,i.jsx)("h1",{className:"heading010",children:"Login"}),c&&(0,i.jsx)("p",{style:{color:"red"},children:c}),(0,i.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),p(!0);try{const e=await fetch("https://prasad-gz5p.onrender.com/api/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!e.ok){const s=await e.json();throw new Error(s.message||"Login failed")}const{token:t}=await e.json();if(localStorage.setItem("authToken",t),console.log(t),"9848098480"===a.mobile_number&&"shiva"===a.password)d(null),s("admin"),g("/Admin-Home");else{const e=await fetch("https://prasad-gz5p.onrender.com/api/home/",{headers:{Authorization:`Token ${t}`,"Content-Type":"application/json"}});if(!e.ok)throw new Error("Failed to verify home redirection.");const a=await e.json();if("supplier_customer_home"===a.redirect)d(null),s("customer"),g("/customer-home");else{if("customer_home"!==a.redirect)throw new Error("Invalid redirection.");d(null),s("BasicCustomer"),g("/bbrands")}}}catch(c){d(c.message)}finally{p(!1)}},className:"form010",children:[(0,i.jsx)("input",{type:"text",name:"mobile_number",placeholder:"Mobile Number",value:a.mobile_number,onChange:j,required:!0,className:"input010"}),(0,i.jsxs)("div",{className:"password-container010",children:[(0,i.jsx)("input",{type:u?"text":"password",name:"password",placeholder:"Password",value:a.password,onChange:j,required:!0,className:"input010"}),(0,i.jsx)("span",{className:"password-toggle010",onClick:()=>m(!u),children:(0,i.jsx)(o.g,{icon:u?r.pS3:r.k6j,className:"eye"})})]}),(0,i.jsx)("button",{type:"submit",className:"login-button010",disabled:h,children:h?"Loading...":"Login"})]}),(0,i.jsxs)("p",{children:["Don't have an account?",(0,i.jsx)("button",{onClick:()=>g("/register"),className:"register-button010",children:"Register here"})]})]})})})}},3775:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var t=a(5043),n=a(3216),o=a(3910),r=a(7929),i=a(579);const l=(0,t.lazy)((()=>a.e(220).then(a.bind(a,4220)))),c=()=>{const[e,s]=(0,t.useState)({username:"",mobile_number:"",alternate_number:"",password:"",confirm_password:"",address:""}),[a,c]=(0,t.useState)(null),[d,u]=(0,t.useState)(!1),[m,h]=(0,t.useState)(!1),[p,g]=(0,t.useState)(!1),[j,b]=(0,t.useState)(!1),x=(0,n.Zp)(),w=a=>{const{name:t,value:n}=a.target;s({...e,[t]:n})};return(0,i.jsx)("div",{className:"register-page007",children:m?(0,i.jsx)(l,{}):(0,i.jsxs)("div",{className:"container007",children:[(0,i.jsx)("h1",{className:"heading007",children:"User Registration"}),a&&(0,i.jsx)("p",{style:{color:"red"},children:a}),d&&(0,i.jsx)("p",{style:{color:"green"},children:"Registration successful!"}),(0,i.jsxs)("form",{className:"form007",onSubmit:async t=>{if(t.preventDefault(),e.password===e.confirm_password){h(!0);try{const a=await fetch("https://prasad-gz5p.onrender.com/api/register/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),t=await a.text();if(console.log("Response:",t),!a.ok)throw new Error(t||"Registration failed");JSON.parse(t);u(!0),s({username:"",mobile_number:"",alternate_number:"",password:"",confirm_password:"",address:""}),c(null),x("/customer-home")}catch(a){console.error("Registration error:",a),c(a.message)}finally{h(!1)}}else c("Passwords do not match")},children:[(0,i.jsx)("input",{className:"input007",type:"text",name:"username",placeholder:"Username",value:e.username,onChange:w,required:!0}),(0,i.jsx)("input",{className:"input007",type:"text",name:"mobile_number",placeholder:"Mobile Number",value:e.mobile_number,onChange:w,required:!0}),(0,i.jsx)("input",{className:"input007",type:"text",name:"alternate_number",placeholder:"Alternate Number",value:e.alternate_number,onChange:w}),(0,i.jsxs)("div",{className:"password-container",children:[(0,i.jsx)("input",{className:"input007",type:p?"text":"password",name:"password",placeholder:"Password",value:e.password,onChange:w,required:!0}),(0,i.jsx)("button",{type:"button",className:"eye-button",onClick:()=>g(!p),children:(0,i.jsx)(o.g,{icon:p?r.pS3:r.k6j})})]}),(0,i.jsxs)("div",{className:"password-container",children:[(0,i.jsx)("input",{className:"input007",type:j?"text":"password",name:"confirm_password",placeholder:"Confirm Password",value:e.confirm_password,onChange:w,required:!0}),(0,i.jsx)("button",{type:"button",className:"eye-button",onClick:()=>b(!j),children:(0,i.jsx)(o.g,{icon:j?r.pS3:r.k6j})})]}),(0,i.jsx)("textarea",{className:"input007",name:"address",placeholder:"Address",value:e.address,onChange:w,required:!0}),(0,i.jsx)("button",{type:"submit",className:"login-button007",disabled:m,children:m?"Registering...":"Register"})]}),(0,i.jsxs)("p",{children:["Already have an account?",(0,i.jsx)("button",{onClick:()=>x("/login"),className:"login-link007",children:"Login here"})]})]})})}}}]);
//# sourceMappingURL=479.80227486.chunk.js.map