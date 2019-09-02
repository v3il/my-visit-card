<template>
    <div class="project">
        <h1 class="project_name">
            {{project.name}}
        </h1>

        <p class="project_technologies">
            {{project.technologies}}
        </p>

        <h3 class="project_description-title">
            {{$t('message.projectDescription')}}
        </h3>

        <p class="project_description">
            {{project.description}}
        </p>

        <h3 class="project_duties">
            {{$t('message.duties')}}
        </h3>

        <ul class="project_duties-list">
            <li class="project_duty" v-for="duty in project.duties">
                <div class="project_duty-pointer"></div>

                <div class="project_duty-name">
                    {{duty}}
                </div>
            </li>
        </ul>

        <h3 class="project_achievements-title">
            {{$t('message.achievements')}}
        </h3>

        <table class="project_achievements">
            <thead class="project_achievements-head">
                <tr class="project_achievements-title-row">
                    <th class="project_achievements-task-title">{{$t('message.task')}}</th>
                    <th class="project_achievements-task-result">{{$t('message.result')}}</th>
                </tr>
            </thead>

            <tbody class="project_achievements-body">
                <tr class="project_achievements-item" v-for="achievement in project.achievements">
                    <td class="project_achievements-item-task">{{achievement.task}}</td>
                    <td class="project_achievements-item-result">{{achievement.result}}</td>
                </tr>
            </tbody>
        </table>

        <h3 class="project_gallery-title">
            {{$t('message.results')}}
        </h3>

        <p class="project_gallery-description">
            {{$t('message.imageGalleryDescription')}}
        </p>

        <images-gallery :imagesNames="newCpImages"></images-gallery>
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

</style>