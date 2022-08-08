<template>
    <section class="experience js-scroll-to-target">
        <div class="experience__title-block">
            <h2 class="section-title">
                {{ this.$t('message.experience') }}
            </h2>

            <div class="section-title__separator">
                <div class="section-title__separator-line"></div>
                <div class="section-title__separator-ring"></div>
            </div>
        </div>

        <div class="experience__jobs-list">
            <div class="experience__job-item">
                <div class="experience__job-summary">
                    <div class="experience__job-counter">
                        01
                    </div>

                    <div class="experience__job-name">
                        <h2 class="experience__job-company-name">
                            uCoz
                        </h2>

                        <h3 class="experience__job-degree">
                            {{ $t('message.frontEndDev') }}
                        </h3>

                        <h3 class="experience__job-period">
                            {{ $t('message.jobSession', [2015, 2020]) }}
                        </h3>
                    </div>
                </div>

                <div class="experience__job-description">
                    <project-view v-for="project in uCozProjects" :project="project" :key="project.name" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ProjectView from '@/components/ProjectView';

@Component({
    components: {
        ProjectView,
    },
})
export default class Experience extends Vue {
    created() {
        this.uCozProjects = [
            {
                name: this.$t('message.cpv2'),
                technologies: 'Perl, jQuery, jQuery UI, Vue.js, vue-router, vuex, Webpack, ES2015+, Less, Jest',
                description: 'message.cpDescription',
                duties: [
                    this.$t('message.cpDuty4'),
                    this.$t('message.cpDuty1'),
                    this.$t('message.cpDuty2'),
                    this.$t('message.cpDuty3'),
                ],
                achievements: [
                    {
                        task: this.$t('message.cpTask1'),
                        result: this.$t('message.cpResult1'),
                    },
                    {
                        task: this.$t('message.cpTask2'),
                        result: this.$t('message.cpResult2'),
                    },
                    {
                        task: this.$t('message.cpTask3'),
                        result: this.$t('message.cpResult3'),
                    },
                    {
                        task: this.$t('message.cpTask4'),
                        result: this.$t('message.cpResult4'),
                    },
                    {
                        task: this.$t('message.cpTask5'),
                        result: this.$t('message.cpResult5'),
                    },
                    {
                        task: this.$t('message.cpTask6'),
                        result: this.$t('message.cpResult6'),
                    },
                ],
                screenshots: ['cp1.png', 'cp2.png', 'cp3.png', 'cp4.png', 'cp5.png', 'cp6.png'],
            },

            {
                name: this.$t('message.ucalc'),
                technologies: 'jQuery, Gulp, Sass, Chartist.js, JSON',
                description: 'message.uCalcDescription',
                duties: [this.$t('message.ucalcDuty1'), this.$t('message.ucalcDuty2'), this.$t('message.ucalcDuty3')],
                screenshots: ['uc2.png', 'uc1.png', 'uc3.png', 'uc4.png'],
            },

            {
                name: 'Mass Labeling',
                technologies: 'Node.js, Express, ejs, mongo, Docker, jQuery, Vue.js, Webpack, eslint, Bootstrap',
                description: 'message.mlDescription',
                githubLink: 'https://github.com/ukitgroup/mass-labeling',
                achievementsList: [
                    this.$t('message.mlDuty1'),
                    this.$t('message.mlDuty2'),
                    this.$t('message.mlDuty3'),
                    this.$t('message.mlDuty4'),
                    this.$t('message.mlDuty5'),
                ],
                screenshots: ['ml2.png', 'ml3.png', 'ml1.png', 'ml4.png'],
            },

            {
                name: 'uCoz ads',
                technologies: 'Javascript, Perl',
                description: 'message.uAdvDescription',
                duties: [this.$t('message.uAdvDuty1'), this.$t('message.uAdvDuty2'), this.$t('message.uAdvDuty3')],
            },
        ];
    }
}
</script>

<style scoped lang="less">
.experience {
    &__job-summary {
        display: flex;
    }

    &__job-counter {
        margin-right: 23px;
        line-height: 30px;
        color: #4c4c4c;
        font-size: 30px;
        font-weight: 400;
    }

    &__job-company-name {
        font-size: 24px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        text-transform: uppercase;
    }

    &__job-degree {
        font-size: 24px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        text-transform: uppercase;
        margin-top: 10px;
    }

    &__job-degree,
    &__job-period {
        font-size: 16px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        text-transform: uppercase;
    }

    &__job-description {
        margin-top: 50px;
    }
}
</style>
