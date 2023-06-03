import getElement from "./src/element.js";
import fetchData from "./src/Apifetch.js";
import { dataBase } from "./src/database.js";
import { display } from "./src/display.js";
import { search } from "./src/input.js";

window.addEventListener('DOMContentLoaded', display())

let input = getElement('input')

input.addEventListener('input',search)
