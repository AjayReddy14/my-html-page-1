// Initialize EmailJS
emailjs.init("pYA3sHxEs_X2ZacIY"); // Replace with your public key

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_t8vy0yb", "template_c7sy7cb", params)
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
            })
            .catch((error) => {
                console.error("Failed to send message:", error);
                alert("There was an error sending your message.");
            });
    });
});
