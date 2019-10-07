import Vue from 'vue';

export default () => {
    let signs = {};

    const locale = 'en';

    import(`./messages/${locale}`).then((module) => {
        signs = module.default;
    });

    Vue.mixin({
        data: () => ({
            currentLocale: locale,
        }),

        methods: {
            $t(signKey, params = []) {
                const sign = signKey.split('.').pop();
                return (signs[sign] || signKey).replace(/%s/g, () => params.shift());
            },
        },
    });
};
