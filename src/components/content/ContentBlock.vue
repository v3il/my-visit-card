<template>
    <section class="content">
        <content-header></content-header>

        <keep-alive>
            <router-view />
        </keep-alive>
    </section>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import ContentHeader from './ContentHeader.vue'

export default @Component({
  components: {
    ContentHeader
  }
}) class ContentBlock extends Vue {}
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
