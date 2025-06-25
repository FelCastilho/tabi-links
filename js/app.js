window.onload = () => {
    const boxLinks = document.querySelectorAll(".box-link");

    boxLinks.forEach((boxLink) => {
        const arrow = boxLink.querySelector(".icon-arrow");

        boxLink.addEventListener("mouseenter", () => {
            arrow.classList.add("icon-arrow-active");
        });

        boxLink.addEventListener("mouseleave", () => {
            arrow.classList.remove("icon-arrow-active");
        });
    });
};
