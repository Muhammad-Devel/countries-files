const searchFolrmEl = document.querySelector(".search");

searchFolrmEl.search.addEventListener("input", () => {
  const searchValue = searchFolrmEl.search.value.toLowerCase();
  console.log(searchValue);
  const cardsItem = document.querySelectorAll(".cards__item");
  const cardsTitle = document.querySelectorAll(".cards__title");
  cardsTitle.forEach((title, i) => {
    if (title.textContent.toLocaleLowerCase().includes(searchValue)) {
      cardsItem[i].style.display = "block";
    } else {
      cardsItem[i].style.display = "none";
    }
  });
});

const searchSelect = document.querySelectorAll(".search__select-list li");
const searchSelectSpan = document.querySelector(".search__select span");

import { createCountry } from "./updateUI";
import request from "./request";

searchSelect.forEach((li) => {
  li.addEventListener("click", () => {
    searchSelectSpan.textContent = li.textContent;
    let filterAPI;

    if (li.textContent == "All") {
      filterAPI = "https://restcountries.com/v3.1/all";
    } else {
      filterAPI = `https://restcountries.com/v3.1/region/${li.textContent}`;
    }
    request(filterAPI)
      .then((data) => {
        createCountry(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  });
});
