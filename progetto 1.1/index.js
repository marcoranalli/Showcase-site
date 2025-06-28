// const date = document.getElementById("date");
// date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".ripristina-altezza");

navToggle.addEventListener("click", function() {
    // const altezzaLink = links.getBoundingClientRect().height;
    const altezzaContainer = linksContainer.getBoundingClientRect().height;
    // linksContainer.removeAttribute("hidden");
    // linksContainer.hasAttribute("hidden") ? linksContainer.removeAttribute("hidden") : linksContainer.setAttribute("hidden")
    if (altezzaContainer === 0 && linksContainer.hasAttribute("hidden")) {
        // linksContainer.style.height = `${altezzaLink}px`;
        linksContainer.removeAttribute("hidden");
    } else {
        // linksContainer.style.height = 0;
        linksContainer.setAttribute("hidden", "");
    };
});

window.addEventListener("scroll", function() {
    const altezzaScroll = this.window.pageYOffset;
    const altezzaNav = navbar.getBoundingClientRect().height;
    if(altezzaScroll > altezzaNav) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if(altezzaScroll > altezzaNav) {
        topLink.removeAttribute("hidden");
    } else {
      topLink.setAttribute("hidden", "")
    }
});

