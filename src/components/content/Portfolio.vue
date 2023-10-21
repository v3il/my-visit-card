<template>
    <main class="portfolio info-section">
        <project-view
            class="portfolio__project-item"
            v-for="project in $options.portfolioProjects"
            :project="project"
            :key="project.name"
        ></project-view>
    </main>
</template>

<script>
import ProjectView from '@/components/ProjectView'
import portfolioProjects from '../../portfolioProjects'

export default {
    name: 'Portfolio',

    portfolioProjects,

    components: {
        ProjectView
    }
}
</script>
