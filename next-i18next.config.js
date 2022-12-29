// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  i18n: {
    locales: ['fr', 'en', 'default'],
    localePath: path.resolve('./public/static/locales'),
    defaultLocale: 'default',
    localeDetection: true,
  },
  react: {
    useSuspense: false,
    wait: true,
  },
};