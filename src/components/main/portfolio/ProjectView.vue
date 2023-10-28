<template>
    <ContentSection class="project" :title="project.name" :white="white">
        <ProjectTechnologies
            v-if="project.technologies"
            :technologies="project.technologies"
            class="project__technologies"
        />

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
    </ContentSection>

    <!-- js-scroll-to-target is for portfolio projects only -->
<!--    <div class="project" :class="{ 'js-scroll-to-target': project.id }">-->
<!--        <h2 class="project__name-wrapper">-->
<!--            <span class="project__name">{{ project.name }}</span>-->

<!--            <a-->
<!--                :href="project.githubLink"-->
<!--                v-if="project.githubLink"-->
<!--                class="project__github-link"-->
<!--                target="_blank"-->
<!--                :aria-label="`${project.name}-code`"-->
<!--                rel="noopener noreferrer"-->
<!--            >-->
<!--                <i class="fa fa-github"></i>-->
<!--            </a>-->

<!--&lt;!&ndash;            <a&ndash;&gt;-->
<!--&lt;!&ndash;                :href="project.demoLink"&ndash;&gt;-->
<!--&lt;!&ndash;                v-if="project.demoLink"&ndash;&gt;-->
<!--&lt;!&ndash;                class="project__demo-link"&ndash;&gt;-->
<!--&lt;!&ndash;                target="_blank"&ndash;&gt;-->
<!--&lt;!&ndash;                :aria-label="`${project.name}-demo`"&ndash;&gt;-->
<!--&lt;!&ndash;                rel="noopener noreferrer"&ndash;&gt;-->
<!--&lt;!&ndash;            >&ndash;&gt;-->
<!--&lt;!&ndash;                <i class="fa fa-eye"></i>&ndash;&gt;-->
<!--&lt;!&ndash;            </a>&ndash;&gt;-->
<!--        </h2>-->

<!--        <p class="project__technologies" v-if="project.technologies">-->
<!--            {{ project.technologies }}-->
<!--        </p>-->

<!--        <h3 class="project__description-title article-title" v-if="project.description">-->
<!--            Description-->
<!--        </h3>-->

<!--        <p class="project__description" v-html="project.description" v-if="project.description"></p>-->

<!--        <h3 class="project__gallery-title article-title" v-if="project.screenshots">-->
<!--            Results-->
<!--        </h3>-->

<!--        <p class="project__gallery-description" v-if="project.screenshots">-->
<!--            Click the image to see its large version-->
<!--        </p>-->

<!--        <ImagesGallery :imagesNames="project.screenshots" v-if="project.screenshots" />-->
<!--    </div>-->
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
    margin-bottom: 24px;
}

.project__title {
    text-decoration: none;
    text-transform: uppercase;
    line-height: 30px;
    font-size: 16px;
    color: var(--color);
    font-weight: 500;
    margin-bottom: 12px;
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
</style>
