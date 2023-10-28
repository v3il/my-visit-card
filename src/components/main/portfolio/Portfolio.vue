<template>
    <ProjectView
        class="portfolio__project-item"
        v-for="(project, index) in petProjects"
        :project="project"
        :white="index % 2 === 1"
        :key="project.name"
    ></ProjectView>
</template>

<script setup>
import ProjectView from '@/components/main/portfolio/ProjectView.vue'
import { petProjects } from '@/consts/petProjects'
</script>
