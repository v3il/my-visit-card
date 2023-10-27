<template>
    <ContentSection title="Work Experience">
        <ExperienceItem
            v-for="(experience, index) in experiences"
            :key="experience.companyName"
            :index="experiences.length - index"
            :experience="experience"
        ></ExperienceItem>
    </ContentSection>
</template>

<script setup>
import ExperienceItem from '@/components/experience/ExperienceItem.vue'
import ContentSection from '@/components/basic/ContentSection.vue'
import { experiences } from '@/consts/experiences'
</script>
