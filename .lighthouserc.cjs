module.exports = {
    ci: {
        collect: {
            //staticDistDir: './dist',
            url: ['http://localhost:4173'],
        },
        assert: {
            assertions: {
                'categories:accessibility': ['error', { minScore: 1 }], // Ensures accessibility score is 100
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
