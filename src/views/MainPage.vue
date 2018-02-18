<template>
    <div class="page">
        <sidebar-block :items="this.currentPageSidebarItems"></sidebar-block>
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
                        isActive: true,
                    },
                    {
                        text: "Experience",
                        link: "#",
                        isActive: false,
                    },
                    {
                        text: "Education",
                        link: "#",
                        isActive: false,
                    },
                    {
                        text: "Contact",
                        link: "#",
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
                const scrollTop = window.scrollY;

                const infoBlock = [...document.querySelectorAll(".content__section > div")];


                this.currentPageSidebarItems.forEach(i => i.isActive = false);

                const infoBlockInViewport = infoBlock.filter(infoBlock => {
                    console.log(infoBlock.getBoundingClientRect().top - document.body.getBoundingClientRect().top, scrollTop)

                    return infoBlock.getBoundingClientRect().top - document.body.getBoundingClientRect().top >= scrollTop;
                });

                const firstInfoBlockInViewport = infoBlockInViewport && infoBlockInViewport.length ? infoBlockInViewport[0] : null;

                console.log(firstInfoBlockInViewport);

                if(scrollTop > 800) {
                    this.currentPageSidebarItems[2].isActive = true;
                } else if(scrollTop > 500) {
                    this.currentPageSidebarItems[1].isActive = true;
                } else if(scrollTop > 200) {
                    this.currentPageSidebarItems[0].isActive = true;
                }
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
