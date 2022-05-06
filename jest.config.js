module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/mocks/**/*.*',
    '!src/index.js',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  coverageReporters: ['html', 'text-summary']
}
