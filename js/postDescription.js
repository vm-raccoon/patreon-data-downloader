const initPostDescriptionCopy = () => {
    // searching post description relative to post title
    const $postTitle = document.querySelectorAll('[data-tag=post-title]');

    $postTitle.forEach(postTitle => {
        const $parent = postTitle.parentNode?.parentNode?.parentNode;
        if (!$parent) return false;

        const $description = $parent.children?.[1];
        if (!$description) return false;
        if ($description.hasAttribute("data-vm-ext-pdd")) return false;

        const $descriptionParagraph = $description.querySelector("p");
        if (!$descriptionParagraph) return false;

        const $copyPostDescription = document.createElement("span");
        $copyPostDescription.style.display = "inline-block";
        $copyPostDescription.style.marginRight = "10px";
        $copyPostDescription.style.height = '14px';
        $copyPostDescription.style.width = '14px';
        $copyPostDescription.style.cursor = 'pointer';
        $copyPostDescription.title = 'Copy post description';
        $copyPostDescription.innerHTML = SVG.copy.replaceAll("[[SIZE]]", 14);
        $copyPostDescription.addEventListener('click', () => {
            navigator.clipboard.writeText($description.innerText.trim());
            const $svgPath = $copyPostDescription.querySelector('svg path');
            $svgPath.setAttribute('fill', 'green');
            setTimeout(() => $svgPath.removeAttribute('fill'), 1500);
        });
        $descriptionParagraph.prepend($copyPostDescription);

        $description.setAttribute("data-vm-ext-pdd", "completed");
    });
};
