document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

    let counterValue = 0;

    incrementButton.addEventListener('click', () => {
        alert(`Current counter value: ${0}`);
        counterValue++;
        counterElement.textContent = counterValue;
    });
});