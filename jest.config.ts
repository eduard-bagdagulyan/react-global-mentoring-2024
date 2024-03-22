export default {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png)': '<rootDir>/src/tests/mocks/fileMock.js',
    },
}
