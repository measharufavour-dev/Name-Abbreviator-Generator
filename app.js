const generateBtn = document.querySelector("#btn");
const output = document.querySelector(".text");

generateBtn.addEventListener("click", function () {
  const firstName = document.querySelector("#firstname").value;
  const lastName = document.querySelector("#lastname").value;

  // 2. If inputs are empty, don't run
  if (!firstName || !lastName) {
    alert("Please enter both names");
  }

  // 3. Generate options BASED on what the user typed
  const options = [
    (firstName[0] + lastName[0]).toUpperCase(),
    (firstName.slice(0, 2) + lastName.slice(0, 2)).toUpperCase(),
    (firstName.slice(0, 3) + lastName[0]).toUpperCase(),
    (firstName.slice(0, 3) + lastName.slice(0, 3)).toUpperCase(),
    (firstName[0] + lastName).toUpperCase(),
  ];

  // 4. Pick a random one
  const randomIndex = Math.floor(Math.random() * options.length);
  const result = options[randomIndex];

  // console.log("Abbreviation:", result);
  output.innerHTML = result;
});
