import { saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage } from './saveToLocalStorageByName.js';

let names = document.getElementById("names");
let nameGenButton = document.getElementById("nameGenBtn");
let lastFiveBtn = document.getElementById("lastFiveBtn");
let studentnames;

nameGenButton.addEventListener("click", function(){
  NameGenerator();
});

lastFiveBtn.addEventListener("Click", function(){
  GetFavorites();
})

async function AsyncGetData(){
  const promise = await fetch('./data/data.json')
  const data = await promise.json();
  studentnames = data
  
}
AsyncGetData()

function NameGenerator() {
  let random = Math.floor(Math.random() * studentnames.studentNames.length);
  names.innerText = studentnames.studentNames[random].Name;  
  console.log(random);
  saveToLocalStorageByName(studentnames.studentNames[random].Name) 
}



