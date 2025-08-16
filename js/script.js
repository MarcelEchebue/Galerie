// Bascule thème
const toggleCheckbox = document.getElementById('toggle-theme');
toggleCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('dark', toggleCheckbox.checked);
});

// Animation des cartes au chargement
const cards = document.querySelectorAll('.card');
window.addEventListener('load', () => {
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
