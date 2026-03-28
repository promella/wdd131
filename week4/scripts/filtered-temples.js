const menuButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
const container = document.getElementById('temple-container');
const year = document.querySelector('#year');
const lastModified = document.querySelector('#lastModified');

// Mobile menu toggle
menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Render temples
function renderTemples(templesToRender) {
    container.innerHTML = "";

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

// Initial render
renderTemples(temples);

// Filtering
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const filter = link.dataset.filter;
        let filtered;

        switch (filter) {
            case 'old':
                filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                filtered = temples.filter(t => t.area > 90000);
                break;
            case 'small':
                filtered = temples.filter(t => t.area < 10000);
                break;
            default:
                filtered = temples;
        }

        renderTemples(filtered);
    });
});

// Footer
year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;