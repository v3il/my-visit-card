<template>
    <div class="social-networks__list">
        <slot :networks="socialNetworks">
            <div
                v-for="(value, key) in socialNetworks"
                :key="key"
                class="social-networks__item"
                :class="{'social-networks__item--separated': value.separated}"
                :title="$t(value.title)"
                @click="value.onClick"
            >
                <i :class="`fa fa-${key}`" class="social-networks__icon"></i>
            </div>
        </slot>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    import copyTextToClipboard from '@/utils/copyTextToClipboard';

    @Component()
    export default class SocialNetworks extends Vue {
        created() {
            this.socialNetworks = {
                phone: {
                    title: 'message.myPhone',
                    onClick: () => {
                        const result = copyTextToClipboard('+380675892392');

                        if (result) {
                            // todo: change alert to fancy popup
                            alert(this.$t('message.phoneCopied'));
                        }
                    }
                },

                at: {
                    title: 'message.myEmail',
                    onClick: () => {
                        const result = copyTextToClipboard('v3il@ukr.net');

                        if (result) {
                            // todo: change alert to fancy popup
                            alert(this.$t('message.emailCopied'));
                        }
                    }
                },

                telegram: {
                    title: 'message.myTelegram',
                    onClick() {
                        window.open('https://t.me/veil_94');
                    }
                },

                skype: {
                    title: 'message.mySkype',
                    onClick() {
                        window.open('skype:D_Kit94?chat');
                    }
                },

                github: {
                    title: 'message.myGithub',
                    onClick() {
                        window.open('https://github.com/v3il');
                    }
                },

                linkedin: {
                    title: 'message.myLinkedIn',
                    onClick() {
                        window.open('https://www.linkedin.com/in/diki/');
                    }
                },

                instagram: {
                    title: 'message.myInstagram',
                    onClick() {
                        window.open('https://www.instagram.com/dimakit6/');
                    }
                },

                'map-marker': {
                    title: 'message.region',
                    separated: true,
                    onClick() {}
                },
            }
        }
    }
</script>

<style scoped lang="less">
    .social-networks {
        &__list {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
            background: #f3f3f3;
            flex-direction: column;
            align-items: center;
            padding: 4px;
            border-radius: 18px;
            display: flex;
        }

        &__item {
            font-weight: 400;
            color: #4c4c4c;
            font-size: 30px;
            transition: color 0.5s ease;
            margin: 3px 0;
            cursor: pointer;
        }

        &__item--separated {
            border-top: 1px solid #4c4c4c;
            width: 100%;
            text-align: center;
            padding-top: 3px;
        }

        &__item &__icon.fa-github {
            font-size: 33px;
        }

        &__item:hover {
            color: #3971ff;
        }

        @media screen and (max-width: 1480px) {
            &__list {
                top: auto;
                bottom: 60px;
                border: 1px solid #a7a7a7;
                transform: none;
                opacity: 0.5;
                transition: opacity 0.3s;

                &:hover {
                    opacity: 1;
                }
            }
        }
    }
</style>