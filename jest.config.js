module.exports = {
    //? Pastas para ignorar, ou seja não vai procurar quando for fazer testes
    testPathIgnorePatterns: ['/node_modules/'],
    //! Um array de arquivos que jest deve executar antes dos testes
    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
    //? Para arquivos com ts, converta de forma que o jest entenda.
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.svg$': '<rootDir>/src/tests/svgTransform.js',
    },
    //? Em que ambiente nossos testes estão executando
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(scss|css|sass)$': 'identity-obj-proxy',
    },
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.jsx', '!src/**/*.spec.jsx'],
    coverageReporters: ['lcov', 'json'],
}
