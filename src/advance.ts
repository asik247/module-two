//Todo:- Type Assertion ---> ts ke type bole daow.


// const forms = document.getElementById("forms") as HTMLFormElement

//  const ids = document.getElementById("ids") as HTMLInputElement

//  const names2 = document.getElementById("names") 
//! Bug Fix.

 //? ts null vabe nise but ami jani HtmlINputElement hobe

//  const header = document.getElementById("header") as HTMLHeadingElement

 
//  forms.addEventListener("submit",(e)=>{
//     e.preventDefault();
//      const namesValue:string = names.value;
 
//     header.textContent = namesValue
//  })

//Todo:- Generics (T) ---> code ta resulable kore.

function myGeneric <T> (all:T[]):T{
    return all[0];
}
// console.log(myGeneric(["Asik","rimon"]));
// console.log(myGeneric([0o120,58]));

//? Generics with interface.
interface InterfaceGenerics <T>{
    value:T
}
const interFaceG:InterfaceGenerics <number> = {value:10}
const interFaceGS:InterfaceGenerics <string> = {value:"hey iam asik"}

//? type generics.

type MyG <T>={
    id:T,
  
}

const myG:MyG <number> = {id:123};
const myg:MyG <string> = {id:"asik"}





