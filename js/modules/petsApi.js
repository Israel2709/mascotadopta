const getPets = async () => {
  let response = await fetch(
    "https://javascript27g-default-rtdb.firebaseio.com/mascotadopta/pets/.json"
  );
  let data = await response.json();
  return data;
};

export { getPets };
