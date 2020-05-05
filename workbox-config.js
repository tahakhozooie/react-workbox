module.exports = {
    "globDirectory": "build/",
    "globPatterns": [
        "/",
        "**/*.css",
        "**/*.js",
        "**/*.ttf",
        "**/*.woff",
        "**/*.woff2",
        "**/*.png",
        "**/*.svg",
        "**/*.eot",
        "index.html",
        "manifest.json",
    ],
    "swSrc": "src/sw.js",
    "swDest": "build/sw.js",
    "globIgnores": [
        "../workbox-config.js"
    ]
};
