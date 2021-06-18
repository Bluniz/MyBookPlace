module.exports = {
    testPathIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.svg$': '<rootDir>/src/tests/svgTransform.js',
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(scss|css|sass|png|jpg)$': 'identity-obj-proxy',
    },
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.jsx', '!src/**/*.spec.jsx'],
    coverageReporters: ['lcov', 'json'],
}
