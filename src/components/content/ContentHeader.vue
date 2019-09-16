<template>
    <div class="content__header header-block">
        <div class="header-block__avatar-block">
            <div class="header-block__avatar"></div>
        </div>

        <div class="header-block__intro-block intro-block">
            <h3 class="intro-block__greetings">{{$t("message.hello")}}</h3>
            <h2 class="intro-block__name">{{$t("message.name")}}</h2>
            <h5 class="intro-block__specialization">{{$t("message.profession")}}</h5>

            <div class="intro-block__about">
                {{$t("message.about1", { age })}}
                <br>
                {{$t("message.about2")}}
            </div>

            <div class="intro-block__nav-tabs">
                <div
                    class="intro-block__nav-tab"
                    v-for="tabData in tabs"
                    :class="{'intro-block__nav-tab--active': isTabActive(tabData.toProp.name)}"
                >
                    <router-link class="intro-block__nav-link" :to="tabData.toProp">{{tabData.tabText}}</router-link>
                    <div class="intro-block__nav-line"></div>

                    <!--<router-link :to="{name: 'animated-counter'}">ac</router-link>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeRouteName: null,

                tabs: [
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
                ]
            }
        },

        computed: {
            age() {
                const date = new Date();
                return date.getFullYear() - 1994 - 1;
            }
        },

        methods: {
            isTabActive(tabName) {
                return this.activeRouteName === tabName;
            },

            setActiveRouteName(routeName) {
                this.activeRouteName = routeName;
            }
        },

        watch: {
            $route(to) {
                this.setActiveRouteName(to.name);
            }
        },

        created() {
            this.setActiveRouteName(this.$route.name);
        }
    }
</script>

<style>
    .content__header {
        background: #eaebed;
        display: flex;
    }

    .header-block__avatar-block {
        padding-left: 30px;
    }

    .header-block__avatar {
        width: 300px;
        height: 100%;
        background: url('../../assets/images/avatar.png');
        background-repeat: no-repeat;
        background-position: 52% 100%;
        background-size: 100% auto;
    }

    .intro-block {
        margin: 110px 120px 110px 50px;
    }

    .intro-block__greetings {
        text-transform: uppercase;
        color: #4c4c4c;
        font-size: 30px;
        font-weight: 400;
        font-family: Exo2;
        line-height: 40px;
    }

    .intro-block__name {
        text-transform: uppercase;
        color: #4c4c4c;
        font-size: 48px;
        font-weight: 400;
        font-family: Exo2;
        line-height: 50px;
    }

    .intro-block__specialization {
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

    .intro-block__about {
        margin-top: 50px;
        line-height: 30px;
        font-weight: 400;
        color: #4c4c4c;
        font-size: 16px;
    }

    .intro-block__nav-tabs {
        margin-top: 50px;
        display: flex;
    }

    .intro-block__nav-tab {
        margin-right: 94px;
        display: flex;
        flex-direction: column;
    }

    .intro-block__nav-tab:last-child {
        margin-right: 0;
    }

    .intro-block__nav-link {
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

    .intro-block__nav-line {
        height: 2px;
        background-color: #3971ff;
        width: 50px;
        margin-top: 7px;
        transition: width 0.5s ease;
    }

    .intro-block__nav-tab:hover .intro-block__nav-link,
    .intro-block__nav-tab--active .intro-block__nav-link {
        color: #3971ff;
    }

    .intro-block__nav-tab:hover .intro-block__nav-line,
    .intro-block__nav-tab--active .intro-block__nav-line {
        width: 150px;
    }

    @media screen and (max-width: 850px) {
        .content__header {
            flex-direction: column;
            align-items: center;
        }

        .header-block__avatar-block {
            height: 350px;
            padding: 0;
        }

        .header-block__avatar {
            background-position: initial;
        }
    }
</style>