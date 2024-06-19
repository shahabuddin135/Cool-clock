function display12HourTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    });

    document.getElementById('time').textContent = formattedTime;

    // Add greetings based on the time
    let greeting;
    if (now.getHours() >= 4 && now.getHours() < 12) {
        greeting = 'Good Morning';
    } else if (now.getHours() >= 12 && now.getHours() < 17) {
        greeting = 'Good Afternoon';
    } else if (now.getHours() >= 17 && now.getHours() < 21) {
        greeting = 'Good Evening';
    } else {
        greeting = 'Good Night';
    }
    document.getElementById('Greetings').textContent = greeting;
}

// Initial call to display time and greetings
display12HourTime();

// Refresh every second (1000 milliseconds)
setInterval(display12HourTime, 1000);