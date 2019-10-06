<template>
    <div class="social-networks__list">
        <slot :networks="socialNetworks">
            <a
                v-for="(value, key) in socialNetworks"
                :key="key"
                class="social-networks__item"
                rel="noopener noreferrer"
                :href="value.href"
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

@Component()
export default class SocialNetworks extends Vue {
    created() {
        this.socialNetworks = {
            phone: {
                title: 'message.myPhone',
                href: 'tel:+380675892392',
            },

            at: {
                title: 'message.myEmail',
                href: 'mailto:v3il@ukr.net',
            },

            telegram: {
                title: 'message.myTelegram',
                href: 'https://t.me/veil_94',
            },

            skype: {
                title: 'message.mySkype',
                href: 'skype:D_Kit94?chat',
            },

            github: {
                title: 'message.myGithub',
                href: 'https://github.com/v3il',
            },

            linkedin: {
                title: 'message.myLinkedIn',
                href: 'https://www.linkedin.com/in/diki/',
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
