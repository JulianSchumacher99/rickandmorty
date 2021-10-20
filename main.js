import { createElement } from "./lib/elements";
import "./style.css";
import createCharacterCard from "./components/card-character";

function renderApp() {
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

  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    [
      createCharacterCard({
        name: "Jerry's Mytholog",
        lastLocation: "Nuptia4",
        status: "Dead",
        race: "Mythological Creature",
        firstLocation: "Big Trouble in Little Sanchez",
        img: "https://rickandmortyapi.com/api/character/avatar/178.jpeg",
        statusColor: "statusDead",
      }),
      createCharacterCard({
        name: "Kristin Stewart",
        lastLocation: "Earth (C-500A)",
        status: "Alive",
        race: "Human",
        firstLocation: "Rixty Minutes",
        img: "https://rickandmortyapi.com/api/character/avatar/195.jpeg",
        statusColor: "statusAlive",
      }),
      createCharacterCard({
        name: "Worldender",
        lastLocation: "Worldender's lair",
        status: "Dead",
        race: "Alien",
        firstLocation: "Vindicators 3: The Return of Worldender",
        img: "https://rickandmortyapi.com/api/character/avatar/382.jpeg",
        statusColor: "statusDead",
      }),
      createCharacterCard({
        name: "Public Opinion Judge",
        lastLocation: "Earth (Replacement Dimension)",
        status: "Alive",
        race: "Human",
        firstLocation: "Edge of Tomorty: Rick, Die, Rickpeat",
        img: "https://rickandmortyapi.com/api/character/avatar/514.jpeg",
        statusColor: "statusAlive",
      }),
      createCharacterCard({
        name: "Alien Mexican Armada",
        lastLocation: "Interdimensional Cable",
        status: "Unknown",
        race: "Alien",
        firstLocation: "Rixty Minutes",
        img: "https://rickandmortyapi.com/api/character/avatar/411.jpeg",
        statusColor: "statusUnknown",
      }),
      createCharacterCard({
        name: "Train Cop",
        lastLocation: "Story Train",
        status: "Dead",
        race: "Human",
        firstLocation: "Never Ricking Morty",
        img: "https://rickandmortyapi.com/api/character/avatar/632.jpeg",
        statusColor: "statusDead",
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
