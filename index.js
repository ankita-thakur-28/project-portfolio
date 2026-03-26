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

// CUSTOM CURSOR
// Disable custom cursor on touch/mobile devices
const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

if (!isTouchDevice()) {
    // Only run cursor code on non-touch devices
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

window.addEventListener('mousemove', (e) => {
    // ✅ correct positioning using left/top not transform
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .skill-pill, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorRing.style.width = '50px';
        cursorRing.style.height = '50px';
        cursorRing.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
        cursorRing.style.width = '32px';
        cursorRing.style.height = '32px';
        cursorRing.style.opacity = '0.6';
    });
});
} else {
    // Hide cursor elements entirely on mobile
    document.querySelector('.cursor-dot').style.display = 'none';
    document.querySelector('.cursor-ring').style.display = 'none';
}

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const heroName = document.querySelector('.hero-name');

heroName.addEventListener('mouseenter', () => {
  heroName.classList.remove('animate');
  void heroName.offsetWidth; // force reflow
  heroName.classList.add('animate');
});

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// ── Back to Top ──
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});