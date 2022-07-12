const $audio = document.querySelectorAll('audio');
$audio.forEach(audio => {
    const $parent = audio.parentElement;
    const $next = audio.nextElementSibling;

    const $block = document.createElement('div');
    $next.classList.forEach(className => $block.classList.add(className));

    const $downloadAudio = document.createElement('a');
    $downloadAudio.href = audio.src;
    $downloadAudio.target
    $downloadAudio.innerText = 'Download audio';

    const $copyDescription = document.createElement('a');
    $copyDescription.href = '#';
    $copyDescription.innerText = 'Copy description';
    $copyDescription.addEventListener('click', () => {
        const $text = document.querySelector('[data-tag="post-content"]');
        if($text){
            navigator.clipboard.writeText($text.innerText);
            $copyDescription.innerText = 'Description copied!';
            setTimeout(() => {
                $copyDescription.innerText = 'Copy description';
            }, 2500);
        }
    });

    [$downloadAudio, $copyDescription].forEach($el => {
        const $wrapper = document.createElement('div');
        $wrapper.style.width = '50%';
        $wrapper.style.textAlign = 'center';

        $wrapper.appendChild($el);
        $block.appendChild($wrapper);
    });


    $parent.insertBefore($block, audio);
})