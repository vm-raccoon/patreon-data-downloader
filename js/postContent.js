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
