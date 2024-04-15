module.exports = {
    ci: {
        collect: {
            staticDistDir: './dist',
            url: ['http://localhost:4173'],
            settings: {
                output: ['json'],
                outputPath: './lighthouse-results/results.json',
            },
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
