module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/mock.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts(x)?',
    '!src/types/**/*.ts(x)?',
    '!src/utils/apollo.ts',
    '!src/types/**/*.d.ts',
    '!src/graphql/**/*ts',
    '!src/utils/apolloCache.ts',
    '!src/utils/tests/test-utils.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    styled_components:
      '<rootDir>/node_module/styled-components/dist/styled-components.browser.cjs.js'
  }
}
