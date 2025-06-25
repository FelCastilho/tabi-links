const boxLinks = document.querySelectorAll(".box-link");
const links = document.querySelectorAll(".link");

window.onload = () => {

    boxLinks.forEach((boxLink) => {
        const arrow = boxLink.querySelector(".icon-arrow");

        boxLink.addEventListener("mouseenter", () => {
            arrow.classList.add("icon-arrow-active");
        });

        boxLink.addEventListener("mouseleave", () => {
            arrow.classList.remove("icon-arrow-active");
        });
    });

    links.forEach((links) => {

        links.addEventListener("mouseenter", () => {
            arrow.classList.remove("icon-arrow-active");
        });

        links.addEventListener("mouseleave", () => {
            arrow.classList.remove("icon-arrow-active");
        });
    })
};


// GSAP ANIMATIONS

gsap.fromTo("#fale-conosco", {
    opacity: 0,
    y: -20,
}, {
    opacity: 1,
    y: 0,
    delay: 0.2
});

gsap.fromTo("#instagram", {
    opacity: 0,
    y: -20,
}, {
    opacity: 1,
    y: 0,
    delay: 0.4,
});

gsap.fromTo("#facebook", {
    opacity: 0,
    y: -20,
}, {
    opacity: 1,
    y: 0,
    delay: 0.6,
});

gsap.fromTo("#linkedin", {
    opacity: 0,
    y: -20,
}, {
    opacity: 1,
    y: 0,
    delay: 0.8,
});

gsap.fromTo("#site", {
    opacity: 0,
    y: -20,
}, {
    opacity: 1,
    y: 0,
    delay: 1,
});
