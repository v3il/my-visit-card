import Vue from 'vue';

import { enMessages, ruMessages } from './messages';

const availableLocales = ['ru', 'en'];
const LOCAL_STORAGE_LOCALE_KEY = 'SELECTED_LOCALE';

function getUserLanguage() {
    if (navigator.languages && navigator.languages.length) {
        return navigator.languages[0].split('-')[0];
    } else {
        return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
    }
}

function getLocaleFromLocalStorage() {
    const locale = localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY);
    return availableLocales.includes(locale) ? locale : null;
}

function setLocale(locale) {
    if (availableLocales.includes(locale)) {
        localStorage.setItem(LOCAL_STORAGE_LOCALE_KEY, locale);
    }
}

export default () => {
    const currentLocale = 'ru'; // getLocaleFromLocalStorage() || getUserLanguage();
    const signs = currentLocale === 'ru' ? ruMessages : enMessages;

    setLocale(currentLocale);

    Vue.mixin({
        data: () => ({ currentLocale }),

        methods: {
            $t(signKey, params = []) {
                const sign = signKey.split('.').pop();
                return (signs[sign] || signKey).replace(/%s/g, () => params.shift());
            },

            changeLocale(locale) {
                if (locale !== currentLocale) {
                    setLocale(locale);
                    location.reload();
                }
            },
        },
    });
};
