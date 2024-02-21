import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testMatch: [
    "**/*.steps.ts", // Corregido para buscar en todos los directorios
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;
