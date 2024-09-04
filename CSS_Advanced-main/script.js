document.addEventListener('DOMContentLoaded', function () {
    const brightnessRange = document.getElementById('brightnessRange');
    const brightnessPercentage = document.getElementById('brightnessPercentage');
    const lampImage = document.getElementById('lampImage');
    const pausePlayButton = document.getElementById('pausePlayButton');

    // brilho input
    function updateBrightness() {
        const brightnessValue = brightnessRange.value;
        brightnessPercentage.textContent = `${brightnessValue}%`;
        brightnessPercentage.style.color = brightnessValue >= 90 ? '#000000' : '#ffffff';
        brightnessRange.classList.toggle('low', brightnessValue < 50);

        const progressColor = brightnessValue < 50 ? '#363636' : '#ffffff';
        brightnessRange.style.background = `linear-gradient(to right, ${progressColor} ${brightnessValue}%, #d3d3d3 ${brightnessValue}%)`;

        if (lampImage) {
            lampImage.style.filter = `brightness(${brightnessValue}%)`;
        }
    }

    brightnessRange.addEventListener('input', updateBrightness);
    updateBrightness();

    // Adiciona o evento de clique ao botão de pausa/play
    function togglePausePlay() {
        if (pausePlayButton.src.includes('pause--v1.png')) {
            pausePlayButton.src = 'https://img.icons8.com/ios-glyphs/50/play.png';
            pausePlayButton.alt = 'play';
        } else {
            pausePlayButton.src = 'https://img.icons8.com/ios-glyphs/24/pause--v1.png';
            pausePlayButton.alt = 'pause';
        }
    }
    pausePlayButton.addEventListener('click', togglePausePlay);
});
