<template>
    <ContentSection title="Education">
        <ul class="education__education-list">
            <EducationItem
                v-for="(education, index) in educations"
                :key="education.name"
                :index="educations.length - index"
                :education="education"
            ></EducationItem>
        </ul>
    </ContentSection>
</template>

<script setup>
import ContentSection from '@/components/basic/ContentSection.vue'
import EducationItem from '@/components/main/about/education/EducationItem.vue'
import { educations } from '@/consts/educations'
</script>

<style scoped lang="less">
.education__education-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
