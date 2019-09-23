<template>
    <div class="header-block">
        <div class="header-block__avatar-block">
            <div class="header-block__avatar" :style="{ backgroundImage: `url(${avatar.src})` }"></div>
        </div>

        <div class="header-block__intro-block">
            <h3 class="header-block__greetings">{{$t("message.hello")}}</h3>
            <h2 class="header-block__name">{{$t("message.name")}}</h2>
            <h5 class="header-block__specialization">{{$t("message.specialization")}}</h5>

            <div class="header-block__about">
                {{$t("message.about1", { age })}}
                <br>
                {{$t("message.about2")}}
            </div>

            <div class="header-block__nav-tabs">
                <div
                    class="header-block__nav-tab"
                    v-for="tabData in tabs"
                    :class="{'header-block__nav-tab--active': isTabActive(tabData.toProp.name)}"
                >
                    <router-link class="header-block__nav-link" :to="tabData.toProp">{{tabData.tabText}}</router-link>
                    <div class="header-block__nav-line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Component, Watch } from 'vue-property-decorator';

    import avatar from '../../assets/images/a.jpg';

    @Component()
    export default class ContentHeader {
        avatar;
        activeRouteName = null;
        age = new Date().getFullYear() - 1994 - 1;

        tabs = [
            {
                tabText: this.$t('message.aboutMeBtn'),
                toProp: {
                    name: "about-section"
                }
            },

            {
                tabText: this.$t('message.portfolio'),
                toProp: {
                    name: "portfolio-section"
                }
            }
        ];

        isTabActive(tabName) {
            return this.activeRouteName === tabName;
        }

        setActiveRouteName(routeName) {
            this.activeRouteName = routeName;
        }

        @Watch('$route', { immediate: true })
        onRouteChange() {
            this.setActiveRouteName(this.$route.name);
        }
    }
</script>

<style scoped lang="less">
    .header-block {
        background: #eaebed;
        display: flex;

        &__avatar-block {
            padding-left: 6px;
            width: 100%;
        }

        &__avatar {
            max-width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            min-width: 350px;
            background-size: 130%;
        }

        &__intro-block {
            margin: 110px 120px 110px 50px;
        }

        &__greetings {
            text-transform: uppercase;
            color: #4c4c4c;
            font-size: 30px;
            font-weight: 400;
            font-family: Exo2;
            line-height: 40px;
        }

        &__name {
            text-transform: uppercase;
            color: #4c4c4c;
            font-size: 48px;
            font-weight: 400;
            font-family: Exo2;
            line-height: 50px;
        }

        &__specialization {
            text-transform: uppercase;
            color: #3971ff;
            letter-spacing: 1.92px;
            font-family: RobotoRegular;
            padding: 15px 18px 13px 19px;
            font-weight: 400;
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

        &__nav-tabs {
            margin-top: 50px;
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
            font-family: RobotoMedium;
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

        @media screen and (max-width: 800px) {
            & {
                flex-direction: column;
                align-items: center;
            }

            &__avatar-block {
                height: 350px;
                padding: 0;
            }

            &__avatar {
                background-size: 100%;
                background-position: 0 25%;
                min-width: 0;
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