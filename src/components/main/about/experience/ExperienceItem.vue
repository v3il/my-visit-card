<template>
    <div class="experience__job-item">
        <div class="experience__job-summary">
            <div class="experience__job-counter">
                0{{ index }}
            </div>

            <div class="experience__job-name">
                <h2 class="experience__job-company-name">
                    {{ experience.companyName }}
                </h2>

                <h3 class="experience__job-degree">
                    {{ experience.position }}
                </h3>

                <h3 class="experience__job-period">
                    Session: {{ experience.period }}
                </h3>
            </div>
        </div>

        <div class="experience__projects">
            <ProjectView
                v-for="project in experience.projects"
                :project="project"
                :key="project.name"
                show-name
                class="experience__project"
            />
        </div>
    </div>
</template>

<script setup>
import ProjectView from '@/components/basic/projectView/ProjectView.vue'

defineProps({
    index: {
        type: Number,
        required: true
    },

    experience: {
        type: Object,
        required: true
    }
})
</script>

<style scoped lang="less">
.experience {
    &__project:not(:last-child) {
        margin-bottom: 64px;
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

    &__projects {
        margin-top: 50px;
    }
}
</style>
