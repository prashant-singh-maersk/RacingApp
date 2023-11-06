/* global module */
module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^.+\\.svg$': 'jest-svg-transformer',
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/src/mockFile.js',
    },
    // ... other options ...
}
