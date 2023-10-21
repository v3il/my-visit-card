<template>
    <header class="header-block">
        <div class="header-block__intro-block">
            <h3 class="header-block__greetings">Hello, I am</h3>
            <h1 class="header-block__name">Dmytro</h1>
            <p class="header-block__specialization">
                Front-end developer
            </p>

            <div class="header-block__about">
                <p class="header-block__about-paragraph">
                    I am {{age}}. I like music, traveling, cooking, speedrunning video games and programming.
                </p>

                <p class="header-block__about-paragraph">
                    I love JavaScript with all its oddities :)
                </p>
            </div>

            <SocialNetworks class="header-block__socials" />

            <div class="header-block__nav-tabs">
                <div
                    class="header-block__nav-tab"
                    v-for="(tabData, index) in $options.tabs"
                    :key="`headerTab${index}`"
                    :class="{
                        'header-block__nav-tab--active': isTabActive(tabData.toProp.name),
                    }"
                >
                    <router-link class="header-block__nav-link" :to="tabData.toProp">
                        {{ tabData.tabText }}
                    </router-link>

                    <div class="header-block__nav-line"></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import SocialNetworks from '@/components/SocialNetworks.vue'

export default {
    name: 'ContentHeader',

    tabs: [
        {
            tabText: 'About me',
            toProp: { name: 'about-section' }
        },
        {
            tabText: 'Portfolio',
            toProp: { name: 'portfolio-section' }
        }
    ],

    components: {
        SocialNetworks
    },

    data: () => ({
        activeRouteName: null
    }),

    created () {
        const now = new Date()

        this.age = now.getFullYear() - 1994

        if (!(now.getMonth() === 11 && now.getDate() >= 28)) {
            this.age--
        }
    },

    methods: {
        isTabActive (tabName) {
            return this.activeRouteName === tabName
        }
    },

    watch: {
        $route: {
            immediate: true,
            handler (value) {
                this.activeRouteName = value.name
            }
        }
    }
}
</script>

<style scoped lang="less">
.header-block {
    background: #eaebed;
    display: flex;

    &__intro-block {
        margin: 63px 120px 63px 95px;
    }

    &__greetings {
        text-transform: uppercase;
        color: #4c4c4c;
        font-size: 30px;
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        line-height: 40px;
    }

    &__name {
        text-transform: uppercase;
        color: #4c4c4c;
        font-size: 48px;
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        line-height: 50px;
    }

    &__specialization {
        text-transform: uppercase;
        color: #3971ff;
        letter-spacing: 1.92px;
        font-family: 'Roboto', sans-serif;
        padding: 15px 18px 13px 19px;
        font-size: 16px;
        border-top: 1px solid #4c4c4c;
        border-bottom: 1px solid #4c4c4c;
        margin-top: 24px;
        display: inline-block;
    }

    &__about {
        margin-top: 50px;
        line-height: 30px;
        font-weight: 400;
        color: #4c4c4c;
        font-size: 16px;
    }

    &__about-paragraph {
        display: block;
        margin: 6px 0;
    }

    &__socials {
        margin-top: 30px;
    }

    &__nav-tabs {
        margin-top: 30px;
        display: flex;
    }

    &__nav-tab {
        margin-right: 94px;
        display: flex;
        flex-direction: column;
    }

    &__nav-tab:last-child {
        margin-right: 0;
    }

    &__nav-link {
        text-decoration: none;
        text-transform: uppercase;
        line-height: 30px;
        font-size: 16px;
        color: #4c4c4c;
        font-family: 'Roboto', sans-serif;;
        font-weight: 500;
        transition: color 0.5s ease;
        min-width: 150px;
    }

    &__nav-line {
        height: 2px;
        background-color: #3971ff;
        width: 50px;
        margin-top: 7px;
        transition: width 0.5s ease;
    }

    &__nav-tab:hover &__nav-link,
    &__nav-tab--active &__nav-link {
        color: #3971ff;
    }

    &__nav-tab:hover &__nav-line,
    &__nav-tab--active &__nav-line {
        width: 150px;
    }

    @media screen and (max-width: 850px) {
        padding: 0;

        &__intro-block {
            margin: 50px;
        }
    }

    @media screen and (max-width: 600px) {
        &__nav-tabs {
            flex-direction: column;
        }

        &__nav-tab {
            margin-right: 0;
            margin-bottom: 25px;
        }

        &__intro-block {
            margin: 25px;
        }
    }
}
</style>
