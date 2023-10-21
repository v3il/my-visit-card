<template>
    <div class="page">
        <SidebarBlock
            :sidebarOpened="sidebarOpened"
            :items="this.currentPageSidebarItems"
            @scroll-to-info-block="scrollToInfoBlock"
            @toggle-sidebar="toggleMobileSidebar"
        ></SidebarBlock>

        <transition name="fade">
            <div class="page__sidebar-overlay" v-if="sidebarOpened" @click="toggleMobileSidebar"></div>
        </transition>

        <content-block></content-block>

        <transition name="fade">
            <button
                v-show="currentScrollTop > 100"
                class="page__scroll-top"
                @click="smoothScrollToY(0)"
                aria-label="Scroll to top"
            >
                <i class="fa fa-chevron-up"></i>
            </button>
        </transition>

        <button class="page__open-menu-btn" @click="toggleMobileSidebar" aria-label="Open menu">
            <i class="fa fa-close" v-if="sidebarOpened"></i>
            <i class="fa fa-bars" v-else></i>
        </button>
    </div>
</template>

<script>
import SidebarBlock from '@/components/sidebar/SidebarBlock.vue'
import ContentBlock from '@/components/content/ContentBlock.vue'

import { MainRouteNames } from '@/config'

import projects from '../portfolioProjects'

export default {
    name: 'MainPage',

    data () {
        const portfolioSectionSidebarItems = projects.map((project, index) => {
            return {
                text: project.nameShort || project.name,
                link: '#',
                tag: project.id,
                isActive: index === 0
            }
        })

        return {
            portfolioSectionSidebarItems,

            sidebarOpened: false,
            currentPageSidebarItems: [],
            aboutSectionSidebarItems: [
                {
                    text: 'Hard skills',
                    tag: 'skills',
                    isActive: true
                },
                {
                    text: 'Work Experience',
                    tag: 'experience',
                    isActive: false
                },
                {
                    text: 'Education',
                    tag: 'education',
                    isActive: false
                }
            ],

            currentScrollTop: 0
        }
    },

    watch: {
        $route: {
            immediate: true,

            handler () {
                this.currentPageSidebarItems = this.getCurrentPageSidebarItems()
            }
        }
    },

    created () {
        const scrollHandler = () => {
            const sidebarItems = this.currentPageSidebarItems

            const viewportTop = window.scrollY
            const viewportBottom = window.scrollY + window.innerHeight
            const infoBlocks = [...document.querySelectorAll('.js-scroll-to-target')]

            this.currentScrollTop = viewportTop

            this.deactivateAllSidebarItems()

            const infoBlocksInViewport = infoBlocks.filter(infoBlock => {
                const infoBlockScrollOffset = this.getScrollTopOffsetOfElement(infoBlock)
                const infoBlockHeight = infoBlock.clientHeight

                const infoBlockBottomPosition = infoBlockScrollOffset + infoBlockHeight

                return infoBlockBottomPosition > viewportTop && infoBlockScrollOffset < viewportBottom
            })

            infoBlocksInViewport.forEach(block => {
                const index = infoBlocks.findIndex(item => item === block)
                sidebarItems[index].isActive = true
            })
        }

        window.addEventListener('scroll', scrollHandler)

        // this.$once('hook:beforeDestroy', () => {
        //     window.removeEventListener('scroll', scrollHandler)
        // })
    },

    methods: {
        getCurrentPageSidebarItems () {
            const routeName = this.$router.currentRoute.name
            return routeName === MainRouteNames.ABOUT ? this.aboutSectionSidebarItems : this.portfolioSectionSidebarItems
        },

        scrollToInfoBlock (clickedSideBarItem) {
            const infoBlocks = [...document.querySelectorAll('.js-scroll-to-target')]
            const clickedLinkIndex = this.currentPageSidebarItems.indexOf(clickedSideBarItem)

            if (clickedLinkIndex >= 0) {
                const infoBlock = infoBlocks[clickedLinkIndex]
                const infoBlockScrollTop = this.getScrollTopOffsetOfElement(infoBlock) + 1

                this.smoothScrollToY(infoBlockScrollTop)
            }
        },

        deactivateAllSidebarItems () {
            this.currentPageSidebarItems.forEach(sidebarItem => (sidebarItem.isActive = false))
        },

        getScrollTopOffsetOfElement (element) {
            const elementTopValue = element.getBoundingClientRect().top
            const bodyTopValue = document.body.getBoundingClientRect().top

            return elementTopValue - bodyTopValue
        },

        smoothScrollToY (scrollToY) {
            window.scroll({
                top: scrollToY,
                behavior: 'smooth'
            })
        },

        toggleMobileSidebar () {
            this.sidebarOpened = !this.sidebarOpened
        }
    },

    components: {
        SidebarBlock,
        ContentBlock
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

.page__scroll-top,
.page__open-menu-btn {
    display: flex;
    position: fixed;
    background: rgba(243, 243, 243, 0.75);
    border: 1px solid #a7a7a7;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    cursor: pointer;
    padding: 6px;
    outline: none;
}

.page__scroll-top {
    bottom: 20px;
    right: 20px;
    z-index: 3;
}

.page__scroll-top i {
    margin-top: -2px;
}

.page__open-menu-btn {
    display: none;
    right: 20px;
    bottom: 70px;
    z-index: 5;

    @media screen and (max-width: 1150px) {
        display: flex;
    }
}

.page__sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
}
</style>
