const project = document.querySelectorAll(".project");

project.forEach(card => {
    const imgBg = card.querySelector(".imgBg"); // Select the child .imgBg specific to this card
    card.addEventListener("mouseenter", () => {
        imgBg.style.display = "flex";
    });
    card.addEventListener("mouseleave", () => {
        imgBg.style.display = "none";
    });
});
