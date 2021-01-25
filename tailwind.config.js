module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
             // Adds a new breakpoint in addition to the default breakpoints
            colors: {
                'customblue-200': '#1c2840',
                'customblue-100': '#22304d',
                'custom-bordeau': '#A71C5D',
                'custom-cyan': '#05dbf2',
            }
        },
        fontFamily: {
            'html': ['Source sans pro'],
            'body': ['Maven pro'],
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
