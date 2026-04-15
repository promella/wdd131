// ===============================
// HELPER FUNCTIONS
// ===============================

// Email validation
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}


// ===============================
// MENU FUNCTIONALITY
// ===============================

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

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll("#nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}


// ===============================
// DONATION FORM
// ===============================

const donateForm = document.querySelector("#donateForm");

if (donateForm) {
  donateForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#donor").value.trim();
    const amount = parseFloat(document.querySelector("#amount").value);
    const messageBox = document.querySelector("#donationMessage");

    messageBox.textContent = "";

    // Validation
    if (!name || !amount) {
      messageBox.textContent = "Please enter your name and donation amount.";
      messageBox.style.color = "red";
      return;
    }

    if (amount <= 0) {
      messageBox.textContent = "Donation amount must be greater than 0.";
      messageBox.style.color = "red";
      return;
    }

    // Success
    localStorage.setItem("donorName", name);
    localStorage.setItem("donationAmount", amount);

    messageBox.textContent = `Thank you, ${name}, for donating $${amount}!`;
    messageBox.style.color = "green";

    donateForm.reset();
  });
}


// ===============================
// PROGRAMS DATA
// ===============================

const programs = [
  {
    title: "Agriculture & Food Security",
    image: "images/agriculture.jpg",
    description:
      "We use small-scale farming and gardening initiatives to improve household nutrition and food security."
  },
  {
    title: "Educational & Learning Support",
    image: "images/education.jpg",
    details: [
      "Tutoring and literacy support for children with disabilities",
      "Training and workshops to develop essential life skills"
    ]
  },
  {
    title: "Life Skills & Vocational Development",
    image: "images/vocational.jpg",
    details: [
      "Practical vocational training for independent living",
      "Skills to support sustainable livelihoods"
    ]
  }
];


// ===============================
// DISPLAY PROGRAMS
// ===============================

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
      extraContent =
        "<ul>" +
        program.details.map(item => `<li>${item}</li>`).join("") +
        "</ul>";
    }

    html += `
      <div class="card">
        ${program.image ? `<img src="${program.image}" alt="${program.title}">` : ""}
        <h3>${program.title}</h3>
        ${extraContent}
      </div>
    `;
  });

  container.innerHTML = html;
}


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const messageInput = document.querySelector("#messageInput").value.trim();
    const messageBox = document.querySelector("#formMessage");

    messageBox.textContent = "";

    // Validation
    if (!name || !email || !messageInput) {
      messageBox.textContent = "Please fill in all fields.";
      messageBox.style.color = "red";
      return;
    }

    if (!isValidEmail(email)) {
      messageBox.textContent = "Please enter a valid email address.";
      messageBox.style.color = "red";
      return;
    }

    // Success
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    messageBox.textContent = `Thank you, ${name}! Your message has been received.`;
    messageBox.style.color = "green";

    contactForm.reset();
  });
}


// ===============================
// INIT
// ===============================

displayPrograms();