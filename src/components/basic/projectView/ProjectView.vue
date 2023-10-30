<template>
    <div>
        <h2 class="project__name" v-if="showName">{{project.name}}</h2>

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
    </div>
</template>

<script setup>
import ImagesGallery from '@/components/basic/image/ImagesGallery.vue'
import ProjectTechnologies from './ProjectTechnologies.vue'

defineProps({
    project: {
        type: Object,
        required: true
    },

    showName: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<style scoped lang="less">
.project__name {
    line-height: 30px;
    color: var(--primary);
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 18px;
    font-size: 20px;
    display: flex;
    align-items: center;
}

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
