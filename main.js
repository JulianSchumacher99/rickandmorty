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
    [createElement("p", { textContent: "In development..." })]
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
