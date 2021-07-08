const filterInput = document.querySelector("input[type=search]");

filterInput.addEventListener("keyup", () => {
	const criteria = filterInput.value.toLowerCase().trim();
	const order = document.querySelectorAll(".list article");
	order.forEach(data => {
		if (data.innerText.toLowerCase().indexOf(criteria) >= 0) {
			data.style['display'] = null;
		} else {
			data.style['display'] = "none";
		}
	});
});
