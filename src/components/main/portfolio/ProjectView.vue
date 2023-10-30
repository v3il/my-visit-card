<template>
    <ContentSection class="project" :title="project.name" :white="white">
        <template v-if="project.description">
            <h3 class="project__title">Description</h3>
            <p class="project__description" v-html="project.description" />
        </template>

        <template v-if="project.screenshots">
            <h3 class="project__title">Results</h3>

            <p class="project__gallery-description">
                Click the image to see its large version
            </p>

            <ImagesGallery :imagesNames="project.screenshots" />
        </template>

        <ProjectTechnologies
            v-if="project.technologies"
            :technologies="project.technologies"
            class="project__technologies"
        />

        <a
            v-if="project.githubLink"
            :href="project.githubLink"
            rel="noopener noreferrer"
            target="_blank"
            class="project__link"
        >Github</a>
    </ContentSection>
</template>

<script setup>
import ImagesGallery from '@/components/basic/image/ImagesGallery.vue'
import ContentSection from '@/components/basic/ContentSection.vue'
import ProjectTechnologies from '@/components/main/portfolio/ProjectTechnologies.vue'

defineProps({
    project: {
        type: Object,
        required: true
    },

    white: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<style scoped lang="less">
.project__technologies {
    margin-top: 24px;
}

.project__title {
    text-decoration: none;
    text-transform: uppercase;
    line-height: 30px;
    font-size: 16px;
    color: var(--color);
    font-weight: 500;
    margin-bottom: 8px;
}

.project__description {
    margin-bottom: 18px;
}

.project__gallery-description {
    margin-bottom: 18px;
    opacity: 0.8;
    font-size: smaller;
    line-height: 20px;
}

.project__link {
    text-transform: uppercase;
    color: var(--primary);
    margin-top: 24px;
    display: block;
    font-weight: 500;
    align-items: center;
    font-size: 16px;
}
</style>
