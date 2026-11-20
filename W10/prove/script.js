const results = document.querySelector('#results');
const form = document.querySelector('#search-form');
const searchInput = document.querySelector('#search');

function stars(rating) {
    const full = Math.floor(rating);
    return '⭐'.repeat(full) + '☆'.repeat(5 - full);
}

function recipeCard(recipe) {
    const tags = recipe.tags.map(tag => `<button type="button">${tag}</button>`).join('');
    return `
        <article class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div>
                <div class="tags">${tags}</div>
                <h2>${recipe.name}</h2>
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">${stars(recipe.rating)}</span>
                <p>${recipe.description}</p>
            </div>
        </article>`;
}

function show(list) {
    results.innerHTML = list.length
        ? list.map(recipeCard).join('')
        : '<p>No recipes found.</p>';
}

function search(text) {
    const q = text.trim().toLowerCase();
    return recipes.filter(r =>
        [r.name, r.description, ...r.tags, ...r.recipeIngredient]
            .join(' ')
            .toLowerCase()
            .includes(q)
    );
}

form.addEventListener('submit', event => {
    event.preventDefault();
    show(search(searchInput.value));
});

// On load, show one random recipe
show([recipes[Math.floor(Math.random() * recipes.length)]]);