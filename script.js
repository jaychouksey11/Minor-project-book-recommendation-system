document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.2s";
        });
        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });
    
    document.getElementById("loginForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        // Add validation or redirection here
        alert("Login Successful!");
        window.location.href = "index.html";
    });

    document.getElementById("signupForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Sign-Up Successful!");
        window.location.href = "index.html";
    });
});
