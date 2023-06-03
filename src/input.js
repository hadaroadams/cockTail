import fetchData from "./Apifetch.js";
import { dataBase } from "./database.js";
import { display } from "./display.js";

export async function search(e){
    let value = e.target.value
    let newdata = await fetchData(value)
    console.log(newdata)
    let  dataBase2 = await dataBase(await fetchData(value))
    console.log(dataBase2)
    display(dataBase2)
}
