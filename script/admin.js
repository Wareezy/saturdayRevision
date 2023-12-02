//each item will have to have an edit and delete button

//this is where all products will be stored
let items=[]

//object 1 was create manually 
let object1 ={
    id:1,
    name:'Nike Shoe',
    description:'This is better than the original ',
    price:800,
    url:'sssssssssssssssssssss'
}

//function to create objects
function Constructor(id,name,description,price,url)
{
this.id=id;
this.name=name;
this.description=description;
this.price=price;
//add a quantity function here that will basically 
this.url=url;
}

//second item created using constructor
let item2=new Constructor(2,'AnotherNike','This is better than the fake', 700,'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e3d72728-4900-4e71-a4ea-1f323bb570d8/custom-nike-air-force-1-high-by-you-shoes.png')

//pushing items into array
items.push(
    object1,
    item2)


//sets the array in local storage
localStorage.setItem('items',JSON.stringify(items))


//this the array that i have, get the data and store it to the array. the arrays information will be gotten directly from the browser

//sets array from local storage to array(items) in code
items=JSON.parse(localStorage.getItem('items'))



function remove(position){


    //position and even.target refer to the same values
    items.splice(position,1)
    //nested function
    favourite()
    
    //nested
    warren()
}

let table=document.querySelector('table')
//we will be using map to write the information

//now we will loop through all the items of the array
//item refers to each object
//index referes to the index of each item


//window is an event handler not an event listener
function warren(){

    let products=items.map(function(item,index){
        
        console.log(item);
        console.log(index);
        
        
        return `
        <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>R${item.price}</td>
        <td>${item.description}</td>
        <td><img src="${item.url}"    width='300' height='300'/></td>
        <td><button>Edit</button></td>
        <td><button class="delete" value='${index}'>Delete</button></td>
        </tr>
        `
    })
    
    table.innerHTML=products.join('')
}
warren()

function favourite()
{
localStorage.setItem('items',JSON.stringify(items))
items=JSON.parse(localStorage.getItem('items'))

}
let deleteButton=document.querySelector('.delete')
table.addEventListener('click', function(){

    if(event.target.classList.contains('delete')){
        //removing the value which is based on the index
        remove(event.target.value)
        // alert(event.target.value)

    }
})
//we use javascript to hide the spinner but bootsrap to display it 
//conditional 
//if this happens else
//will hide the spinner
// table.style.display='none'


function one(){

}

function two(callback){

    callback()

    //where code will be placed
}
//passing a function into another function using a parameter then it is called a callback function
two(one())