  document.addEventListener('DOMContentLoaded', function() {
            const counterElement = document.getElementById('counter');
            const incrementBtn = document.getElementById('incrementBtn');

            incrementBtn.addEventListener('click', function() {
                const currentCount = parseInt(counterElement.textContent);
                alert(currentCount);
                counterElement.textContent = currentCount + 1;
            });
        });