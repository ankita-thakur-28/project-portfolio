// const BASE_URL = "http://localhost:8083"
const BASE_URL = "https://portfolio-backend-0ekp.onrender.com";

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

// Helper — lock all form fields
function lockForm() {
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const nameEl = document.getElementById("name");
    const emailEl = document.getElementById("email");
    const msgEl = document.getElementById("message");

    submitBtn.disabled = true;
    nameEl.disabled = true;
    emailEl.disabled = true;
    msgEl.disabled = true;

    nameEl.style.opacity = "0.5";
    emailEl.style.opacity = "0.5";
    msgEl.style.opacity = "0.5";

    submitBtn.querySelector("span").textContent = "Sending...";
}

// Helper — unlock all form fields
function unlockForm(btnText = "Send Message") {
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const nameEl = document.getElementById("name");
    const emailEl = document.getElementById("email");
    const msgEl = document.getElementById("message");

    submitBtn.disabled = false;
    nameEl.disabled = false;
    emailEl.disabled = false;
    msgEl.disabled = false;

    nameEl.style.opacity = "1";
    emailEl.style.opacity = "1";
    msgEl.style.opacity = "1";

    submitBtn.querySelector("span").textContent = btnText;
}

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

    lockForm(); //lock field on submit


    const data = { name, email, message }


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

        unlockForm("Send Message");
        contactForm.reset();

        Swal.fire({
            title: 'Message Sent',
            html: `
        <div class="swal-ripple-icon-wrap">
            <div class="swal-ripple-ring"></div>
            <div class="swal-ripple-ring"></div>
            <div class="swal-ripple-ring"></div>
            <div class="swal-ripple-center">
                <svg viewBox="0 0 24 24">
                    <polyline points="4 12 9 17 20 6"/>
                </svg>
            </div>
        </div>

        <div class="swal-ripple-label">Message delivered</div>
        <div class="swal-ripple-divider"></div>
        <p>Thanks for reaching out — I read every message and will get back to you soon.</p>
    `,

            showClass: {
                popup: ''   /* disable default swal animation — we handle it */
            },
            hideClass: {
                popup: ''
            },
            customClass: {
                popup: 'swal-ripple-popup',
                backdrop: 'swal-ripple-backdrop',
                confirmButton: 'swal2-confirm',
            },
            // confirmButtonText: 'Perfect!',
            timer: 5000,
            timerProgressBar: true,
            showConfirmButton: false,
            allowOutsideClick: false,    /* ← click outside to close */
            allowEscapeKey: false,
            backdrop: true,
            didOpen: () => {
                /* force pointer events on the swal2 container so clicks reach backdrop */
                const container = document.querySelector('.swal2-container');
                if (container) {
                    container.style.pointerEvents = 'auto';
                    container.style.zIndex = '99999';
                }
            },
            willClose: () => {
                const container = document.querySelector('.swal2-container');
                if (container) container.style.pointerEvents = 'none';
            }
        });


    } catch (error) {
        console.log("Error", error)

        unlockForm("Send Message");

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
const navLinks = document.getElementById('nav-links');

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

// ── Certificate Flip Cards ──
document.querySelectorAll('.cert-flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    // Mobile tap support — prevent double fire
    card.addEventListener('touchend', (e) => {
        e.preventDefault();
        card.classList.toggle('flipped');
    });
});