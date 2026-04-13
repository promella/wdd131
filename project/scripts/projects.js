
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

// Close menu on link click
const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
  });
});


// DONATION FORM
const donateForm = document.querySelector("#donateForm");

if (donateForm) {
  donateForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#donor").value;
    const amount = document.querySelector("#amount").value;

    if (name && amount > 0) {
      localStorage.setItem("donorName", name);
      localStorage.setItem("donationAmount", amount);

      document.querySelector("#donationMessage").textContent =
        `Thank you, ${name}, for donating $${amount}!`;

      donateForm.reset();
    }
  });
}


// PROGRAMS DATA
const programs = [
  {
    title: "Agriculture & Food Security",
    description:
      "We use small-scale farming and gardening initiatives to improve household nutrition..."
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
  }
];


// DISPLAY PROGRAMS
function displayPrograms() {
  const container = document.querySelector("#programs");
  if (!container) return;

  let html = "";

  programs.forEach(program => {
    let extraContent = "";

    if (program.description) {
      extraContent = `<p>${program.description}</p>`;
    }

    if (program.details) {
      extraContent = "<ul>" +
        program.details.map(item => `<li>${item}</li>`).join("") +
        "</ul>";
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


// CONTACT FORM (FIXED - ONLY ONE HANDLER)
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const messageInput = document.querySelector("#messageInput").value;

    if (name && email && messageInput) {
      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);

      document.querySelector("#formMessage").textContent =
        `Thank you, ${name}! Your message has been received.`;

      contactForm.reset();
    }
  });
}


// RUN PROGRAM DISPLAY
displayPrograms();