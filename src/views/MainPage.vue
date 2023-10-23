<template>
    <div class="page">
        <SidebarBlock
            :sidebarOpened="sidebarOpened"
            :items="currentPageSidebarItems"
            @scroll-to-info-block="scrollToInfoBlock"
            @toggle-sidebar="toggleMobileSidebar"
        ></SidebarBlock>

        <transition name="fade">
            <div class="page__sidebar-overlay" v-if="sidebarOpened" @click="toggleMobileSidebar"></div>
        </transition>

        <ContentBlock></ContentBlock>

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

<script setup>
import SidebarBlock from '@/components/sidebar/SidebarBlock.vue'
import ContentBlock from '@/components/content/ContentBlock.vue'
import { MainRouteNames } from '@/config'
import projects from '../portfolioProjects'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

console.error(projects)

const portfolioSectionSidebarItems = ref(projects.map((project, index) => {
    return {
        text: project.nameShort || project.name,
        tag: project.id,
        isActive: index === 0
    }
}))

const aboutSectionSidebarItems = ref([
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
])

const route = useRoute()

const sidebarOpened = ref(false)
const currentScrollTop = ref(0)

const currentPageSidebarItems = computed(() => {
    const routeName = route.name
    return routeName === MainRouteNames.ABOUT ? aboutSectionSidebarItems.value : portfolioSectionSidebarItems.value
})

const scrollHandler = () => {
    const viewportTop = window.scrollY
    const viewportBottom = window.scrollY + window.innerHeight
    const infoBlocks = [...document.querySelectorAll('.js-scroll-to-target')]

    currentScrollTop.value = viewportTop

    deactivateAllSidebarItems()

    const infoBlocksInViewport = infoBlocks.filter(infoBlock => {
        const infoBlockScrollOffset = getScrollTopOffsetOfElement(infoBlock)
        const infoBlockHeight = infoBlock.clientHeight
        const infoBlockBottomPosition = infoBlockScrollOffset + infoBlockHeight

        return infoBlockBottomPosition > viewportTop && infoBlockScrollOffset < viewportBottom
    })

    infoBlocksInViewport.forEach(block => {
        const index = infoBlocks.findIndex(item => item === block)
        currentPageSidebarItems.value[index].isActive = true
    })
}

window.addEventListener('scroll', scrollHandler)

const scrollToInfoBlock = (clickedSideBarItem) => {
    const infoBlocks = [...document.querySelectorAll('.js-scroll-to-target')]
    const clickedLinkIndex = currentPageSidebarItems.value.indexOf(clickedSideBarItem)

    if (clickedLinkIndex >= 0) {
        const infoBlock = infoBlocks[clickedLinkIndex]
        const infoBlockScrollTop = getScrollTopOffsetOfElement(infoBlock) + 1

        smoothScrollToY(infoBlockScrollTop)
    }
}

const deactivateAllSidebarItems = () => {
    currentPageSidebarItems.value.forEach(sidebarItem => (sidebarItem.isActive = false))
}

const getScrollTopOffsetOfElement = (element) => {
    const elementTopValue = element.getBoundingClientRect().top
    const bodyTopValue = document.body.getBoundingClientRect().top

    return elementTopValue - bodyTopValue
}

const smoothScrollToY = (scrollToY) => {
    window.scroll({
        top: scrollToY,
        behavior: 'smooth'
    })
}

const toggleMobileSidebar = () => {
    sidebarOpened.value = !sidebarOpened.value
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
