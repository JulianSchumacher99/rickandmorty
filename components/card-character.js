import { createElement } from "../lib/elements";
import styles from "./card-character.module.css";

export default function createCharacterCard({
  name,
  lastLocation,
  status,
  firstLocation,
  img,
  statusColor,
  race,
}) {
  const characterCard = createElement(
    "article",
    {
      className: styles.card,
    },
    [
      createElement("img", {
        src: img,
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
                className: statusColor,
                textContent: "",
              }),

              createElement("h3", {
                className: styles.characterSubtitle,
                textContent: `${status} - ${race}`,
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
                textContent: lastLocation,
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
                textContent: firstLocation,
              }),
            ]
          ),
        ]
      ),
    ]
  );
  return characterCard;
}
