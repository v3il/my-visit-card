<template>
    <div class="project" :class="{ 'js-scroll-to-target': project.id }">
        <h1 class="project_name-wrapper">
            <span class="project_name">{{project.name}}</span>

            <a
                :href="project.githubLink"
                v-if="project.githubLink"
                class="project_github-link"
                target="_blank"
                :aria-label="`${project.name}-code`"
                v-tooltip="{
                    placement: 'top-center',
                    content: $t('message.githubLink'),
                }"
            >
                <i class="fa fa-github"></i>
            </a>

            <a
                :href="project.demoLink"
                v-if="project.demoLink"
                class="project_demo-link"
                target="_blank"
                :aria-label="`${project.name}-demo`"
                v-tooltip="{
                    placement: 'top-center',
                    content: $t('message.demoLink'),
                }"
            >
                <i class="fa fa-eye"></i>
            </a>
        </h1>

        <p class="project_technologies">
            {{project.technologies}}
        </p>

        <h3 class="project_description-title">
            {{$t('message.projectDescription')}}
        </h3>

        <p class="project_description" v-html="$t(project.description)"></p>

        <h3 class="project_duties" v-if="project.duties">
            {{$t('message.duties')}}
        </h3>

        <ul class="project_duties-list" v-if="project.duties">
            <li class="project_duty" v-for="duty in project.duties">
                <div class="project_duty-pointer"></div>

                <div class="project_duty-name">
                    {{duty}}
                </div>
            </li>
        </ul>

        <h3 class="project_achievements-title" v-if="project.achievements || project.achievementsList">
            {{$t('message.achievements')}}
        </h3>

        <ul class="project_duties-list" v-if="project.achievementsList">
            <li class="project_duty" v-for="duty in project.achievementsList">
                <div class="project_duty-pointer"></div>

                <div class="project_duty-name">
                    {{duty}}
                </div>
            </li>
        </ul>

        <table class="project_achievements" v-if="project.achievements">
            <thead class="project_achievements-head">
                <tr class="project_achievements-title-row">
                    <th class="project_achievements-item-task">{{$t('message.task')}}</th>
                    <th class="project_achievements-item-result">{{$t('message.result')}}</th>
                </tr>
            </thead>

            <tbody class="project_achievements-body">
                <tr class="project_achievements-item" v-for="achievement in project.achievements">
                    <td class="project_achievements-item-task">{{achievement.task}}</td>
                    <td class="project_achievements-item-result">{{achievement.result}}</td>
                </tr>
            </tbody>
        </table>

        <h3 class="project_gallery-title" v-if="project.screenshots">
            {{$t('message.results')}}
        </h3>

        <p class="project_gallery-description" v-if="project.screenshots">
            {{$t('message.imageGalleryDescription')}}
        </p>

        <images-gallery :imagesNames="project.screenshots" v-if="project.screenshots"></images-gallery>
    </div>
</template>

<script>
    import ImagesGallery from '@/components/ImagesGallery';

    export default {
        name: "ProjectView",

        props: {
            project: {
                type: Object,
                required: true,
            }
        },

        components: {
            ImagesGallery,
        }
    }
</script>

<style scoped>
    .project {
        margin-bottom: 24px;
        padding-top: 12px;
    }

    .project_name-wrapper {
        line-height: 30px;
        color: #3971ff;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 18px;
        font-size: 20px;
        display: flex;
        align-items: center;
    }

    .project_github-link, .project_demo-link {
        font-size: 24px;
        color: #4c4c4c;
        transition: color 0.5s;
        margin-left: 16px;
    }

    .project_demo-link {
        margin-left: 12px;
    }

    .project_github-link:hover, .project_demo-link:hover {
        color: #3971ff;
    }

    .project_technologies {
        font-weight: bold;
        margin-bottom: 18px;
    }

    .project_description {
        margin-bottom: 18px;
    }

    .project_description-title, .project_duties, .project_achievements-title, .project_gallery-title {
        text-decoration: none;
        text-transform: uppercase;
        line-height: 30px;
        font-size: 16px;
        color: #4c4c4c;
        font-family: RobotoMedium;
        font-weight: 500;
        margin-bottom: 12px;
        margin-top: 30px;
    }

    .project_gallery-title {
        margin-bottom: 0;
    }

    .project_duties-list {
        list-style: none;
    }

    .project_duty {
        display: flex;
        align-items: flex-start;
        padding: 3px 0;
    }

    .project_duty-pointer {
        min-width: 10px;
        height: 2px;
        background-color: #3971ff;
        margin-right: 8px;
        margin-top: 13px;
    }

    .project_achievements {
        text-align: left;
        border-collapse: collapse;
        width: 100%;
    }

    .project_achievements-item-task,
    .project_achievements-item-result {
        border-bottom: 1px solid #a7a7a7;
        padding: 6px 0;
        vertical-align: top;
    }

    .project_achievements-item-task {
        width: 50%;
    }

    .project_gallery-description {
        margin-bottom: 18px;
        opacity: 0.8;
        font-size: smaller;
    }
</style>