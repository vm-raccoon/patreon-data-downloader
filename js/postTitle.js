const initPostTitleCopy = () => {
    const $postTitle = document.querySelectorAll('h1:not([data-vm-ext-pdd])');

    $postTitle.forEach(postTitle => {
        const $parent = postTitle.parentElement;

        const $copyPostTitle = document.createElement('div');
        $copyPostTitle.innerHTML = SVG.copy.replaceAll("[[SIZE]]", 25);
        $copyPostTitle.style.cursor = 'pointer';
        $copyPostTitle.style.marginLeft = '10px';
        $copyPostTitle.title = 'Copy post title';
        $copyPostTitle.addEventListener('click', () => {
            navigator.clipboard.writeText(postTitle.innerText.trim());
            const $svgPath = $copyPostTitle.querySelector('svg path');
            $svgPath.setAttribute('fill', 'green');
            setTimeout(() => $svgPath.removeAttribute('fill'), 1500);
        });
        $parent.appendChild($copyPostTitle);

        postTitle.setAttribute("data-vm-ext-pdd", "completed");
    });
};
