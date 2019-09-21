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
    export default {
        name: "SocialNetworks",

        data() {
            return {
                socialNetworks: {
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
                        href: 'https://www.linkedin.com/in/dmitry-kit-826a00145/',
                        title: 'message.myLinkedIn'
                    },

                    instagram: {
                        href: 'https://www.instagram.com/dimakit6/',
                        title: 'message.myInstagram'
                    },
                },
            }
        }
    }
</script>

<style scoped>
    .social-networks__list {
        display: flex;
    }

    .social-networks__item {
        font-weight: 400;
        color: #4c4c4c;
        font-size: 30px;
        margin-right: 20px;
        transition: color 0.5s ease;
    }

    .social-networks__item .social-networks__icon.fa-github {
        font-size: 33px;
    }

    @media screen and (max-width: 360px) {
        .social-networks__item {
            margin-right: 30px;
        }
    }

    .social-networks__item:hover {
        color: #3971ff;
    }
</style>