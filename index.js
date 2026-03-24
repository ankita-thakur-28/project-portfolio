// const BASE_URL = "http://localhost:8083"
const BASE_URL = "https://portfolio-backend-0ekp.onrender.com"

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


contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields!";
        formMessage.style.color = "red";
        return;
    }
     formMessage.textContent = "";

     const submitBtn = contactForm.querySelector("button[type='submit']");
     submitBtn.textContent = "Sending...";
     submitBtn.disabled = true;

    const data = {
        name,
        email,
        message
    }

    const dataPacket = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    let URL = BASE_URL + "/api/add-contact";

    try {
        const response = await fetch(URL, dataPacket);

        if (!response.ok) {
            throw new Error("Server error");
        }

        const result = await response.json();
        console.log("saved:", result);

        submitBtn.textContent = "Send Message";
        submitBtn.disabled = false;

        contactForm.reset();

        //sweet alert
        Swal.fire({
            icon: "success",
            title: "Message Sent! 🎉",
            text: "Thanks for reaching out, I'll get back to you soon!",
            confirmButtonText: "Awesome!",
            confirmButtonColor: "#2563eb",
            timer: 4000,
            timerProgressBar: true,
            showClass: {
                popup: "animate__animated animate__fadeInDown"
            },
            hideClass: {
                popup: "animate__animated animate__fadeOutUp"
            }
        });

    } catch (error) {
        console.log("Error", error)

        submitBtn.textContent = "Send Message";
        submitBtn.disabled = false;

        formMessage.textContent = "⚠️ Something went wrong. Please try again or email me directly.";
        formMessage.style.color = "#dc2626";
    }
});




