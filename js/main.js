let btn = document.querySelector(".icon");
let ul = btn.nextElementSibling;
ul.classList.add("hidden");
console.log(ul);
btn.addEventListener("click", () => {
	ul.classList.toggle("visible");
});
