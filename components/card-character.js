import { createElement } from "../lib/elements";
import styles from "./card-character.module.css";

export default function createCharacterCard({
  name,
  origin,
  status,
  location,
  image,
  species,
}) {
  let statusColor = "";
  if (status === "Alive") {
    statusColor = styles.statusAlive;
  } else if (status === "Dead") {
    statusColor = styles.statusDead;
  } else {
    statusColor = styles.statusUnknown;
  }

  const characterCard = createElement(
    "article",
    {
      className: styles.card,
    },
    [
      createElement("img", {
        src: image,
        alt: "",
        className: styles.characterImg,
      }),

      createElement(
        "div",
        {
          className: styles.characterDescription,
        },
        [
          createElement("h2", {
            className: styles.characterTitle,
            textContent: name,
          }),

          createElement(
            "div",
            {
              className: styles.statusBar,
            },
            [
              createElement("div", {
                className: `status ${statusColor}`,
                textContent: "",
              }),

              createElement("h3", {
                className: styles.characterSubtitle,
                textContent: `${status} - ${species}`,
              }),
            ]
          ),

          createElement(
            "h2",
            {
              className: styles.characterSeen,
              textContent: "Last known location:",
            },
            [
              createElement("h3", {
                className: styles.characterLocation,
                textContent: origin.name,
              }),
            ]
          ),

          createElement(
            "h2",
            {
              className: styles.characterSeen,
              textContent: "First seen in:",
            },
            [
              createElement("h3", {
                className: styles.characterLocation,
                textContent: location.name,
              }),
            ]
          ),
        ]
      ),
    ]
  );
  return characterCard;
}
