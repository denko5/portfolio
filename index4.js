document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Scroll Animation Visibility
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.add("hidden");
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

    // Smooth Scroll Effect
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Theme Toggle Functionality
    const toggleThemeButton = document.getElementById("toggleTheme");

    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");

        // Toggle icon for the theme functionaliity
        if (document.body.classList.contains("light-mode")) {
            toggleThemeButton.textContent = "🌞";
            localStorage.setItem("theme", "light");
        } else {
            toggleThemeButton.textContent = "🌙";
            localStorage.setItem("theme", "dark");
        }
    });

    // Loading the stored theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        toggleThemeButton.textContent = "🌞";
    } else {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        toggleThemeButton.textContent = "🌙";
    }
});
