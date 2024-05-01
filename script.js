//your JS code here. If required.
 function updateTimer() {
      const timerElement = document.getElementById('timer');
      const now = new Date();
      const options = { month: 'numeric', day: 'numeric', year: 'numeric',hour: 'numeric', minute: 'numeric', second: 'numeric' };
      const dateTimeString = now.toLocaleDateString(undefined, options);
      timerElement.textContent = dateTimeString;
    }

    // Initial update
    updateTimer();

    // Update timer every second
    setInterval(updateTimer, 1000);