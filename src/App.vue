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
      document.documentElement.setAttribute('lang', this.$i18n.locale);
    }
  }
</script>

<style lang="less">
    /*@import "assets/fonts-css/pe-font.css";*/
    @import "../node_modules/font-awesome/css/font-awesome.css";

    @font-face {
        font-family: "Exo2";
        src: url("./assets/fonts/Exo2-Regular.ttf") format("truetype");
        font-display: swap;
    }

    @font-face {
        font-family: "Exo2SemiBold";
        src: url("./assets/fonts/Exo2-SemiBold.ttf") format("truetype");
        font-display: swap;
    }

    @font-face {
        font-family: "RobotoRegular";
        src: url("./assets/fonts/Roboto-Regular.ttf") format("truetype");
        font-display: swap;
    }

    @font-face {
        font-family: "RobotoMedium";
        src: url("./assets/fonts/Roboto-Medium.ttf") format("truetype");
        font-display: swap;
    }

    @font-face {
        font-family: "RobotoLight";
        src: url("./assets/fonts/Roboto-Light.ttf") format("truetype");
        font-display: swap;
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

    .slideRight-enter-active, .slideRight-leave-active {
      transition: transform .6s;
    }

    .slideRight-enter, .slideRight-leave-to {
      transform: translateX(100px);
    }

    .tooltip {
      display: block !important;
      z-index: 10000;

      @media screen and (max-width: 400px) {
        max-width: 220px;
      }

      .tooltip-inner {
        background: black;
        color: white;
        border-radius: 6px;
        padding: 5px 10px 4px;
      }

      .tooltip-arrow {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 10px;
        border-color: black;
        z-index: 1;
      }

      &[x-placement^="top"] {
        margin-bottom: 5px;

        .tooltip-arrow {
          border-width: 5px 5px 0 5px;
          border-left-color: transparent !important;
          border-right-color: transparent !important;
          border-bottom-color: transparent !important;
          bottom: -5px;
          left: calc(50% - 5px);
          margin-top: 0;
          margin-bottom: 0;
        }
      }

      /*&[x-placement^="bottom"] {*/
        /*margin-top: 5px;*/

        /*.tooltip-arrow {*/
          /*border-width: 0 5px 5px 5px;*/
          /*border-left-color: transparent !important;*/
          /*border-right-color: transparent !important;*/
          /*border-top-color: transparent !important;*/
          /*top: -5px;*/
          /*left: calc(50% - 5px);*/
          /*margin-top: 0;*/
          /*margin-bottom: 0;*/
        /*}*/
      /*}*/

      /*&[x-placement^="right"] {*/
        /*margin-left: 5px;*/

        /*.tooltip-arrow {*/
          /*border-width: 5px 5px 5px 0;*/
          /*border-left-color: transparent !important;*/
          /*border-top-color: transparent !important;*/
          /*border-bottom-color: transparent !important;*/
          /*left: -5px;*/
          /*top: calc(50% - 5px);*/
          /*margin-left: 0;*/
          /*margin-right: 0;*/
        /*}*/
      /*}*/

      &[x-placement^="left"] {
        margin-right: 20px;

        .tooltip-arrow {
          border-width: 7px 0 7px 7px;
          border-top-color: transparent !important;
          border-right-color: transparent !important;
          border-bottom-color: transparent !important;
          right: -7px;
          top: calc(50% - 7px);
          margin-left: 0;
          margin-right: 0;
        }
      }

      /*&.popover {
        @color: #f9f9f9;

        .popover-inner {
          background: @color;
          color: black;
          padding: 24px;
          border-radius: 5px;
          box-shadow: 0 5px 30px rgba(black, .1);
        }

        .popover-arrow {
          border-color: @color;
        }
      }*/

      &[aria-hidden='true'] {
        visibility: hidden;
        opacity: 0;
        transition: opacity .15s, visibility .15s;
      }

      &[aria-hidden='false'] {
        visibility: visible;
        opacity: 1;
        transition: opacity .15s;
      }
    }
</style>
