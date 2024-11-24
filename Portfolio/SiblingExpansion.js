function expansion(id) {
    const cards = document.querySelectorAll('.cards');
    const selected = document.getElementById(id);

    cards.forEach(card => {
        if (card.id !== selected.id) {
            card.classList.add('content-disable');
            card.addEventListener("animationend", () => {setTimeout(2); card.setAttribute('style', 'display: none;');});
        }
        else {
            card.classList.add('content-active');
            
        }
    });
}