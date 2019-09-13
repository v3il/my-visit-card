<template>
    <div class="content__info-block info-block contact-info-block js-scroll-to-target" id="contact">
        <div class="info-block__title-block">
            <h2 class="info-block__title">{{this.$t('message.contact')}}</h2>
            <div class="info-block__title-separator">
                <div class="info-block__title-separator-line"></div>
                <div class="info-block__title-separator-ring"></div>
            </div>
        </div>

        <div class="contact-info-block__contacts-block">
            <div class="contact-info-block__contact-data-block">
                <div class="contact-info-block__location-block">
                    <div class="contact-info-block__location-title">
                        <i class="pe-7s-home contact-info-block__location-icon"></i>
                        <h2 class="contact-info-block__location-title-text">{{this.$t('message.location')}}</h2>
                    </div>

                    <div class="contact-info-block__location-description">
                        {{this.$t('message.address')}}
                    </div>
                </div>

                <div class="contact-info-block__mail-block">
                    <div class="contact-info-block__mail-title">
                        <i class="pe-7s-mail-open contact-info-block__mail-icon"></i>
                        <h2 class="contact-info-block__mail-title-text">{{this.$t('message.contactMe')}}</h2>
                    </div>

                    <div class="contact-info-block__mail-description" v-html="$t('message.contactMeDesc')"></div>
                </div>

                <div class="contact-info-block__socials-block">
                    <div class="contact-info-block__socials-list">
                        <a v-for="(value, key) in socialNetworks" :key="key" :href="value.href"
                           target="_blank" class="contact-info-block__social-item"
                           :title="value.title"
                        >
                            <i :class="`fa fa-${key}`"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="contact-info-block__contact-form-block">
                <div class="contact-info-block__form-block">
                    <label class="contact-info-block__label" for="name">{{this.$t('message.yourName')}}</label>
                    <input v-model="name" class="contact-info-block__input" type="text" id="name">
                </div>

                <div class="contact-info-block__form-block">
                    <label class="contact-info-block__label" for="email">{{this.$t('message.yourEmail')}}</label>
                    <input v-model="email" class="contact-info-block__input" type="text" id="email">
                </div>

                <div class="contact-info-block__form-block">
                    <label class="contact-info-block__label" for="message">{{this.$t('message.yourMessage')}}</label>
                    <textarea v-model="message" class="contact-info-block__textarea" rows="5" id="message"></textarea>
                </div>

                <div class="contact-info-block__form-block contact-info-block__submit-block">
                    <button @click.prevent="sendResponse()" type="submit" class="contact-info-block__submit-button">
                        {{this.$t('message.letsTalk')}}
                    </button>
                    <div class="contact-info-block__nav-line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactMe",

        data() {
            return {
                name: "",
                email: "",
                message: "",

                socialNetworks: {
                    skype: {
                        href: 'skype:D_Kit94?chat',
                        title: this.$t('message.mySkype')
                    },

                    telegram: {
                        href: 'https://t.me/veil_94',
                        title: this.$t('message.myTelegram')
                    },

                    phone: {
                        href: 'tel:+380675892392',
                        title: this.$t('message.myPhone')
                    },

                    github: {
                        href: 'https://github.com/v3il',
                        title: this.$t('message.myGithub')
                    },

                    linkedin: {
                        href: 'https://www.linkedin.com/in/dmitry-kit-826a00145/',
                        title: this.$t('message.myLinkedIn')
                    },

                    instagram: {
                        href: 'https://www.instagram.com/dimakit6/',
                        title: this.$t('message.myInstagram')
                    },
                }
            }
        }
    }
</script>

<style scoped>

</style>