import { createNavbar, createPetCatalogCard } from "./modules/dom.js";
import { getPets } from "./modules/petsApi.js";

let token = localStorage.getItem("token");

!token && window.open("../views/login.html", "_self");

document.getElementById("nav-wrapper").innerHTML = createNavbar(token);
document.getElementById("log-out").addEventListener("click", () => {
  localStorage.removeItem("token");
  window.open("../views/login.html", "_self");
});

let allPets = []; /*aquí esta la información de todas las mascotas*/

const getAllPets = async () => {
  let data = await getPets();
  console.log(data);
  let keys = Object.keys(data);

  let petsArray = keys.reduce((accum, current) => {
    console.log(accum);
    console.log(current); /*esta es la llave*/
    console.log(
      data[current]
    ); /*este es el objeto que representa a la mascota*/
    let key = current;
    let petObject = data[current];
    let petFullObject = { key: key, ...petObject };
    console.log(petFullObject);
    return [...accum, petFullObject];
  }, []);
  console.log("petsArray");
  console.log(petsArray);
  allPets = petsArray;
  printAllCards(allPets);
};

const printAllCards = (petsList) => {
  let cardWrapper = document.getElementById("card-wrapper");

  petsList.forEach((pet) => {
    let petCard = createPetCatalogCard(pet);
    console.log(petCard);
    cardWrapper.append(petCard);
  });
};

getAllPets();

/*
let filterType = "";

let radios = document.querySelectorAll("input[name='filter-type']");

radios.forEach((input) => {
  input.addEventListener("click", (event) => {
    filterType = event.target.value;
    console.log(filterType);
  });
});
*/

/*const filterPets = async (filterType, value) => {
  let pets = await getPets();
  console.log(pets);
};*/

/*
document.getElementById("search-input").addEventListener("keyup", (event) => {
  let value = event.target.value;
  console.log(value);
  console.log(allPets);
  let values = Object.values(allPets);
  console.log(values);
  switch (filterType) {
    case "breed":
      break;
    case "size":
      break;
    case "specie":
      break;
  }
});

*/
