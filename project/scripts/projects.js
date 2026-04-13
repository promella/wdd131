// MENU
const menuButton = document.getElementById("menu");
const nav = document.getElementById("nav");

function toggleMenu() {
    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");
    menuButton.textContent = isOpen ? "✖" : "☰";
    menuButton.setAttribute("aria-expanded", isOpen);
}

if (menuButton && nav) {
    menuButton.addEventListener("click", toggleMenu);
}

// Close menu when link clicked
const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        if (menuButton) {
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
    // Donation form
const donateForm = document.querySelector("#donateForm");

if (donateForm) {
  donateForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.querySelector("#donor").value;
    const amount = document.querySelector("#amount").value;

    if (name && amount > 0) {
      localStorage.setItem("donorName", name);
      localStorage.setItem("donationAmount", amount);

      document.querySelector("#donationMessage").textContent =
        `Thank you, ${name}, for donating $${amount}!`;
    }
    });
});


// PROGRAMS DATA
const programs = [
  {
    title: "Agriculture & Food Security",
    description: "We use small-scale farming and gardening initiatives to improve household nutrition, develop practical agricultural skills, and create sustainable income-generating opportunities for persons with disabilities and their caregivers."
  },
  {
    title: "Educational & Learning Support",
    details: [
      "Tutoring and literacy support for children with disabilities",
      "Training and workshops to develop essential life skills"
    ]
  },
  {
    title: "Life Skills & Vocational Development",
    details: [
      "Practical vocational training for independent living",
      "Skills to support sustainable livelihoods"
    ]
  },
  {
    title: "Adaptive Sports & Psychosocial Support",
    details: [
      "Inclusive sports programmes designed for individuals with disabilities",
      "Psychosocial support to promote mental well-being"
    ]
  },
  {
    title: "Caregiver & Community Empowerment",
    details: [
      "Training and resources for caregivers",
      "Initiatives that strengthen community participation and support"
    ]
  }
];

// DISPLAY PROGRAMS
function displayPrograms() {
  const container = document.querySelector("#programs");

  if (!container) return;

  let html = "";

  programs.forEach(program => {
    let extraContent = "";

    if (program.details) {
      extraContent = "<ul>";
      program.details.forEach(item => {
        extraContent += `<li>${item}</li>`;
      });
      extraContent += "</ul>";
    }

    if (program.description) {
      extraContent = `<p>${program.description}</p>`;
    }

    html += `
      <div class="card">
        <h3>${program.title}</h3>
        ${extraContent}
      </div>
    `;
  });

  container.innerHTML = html;
}

// CONTACT FORM + localStorage
function saveUser(name) {
  localStorage.setItem("userName", name);
}

const form = document.querySelector("#contactForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.querySelector("#name").value;

    if (name) {
      saveUser(name);

      document.querySelector("#message").textContent =
        `Thank you, ${name}! We will contact you soon.`;
    }
  });
}

// RUN PROGRAM DISPLAY
if (programs.length > 0) {
  displayPrograms();
}