<template>
    <ContentSection
        v-for="(project, index) in petProjects"
        :key="project.name"
        :title="project.name"
        :white="index % 2 === 1"
        class="project"
    >
        <ProjectView :project="project" />
    </ContentSection>
</template>

<script setup>
import ProjectView from '@/components/basic/projectView/ProjectView.vue'
import ContentSection from '@/components/basic/ContentSection.vue'
import { petProjects } from '@/consts/petProjects'
</script>
