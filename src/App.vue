<template>
    <div
        id="app"
        :class="[
            currentLocale,
            {
                mobile: isMobile,
                desktop: !isMobile,
            },
        ]"
    >
        <router-view />
    </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

export default @Component() class App extends Vue {
    isMobile = false;

    created () {
      this.isMobile = 'onorientationchange' in window
    }
}
</script>

<style lang="less">
@import '../node_modules/font-awesome/css/font-awesome.css';

@import './common-style/title/section-title';
@import './common-style/title/article-title';
@import './common-style/title/section-title-separator';

@import './common-style/list/section-list';
@import './common-style/list/section-list-item';

@import './common-style/section/info-section';

@font-face {
    font-family: 'Exo2';
    src: url('./assets/fonts/Exo2-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'Exo2SemiBold';
    src: url('./assets/fonts/Exo2-SemiBold.ttf') format('truetype');
}

@font-face {
    font-family: 'RobotoRegular';
    src: url('./assets/fonts/Roboto-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'RobotoMedium';
    src: url('./assets/fonts/Roboto-Medium.ttf') format('truetype');
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
}

::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: #2d2d2d;
    font-family: RobotoRegular, serif;
    line-height: 30px;
    color: #4c4c4c;
    font-size: 16px;
    overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.15s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
