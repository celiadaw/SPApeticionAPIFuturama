
'use strict';

let url = "http://futuramaapi.herokuapp.com/api/characters/";
let count=0;
let characterGuardado;
let miEleccion;
let papelera =[];
let cajaBusqueda=document.getElementById("cajaBusqueda") ;
// let todo =[];
function crearCajaCharacter (character, cajaBusqueda){
  
    let cajaCharacter =document.createElement('div',)
    let numId= ` character${count}`;
    cajaCharacter.setAttribute('id', numId)
    cajaCharacter.setAttribute("class", "listado");

  

    let cajaMostrar = document.getElementById('mostrarEleccion');
    cajaMostrar.appendChild(cajaCharacter);
    let quoteText = recogerQuote(character)
    cajaCharacter.appendChild(quoteText);
   
    let imageCharacter = recogerImg(character)
     cajaCharacter.appendChild(imageCharacter);


        document
         .getElementById(numId)
          .addEventListener("click", ()=>{
               miEleccion=document.getElementById(numId);
               miEleccion.classList.remove("listado");
              miEleccion.classList.add("solo");
               borrarPapelera(papelera, miEleccion);
               let cajaBusqueda=document.getElementById("cajaBusqueda") ;
               cajaBusqueda.classList.remove("cajaBusqueda");
               cajaBusqueda.classList.add("hidden");
          })
          

    papelera.push(cajaCharacter)

    count ++;

  

  
    return cajaCharacter;


}


function recogerImg (character){
    let image =document.createElement('img');
    image.setAttribute('src', `${character.image}` );
   
     return image
}

function recogerQuote (character){
    
    let textQuote=  document.createTextNode(character.quote);
  
    return textQuote;
   
   

}



function recogerEleccion(character){
    characterGuardado=character;
let i=0;
fetch(`${url}${character}`)
.then(response => response.json())
.then(data => {


data.map(item => crearCajaCharacter (item))


});
 
};


function borrarPapelera(papelera, item) {
//en el for recorremos todos los elementos que hay en la papelera
//borramos todos menos el que hemos seleccionado
// papelera.filter
        for (let i = 0; i < papelera.length; i++) {
            if(papelera[i]!=item )
            papelera[i].remove();        
        }

    
}
function borrarEleccionPapelera(papelera, eleccion){
    //esta función es para cuando vamos a
    for (let i = 0; i < papelera.length; i++) {
        if(papelera[i]=eleccion )
        papelera[i].remove();        
    }
//splice??????

}


// function cambiarCajaBusqueda (cajaBusqueda){
//     if(cajaBusqueda.classList.contains("cajaBusqueda")){
//         cajaBusqueda.classList.remove("cajaBusqueda");
//         cajaBusqueda.classList.add("hidden");

//     }else{
//         cajaBusqueda.classList.remove("hidden");

//         cajaBusqueda.classList.add("cajaBusqueda");
       


//     }



// }
//-----------------main---------------------------------
//Botón aceptar
document
    .getElementById('aceptar')
    .addEventListener("click", () =>{
                     recogerEleccion(document
                            .getElementById('optionCharacter').value);

});

//Botón Atrás
document
    .getElementById('atras')
    .addEventListener("click", () =>{
                     recogerEleccion(characterGuardado);
                borrarEleccionPapelera(papelera, miEleccion);
                if(cajaBusqueda.classList.contains("hidden")){
                    cajaBusqueda.classList.remove("hidden");
                   cajaBusqueda.classList.add("cajaBusqueda");

                }
});

document
    .getElementById('limpiar')
    .addEventListener("click", () =>{
                  console.log("hola");

 for (let i = 0; i < papelera.length; i++) {
        
        papelera[i].remove();        
    }
                
});



// let myPromise = new Promise (resolveFunction);
// myPromise((resolveFunction, reject)=>{
//     resolveFunction();
// })


//                 //Botón aceptar
//                     .then (document
//                             .getElementById('aceptar')
//                             .addEventListener("click", () =>{
//                                                  recogerEleccion(document
//                                                         .getElementById('optionCharacter').value);

//                         }))
//                     .then (document
//                                 .getElementById(numId)
//                                     .addEventListener("click", ()=>{
//                             miEleccion=document.getElementById(numId);

//                             miEleccion.classList.remove("listado");
//                             miEleccion.classList.add("solo");
                  
//                             borrarPapelera(papelera, miEleccion);

//                                   }))
//                     .then (//Botón Atrás
//                             borrarEleccionPapelera(papelera, miEleccion),
    
//                             document
//                                 .getElementById('atras')
//                                 .addEventListener("click", () =>{
//                                         recogerEleccion(characterGuardado);
            
//                          })
//                          )                          

        
