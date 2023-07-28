import { getPetById } from "./modules/petsApi.js";

const urlParams = new URLSearchParams(window.location.search);
const petId = urlParams.get("petId");

console.log(petId);

const getPetData = async () => {
  let petData = await getPetById(petId);
  console.log(petData);
  printPetDetail(petData);
};

const printPetDetail = (petData) => {
  let { name, description, picture } = petData;
  document.getElementById("pet-name").innerText = name;
  document.getElementById("pet-description").innerText = description;
  document.getElementById("pet-picture").src = picture;
};

getPetData();
