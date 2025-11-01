var accordion = document.getElementsByClassName("faqs-accordion-btn");

Array.from(accordion).forEach((element, index) => {
	element.addEventListener("click", function () {
		var panel = this.nextElementSibling;
		
		if (panel.style.display === "block") {
			element.querySelector("i").classList.replace("fa-angle-up", "fa-angle-down");
			panel.style.display = "none";
		} else {
			element.querySelector("i").classList.replace("fa-angle-down", "fa-angle-up");
			panel.style.display = "block";
		}
	});	
});
