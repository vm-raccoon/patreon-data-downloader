setInterval(() => {
    const functions = {
        initAudioDownload,
        initThumbnailDownload,
        initPostTitleCopy,
        initPostDescriptionCopy,
    };

    Object.keys(functions).forEach(func => {
        runFunction(functions[func]).catch(e => failMessage(func, e));
    })

    // runFunction(initAudioDownload);
    // runFunction(initThumbnailDownload);
    // runFunction(initPostTitleCopy);
    // runFunction(initPostDescriptionCopy);
}, 1000);
