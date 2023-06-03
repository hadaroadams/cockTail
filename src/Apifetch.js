

let fetchData = async(value) => {
    let Api_url
    if(value){
         Api_url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`
        
    }else{
        Api_url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`

    }
    try{
        let data = await fetch(Api_url)
        let resp = await data.json()
        return resp

    }catch(error){
        console.log(error)
    }
   console.log(resp)
}
export default fetchData