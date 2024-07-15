class GameStudio {
  #username;
  #password;
  #nonReleasedGames;
  #name;
  #foundedYear;
  #country;

  constructor(name, foundedYear, country, username, password) {
    this.name = name;
    this.foundedYear = foundedYear;
    this.country = country;
    this.#username = username;
    this.#password = password;
  }

  get name() {
    return this.name;
  }

  set name(value) {
    this.value = value;
  }
  get foundedYear() {
    return this.foundedYear;
  }
  set foundedYear(value) {
    this.foundedYear = value;
  }
  get country() {
    return this.country;
  }
  set country(value) {
    this.country = value;
  }
  authenticate(username, password) {
    return this.#username === username && this.#password === password;
  }

  addNonReleasedGame(game) {
    this.#nonReleasedGames.push(game);
  }
  getReleasedGames() {
    return this.#nonReleasedGames.filter((game) => game.isReleased());
  }
  getAllGames() {
    return this.#nonReleasedGames;
  }
  calculateAge() {
    return new Date().getFullYear() - this.foundedYear;
  }
  printDetails() {
    console.log(
      `studio:${this.name}, Year:${this.foundedYear},country:${this.country}`
    );
  }
}

class Videogame {
  #title;
  #releaseYear;
  #genre;
  #developer;
  #isReleased;

  constructor(title, releaseYear, genre, developer, isReleased) {
    this.#title = title;
    this.#releaseYear = releaseYear;
    this.#genre = genre;
    this.#developer = developer;
    this.#isReleased = isReleased;
  }

  get title() {
    return this.#title;
  }
  set title(value) {
    this.#title = value;
  }
  get releaseYear() {
    return this.#releaseYear;
  }
  set releaseYear(value) {
    this.#releaseYear = value;
  }
  get genre() {
    return this.#genre;
  }
  set genre(value) {
    this.#genre = value;
  }
  get developer() {
    return this.#developer;
  }
  set developer(value) {
    this.#developer = value;
  }
  isReleased() {
    return this.#isReleased;
  }
  printDetails() {
    console.log(
      `title: ${this.#title}, Year: ${this.#releaseYear}, Genre: ${
        this.#genre
      }, Developer: ${this.#developer.name}`
    );
  }
}
const studio = new GameStudio("New games1", 2999, "America", "Lousiana");
const game1 = new GameStudio("New games2", 3999, "America", "New Jersy");
const game2 = new GameStudio("New games3", 4999, "America", "Miami");

studio.addNonReleasedGame(game1);
studio.addNonReleasedGame(game2);

document.getElementById("authenticateButton").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const authenticated = studio.authenticate(username, password);

  let details = `name : ${studio.name}\nFounded year: ${
    studio.foundedYear
  }\ncountry: ${studio.country}\nAge: ${studio.calculateAge()}\n`;

  if (authenticated) {
    details += "Access done: games \n";
    const games = studio.getAllGames();
    games.forEach((game) => {
      details += ` ${game.title} (${game.releaseYear})\n`;
    });
  } else {
    details += "Acces failed: relased games\n";
    const games = studio.getReleasedGames();
    games.forEach((game) => {
      details += ` ${game.title} (${game.releaseYear})\n`;
    });
  }
  document.getElementById("studioDetails").innerText = details;
});
