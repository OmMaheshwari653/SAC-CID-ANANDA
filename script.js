document.getElementById('joinBtn').addEventListener('click', function() {
    document.getElementById('joinForm').classList.toggle('hidden');
});

document.getElementById('recruitmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for joining!');
});

document.getElementById('darkModeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Countdown Logic
function updateCountdown() {
    const eventDate = new Date("April 30, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = eventDate - now;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerText = `Next Event in: ${days} day(s)!`;
}
setInterval(updateCountdown, 1000);
updateCountdown();
