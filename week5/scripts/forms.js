// Product Array
const products = [
    { id: "p1", name: "Solar Panel Kit" },
    { id: "p2", name: "Water Pump System" },
    { id: "p3", name: "Wheelchair" },
    { id: "p4", name: "Farming Tools Set" }
];

// Populate dropdown
const select = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});