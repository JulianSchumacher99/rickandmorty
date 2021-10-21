export async function apiRandomPageCall() {
  const randomPage = Math.floor(Math.random() * 34) + 1;
  const url = "https://rickandmortyapi.com/api/character?page=";

  const response = await fetch(url + randomPage);
  const body = await response.json();
  const characters = body.results;
  return characters;
}
