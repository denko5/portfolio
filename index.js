document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll Effect
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });

            // Ensure visibility when navigated via links
            targetSection.classList.add("visible");
        });
    });

    // Scroll Animations Fix
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.add("hidden"); // Start hidden for animation
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("hidden");
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
