//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
 let counterValue = 0;
    counterElement.textContent = counterValue;
  incrementBtn.addEventListener('click', function() {
    alert(`Counter Value : ${counterValue}`);
    counterValue++;
    counterElement.textContent = counterValue;
});
});
