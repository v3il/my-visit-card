<template>
    <div class="page">
        <div @click="sidebarOpened = !sidebarOpened"
            class="page__open-menu-btn"
        >
            <div class="open-menu-btn__line open-menu-btn__line--first"></div>
            <div class="open-menu-btn__line open-menu-btn__line--second"></div>
            <div class="open-menu-btn__line open-menu-btn__line--third"></div>
        </div>

        <sidebar-block
            :sidebarOpened="sidebarOpened"
            :items="this.currentPageSidebarItems"
            @scrollToInfoBlock="scrollToInfoBlock($event)"
        ></sidebar-block>
        <content-block></content-block>
    </div>
</template>

<script>
    import SidebarBlock from "@/components/sidebar/SidebarBlock.vue"
    import ContentBlock from "@/components/content/ContentBlock.vue"

    import {mainRouteNames} from "../routes";

    export default {
        name: 'main-page',

        data() {
            return {
                sidebarOpened: false,

                currentPageSidebarItems: [],

                aboutSectionSidebarItems: [
                    {
                        text: "Skills",
                        link: "#",
                        tag: "skills",
                        isActive: true,
                    },
                    {
                        text: "Experience",
                        link: "#",
                        tag: "experience",
                        isActive: false,
                    },
                    {
                        text: "Education",
                        link: "#",
                        tag: "education",
                        isActive: false,
                    },
                    {
                        text: "Contact",
                        link: "#",
                        tag: "contact",
                        isActive: false,
                    },
                ],

                portfolioSectionSidebarItems: [
                    {
                        text: "p1",
                        link: "#",
                        isActive: true,
                    },
                    {
                        text: "p2",
                        link: "#",
                        isActive: false,
                    },
                    {
                        text: "p3",
                        link: "#",
                        isActive: false,
                    },
                    {
                        text: "p4",
                        link: "#",
                        isActive: false,
                    },
                ]
            }
        },

        watch: {
            "$route"() {
                this.setCurrentPageSidebarItems(this.getCurrentPageSidebarItems());
            }
        },

        created() {
            this.setCurrentPageSidebarItems(this.getCurrentPageSidebarItems());
            window.addEventListener("scroll", this.scrollHandler);
        },

        destroyed() {
            window.removeEventListener("scroll", this.scrollHandler);
        },

        methods: {
            getCurrentPageSidebarItems() {
                const router = this.$router;

                switch(router.currentRoute.name) {
                    case mainRouteNames.ABOUT:
                        return this.aboutSectionSidebarItems;
                    case mainRouteNames.PORTFOLIO:
                        return this.portfolioSectionSidebarItems;
                    default:
                        return [];
                }
            },

            setCurrentPageSidebarItems() {
                this.currentPageSidebarItems = this.getCurrentPageSidebarItems();
            },

            scrollHandler() {
                const sidebarItems = this.currentPageSidebarItems;

                const scrollTop = window.scrollY;
                const infoBlocks = [...document.querySelectorAll(".content__section > div")];

                const nextInfoBlockOffsetThreshold = 200;

                this.deactivateAllSidebarItems();

                const infoBlockInViewport = infoBlocks.filter(infoBlock => {
                    const infoBlockScrollOffset = this.getScrollTopOffsetOfElement(infoBlock);
                    const infoBlockHeight = infoBlock.clientHeight;

                    const infoBlockBottomPosition = infoBlockScrollOffset + infoBlockHeight;

                    return infoBlockBottomPosition > scrollTop + nextInfoBlockOffsetThreshold;
                });

                const firstInfoBlockInViewport = infoBlockInViewport.length
                    ? infoBlockInViewport[0]
                    : null;

                const activeItemIndex = infoBlocks.indexOf(firstInfoBlockInViewport);

                if(activeItemIndex >= 0) {
                    sidebarItems[activeItemIndex].isActive = true;
                }
            },

            scrollToInfoBlock(clickedSideBarItem) {
                const infoBlock = document.getElementById(clickedSideBarItem.tag);
                const infoBlockScrollTop = this.getScrollTopOffsetOfElement(infoBlock);

                this.smoothScrollToY(infoBlockScrollTop, 300);
            },

            deactivateAllSidebarItems() {
                this.currentPageSidebarItems
                    .forEach(sidebarItem => sidebarItem.isActive = false);
            },

            getScrollTopOffsetOfElement(element) {
                const elementTopValue = element.getBoundingClientRect().top;
                const bodyTopValue = document.body.getBoundingClientRect().top;

                return elementTopValue - bodyTopValue;
            },

            smoothScrollToY(scrollToY, duration) {
                const startingY = window.scrollY;
                const diff = scrollToY - startingY;
                let start;

                window.requestAnimationFrame(function step(timestamp) {
                    if(!start) {
                        start = timestamp;
                    }

                    const time = timestamp - start;
                    const percent = Math.min(time / duration, 1);

                    window.scrollTo(0, startingY + diff * percent);

                    if(time < duration) {
                        window.requestAnimationFrame(step)
                    }
                });
            }
        },

        components: {
            'sidebar-block': SidebarBlock,
            'content-block': ContentBlock,
        }
    }
</script>

<style>
    .page {
        max-width: 1350px;
        margin: 0 auto;
        background: #f3f3f3;
        min-height: 100vh;
    }

    .page__open-menu-btn {
        display: none;
        position: fixed;
        top: 12px;
        left: 12px;
        height: 30px;
        width: 30px;
        z-index: 3;
        cursor: pointer;
        padding: 6px;
    }

    .open-menu-btn__line {
        background: black;
        height: 2px;
        margin-top: 3px;
    }

    @media screen and (max-width: 1150px) {
        .page__open-menu-btn {
            display: block;
        }
    }
</style>
