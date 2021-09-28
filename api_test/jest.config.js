const isDebug = !!process.env.DEBUG
const testTimeout = isDebug ? 100000: 3000

const config = {
  testTimeout,
  testMatch: ['<rootDir>/cases/**/*.test.js'],
};

module.exports = config;
