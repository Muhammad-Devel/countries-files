import "../css/main.css";

import request from "./request";
import { createCountry } from "./updateUI";
import "./filter";
import "./mode";
const API = "https://restcountries.com/v3.1/all";
request(API)
  .then((data) => {
    createCountry(data);
  })
  .catch((err) => {
    alert(err);
  });
