import { createElement } from "./lib/elements";
import "./style.css";
import createCharacterCard from "./components/card-character";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const navElement = createElement(
    "nav",
    {
      className: "nav",
    },
    [
      createElement("img", {
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OyQMVVVZSik0GcIw8ADcZAAAAA%26pid%3DApi&f=1",
        className: "nav_img",
      }),
      createElement(
        "div",
        {
          className: "nav_links",
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
      ),
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
  const randomPage = Math.floor(Math.random() * 34) + 1;
  const url = "https://rickandmortyapi.com/api/character?page=";

  const response = await fetch(url + randomPage);
  const body = await response.json();
  const characters = body.results;

  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    characterCards
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
