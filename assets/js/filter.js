const filterInput = document.querySelector("input[type=search]");
const oftenlinks = document.querySelectorAll(".list article");

filterInput.addEventListener("keyup", () => {
	const criteria = filterInput.value.toLowerCase().trim();
	for (const element of oftenlinks) {
		element.hidden = !element.textContent.toLowerCase().includes(criteria);
	}
});
