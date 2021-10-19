import createCharacterCard from "./components/card-character";
import { createElement } from "./lib/elements";
import "./style.css";

function renderApp() {
  const appElement = document.querySelector("#app");

  const navElement = createElement(
    "nav",
    {
      className: "nav",
    },
    [
      createElement("a", {
        textContent: "Docs",
        className: "nav_docs",
      }),

      createElement("a", {
        textContent: "About",
        className: "nav_about",
      }),

      createElement("a", {
        textContent: "HELP US",
        className: "nav_help",
      }),
    ]
  );

  const headerElement = createElement(
    "header",
    {
      className: "header",
    },
    [
      createElement("h1", {
        textContent: "The Rick and Morty API",
      }),
    ]
  );

  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    [
      createCharacterCard({
        name: "Jerry's Mytholog",
        lastLocation: "Nuptia4",
        status: "Dead - Mythological Creature",
        firstLocation: "Big Trouble in Little Sanchez",
        img: "https://rickandmortyapi.com/api/character/avatar/178.jpeg",
      }),
      createCharacterCard({
        name: "Kristin Stewart",
        lastLocation: "Earth (C-500A)",
        status: "Alive - Human",
        firstLocation: "Rixty Minutes",
        img: "https://rickandmortyapi.com/api/character/avatar/195.jpeg",
      }),
    ]
  );

  const footerElement = createElement(
    "footer",
    {
      className: "footer",
    },
    [
      createElement("p", {
        textContent: "❮❯ by Julian Schumacher 2021",
      }),
    ]
  );

  appElement.append(navElement, headerElement, mainElement, footerElement);
}

renderApp();
