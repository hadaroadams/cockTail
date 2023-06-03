
function getElement(selection){
    if(selection){
        let element = document.querySelector(selection)
        return element
    }else{
        throw console.log("somethin went wrong with the element selection");
    }
}
export default getElement