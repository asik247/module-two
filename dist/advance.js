"use strict";
//Todo:- Type Assertion ---> ts ke type bole daow.
// const forms = document.getElementById("forms") as HTMLFormElement
//  const names = document.getElementById("names") as HTMLInputElement
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
function myGeneric(all) {
    return all[0];
}
const interFaceG = { value: 10 };
const interFaceGS = { value: "hey iam asik" };
