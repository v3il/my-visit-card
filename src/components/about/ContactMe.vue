<template>
    <div class="content__info-block info-block contact-info-block js-scroll-to-target" id="contact">
        <div class="info-block__title-block">
            <h2 class="info-block__title">{{ this.$t('message.contact') }}</h2>
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
                        <h2 class="contact-info-block__location-title-text">
                            {{ this.$t('message.location') }}
                        </h2>
                    </div>

                    <div class="contact-info-block__location-description">
                        {{ this.$t('message.address') }}
                    </div>
                </div>

                <div class="contact-info-block__mail-block">
                    <div class="contact-info-block__mail-title">
                        <i class="pe-7s-mail-open contact-info-block__mail-icon"></i>
                        <h2 class="contact-info-block__mail-title-text">
                            {{ this.$t('message.contactMe') }}
                        </h2>
                    </div>

                    <div class="contact-info-block__mail-description" v-html="$t('message.contactMeDesc')"></div>
                </div>

                <div class="contact-info-block__socials-block">
                    <social-networks />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SocialNetworks from '../SocialNetworks'

export default {
  name: 'ContactMe',

  components: {
    SocialNetworks
  }
}
</script>

<style scoped>
#contact {
    padding-bottom: 50px;
}

.contact-info-block__socials-block {
    padding-top: 50px;
}

/* CONTACT */
.contact-info-block__contacts-block {
    display: flex;
}

.contact-info-block__location-block {
    margin-bottom: 50px;
}

.contact-info-block__location-title,
.contact-info-block__mail-title {
    display: flex;
    align-items: flex-end;
}

.contact-info-block__location-icon,
.contact-info-block__mail-icon {
    width: 40px;
    height: 40px;
    font-size: 48px;
    line-height: 27.81px;
    color: #4c4c4c;
    font-weight: 400;
    margin-right: 32px;
}

.contact-info-block__mail-icon {
    color: #3971ff;
}

.contact-info-block__location-title-text,
.contact-info-block__mail-title-text {
    color: #4c4c4c;
    font-weight: 400;
    line-height: 36px;
    font-size: 24px;
    text-transform: uppercase;
}

.contact-info-block__location-description,
.contact-info-block__mail-description {
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    color: #4c4c4c;
    margin-top: 25px;
}

.contact-info-block__nav-line {
    height: 2px;
    background-color: #3971ff;
    width: 50px;
    margin-top: 7px;
    transition: width 0.5s ease;
}

.contact-info-block__submit-block:hover .contact-info-block__nav-line {
    width: 150px;
}
/* CONTACT */
</style>
