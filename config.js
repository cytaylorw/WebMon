const config = {
    port: process.env.port || 8000,
    serviceWorker: false,
    webTitle: 'WebMon',
    logo: 'icon.svg',
    menus: [
        {
            name: 'github',
            label: 'GitHub',
        },
        {
            name: 'cytaylorw',
            label: 'CYTaylorW'
        }
    ]
};

module.exports = config;