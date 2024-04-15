module.exports = {
    ci: {
        collect: {
            staticDistDir: './dist',
            url: ['http://localhost:4173'],
            numberOfRuns: 1,
        },
        assert: {
            assertions: {
                'categories:accessibility': ['error', { minScore: 1 }], // Ensures accessibility score is 100
            },
        },
        upload: {
            target: 'filesystem',
            outputDir: './lighthouse-results', // Define where to store the results
            reportFilenamePattern: 'results-%%SUFFIX%%.json', // This will save the file as results-0.json, results-1.json, etc.
        },
    },
};
