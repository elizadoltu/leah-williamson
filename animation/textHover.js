const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
    const copyElements = item.querySelectorAll(".info, .name, .tag");

    copyElements.forEach((div) => {
        const copy = div.querySelector("p");

        if (copy) {
            const duplicateCopy = document.createElement("p");
            duplicateCopy.textContent = copy.textContent;
            div.appendChild(duplicateCopy);
        }
    });
});

document.querySelectorAll(".menu-item").forEach((item, index) => {
    item.addEventListener("mouseover", () => {
        mouseOverAnimation(item);
    });

    item.addEventListener("mouseout", () => {
        mouseOutAnimation(item);
    });
});

const mouseOverAnimation = (elem) => {
    gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
        top: "-100%",
        duration: 0.3,
    });
    gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
        top: "0%",
        duration: 0.3,
    });
};

const mouseOutAnimation = (elem) => {
    gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
        top: "-0%",
        duration: 0.3,
    });
    gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
        top: "100%",
        duration: 0.3,
    });
};