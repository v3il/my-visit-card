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

            <a
                :href="project.demoLink"
                v-if="project.demoLink"
                class="project__demo-link"
                target="_blank"
                :aria-label="`${project.name}-demo`"
                rel="noopener noreferrer"
            >
                <i class="fa fa-eye"></i>
            </a>
        </h2>

        <p class="project__technologies">
            {{ project.technologies }}
        </p>

        <h3 class="project__description-title article-title">
            {{ $t('message.projectDescription') }}
        </h3>

        <p class="project__description" v-html="$t(project.description)"></p>

        <h3 class="project__gallery-title article-title" v-if="project.screenshots">
            {{ $t('message.results') }}
        </h3>

        <p class="project__gallery-description" v-if="project.screenshots">
            {{ $t('message.imageGalleryDescription') }}
        </p>

        <images-gallery :imagesNames="project.screenshots" v-if="project.screenshots"></images-gallery>
    </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import ImagesGallery from '@/components/ImagesGallery'

const Props = Vue.extend({
  props: {
    project: {
      type: Object,
      required: true
    }
  }
})

export default @Component({
  components: {
    ImagesGallery
  }
}) class ProjectView extends Props {}
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
        font-weight: bold;
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
