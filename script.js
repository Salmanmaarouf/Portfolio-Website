document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const responseMessage = document.getElementById("responseMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get form data
            const formData = {
                name: document.getElementById("name").value.trim(),
                email: document.getElementById("email").value.trim(),
                message: document.getElementById("message").value.trim(),
            };

            // Basic validation (ensure fields are not empty)
            if (!formData.name || !formData.email || !formData.message) {
                responseMessage.innerText = "All fields are required.";
                responseMessage.style.color = "red";
                return;
            }

            try {
                // Send form data to backend (server.js)
                const response = await fetch("/send",{
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                const result = await response.json();

                // Display success or error message
                responseMessage.innerText = result.message;
                responseMessage.style.color = result.success ? "green" : "red";

                // Clear form fields if email was sent successfully
                if (result.success) {
                    contactForm.reset();
                }
            } catch (error) {
                console.error("Error sending message:", error);
                responseMessage.innerText = "Failed to send message. Please try again.";
                responseMessage.style.color = "red";
            }
        });
    }

    // Apply button click effect to all buttons
    document.querySelectorAll(".nav-button, .back-button, .submit-button, .social-button").forEach(button => {
        button.addEventListener("click", function (event) {
            // Create ripple element
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");

            // Get button dimensions
            const rect = button.getBoundingClientRect();
            ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + "px";
            ripple.style.left = `${event.clientX - rect.left - ripple.offsetWidth / 2}px`;
            ripple.style.top = `${event.clientY - rect.top - ripple.offsetHeight / 2}px`;

            // Append ripple effect and remove it after animation
            button.appendChild(ripple);
            setTimeout(() => {
                ripple.remove();
            }, 100);
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    // Apply fade-in effect on page load
    body.classList.add("show");

    // Find the image and content on each page and apply animations
    const image = document.querySelector(".main-image");
    const content = document.querySelector(".content");

    if (image) {
        image.style.animation = "drop-in 0.5s ease-out forwards"; /* Matches new speed */
    }

    if (content) {
        content.style.animation = "slide-in 0.5s ease-out forwards"; /* Matches new speed */
    }

    // Handle page transition when clicking links
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            const href = link.getAttribute("href");

            // Ignore links that start with #, mailto, or tel
            if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

            event.preventDefault(); // Prevent default navigation

            // Add fade-out effect
            body.classList.remove("show");

            setTimeout(() => {
                window.location.href = href;
            }, 300); // Faster transition time
        });
    });
});
