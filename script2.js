const gamesListEl = document.querySelector(".input-list li ");
// console.log(gamesListEl.innerText);

console.log(gamesListEl.parentNode);

console.log(gamesListEl.parentElement.parentElement);
// (OR) Alter Method:
console.log(gamesListEl.closest("main"));

// Node can declare anything :
console.log(document.documentElement.parentNode);

// Element can declare only Element :
console.log(document.documentElement.parentElement); // null
