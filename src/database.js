import fetchData from "./Apifetch.js";
import { display } from "./display.js";

export const dataBase = async(search) =>{
    let data
    if(search){   
        data= await search
    }else{
        data = await fetchData()
    }
    let mapData =[]
    data.drinks.map((item)=>{
        let {idDrink:id,strDrink:name,strDrinkThumb:image} = item
        mapData.push({id,name,image})
    })
    return mapData
}