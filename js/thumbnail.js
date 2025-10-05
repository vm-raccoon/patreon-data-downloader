const initThumbnailDownload = () => {
    const $thumbnailRoots = document.querySelectorAll("[data-tag=thumbnail-root]:not([data-vm-ext-pdd])");

    $thumbnailRoots.forEach(thumbnailRoot => {
        const thumbnail = thumbnailRoot.querySelector("img");
        if (!thumbnail) {
            return false;
        }

        const src = thumbnail.getAttribute("src");
        if (src) {
            thumbnailRoot.addEventListener("click", () => window.open(src));
            thumbnailRoot.style.cursor = "pointer";
            thumbnailRoot.title = "Download thumbnail";
            thumbnail.setAttribute("data-vm-ext-pdd", "completed");
        }
    });
};
