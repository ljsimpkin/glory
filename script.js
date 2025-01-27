document.addEventListener('DOMContentLoaded', (event) => {
    const countdownDate = new Date('February 1, 2025 05:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const months = (distance / (1000 * 60 * 60 * 24 * 30.44)).toFixed(2);
        const weeks = (distance / (1000 * 60 * 60 * 24 * 7)).toFixed(2);
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor(distance / (1000 * 60));
        const seconds = Math.floor(distance / 1000);

        document.getElementById('months').innerText = months;
        document.getElementById('weeks').innerText = weeks;
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerText = "The countdown is over!";
        }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
