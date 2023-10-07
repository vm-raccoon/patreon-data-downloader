const initThumbnailDownload = () => {
    const $thumbnails = document.querySelectorAll("[data-tag=thumbnail]:not([data-vm-ext-pdd])");

    $thumbnails.forEach(thumbnail => {
        const src = thumbnail.getAttribute("src");
        if (src) {
            thumbnail.addEventListener("click", () => window.open(src));
            thumbnail.style.cursor = "pointer";
            thumbnail.title = "Download thumbnail";
            thumbnail.setAttribute("data-vm-ext-pdd", "completed");
        }
    });
};
