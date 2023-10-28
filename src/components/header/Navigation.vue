<template>
    <nav class="header-navigation">
        <RouterLink
            v-for="tab in tabs"
            :key="tab.tabText"
            :to="tab.to"
            :class="{ active: isTabActive(tab) }"
            class="header-navigation__link"
        >
            {{ tab.tabText }}
        </RouterLink>
    </nav>
</template>

<script setup>
import { MainRouteNames } from '@/config'
import { useRoute } from 'vue-router'

const tabs = [
    {
        tabText: 'About me',
        to: { name: MainRouteNames.ABOUT }
    },
    {
        tabText: 'Portfolio',
        to: { name: MainRouteNames.PORTFOLIO }
    }
]

const route = useRoute()

const isTabActive = ({ to }) => to.name === route.name
</script>

<style scoped lang="less">
.header-navigation {
    display: flex;
    flex-wrap: wrap;
    gap: 24px 94px;
}

.header-navigation__link {
    --text-color: var(--color);
    --line-width: 50px;

    text-decoration: none;
    text-transform: uppercase;
    line-height: 30px;
    font-size: 16px;
    color: var(--text-color);
    font-weight: 500;
    transition: color 0.5s ease;
    min-width: 150px;
    position: relative;
    padding-bottom: 8px;

    &.active {
        --text-color: var(--primary);
        --line-width: 150px;
    }

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: var(--line-width);
        background-color: var(--primary);
        transition: width 0.5s ease;
    }
}
</style>
