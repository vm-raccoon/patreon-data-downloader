const SVG = {
    download: '<svg style="width: 25px; height: 25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/></svg>',
    copy: '<svg style="width: 25px; height: 25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 96L384 0h-112c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48V128h-95.1C398.4 128 384 113.6 384 96zM416 0v96h96L416 0zM192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352z"/></svg>',
};

const $audio = document.querySelectorAll('audio');
$audio.forEach(audio => {
    const $parent = audio.parentElement;
    const $next = audio.nextElementSibling;

    const $block = document.createElement('div');
    $next.classList.forEach(className => $block.classList.add(className));

    const $downloadAudio = document.createElement('a');
    $downloadAudio.href = audio.src;
    $downloadAudio.target = '_blank';
    $downloadAudio.style.height = '25px';
    $downloadAudio.style.width = '25px';
    $downloadAudio.style.marginLeft = '32px';
    $downloadAudio.innerHTML = SVG.download;
    $downloadAudio.title = 'Download audio';
    $next.appendChild($downloadAudio);

    const $downloadImage = document.createElement('a');
    $downloadImage.href = '#';
    $downloadImage.target = '_blank';
    $downloadImage.title = 'Download image';
    const nodes = $parent.previousElementSibling.childNodes;
    if(nodes.length > 0){
        const node = nodes[0];
        const parentElement = node.parentElement;
        let backgroundImageValue = node.style.backgroundImage;
        backgroundImageValue = backgroundImageValue.replace(/url\("/, '');
        backgroundImageValue = backgroundImageValue.replace(/"\)/g, '');
        $downloadImage.href = backgroundImageValue;
        node.remove();
        $downloadImage.appendChild(node);
        parentElement.appendChild($downloadImage);
    }
});

const $postContent = document.querySelectorAll('[data-tag="post-content"]')
$postContent.forEach(postContent => {
    const $copyDescription = document.createElement('a');
    $copyDescription.href = '#';
    $copyDescription.innerHTML = SVG.copy;
    $copyDescription.title = 'Copy description';
    $copyDescription.style.height = '25px';
    $copyDescription.style.width = '25px';
    $copyDescription.addEventListener('click', () => {
        navigator.clipboard.writeText(postContent.innerText);
        const $svg = $copyDescription.querySelector('svg path');
        $svg.setAttribute('fill', 'green');
        setTimeout(() => $svg.removeAttribute('fill'), 1500);
    });
    const $postTitle = document.querySelector('[data-tag=post-title]');
    $postTitle.parentElement.appendChild($copyDescription);
});
