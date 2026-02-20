const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
    "id": "org.egybest.bm3755",
    "version": "1.0.0",
    "name": "EgyBest Mobile Addon",
    "description": "إضافة لمشاهدة الأفلام من إيجي بست",
    "resources": ["stream"],
    "types": ["movie", "series"],
    "idPrefixes": ["tt"]
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler((args) => {
    const streamUrl = `https://asd.pics/main4/watch/${args.id}`;
    return Promise.resolve({
        streams: [{ title: "EgyBest Server", url: streamUrl }]
    });
});

module.exports = builder.getInterface();
