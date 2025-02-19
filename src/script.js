// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Intersection Observer for section animations
const observerOptions = {
    threshold: 0.25
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form submission handling
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
// Scroll to Resume section when "Resume" is clicked
document.querySelector('a[href="#resume"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector("#resume").scrollIntoView({
        behavior: "smooth"
    });
});
// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.querySelector(".cta-button").addEventListener("click", function() {
    document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });
});
// Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Function to scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Hover Effect for Skills & Expertise
document.querySelectorAll('.skills-category').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = "translateY(-5px)";
        item.style.background = "#3d3f5a";
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = "translateY(0)";
        item.style.background = "#222";
    });
});
