<template>
    <main class="portfolio info-section">
        <project-view
            class="portfolio__project-item"
            v-for="project in projects"
            :project="project"
            :key="project.name"
        ></project-view>
    </main>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ProjectView from '@/components/ProjectView';

import portfolioProjects from '../../portfolioProjects';

@Component({
    components: {
        ProjectView,
    },
})
export default class Portfolio extends Vue {
    projects = portfolioProjects;
}
</script>

<style scoped lang="less">
.portfolio {}
</style>
