import{S as g,i}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="45339171-09ca964bcb6303fe660a59875",h="https://pixabay.com/api/";async function b(o,r=1,n=12){const a=`${h}?key=${p}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${n}`;try{const e=await fetch(a);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw console.error(e),e}}function w(o){const r=document.querySelector(".gallery"),n=o.map(({webformatURL:e,largeImageURL:t,tags:s,likes:f,views:d,comments:m,downloads:y})=>`
      <div class="photo-card">
        <a href="${t}" class="gallery-link">
          <img src="${e}" alt="${s}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${f}</p>
          <p class="info-item"><b>Views:</b> ${d}</p>
          <p class="info-item"><b>Comments:</b> ${m}</p>
          <p class="info-item"><b>Downloads:</b> ${y}</p>
        </div>
      </div>
    `).join("");r.innerHTML=n,new g(".gallery a").refresh()}function L(){document.querySelector(".gallery").innerHTML=""}const $=document.querySelector("#search-form"),S=document.querySelector("#load-more");let c=1,l="";$.addEventListener("submit",q);S.addEventListener("click",v);async function q(o){o.preventDefault();const r=o.currentTarget.elements.searchQuery.value.trim();if(r===""){i.warning({title:"Warning",message:"Please enter a search query!"});return}c=1,l=r,L(),await u()}async function v(){c+=1,await u()}async function u(){try{const r=(await b(l,c)).hits;if(r.length===0){i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}w(r)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}}
//# sourceMappingURL=commonHelpers.js.map
