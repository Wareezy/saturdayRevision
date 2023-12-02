let purchased=JSON.parse(localStorage.getItem('purchased'))

let table= document.querySelector('table')

table.innerHTML=purchased.map((item,index)=>{


    return `
    <tr>
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>R${item.price}</td>
    </tr>

    `

    //gonna use the purchased array where all the items go to and then display the values only from there 
//have a function that will also display the total ammount--> could use reduce()
    //have a button that will clear an array
    //clear button
})