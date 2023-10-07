const initAudioDownload = () => {
    const $audio = document.querySelectorAll('audio:not([data-vm-ext-pdd])');

    $audio.forEach(audio => {
        const $parent = audio.parentElement;
        $parent.style.gridTemplateColumns = "auto auto 1fr auto auto auto auto";

        const $downloadAudio = document.createElement('a');
        $downloadAudio.href = audio.src;
        $downloadAudio.target = '_blank';
        $downloadAudio.style.height = '25px';
        $downloadAudio.style.width = '25px';
        $downloadAudio.style.cursor = 'pointer';
        $downloadAudio.innerHTML = SVG.download;
        $downloadAudio.title = 'Download audio';
        $parent.appendChild($downloadAudio);

        audio.setAttribute("data-vm-ext-pdd", "completed");
    });
};
