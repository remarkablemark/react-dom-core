const { readdirSync } = require('fs');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['all', 'deps', 'release', 'root', ...readdirSync('./packages')],
    ],
    'scope-empty': [2, 'never'],
  },
};
