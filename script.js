const arrAnimals = [];
const renderFunc = ({
  name,
  latin_name,
  animal_type,
  geo_range,
  image_link,
  weight_max,
  weight_min,
  length_max,
  length_min,
  lifespan,
}) => {
  document.body.innerHTML = "";
  const card = document.createElement("div");
  card.classList.add("card");
  const cardText = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = `${name} (Latin: ${latin_name})`;
  const animalType = document.createElement("p");
  animalType.innerHTML = `Animal type: <span>${animal_type}</span>`;
  const location = document.createElement("p");
  location.innerHTML = `Location: <span>${geo_range}</span>`;
  const weight = document.createElement("p");
  weight.innerHTML = `Max.weight: <span>${weight_max} pounds.</span> Min.weight: <span>${weight_min} pounds.</span>`;
  const length = document.createElement("p");
  length.innerHTML = `Max.weight: <span>${length_max} feet.</span> Min.weight: <span>${length_min} feet.</span>`;
  const life = document.createElement("p");
  life.innerHTML = `Lifespan: <span>${lifespan} years</span>`;
  cardText.append(h1, animalType, location, weight, length, life);
  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  const img = document.createElement("img");
  img.src = image_link;
  cardImage.append(img);
  card.append(cardText, cardImage);
  const btnNext = document.createElement("button");
  btnNext.textContent = "Next";
  btnNext.classList.add("next-btn");
  btnNext.addEventListener("click", showRandomAnimal);
  document.body.append(card, btnNext);
};

const showRandomAnimal = () => {
  if (!arrAnimals.length) {
    const url = "https://zoo-animal-api.herokuapp.com/animals/rand/10";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((animal) => arrAnimals.push(animal));
        const animal = arrAnimals.pop();
        renderFunc(animal);
      });
  } else {
    const animal = arrAnimals.pop();
    renderFunc(animal);
  }
};
showRandomAnimal();
