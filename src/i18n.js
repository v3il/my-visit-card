import Vue from 'vue'
import VueI18n from "vue-i18n";

import { ruMessages, enMessages } from './messages';

Vue.use(VueI18n);

const messages = {
    en: { message: enMessages },
    ru: { message: ruMessages }
};

const i18n = new VueI18n({
    locale: 'en',
    messages,
});

export default i18n;
