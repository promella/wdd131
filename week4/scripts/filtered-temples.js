const menuButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
const container = document.getElementById('temple-container');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
});

// Footer year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
const modified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last Modified: ${modified.toDateString()}`;

// Function to render temples
function renderTemples(templesToRender) {
    container.innerHTML = ""; // clear previous content
    templesToRender.forEach((temple) => {
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

// Initial render: all temples
renderTemples(temples);

// Filtering functionality
const filterLinks = document.querySelectorAll('.navigation a');
filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.dataset.filter;
        let filteredTemples = temples;

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
            case 'all':
            default:
                filteredTemples = temples;
        }

        renderTemples(filteredTemples);
    });
});
