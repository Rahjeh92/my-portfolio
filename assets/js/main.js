/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

// Show Menu (for mobile)
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

// Hide Menu (for mobile)
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE WHEN LINK CLICK ===============*/
const navLink = document.querySelectorAll(".nav__link")
navLink.forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
}))

/*=============== CHANGE BACKGROUND HEADER ON SCROLL ===============*/
const blurHeader = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("blur-header")
        : header.classList.remove("blur-header")
}
window.addEventListener("scroll", blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message")

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_ai9zjfc", "template_641w81u", "#contact-form", "aQ1eShe--kV8MfRvs")
        .then(() => {
            // Success message
            contactMessage.textContent = "Message sent successfully ✅"
            setTimeout(() => { contactMessage.textContent = "" }, 5000)
            contactForm.reset()
        }, () => {
            // Error message
            contactMessage.textContent = "Message not sent (service error) ❌"
        })
}
if (contactForm) contactForm.addEventListener("submit", sendEmail)

/*=============== SHOW SCROLL UP BUTTON ===============*/
const scrollUP = () => {
    const scrollUP = document.getElementById("scroll-up")
    this.scrollY >= 350 ? scrollUP.classList.add("show-scroll")
        : scrollUP.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUP)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

const scrollActive = () => {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionLink = document.querySelector(".nav__menu a[href*=" + sectionId + "]")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionLink.classList.add("active-link")
        } else {
            sectionLink.classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
    // reset: true // Uncomment if you want animations to repeat
})

sr.reveal(".home__data, .home__social, .contact__container, .footer__container")
sr.reveal(".home__image", { origin: "bottom" })
sr.reveal(".about__data, .skills__data", { origin: "left" })
sr.reveal(".about__image, .skills__content", { origin: "right" })
sr.reveal(".services__card, .projects__card", { interval: 100 })
