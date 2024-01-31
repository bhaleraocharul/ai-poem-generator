function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "hello",
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
