const isDebug = !!process.env.DEBUG
const testTimeout = isDebug ? 100000: 10000

const config = {
  testTimeout,
  testMatch: ['<rootDir>/cases/**/*.test.js'],
  testEnvironment: '<rootDir>/test.environment.js',
  testRunner: 'jest-circus/runner',
};

module.exports = config;
