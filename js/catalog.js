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
  cardWrapper.innerHTML = "";
  petsList.forEach((pet) => {
    let petCard = createPetCatalogCard(pet);
    console.log(petCard);
    cardWrapper.append(petCard);
  });
};

getAllPets();

let filterType = "breed";

let radios = document.querySelectorAll("input[name='filter-type']");

radios.forEach((input) => {
  input.addEventListener("click", (event) => {
    filterType = event.target.value;
    console.log(filterType);
  });
});

const showNoResults = () => {
  let cardWrapper = document.getElementById("card-wrapper");
  cardWrapper.innerHTML = `
  <div class="alert alert-info" role="alert">
    Búsqueda sin resultados
</div>
  `;
};

document.getElementById("search-input").addEventListener("keyup", (event) => {
  let value = event.target.value;
  console.log(filterType);
  console.log(value);

  let result = allPets.filter((pet) => {
    return pet[filterType].toLowerCase().includes(value.toLowerCase());
  });

  !result.length ? showNoResults() : printAllCards(result);
});
