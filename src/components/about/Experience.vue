<template>
    <section class="experience js-scroll-to-target">
        <div class="experience__title-block">
            <h2 class="section-title">
                Work Experience
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
                        02
                    </div>

                    <div class="experience__job-name">
                        <h2 class="experience__job-company-name">
                            Master of Code Global
                        </h2>

                        <h3 class="experience__job-degree">
                            Front-end developer
                        </h3>

                        <h3 class="experience__job-period">
                            Session: 2020 - present
                        </h3>
                    </div>
                </div>

                <div class="experience__job-description">
                    <project-view v-for="project in $options.mocProjects" :project="project" :key="project.name"/>
                </div>
            </div>

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
                            Front-end developer
                        </h3>

                        <h3 class="experience__job-period">
                            Session: 2015 - 2020
                        </h3>
                    </div>
                </div>

                <div class="experience__job-description">
                    <ProjectView v-for="project in $options.uCozProjects" :project="project" :key="project.name"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProjectView from '@/components/ProjectView'

export default {
    name: 'Experience',

    uCozProjects: [
        {
            name: 'uCoz Control Panel 2.0',
            technologies: 'Perl, jQuery, jQuery UI, Vue.js, vue-router, vuex, Webpack, Less, Jest',
            description: 'This project is a site administrator’s panel, where he can edit the design of the site, add/remove/edit materials from a variety of ready-made modules, manage user accounts, change site settings etc.',
            screenshots: ['cp1.png', 'cp2.png', 'cp3.png', 'cp4.png', 'cp5.png', 'cp6.png']
        },

        {
            name: 'Statistics module for uCalc project',
            technologies: 'jQuery, Gulp, Sass, Chartist.js, JSON',
            description: 'uCalc is a constructor of interactive forms and calculators that can be easily integrated into your website. The statistics module allows the administrator to track and display in a convenient interactive form the number of displays of the calculator, the number of fill-in forms and other parameters, such as: gender, age or version of the users browser. It can also be used to integrate Yandex.Metrica and Google Analytics into a calculator in a couple of clicks.',
            screenshots: ['uc2.png', 'uc1.png', 'uc3.png', 'uc4.png']
        }
    ],

    mocProjects: [
        {
            name: 'Zipify Pages',
            technologies: 'Vue 2.0 / 3.0, Backbone, SCSS, Jest',
            description: 'Blog, Landing, Product and Home Pages drag & drop builder for Shopify stores'
        }
    ],

    components: {
        ProjectView
    }
}
</script>

<style scoped lang="less">
.experience {
    &__job-item:not(:last-child) {
        margin-bottom: 72px;
    }

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
