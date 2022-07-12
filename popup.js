const $audio = document.querySelectorAll('audio');
$audio.forEach(audio => {
    const $parent = audio.parentElement;
    const $next = audio.nextElementSibling;

    const $block = document.createElement('div');
    $next.classList.forEach(className => $block.classList.add(className));

    const $downloadAudio = document.createElement('a');
    $downloadAudio.href = audio.src;
    $downloadAudio.target = '_blank';
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

    const $downloadImage = document.createElement('a');
    $downloadImage.href = '#';
    $downloadImage.target = '_blank';
    $downloadImage.innerText = 'Download image';
    const nodes = $parent.previousElementSibling.childNodes;
    if(nodes.length > 0){
        const node = nodes[0];
        let backgroundImageValue = node.style.backgroundImage;
        backgroundImageValue = backgroundImageValue.replace(/url\("/, '');
        backgroundImageValue = backgroundImageValue.replace(/"\)/g, '');
        $downloadImage.href = backgroundImageValue;
    }

    [$downloadAudio, $copyDescription, $downloadImage].forEach(($el, _, $arr) => {
        const $wrapper = document.createElement('div');
        $wrapper.style.width = `${100 / $arr.length}%`;
        $wrapper.style.textAlign = 'center';
        $wrapper.appendChild($el);
        $block.appendChild($wrapper);
    });

    $parent.insertBefore($block, audio);
})