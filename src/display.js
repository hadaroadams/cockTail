import getElement from "./element.js"
import { dataBase } from "./database.js"


export async function display(newData){
    let data
    getElement('main').innerHTML=`<img src="./Eclipse-1s-200px (1).gif" alt="" class='loading'>`
    if(newData){
        data = await newData
    }else{
        data = await dataBase()
    }
    getElement('main').innerHTML=``
    console.log(data)
    data.map((item)=>{
        let article = document.createElement('div')
        let cocktailSection = getElement('main')
        let content = `
                    <a href="./Drink/drink.html?id=${item.id}&name=Hadaro&age=20">
                        <article>
                            <img src="${item.image}" alt="">
                            <div>
                                <h1>
                                    ${item.name}
                                </h1>
                            </div>
                        </article>
                    </a>
        `
        article.innerHTML = content
        cocktailSection.appendChild(article)
    })
}