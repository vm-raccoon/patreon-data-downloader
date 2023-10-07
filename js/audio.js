const $audio = document.querySelectorAll('audio');
$audio.forEach(audio => {
    const $parent = audio.parentElement;
    $parent.style.gridTemplateColumns = "auto auto 1fr auto auto auto auto";

    const $downloadAudio = document.createElement('a');
    $downloadAudio.href = audio.src;
    $downloadAudio.target = '_blank';
    $downloadAudio.style.height = '25px';
    $downloadAudio.style.width = '25px';
    $downloadAudio.innerHTML = SVG.download;
    $downloadAudio.title = 'Download audio';
    $parent.appendChild($downloadAudio);
});
