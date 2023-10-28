<template>
    <main class="portfolio info-section">
        <ProjectView
            class="portfolio__project-item"
            v-for="project in petProjects"
            :project="project"
            :key="project.name"
        ></ProjectView>
    </main>
</template>

<script setup>
import ProjectView from '@/components/basic/ProjectView.vue'
import { petProjects } from '@/consts/petProjects'
</script>
