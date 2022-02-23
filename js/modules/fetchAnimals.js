import animaNumeros from "./anime-numbers.js";

export default function fetchAnimals() {
  async function getAnimals(url) {
    const response = await fetch(url);
    const json = await response.json();
    const numerosGrid = document.querySelector(".numeros-grid");

    json.forEach((animal) => {
      const divAnimals = createAnimal(animal);
      numerosGrid.appendChild(divAnimals);
    });

    animaNumeros();
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  getAnimals("./animals.json");
}
