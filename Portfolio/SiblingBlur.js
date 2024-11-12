const cards = document.querySelectorAll('.cards, .cards-asso');
// gets all the elements with the 'cards' class or 'cards-asso' class

cards.forEach(card => { // runs through each element with the class of 'cards' or 'cards-asso'
    card.addEventListener('mouseenter', () => { // adds an event listener for when the mouse enters the element
        cards.forEach(sibling => {
            if (sibling !== card) sibling.classList.add('blur');
        });
    });

    card.addEventListener('mouseleave', () => {
        cards.forEach(sibling => sibling.classList.remove('blur'));
    });
});