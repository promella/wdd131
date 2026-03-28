const menuButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
nav.classList.toggle('open');
menuButton.classList.toggle('open');
});


const year = document.querySelector('#year');
const lastModified = document.querySelector('#lastModified');

const container = document.getElementById("temple-container");

temples.forEach((temple) => {
  const card = document.createElement("div");
  card.classList.add("temple-card");

  card.innerHTML = `
    <img src="${temple.imageUrl}" alt="${temple.templeName}">
    <div class="temple-info">
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    </div>
  `;

  container.appendChild(card);
});

renderTemples(temples);

const modified = new Date(document.lastModified);
lastModified.textContent = `Last Modified: ${modified.toDateString()}`;
