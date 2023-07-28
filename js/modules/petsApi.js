const getPets = async () => {
  let response = await fetch(
    "https://javascript27g-default-rtdb.firebaseio.com/mascotadopta/pets/.json"
  );
  let data = await response.json();
  return data;
};

const getPetById = async (id) => {
  let response = await fetch(
    `https://javascript27g-default-rtdb.firebaseio.com/mascotadopta/pets/${id}/.json`
  );
  let data = await response.json();
  return data;
};

export { getPets, getPetById };
