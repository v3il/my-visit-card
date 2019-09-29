<template>
    <div class="content__info-block info-block experience-info-block js-scroll-to-target" id="experience">
        <div class="info-block__title-block">
            <h2 class="info-block__title">{{this.$t('message.experience')}}</h2>
            <div class="info-block__title-separator">
                <div class="info-block__title-separator-line"></div>
                <div class="info-block__title-separator-ring"></div>
            </div>
        </div>

        <div class="experience-info-block__experience-list-block">
            <div class="experience-info-block__experience-info">
                <div class="experience-info-block__experience-summary">
                    <div class="experience-info-block__experience-counter">01</div>
                    <div class="experience-info-block__experience-name-block">
                        <h1 class="experience-info-block__experience-name">uCoz</h1>
                        <h3 class="experience-info-block__experience-degree">{{$t('message.frontEndDev')}}</h3>
                        <h3 class="experience-info-block__experience-period">{{$t('message.jobSession', {
                            since: 2015,
                            before: $t('message.now'),
                        })}}</h3>
                    </div>
                </div>

                <div class="experience-info-block__experience-description experience-description">
                    <project-view v-for="project in uCozProjects" :project="project" :key="project.name" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ImagesGallery from "@/components/ImagesGallery";
    import ProjectView from "@/components/ProjectView";

    export default {
        name: "Experience",

        components: {
            ImagesGallery,
            ProjectView,
        },

        data() {
            return {
                uCozProjects: [
                    {
                        name: this.$t('message.cpv2'),
                        technologies: 'Perl, jQuery, jQuery UI, Vue.js, Webpack, ES2015+, Less',
                        description: 'message.cpDescription',
                        duties: [
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
                        ],
                        screenshots: [
                            'cp1.png',
                            'cp2.png',
                            'cp3.png',
                            'cp4.png',
                            'cp5.png',
                            'cp6.png',
                        ]
                    },

                    {
                        name: this.$t('message.ucalc'),
                        technologies: 'jQuery, Gulp, Sass, Chartist.js, JSON',
                        description: 'message.uCalcDescription',
                        duties: [
                            this.$t('message.ucalcDuty1'),
                            this.$t('message.ucalcDuty2'),
                            this.$t('message.ucalcDuty3'),
                        ],
                        screenshots: [
                            'uc2.png',
                            'uc1.png',
                            'uc3.png',
                            'uc4.png',
                        ],
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
                        screenshots: [
                            'ml2.png',
                            'ml3.png',
                            'ml1.png',
                            'ml4.png',
                        ],
                    },

                    {
                        name: 'uCoz ads',
                        technologies: 'Javascript, Perl',
                        description: 'message.uAdvDescription',
                        duties: [
                            this.$t('message.uAdvDuty1'),
                            this.$t('message.uAdvDuty2'),
                            this.$t('message.uAdvDuty3'),
                        ],
                    },
                ],
            }
        },
    }
</script>

<style scoped>

</style>