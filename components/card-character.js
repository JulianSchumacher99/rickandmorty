import { createElement } from "../lib/elements";
import styles from "./card-character.module.css";

export default function createCharacterCard({
  name,
  lastLocation,
  status,
  firstLocation,
  img,
}) {
  const characterCard = createElement(
    "article",
    {
      className: styles.card,
    },
    [
      createElement("img", {
        src: img,
        className: styles.characterImg,
      }),

      createElement(
        "div",
        {
          className: styles.characterDescription,
        },
        [
          createElement(
            "div",
            {
              className: styles.characterTitle,
              textContent: name,
            },
            [
              createElement("div", {
                className: styles.characterSubtitle,
                textContent: status,
              }),
            ]
          ),

          createElement(
            "div",
            {
              className: styles.characterSeen,
              textContent: "Last known location:",
            },
            [
              createElement("div", {
                className: styles.characterLocation,
                textContent: lastLocation,
              }),
            ]
          ),

          createElement(
            "div",
            {
              className: styles.characterSeen,
              textContent: "First seen in:",
            },
            [
              createElement("div", {
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
