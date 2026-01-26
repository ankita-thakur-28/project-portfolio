function scrollToProject() {
    const projectSection = document.getElementById("projects");

    if (projectSection) {
        projectSection.scrollIntoView({
            behavior: "smooth"
        });
    }
    
}


//contact form submission
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields!";
         return;
    }

    formMessage.textContent = "Sending...";
    formMessage.style.color = "green";

    setTimeout(() => {
        formMessage.textContent = "Thank you! Your message has been sent.";
        contactForm.reset();
    }, 1500);
});

contactForm.addEventListener("submit", handleSubmit);
