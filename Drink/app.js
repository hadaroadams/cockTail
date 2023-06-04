import getElement from "../src/element.js";


let linkUrl = new URLSearchParams(window.location.search)
let id = linkUrl.get('id')
const image = getElement('.imageSection img')
const tittle = getElement('h2')
const instruction = getElement('p')

async function drinkshow(){
    try{

        let url =`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        let data = await fetch(url)
        let   newdata = await data.json()
        getElement('.loading').classList.add('clear')
        getElement('article').classList.remove('clear')
        const {strDrinkThumb:img, strDrink:name , strInstructions:ing} =newdata.drinks[0]
        console.log(newdata)
        console.log(img)
        image.src =img
        tittle.innerText = `${name}`
        instruction.innerText= ing

       // console.log(strIngredient1)     

        for(let i =1;;i++){
            const str= newdata.drinks[0][`strIngredient${i}`]
            let ul = getElement('ul')
           if(str==null){break;}
            let list = document.createElement('li')
            list.innerHTML=`<i class="far fa-check-square"></i>${str}`
            ul.appendChild(list)
        }
        
    }catch(error){
        console.log(error)
    }
}

drinkshow()