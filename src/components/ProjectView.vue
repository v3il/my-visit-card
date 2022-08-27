<template>
    <!-- js-scroll-to-target is for portfolio projects only -->
    <div class="project" :class="{ 'js-scroll-to-target': project.id }">
        <h2 class="project__name-wrapper">
            <span class="project__name">{{ project.name }}</span>

            <a
                :href="project.githubLink"
                v-if="project.githubLink"
                class="project__github-link"
                target="_blank"
                :aria-label="`${project.name}-code`"
                rel="noopener noreferrer"
            >
                <i class="fa fa-github"></i>
            </a>

<!--            <a-->
<!--                :href="project.demoLink"-->
<!--                v-if="project.demoLink"-->
<!--                class="project__demo-link"-->
<!--                target="_blank"-->
<!--                :aria-label="`${project.name}-demo`"-->
<!--                rel="noopener noreferrer"-->
<!--            >-->
<!--                <i class="fa fa-eye"></i>-->
<!--            </a>-->
        </h2>

        <p class="project__technologies" v-if="project.technologies">
            {{ project.technologies }}
        </p>

        <h3 class="project__description-title article-title" v-if="project.description">
            Description
        </h3>

        <p class="project__description" v-html="project.description" v-if="project.description"></p>

        <h3 class="project__gallery-title article-title" v-if="project.screenshots">
            Results
        </h3>

        <p class="project__gallery-description" v-if="project.screenshots">
            Click the image to see its large version
        </p>

        <ImagesGallery :imagesNames="project.screenshots" v-if="project.screenshots" />
    </div>
</template>

<script>
import ImagesGallery from '@/components/image/ImagesGallery'

export default {
    name: 'ProjectView',

    components: { ImagesGallery },

    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped lang="less">
.project {
    margin-bottom: 24px;
    padding-top: 12px;

    &__name-wrapper {
        line-height: 30px;
        color: #3971ff;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 18px;
        font-size: 20px;
        display: flex;
        align-items: center;
    }

    &__github-link,
    &__demo-link {
        font-size: 24px;
        color: #4c4c4c;
        transition: color 0.5s;
        margin-left: 16px;
    }

    &__demo-link {
        margin-left: 12px;
    }

    &__github-link:hover,
    &__demo-link:hover {
        color: #3971ff;
    }

    &__technologies {
        font-weight: 500;
        margin-bottom: 18px;
    }

    &__description {
        margin-bottom: 18px;
    }

    &__description-title,
    &__gallery-title {
        margin-top: 30px;
    }

    &__gallery-title {
        margin-bottom: 0;
    }

    &__gallery-description {
        margin-bottom: 18px;
        opacity: 0.8;
        font-size: smaller;
        line-height: 20px;
    }
}
</style>
