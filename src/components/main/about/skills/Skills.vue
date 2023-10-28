<template>
    <ContentSection title="Hard skills">
        <div class="skills__technologies">
            <SkillsList title="Front-end technologies" :skills="skills.frontend" />
            <SkillsList title="Back-end technologies" :skills="skills.backend" />
        </div>
    </ContentSection>
</template>

<script setup>
import ContentSection from '@/components/basic/ContentSection.vue'
import SkillsList from '@/components/main/about/skills/SkillsList.vue'
import { skills } from '@/consts/skills'
</script>

<style scoped lang="less">
.skills__technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 36px;
}
</style>
