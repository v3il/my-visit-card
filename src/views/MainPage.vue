<template>
    <div class="page">
        <sidebar-block
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

                this.deactivateAllSidebarItems();

                const infoBlockInViewport = infoBlocks.filter(infoBlock => {
                    const infoBlockScrollOffset = this.getScrollTopOffsetOfElement(infoBlock);

                    console.log(infoBlockScrollOffset, scrollTop)

                    return infoBlockScrollOffset >= scrollTop /*- window.innerHeight + 500*/;
                });

                const firstInfoBlockInViewport = infoBlockInViewport && infoBlockInViewport.length
                    ? infoBlockInViewport[0]
                    : null;

                const activeItemIndex = infoBlocks.indexOf(firstInfoBlockInViewport);

                console.log(activeItemIndex, firstInfoBlockInViewport)

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
        display: flex;
        flex-direction: row;
    }
</style>
