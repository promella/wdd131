const menuButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
const container = document.getElementById('temple-container');
const year = document.querySelector('#year');
const lastModified = document.querySelector('#lastModified');

// Mobile menu toggle
menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
});

// Render temples function
function renderTemples(templesToRender) {
    container.innerHTML = ""; // clear existing cards
    templesToRender.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card');
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <div class="temple-info">
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Initial render (all temples)
renderTemples(temples);

// Menu filtering
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const filter = link.textContent.toLowerCase();
        let filteredTemples;

        switch(filter) {
            case 'old':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(t => t.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(t => t.area < 10000);
                break;
            default:
                filteredTemples = temples;
        }

        renderTemples(filteredTemples);
    });
});

// Footer dates
year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${new Date(document.lastModified).toDateString()}`;