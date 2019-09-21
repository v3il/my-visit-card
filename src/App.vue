<template>
  <div id="app" :class="{
    'mobile': isMobile,
    'desktop': !isMobile,
  }">
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isMobile: false,
      }
    },

    created() {
      this.isMobile = 'onorientationchange' in window;
    }
  }
</script>

<style>
    @import "assets/fonts-css/pe-font.css";
    @import "../node_modules/font-awesome/css/font-awesome.css";

    @font-face {
        font-family: "Exo2";
        src: url("./assets/fonts/Exo2-Regular.ttf") format("truetype");
    }

    @font-face {
        font-family: "Exo2SemiBold";
        src: url("./assets/fonts/Exo2-SemiBold.ttf") format("truetype");
    }

    @font-face {
        font-family: "RobotoRegular";
        src: url("./assets/fonts/Roboto-Regular.ttf") format("truetype");
    }

    @font-face {
        font-family: "RobotoMedium";
        src: url("./assets/fonts/Roboto-Medium.ttf") format("truetype");
    }

    @font-face {
        font-family: "RobotoLight";
        src: url("./assets/fonts/Roboto-Light.ttf") format("truetype");
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html.no-scroll, body.no-scroll {
      overflow-y: hidden;
      padding-right: 15px;
    }

    body {
        background: #2d2d2d;
        font-family: RobotoRegular, serif;
        line-height: 30px;
        color: #4c4c4c;
        font-size: 16px;
        overflow-x: hidden;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .3s;
    }

    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
</style>
