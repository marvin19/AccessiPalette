module.exports = {
    parser: 'postcss-scss',
    plugins: {
        'postcss-import': {
            path: ['node_modules'],
        },
        tailwindcss: {},
        autoprefixer: {},
    },
};
