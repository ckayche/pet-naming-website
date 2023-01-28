const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const type = document.querySelector("#type").value;
  const breed = document.querySelector("#breed").value;
  const color = document.querySelector("#color").value;
  const gender = document.querySelector("#gender").value;
  // use the PetNameGen algorithm to generate a list of personalized pet names based on the user's input
  const petNames = generatePetNames(type, breed, color, gender);
  // display the generated names to the user
  displayPetNames(petNames);
});
