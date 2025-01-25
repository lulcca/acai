import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    'eol-last': 'error',
    'no-multi-spaces': ['error', { exceptions: { 'Property': false } }],
    'no-trailing-spaces': 'error',
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'sort-imports': 'error',
    'sort-keys': 'error',
    'sort-vars': 'error',
  },
});
