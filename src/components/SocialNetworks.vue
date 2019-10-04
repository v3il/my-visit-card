<template>
    <div class="social-networks__list">
        <slot :networks="socialNetworks">
            <a
                v-for="(value, key) in socialNetworks"
                :key="key"
                class="social-networks__item"
                @click="value.onClick"
                rel="noopener noreferrer"
                href="javascript://"
                :aria-label="key"
            >
                <i :class="`fa fa-${key}`" class="social-networks__icon"></i>
            </a>
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
                },
            },

            at: {
                title: 'message.myEmail',
                onClick: () => {
                    const result = copyTextToClipboard('v3il@ukr.net');

                    if (result) {
                        // todo: change alert to fancy popup
                        alert(this.$t('message.emailCopied'));
                    }
                },
            },

            telegram: {
                title: 'message.myTelegram',
                onClick() {
                    window.open('https://t.me/veil_94');
                },
            },

            skype: {
                title: 'message.mySkype',
                onClick() {
                    window.open('skype:D_Kit94?chat');
                },
            },

            github: {
                title: 'message.myGithub',
                onClick() {
                    window.open('https://github.com/v3il');
                },
            },

            linkedin: {
                title: 'message.myLinkedIn',
                onClick() {
                    window.open('https://www.linkedin.com/in/diki/');
                },
            },

            instagram: {
                title: 'message.myInstagram',
                onClick() {
                    window.open('https://www.instagram.com/dimakit6/');
                },
            },
        };
    }
}
</script>

<style scoped lang="less">
.social-networks {
    &__list {
        display: flex;
    }

    &__item {
        font-weight: 400;
        color: #4c4c4c;
        font-size: 30px;
        transition: color 0.5s ease;
        margin: 3px 10px;
        cursor: pointer;

        &:first-child {
            margin-left: 0;
        }
    }

    &__item &__icon.fa-github {
        font-size: 33px;
    }

    &__item:hover {
        color: #3971ff;
    }
}
</style>
