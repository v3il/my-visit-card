import Vue from 'vue'
import { enMessages } from './messages'

export default () => {
    const currentLocale = 'en'
    const signs = enMessages

    Vue.mixin({
        data: () => ({ currentLocale }),

        methods: {
            $t (signKey, params = []) {
                const sign = signKey.split('.').pop()
                return (signs[sign] || signKey).replace(/%s/g, () => params.shift())
            }
        }
    })
}
