(()=>{var e={16:()=>{const e=document.querySelector(".header__dark-mode"),t=document.querySelector("body"),o=localStorage.getItem("mode")?localStorage.getItem("mode"):null;o&&t.classList.add("dark-mode"),e.addEventListener("click",(()=>{t.classList.toggle("dark-mode"),o?localStorage.setItem("mode",""):localStorage.setItem("mode","dark")}))}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,o),c.exports}(()=>{"use strict";const e=document.querySelector(".loader"),t=t=>{t?e.classList.remove("hidden"):e.classList.add("hidden")},a=async e=>{t(!0);const o=await fetch(e);if(!o.ok)throw new Error("Something wait wrong !!!");const a=await o.json();return t(!1),a},n=document.querySelector(".cards"),c=e=>{n.innerHTML="",e.forEach((e=>{const t=e.name.common,o=e.population,a=e.region,c=e.capital?e.capital[0]:"No Capital",r=e.flags.svg,s=document.createElement("li");s.classList.add("cards__item"),s.innerHTML=`\n       <a href="./about.html?country/name/${t}">\n                        <img src=${r} alt="algeria-flag" width="267" height="160">\n                        <div class="cards__item-inner">\n                            <h3 class="cards__title">${t}</h3>\n                            <p class="population">Population: <span>${o}</span></p>\n                            <p class="region">Region: <span>${a}</span></p>\n                            <p class="capital">Capital: <span>${c}</span></p>\n                        </div>\n                    </a>\n      `,n.appendChild(s)}))},r=(document.querySelector(".country_info"),document.querySelector(".search"));r.search.addEventListener("input",(()=>{const e=r.search.value.toLowerCase();console.log(e);const t=document.querySelectorAll(".cards__item");document.querySelectorAll(".cards__title").forEach(((o,a)=>{o.textContent.toLocaleLowerCase().includes(e)?t[a].style.display="block":t[a].style.display="none"}))}));const s=document.querySelectorAll(".search__select-list li"),l=document.querySelector(".search__select span");s.forEach((e=>{e.addEventListener("click",(()=>{let t;l.textContent=e.textContent,t="All"==e.textContent?"https://restcountries.com/v3.1/all":`https://restcountries.com/v3.1/region/${e.textContent}`,a(t).then((e=>{c(e)})).catch((e=>{alert(e.message)}))}))})),o(16),a("https://restcountries.com/v3.1/all").then((e=>{c(e)})).catch((e=>{alert(e)}))})()})();