// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        })
    })
})

// Intersection Observer for section animations
const observerOptions = {
    threshold: 0.25,
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
            // Update active nav dot
            updateActiveDot(entry.target.id)
        }
    })
}, observerOptions)

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
    observer.observe(section)
})

// Update active navigation dot
function updateActiveDot(sectionId) {
    document.querySelectorAll(".floating-nav a").forEach((dot) => {
        dot.classList.remove("active")
        if (dot.getAttribute("href") === `#${sectionId}`) {
            dot.classList.add("active")
        }
    })
}

// Form submission handling
document.getElementById("contact-form")?.addEventListener("submit", function (e) {
    e.preventDefault()

    // Add your form submission logic here
    // For now, just show an alert
    alert("Thank you for your message! I will get back to you soon.")
    this.reset()
})

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle")
const icon = themeToggle.querySelector("i")

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme")
    icon.classList.toggle("fa-moon")
    icon.classList.toggle("fa-sun")
})

// Scroll progress indicator
window.addEventListener("scroll", () => {
    const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
    document.querySelectorAll(".floating-nav a").forEach((dot, index) => {
        const dotProgress = index / (document.querySelectorAll(".floating-nav a").length - 1)
        if (scrollProgress >= dotProgress) {
            dot.classList.add("active")
        } else {
            dot.classList.remove("active")
        }
    })
})

