



//EL JS ESTA EN MAIN.JS






// 'use strict';

// let url = "http://futuramaapi.herokuapp.com/api/characters/";
// let count=0;
// let character= "";
// let papelera =[];
// // let todo =[];
// function crearCajaCharacter (character){
  
//     let cajaCharacter =document.createElement('div',)
//     let numId= ` character${count}`;
//     cajaCharacter.setAttribute('id', numId)
//     cajaCharacter.setAttribute("class", "listado");

  

//     let cajaMostrar = document.getElementById('mostrarEleccion');
//     cajaMostrar.appendChild(cajaCharacter);
//     let quoteText = recogerQuote(character)
//     cajaCharacter.appendChild(quoteText);
   
//     let imageCharacter = recogerImg(character)
//      cajaCharacter.appendChild(imageCharacter);

  
//     //revisar
//     document
//         .getElementById(numId)
//         .addEventListener("click", ()=>{
//                     let miEleccion=document.getElementById(numId);

//                     miEleccion.classList.remove("listado");
//                     miEleccion.classList.add("solo");
                    
//                     console.log(miEleccion);
//                     console.log (papelera);
//            borrarPapelera(papelera, miEleccion);

//         });
    
//     papelera.push(cajaCharacter);
//     console.log(papelera)
//     console.log(papelera[count]+ " posicion"+ count );
//     console.log(papelera[count]);
//     count ++;

  

  
//     return cajaCharacter;


// }


// function recogerImg (character){
//     let image =document.createElement('img');
//     image.setAttribute('src', `${character.image}` );
   
//      return image
// }

// function recogerQuote (character){
    
//     let textQuote=  document.createTextNode(character.quote);
  
//     return textQuote;
   
   

// }



// function recogerEleccion(character){
// // let eleccion= ;
// let i=0;
// fetch(`${url}${character}`)
// .then(response => response.json())
// .then(data => {

// //aquí data ahora mismo es un array
// //dentro del map recojemos 

// data.map(item => crearCajaCharacter (item))
// // console.log("lo que añadimos al array "+papelera[i]+" posicion "+i);
// // i++;

// });
 
// };


// function borrarPapelera(papelera, item) {

//         for (let i = 0; i < papelera.length; i++) {
//             if(papelera[i]!=item )
//             papelera[i].remove();        
//         }
//     //papelera.splice()?????????
    
// }

// //-----------------main---------------------------------
// document
//     .getElementById('aceptar')
//     .addEventListener("click", () =>{
//                      recogerEleccion(document
//                             .getElementById('optionCharacter').value);

// });


