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

        <h3 class="project__duties article-title" v-if="project.duties">
            {{ $t('message.duties') }}
        </h3>

        <ul class="section-list" v-if="project.duties">
            <li class="section-list__item" v-for="(duty, index) in project.duties" :key="`duty${index}`">
                <div class="section-list__pointer"></div>

                <div class="project__duty-name">
                    {{ duty }}
                </div>
            </li>
        </ul>

        <h3 class="project__achievements-title article-title" v-if="project.achievements || project.achievementsList">
            {{ $t('message.achievements') }}
        </h3>

        <ul class="section-list" v-if="project.achievementsList">
            <li
                class="section-list__item"
                v-for="(duty, index) in project.achievementsList"
                :key="`achievement${index}`"
            >
                <div class="section-list__pointer"></div>

                <div class="project__duty-name">
                    {{ duty }}
                </div>
            </li>
        </ul>

        <ul class="project__achievements" v-if="project.achievements">
            <li
                class="project__achievements-item"
                v-for="(achievement, index) in project.achievements"
                :key="`achievement${index}`"
            >
                <div class="project__achievement-task">
                    <i class="fa fa-chevron-circle-right project__achievement-task-icon"></i>
                    {{ achievement.task }}
                </div>

                <div class="project__achievement-result">
                    <i class="fa fa-check-circle project__achievement-result-icon"></i>
                    {{ achievement.result }}
                </div>
            </li>
        </ul>

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
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ImagesGallery from '@/components/ImagesGallery';

const Props = Vue.extend({
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
});

@Component({
    components: {
        ImagesGallery,
    },
})
export default class ProjectView extends Props {}
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
    &__duties,
    &__achievements-title,
    &__gallery-title {
        margin-top: 30px;
    }

    &__achievements {
        list-style: none;
    }

    &__achievements-item {
        padding: 18px 0 18px 30px;
        border-bottom: 1px solid #a7a7a7;

        &:last-child {
            border-bottom: 0;
        }
    }

    &__achievement-task-icon,
    &__achievement-result-icon {
        position: absolute;
        left: -30px;
        top: 5px;
        color: #3971ff;
        font-size: 17px;
    }

    &__achievement-task,
    &__achievement-result {
        margin: 6px 0;
        position: relative;
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
