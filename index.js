const BASE_URL = "http://localhost:8083"

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

        const data = await response.json();

        console.log("saved:", data);

    } catch (error) {
        console.log("Error", error)
    }

});

