const cards = document.querySelectorAll('.cards, .cards-asso');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cards.forEach(sibling => {
            if (sibling !== card) sibling.classList.add('blur');
        });
    });

    card.addEventListener('mouseleave', () => {
        cards.forEach(sibling => sibling.classList.remove('blur'));
    });
});