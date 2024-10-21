let url = 'https://dragonball-api.com/api/characters?limit=60'

document.body.onload = function() {
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const tabla = document.getElementById("body-tabla")
const mostrarData = (data) => {
    let body = ``
    console.log(data);
    for(let i = 0; i < data.items.length;i++) {
        if(i <=34) {
            body += `

        
 
            <tr>
                <td><a href="./../personaje.html?id=${i+1}">${data.items[i].id}</a></td>
                <td><a href="./../personaje.html?id=${i+1}">${data.items[i].name}</a></td>
                <td>${data.items[i].maxKi}</td>
                <td>${data.items[i].race}</td>
                <td>${data.items[i].gender}</td>
            </tr>
    ` 
        }
        else if (i >= 35 && i <=38) {

            body += `
    
            
     
                    <tr>
                        <td><a href="./../personaje.html?id=${i+2}">${data.items[i].id}</a></td>
                        <td><a href="./../personaje.html?id=${i+2}">${data.items[i].name}</a></td>
                        <td>${data.items[i].maxKi}</td>
                        <td>${data.items[i].race}</td>
                        <td>${data.items[i].gender}</td>
                    </tr>
            `
        }
        else if(i >= 39 && i <= 41) {

            body += `
    
            
     
            <tr>
                <td><a href="./../personaje.html?id=${i+3}">${data.items[i].id}</a></td>
                <td><a href="./../personaje.html?id=${i+3}">${data.items[i].name}</a></td>
                <td>${data.items[i].maxKi}</td>
                <td>${data.items[i].race}</td>
                <td>${data.items[i].gender}</td>
            </tr>
    `   
        }
        else if(i >= 42) {
            body += `
    
            
     
            <tr>
                <td><a href="./../personaje.html?id=${i+21}">${data.items[i].id}</a></td>
                <td><a href="./../personaje.html?id=${i+21}">${data.items[i].name}</a></td>
                <td>${data.items[i].maxKi}</td>
                <td>${data.items[i].race}</td>
                <td>${data.items[i].gender}</td>
            </tr>
    `  
        }
    }
    
    tabla.innerHTML = body;
}}


