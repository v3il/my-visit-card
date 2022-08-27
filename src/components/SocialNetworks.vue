<template>
    <div class="social-networks__list">
        <a
            v-for="(value, key) in $options.socialNetworks"
            :key="key"
            class="social-networks__item"
            rel="noopener noreferrer"
            target="_blank"
            :href="value.href"
            :aria-label="key"
        >
            <i :class="`fa fa-${key}`" class="social-networks__icon" />
        </a>
    </div>
</template>

<script>
export default {
    name: 'SocialNetworks',

    socialNetworks: {
        envelope: {
            href: 'mailto:v3il@ukr.net'
        },

        telegram: {
            href: 'https://t.me/veil_94'
        },

        github: {
            href: 'https://github.com/v3il'
        },

        linkedin: {
            href: 'https://www.linkedin.com/in/diki/'
        }
    }
}
</script>

<style scoped lang="less">
.social-networks {
    &__list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    &__item {
        color: #4c4c4c;
        font-size: 30px;
        transition: color 0.5s ease;
        margin: 3px 20px 3px 0;
        cursor: pointer;
    }

    &__codewars-item-icon {
        height: 24px;
    }

    &__item &__icon.fa-github {
        font-size: 33px;
    }

    &__item:hover {
        color: #3971ff;
    }
}
</style>
