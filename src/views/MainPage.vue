<template>
    <div class="page">
        <sidebar-block
            :sidebarOpened="sidebarOpened"
            :items="this.currentPageSidebarItems"
            @scrollToInfoBlock="scrollToInfoBlock($event)"
            @toggle-sidebar="sidebarOpened = !sidebarOpened"
        ></sidebar-block>

        <content-block></content-block>
        <social-networks></social-networks>

        <div class="page__scroll-top" @click="smoothScrollToY(0, 300)">
            <i class="fa fa-chevron-up"></i>
        </div>
    </div>
</template>

<script>
    import SidebarBlock from "@/components/sidebar/SidebarBlock.vue"
    import ContentBlock from "@/components/content/ContentBlock.vue"

    import SocialNetworks from "@/components/SocialNetworks.vue"

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
                    // {
                    //     text: this.$t('message.contact'),
                    //     link: "#",
                    //     tag: "contact",
                    //     isActive: false,
                    // },
                ],

                currentScrollTop: 0,
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

                this.currentScrollTop = viewportTop;

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
            SocialNetworks,
        }
    }
</script>

<style scoped lang="less">
    .page {
        max-width: 1350px;
        margin: 0 auto;
        background: #f3f3f3;
        min-height: 100vh;
        box-shadow: 0 1px 6px #000;
    }

    .page__scroll-top {
        display: flex;
        position: fixed;
        bottom: 10px;
        right: 10px;
        background: #f3f3f3;
        border: 1px solid #a7a7a7;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        z-index: 3;
        cursor: pointer;
        padding: 6px;
        opacity: 0.5;
        transition: opacity 0.3s;
    }

    .page__scroll-top i {
        margin-top: -2px;
    }

    .page__scroll-top:hover {
        opacity: 1;
    }
</style>
