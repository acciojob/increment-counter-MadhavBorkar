document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
    let counterValue = 0;
    counterElement.textContent = counterValue;
    incrementBtn.addEventListener('click', function() {
        counterValue++;
        counterElement.textContent = counterValue;
        alert(`Counter Value : ${counterValue}`);
    });
});