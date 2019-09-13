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

    import projects from '../../projects';

    export default {
        components: {
            ProjectView
        },

        data() {
            return {
                projects,
            }
        }
    }
</script>

<style>
    .portfolio {
        padding: 100px 120px 100px 95px;
    }

    @media screen and (max-width: 850px) {
        .portfolio {
            padding: 50px;
        }
    }

    @media screen and (max-width: 450px) {
        .portfolio {
            padding: 25px;
        }
    }
</style>