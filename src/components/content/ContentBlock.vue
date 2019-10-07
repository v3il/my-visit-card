<template>
    <section class="content">
        <content-header></content-header>

        <keep-alive>
            <router-view />
        </keep-alive>

        <div class="content__lang-switchers">
            <img
                :src="ruFlagData.src"
                alt="ru"
                @click="changeLocale('ru')"
                :class="{ 'content__lang-switcher--active': currentLocale === 'ru' }"
                class="content__lang-switcher"
            />
            <img
                :src="enFlagData.src"
                alt="en"
                @click="changeLocale('en')"
                :class="{ 'content__lang-switcher--active': currentLocale === 'en' }"
                class="content__lang-switcher"
            />
        </div>
    </section>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ContentHeader from './ContentHeader.vue';

import ruFlag from '../../assets/images/ru-flag.png';
import enFlag from '../../assets/images/usa-flag.png';

@Component({
    components: {
        ContentHeader,
    },
})
export default class ContentBlock extends Vue {
    enFlagData = enFlag;
    ruFlagData = ruFlag;
}
</script>

<style scoped lang="less">
.content {
    position: relative;
    margin-left: 280px;

    &__lang-switchers {
        position: absolute;
        top: 0;
        right: 0;
        background: transparent;
        display: flex;
        border-radius: 3px 0 0 3px;
    }

    &__lang-switcher {
        cursor: pointer;
        display: block;
        margin: 0 3px;
    }

    &__lang-switcher--active {
        filter: brightness(0.7);
        cursor: default;
    }

    @media screen and (max-width: 1150px) {
        margin-left: 0;
    }
}
</style>
