document.getElementById('giftCardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;

    // Display the purchased gift card
    displayGiftCard(amount);

    // Add falling gifts
    addFallingGifts(10); // Number of falling gifts
});

function displayGiftCard(amount) {
    const cardPreview = document.getElementById('cardPreview');
    cardPreview.innerHTML = `
        <img src="https://via.placeholder.com/150" alt="Starbucks Gift Card">
        <p>Amount: $${amount}</p>
        <p>Enjoy your coffee!</p>
    `;
}

function addFallingGifts(count) {
    const giftsContainer = document.querySelector('.gifts');
    for (let i = 0; i < count; i++) {
        const gift = document.createElement('div');
        gift.classList.add('gift');
        gift.style.left = `${Math.random() * window.innerWidth}px`;
        gift.style.animationDelay = `${Math.random() * 4}s`;
        giftsContainer.appendChild(gift);
    }
}
