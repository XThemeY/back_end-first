/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testRegex: '__tests__/.*.e2e.test.ts$',
	rootDir: './src',

	moduleNameMapper: {
		'^@db(.*)$': '<rootDir>/db/$1',
		'^@validation(.*)$': '<rootDir>/validation/$1',
	},
};
