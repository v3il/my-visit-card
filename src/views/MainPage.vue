<template>
    <div class="page">
        <notification></notification>

        <sidebar-block
            :sidebarOpened="sidebarOpened"
            :items="this.currentPageSidebarItems"
            @scrollToInfoBlock="scrollToInfoBlock($event)"
            @toggle-sidebar="sidebarOpened = !sidebarOpened"
        ></sidebar-block>

        <content-block></content-block>
    </div>
</template>

<script>
    import SidebarBlock from "@/components/sidebar/SidebarBlock.vue"
    import ContentBlock from "@/components/content/ContentBlock.vue"

    import Notification from "@/components/Notification.vue"

    import {mainRouteNames} from "../routes";

    import projects from '../projects';

    export default {
        name: 'main-page',

        data() {
            const portfolioSectionSidebarItems = projects.map((project, index) => {
                return {
                    text: project.name,
                    link: "#",
                    tag: project.id,
                    isActive: index === 0,
                }
            });

            return {
                portfolioSectionSidebarItems,

                sidebarOpened: false,
                currentPageSidebarItems: [],
                aboutSectionSidebarItems: [
                    {
                        text: this.$t('message.skills'),
                        link: "#",
                        tag: "skills",
                        isActive: true,
                    },
                    {
                        text: this.$t('message.experience'),
                        link: "#",
                        tag: "experience",
                        isActive: false,
                    },
                    {
                        text: this.$t('message.education'),
                        link: "#",
                        tag: "education",
                        isActive: false,
                    },
                    {
                        text: this.$t('message.contact'),
                        link: "#",
                        tag: "contact",
                        isActive: false,
                    },
                ],
            }
        },

        watch: {
            "$route"() {
                this.setCurrentPageSidebarItems(this.getCurrentPageSidebarItems());
            }
        },

        created() {
            this.setCurrentPageSidebarItems(this.getCurrentPageSidebarItems());

            const scrollHandler = () => {
                const sidebarItems = this.currentPageSidebarItems;

                const viewportTop = window.scrollY;
                const viewportBottom = window.scrollY + window.innerHeight;
                const infoBlocks = [...document.querySelectorAll(".js-scroll-to-target")];

                this.deactivateAllSidebarItems();

                const infoBlocksInViewport = infoBlocks.filter(infoBlock => {
                    const infoBlockScrollOffset = this.getScrollTopOffsetOfElement(infoBlock);
                    const infoBlockHeight = infoBlock.clientHeight;

                    const infoBlockBottomPosition = infoBlockScrollOffset + infoBlockHeight;

                    return (
                           infoBlockBottomPosition > viewportTop
                        && infoBlockScrollOffset < viewportBottom
                    );
                });

                if (infoBlocksInViewport.length) {
                    infoBlocksInViewport.forEach((block) => {
                        const index = infoBlocks.findIndex(item => item === block);
                        sidebarItems[index].isActive = true;
                    });
                }
            };

            window.addEventListener("scroll", scrollHandler);

            this.$once('hook:beforeDestroy', () => {
                window.removeEventListener("scroll", scrollHandler);
            });
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

            scrollToInfoBlock(clickedSideBarItem) {
                const infoBlocks = [...document.querySelectorAll(".js-scroll-to-target")];
                const clickedLinkIndex = this.currentPageSidebarItems.indexOf(clickedSideBarItem);

                if (clickedLinkIndex >= 0) {
                    const infoBlock = infoBlocks[clickedLinkIndex];
                    const infoBlockScrollTop = this.getScrollTopOffsetOfElement(infoBlock) + 1;

                    this.smoothScrollToY(infoBlockScrollTop, 300);
                }
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
            SidebarBlock,
            ContentBlock,
            Notification,
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
</style>
