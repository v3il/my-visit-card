<template>
    <div class="social-networks__list">
        <slot :networks="socialNetworks">
            <a v-for="(value, key) in socialNetworks" :key="key" :href="value.href"
               target="_blank" class="social-networks__item"
               :title="$t(value.title)"
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
        socialNetworks = {
            phone: {
                href: 'tel:+380675892392',
                title: 'message.myPhone'
            },

            telegram: {
                href: 'https://t.me/veil_94',
                title: 'message.myTelegram'
            },

            skype: {
                href: 'skype:D_Kit94?chat',
                title: 'message.mySkype'
            },

            github: {
                href: 'https://github.com/v3il',
                title: 'message.myGithub'
            },

            linkedin: {
                href: 'https://www.linkedin.com/in/diki/',
                title: 'message.myLinkedIn'
            },

            instagram: {
                href: 'https://www.instagram.com/dimakit6/',
                title: 'message.myInstagram'
            },
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
            margin-right: 20px;
            transition: color 0.5s ease;
        }

        &__item &__icon.fa-github {
            font-size: 33px;
        }

        &__item:hover {
            color: #3971ff;
        }

        @media screen and (max-width: 360px) {
            &__item {
                margin-right: 30px;
            }
        }
    }
</style>