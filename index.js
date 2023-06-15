// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
 }
 
 function destructivelyPrependCat(name){
   cats.unshift(name);
   return cats;
 }
 
 function destructivelyRemoveLastCat(name){
    cats.pop(name);
   return cats
 }
 
 

 function destructivelyRemoveFirstCat(){
    cats.shift();
   return cats;
 }
 
 function appendCat(name){
   let meow_1= [...cats,name];
   return meow_1;
 }
 
 function prependCat(name){
   let meow_1=[name, ...cats];
   return meow_1;
 }
 
 function removeLastCat(){
   let kit= cats.slice(0,cats.length-1);
   return kit;
 }
 
 function removeFirstCat(){
    let meows= cats.slice(1)
    return meows
  }