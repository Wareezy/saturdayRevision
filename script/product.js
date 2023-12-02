//going to need multiple objects
//use a constructor functions

//name
//description
//price
//img url
let purchased= [ ]

let main=document.querySelector('main')

//now we need to get the array from local storage 

let items=JSON.parse(localStorage.getItem('items'))
main.innerHTML=items.map(function(item,index){

    return `
    
    <div>
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <p>${item.price}</p>
    <button value='${index}' data-add>Add to cart</button>
    </div>
    
    `

}).join('')

function add(index){


    //this is pushing the values that are located by JSON.parse localstorage etc then inside we put index
    purchased.push(items[index])
localStorage.setItem('purchased',JSON.stringify(purchased))

}

main.addEventListener('click',function(){

    if(event.target.hasAttribute('data-add')){

  add(event.target.value)

}})

//search function
//we refering an object in an array
//way to fix the case sensitivity is by using toLowercase
let a=items.filter(item=>{

    return item.name== 'Nike Shoe'
})