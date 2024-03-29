//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    // Create 800 square boxes
    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        
        // Add event listener for hover
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red';
        });

        // Add event listener for hover out
        square.addEventListener('mouseout', () => {
            setTimeout(() => {
                square.style.backgroundColor = 'black';
            }, 1000); // 1 second delay
        });
    }
});

