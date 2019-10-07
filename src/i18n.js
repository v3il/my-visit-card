import Vue from 'vue';

import { enMessages, ruMessages } from './messages';

const LOCAL_STORAGE_LOCALE_KEY = 'SELECTED_LOCALE';

function getUserLanguage() {
    if (navigator.languages && navigator.languages.length) {
        return navigator.languages[0].split('-')[0];
    } else {
        return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'ru';
    }
}

function getLocaleFromLocalStorage() {
    const locale = localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY);
    return ['ru', 'en'].includes(locale) ? locale : null;
}

export default () => {
    const currentLocale = getLocaleFromLocalStorage() || getUserLanguage();
    const signs = currentLocale === 'ru' ? ruMessages : enMessages;

    Vue.mixin({
        data: () => ({ currentLocale }),

        methods: {
            $t(signKey, params = []) {
                const sign = signKey.split('.').pop();
                return (signs[sign] || signKey).replace(/%s/g, () => params.shift());
            },

            changeLocale(locale) {
                if (locale !== currentLocale) {
                    localStorage.setItem(LOCAL_STORAGE_LOCALE_KEY, locale);
                    location.reload();
                }
            },
        },
    });
};
