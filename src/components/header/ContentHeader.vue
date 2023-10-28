<template>
    <header class="header-block">
            <div class="sidebar__avatar-block">
                <GalleryImage imageName="avatar.jpg" class="sidebar__avatar" />

                <div>
                    <h3 class="header-block__greetings">Hello, I am</h3>
                    <h1 class="header-block__name">Dmytro</h1>
                    <p class="header-block__specialization">
                        Front-end developer
                    </p>
                </div>
            </div>

            <div class="header-block__about">
                <p class="header-block__about-paragraph">
                    I am {{age}}. I like music, traveling, cooking, video games and programming.
                </p>

                <p class="header-block__about-paragraph">
                    I love JavaScript with all its oddities :)
                </p>
            </div>

            <SocialNetworks class="header-block__socials" />

            <div class="header-block__nav-tabs">
                <div
                    class="header-block__nav-tab"
                    v-for="(tabData, index) in tabs"
                    :key="`headerTab${index}`"
                    :class="{
                        'header-block__nav-tab--active': isTabActive(tabData.toProp.name),
                    }"
                >
                    <RouterLink class="header-block__nav-link" :to="tabData.toProp">
                        {{ tabData.tabText }}
                    </RouterLink>

                    <div class="header-block__nav-line"></div>
                </div>
            </div>
    </header>
</template>

<script setup>
import SocialNetworks from '@/components/basic/SocialNetworks.vue'
import GalleryImage from '@/components/basic/image/GalleryImage.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { MainRouteNames } from '@/config'

const tabs = [
    {
        tabText: 'About me',
        toProp: { name: MainRouteNames.ABOUT }
    },
    {
        tabText: 'Portfolio',
        toProp: { name: MainRouteNames.PORTFOLIO }
    }
]

const route = useRoute()

const age = computed(() => {
    const now = new Date()
    const age = now.getFullYear() - 1994

    return !(now.getMonth() === 11 && now.getDate() >= 28) ? age - 1 : age
})

const isTabActive = (tabName) => tabName === route.name
</script>

<style scoped lang="less">
.header-block {
    background: #eaebed;
    //display: flex;
    padding: 63px 120px 63px 95px;

    //&__intro-block {
    //    margin: 63px 120px 63px 95px;
    //    width: 100%;
    //}

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
        padding: 50px;

        //&__intro-block {
        //    margin: 50px;
        //}
    }

    @media screen and (max-width: 600px) {
        padding: 25px;

        &__nav-tabs {
            flex-direction: column;
        }

        &__nav-tab {
            margin-right: 0;
            margin-bottom: 25px;
        }

        //&__intro-block {
        //    margin: 25px;
        //}
    }
}

.sidebar {

    &__avatar-block {
        --gap: 48px;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--gap);

        @media screen and (max-width: 1150px) {
            --gap: 24px;
        }
    }

    &__avatar {
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid #3971ff;
        display: block;
        flex-shrink: 0;
        width: 160px;
        height: 160px;
    }
}
</style>
