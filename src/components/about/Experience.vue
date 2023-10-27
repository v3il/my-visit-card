<template>
    <section class="experience js-scroll-to-target">
        <Heading class="section-title" title="Work Experience"></Heading>

        <div class="experience__jobs-list">
            <ExperienceItem
                :index="1"
                company-name="Master of Code Global"
                position="Front-end developer"
                period="2020 - present"
                :projects="$options.mocProjects"
            ></ExperienceItem>

            <ExperienceItem
                :index="0"
                company-name="uCoz"
                position="Front-end developer"
                period="2015 - 2020"
                :projects="$options.mocProjects"
            ></ExperienceItem>
        </div>
    </section>
</template>

<script>
import ProjectView from '@/components/ProjectView'
import Heading from '@/components/basic/Heading.vue'
import ExperienceItem from '@/components/experience/ExperienceItem.vue'

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
        ProjectView,
        Heading,
        ExperienceItem
    }
}
</script>

<style scoped lang="less">
.section-title {
    margin-bottom: 100px;
}

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
