"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[143],{426:(e,t,r)=>{r.d(t,{LF:()=>n,Nt:()=>o,UM:()=>h,dk:()=>l,q8:()=>c});var a=r(213);const s="d934da8882e5322d29af0f8a1ae42476",i=a.A.create({baseURL:"https://api.themoviedb.org/3",timeout:1e4}),o=async()=>{try{return(await i.get(`/trending/movie/day?api_key=${s}`)).data.results}catch(e){return console.error("Error fetching trending movies:",e),[]}},c=async e=>{try{return(await i.get(`/search/movie?api_key=${s}&query=${e}`)).data.results}catch(t){return console.error("Error searching movies:",t),[]}},n=async e=>{try{return(await i.get(`/movie/${e}?api_key=${s}`)).data}catch(t){return console.error(`Error fetching details for movie ${e}:`,t),null}},l=async e=>{try{return(await i.get(`/movie/${e}/credits?api_key=${s}`)).data.cast}catch(t){return console.error(`Error fetching credits for movie ${e}:`,t),[]}},h=async e=>{try{return(await i.get(`/movie/${e}/reviews?api_key=${s}`)).data.results}catch(t){return console.error(`Error fetching reviews for movie ${e}:`,t),[]}}},143:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(43),s=r(426),i=r(475),o=r(579);const c=()=>{const[e,t]=(0,a.useState)(""),[r,c]=(0,a.useState)([]),[n,l]=(0,a.useState)(!1),[h,u]=(0,a.useState)(null),[d,p]=(0,i.ok)();(0,a.useEffect)((()=>{const e=d.get("query")||"";t(e),e&&m(e)}),[d]);const m=async e=>{l(!0),u(null);try{const t=await(0,s.q8)(e);c(t)}catch(t){console.error(t),u("Failed to fetch search results.")}finally{l(!1)}};return(0,o.jsxs)("div",{children:[(0,o.jsxs)("form",{onSubmit:t=>{t.preventDefault(),p({query:e})},children:[(0,o.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Search movies"}),(0,o.jsx)("button",{type:"submit",children:"Search"})]}),n&&(0,o.jsx)("p",{children:"Loading..."}),h&&(0,o.jsx)("p",{children:h}),(0,o.jsx)("ul",{children:r.length>0?r.map((e=>(0,o.jsx)("li",{children:(0,o.jsxs)(i.N_,{to:`/movies/${e.id}`,children:[(0,o.jsx)("img",{src:e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"https://via.placeholder.com/500x750",alt:e.title,style:{width:"150px",height:"225px"}}),(0,o.jsx)("p",{children:e.title})]})},e.id))):!n&&(0,o.jsx)("li",{children:"No movies found"})})]})}}}]);
//# sourceMappingURL=143.d318faaa.chunk.js.map