function startAnimation() {
    const startButton = document.getElementById('startButton');
    const countdownElement = document.getElementById('countdown');
    const winnerElement = document.getElementById('winner');

    // Disable the start button during animation
    startButton.disabled = true;

    // Countdown animation
    countdownElement.textContent = '5';
    setTimeout(() => { countdownElement.textContent = '4'; }, 1000);
    setTimeout(() => { countdownElement.textContent = '3'; }, 2000);
    setTimeout(() => { countdownElement.textContent = '2'; }, 3000);
    setTimeout(() => { countdownElement.textContent = '1'; }, 4000);

    // Winner selection after countdown
    setTimeout(() => {
        const people = ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5', 'Person 6', 'Person 7', 'Person 8', 'Person 9', 'Person 10', 'Person 11', 'Person 12', 'Person 13', 'Person 14', 'Person 15'];

        const randomIndex = Math.floor(Math.random() * people.length);
        const winner = people[randomIndex];

        // Display the winner
        winnerElement.textContent = `Winner: ${winner}`;
        winnerElement.style.display = 'block';

        // Re-enable the start button
        startButton.disabled = false;
    }, 5000);
}
