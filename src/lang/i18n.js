import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

register('ja', () => import('./ja.json'));

init({
  fallbackLocale: 'ja',
  initialLocale: getLocaleFromNavigator()
});
