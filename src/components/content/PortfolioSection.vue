<template>
    <div class="portfolio">
        <project-view
            class="portfolio_project-item"
            v-for="project in projects"
            :project="project"
            :key="project.name"
        ></project-view>
    </div>
</template>

<script>
    import "../../vendor/popped-element/Tooltip";

    import ProjectView from '@/components/ProjectView';

    export default {
        components: {
            ProjectView
        },

        data() {
            return {
                projects: [
                    {
                        name: 'NewCP Guide',
                        technologies: 'Node.js, Express.js, MongoDB, Vue.js, vue-router, vue-cli, axios',
                        description: this.$t('message.newcpGuideDescription'),
                        githubLink: 'https://github.com/v3il/NewCPGuide',
                    },
                ]
            }
        }
    }
</script>

<style>
    .portfolio {
        padding: 100px 120px 100px 95px;
    }
</style>