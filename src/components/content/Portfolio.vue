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
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import ProjectView from '@/components/ProjectView'

import portfolioProjects from '../../portfolioProjects'

export default @Component({
    components: {
        ProjectView
    }
}) class Portfolio extends Vue {
    projects = portfolioProjects;
}
</script>
