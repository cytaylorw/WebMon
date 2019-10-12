const config = {
    port: process.env.port || 8000,
    serviceWorker: false,
    updateInterval: 0,
    minInterval: 60, // in seconds
    mode: 'file',
    webTitle: 'WebMon',
    logo: '/images/icon.svg',
    fullWidth: true,
    menus: [
        {
            name: 'github',
            label: 'GitHub Pages',
        },
        {
            name: 'cytaylorw',
            label: 'CYTaylorW'
        }
    ],
    statusHeaderLabel: 'Status'
};

module.exports = config;