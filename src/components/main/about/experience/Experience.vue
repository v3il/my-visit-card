<template>
    <ContentSection title="Work Experience" white>
        <ExperienceItem
            v-for="(experience, index) in experiences"
            :key="experience.companyName"
            :index="experiences.length - index"
            :experience="experience"
            class="experience__job"
        ></ExperienceItem>
    </ContentSection>
</template>

<script setup>
import ExperienceItem from '@/components/main/about/experience/ExperienceItem.vue'
import ContentSection from '@/components/basic/ContentSection.vue'
import { experiences } from '@/consts/experiences'
</script>

<style scoped lang="less">
.experience__job:not(:last-child) {
    margin-bottom: 72px;
}
</style>
