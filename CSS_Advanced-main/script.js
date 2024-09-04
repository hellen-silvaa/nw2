document.addEventListener('DOMContentLoaded', function () {
    const brightnessRange = document.getElementById('brightnessRange');
    const brightnessPercentage = document.getElementById('brightnessPercentage');

    function updateBackground() {
        const value = brightnessRange.value;
        brightnessRange.style.background = `linear-gradient(to right, #ffffff ${value}%, #d3d3d3 ${value}%)`;
        brightnessPercentage.textContent = `${value}%`;
    }

    brightnessRange.addEventListener('input', updateBackground);

    // Initialize the background on page load
    updateBackground();
});

document.addEventListener('DOMContentLoaded', function() {
    const brightnessRange = document.getElementById('brightnessRange');
    const lampImage = document.getElementById('lampImage');
    const brightnessPercentage = document.getElementById('brightnessPercentage');

    function updateBrightness() {
        const brightnessValue = brightnessRange.value;
        lampImage.style.filter = `brightness(${brightnessValue}%)`;
        brightnessPercentage.textContent = `${brightnessValue}%`;
    }

    brightnessRange.addEventListener('input', updateBrightness);

    // Initialize the brightness on page load
    updateBrightness();
});

document.addEventListener('DOMContentLoaded', function() {
    const circularRange = document.getElementById('circularRange');
    const currentTime = document.getElementById('currentTime');
    const totalTime = document.getElementById('totalTime');
    const playPauseButton = document.getElementById('playPause');
    const togglePlay = document.getElementById('togglePlay');
    let isPlaying = false;

    const progress = document.getElementById('progress');

    function updateProgress(value) {
        const totalSeconds = 2 * 60 + 27; // Total time in seconds (2:27)
        const currentSeconds = (value / 100) * totalSeconds;

        const minutes = Math.floor(currentSeconds / 60);
        const seconds = Math.floor(currentSeconds % 60);

        currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        const offset = 440 - (value / 100) * 440;
        progress.setAttribute('stroke-dashoffset', offset);
    }

    circularRange.addEventListener('input', function(e) {
        updateProgress(e.target.value);
    });

    // Initialize the current time and progress on page load
    updateProgress(34);

    playPauseButton.addEventListener('click', function() {
        isPlaying = !isPlaying;
        playPauseButton.textContent = isPlaying ? 'Pause' : 'Play';
    });

    togglePlay.addEventListener('change', function() {
        isPlaying = togglePlay.checked;
        playPauseButton.textContent = isPlaying ? 'Pause' : 'Play';
    });
});