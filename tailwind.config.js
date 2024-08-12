const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{vue,js,ts}'],
    theme: {
        extend: {
            colors: {
                sidebar: '#004aad',
            }
        }
    },
    plugins: [
        require('daisyui'),
        plugin(({addVariant}) => {
            addVariant('>', '& > *');
            addVariant('*', '& *');
        }),
    ]
};
