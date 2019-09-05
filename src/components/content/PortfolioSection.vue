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
                        name: 'steam trade helper',
                        technologies: 'Vue.js, Firebase',
                        description: this.$t('message.sthDescription'),
                        githubLink: 'https://github.com/v3il/steam-trade-helper',
                        screenshots: [
                            'sth1.png',
                            'sth2.png',
                            'sth3.png',
                        ]
                    },
                    {
                        name: 'NewCP Guide',
                        technologies: 'Node.js, Express.js, MongoDB, Vue.js, vue-router, vue-cli, axios',
                        description: this.$t('message.newcpGuideDescription'),
                        githubLink: 'https://github.com/v3il/NewCPGuide',
                        screenshots: [
                            'ncpg1.png',
                            'ncpg2.png',
                            'ncpg3.png',
                            'ncpg4.png',
                        ]
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