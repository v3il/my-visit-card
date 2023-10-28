<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="less">
@import '../node_modules/font-awesome/css/font-awesome.css';

@import './common-style/title/section-title';
@import './common-style/title/article-title';
@import './common-style/title/section-title-separator';

@import './common-style/list/section-list';
@import './common-style/list/section-list-item';

@import './common-style/section/info-section';

:root {
    --primary: #3971ff;
    --color: #4c4c4c;
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
    font-family: 'Roboto', sans-serif;
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
