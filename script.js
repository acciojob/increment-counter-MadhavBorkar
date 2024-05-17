document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

    let counterValue = 3;

    incrementButton.addEventListener('click', () => {
        alert(`Current counter value: ${counterValue}`);
        counterValue++;
        counterElement.textContent = counterValue;
    });
});