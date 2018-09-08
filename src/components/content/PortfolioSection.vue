<template>
    <div class="content__section">
        <div
            v-for="project in projects"
            class="content__info-block info-block project-info-block"
            :id="project.id"
        >
            <div class="info-block__title-block">
                <h2 class="info-block__title">
                    {{project.name}}

                    <a
                        v-if="project.githubLink"
                        :href="project.githubLink"
                        target="_blank"
                        class="project-info-block__project-link"
                        title="GitHub repository"
                    >
                        <i class="fa fa-github project-info-block__project-icon"></i>
                    </a>

                    <a
                        v-if="project.previewLink"
                        :href="project.previewLink"
                        target="_blank"
                        class="project-info-block__project-link"
                        title="Live demo"
                    >
                        <i class="fa fa-eye project-info-block__project-icon"></i>
                    </a>
                </h2>
                <div class="info-block__title-separator">
                    <div class="info-block__title-separator-line"></div>
                    <div class="info-block__title-separator-ring"></div>
                </div>
            </div>

            <div class="project-info-block__project-description">
                <div class="project-info-block__technologies-block">
                    <h3 class="default-title project-info-block__technologies-title">
                        Technologies
                    </h3>

                    <p class="experience-info-block__project-technologies">
                        {{project.technologies.join(', ')}}
                    </p>
                </div>

                <div class="project-info-block__description-block">
                    <h3 class="project-info-block__description-title default-title">
                        Description
                    </h3>

                    <p v-html="project.description"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import projects from '../../projects';
    import Tooltip from "../../vendor/popped-element/Tooltip";

    export default {
        data() {
            return {
                projects,
            }
        }
    }
</script>

<style>
    .content__info-block {
        padding: 100px 120px 100px 95px;
    }

    .content__info-block:nth-child(2n) {
        background-color: #fff;
    }

    .info-block__title {
        font-size: 30px;
        text-transform: uppercase;
        font-family: Exo2SemiBold;
        font-weight: 400;
        color: #333;
    }

    .info-block__title-separator {
        margin-top: 25px;
        display: flex;
        align-items: center;
        margin-bottom: 100px;
    }

    .info-block__title-separator-line {
        background-color: #3971ff;
        height: 2px;
        width: 65px;
    }

    .info-block__title-separator-ring {
        background-color: transparent;
        border: 1px solid #3971ff;
        border-radius: 50%;
        width: 5px;
        height: 5px;
        margin-left: -1px;
    }

    .default-title {
        text-decoration: none;
        text-transform: uppercase;
        line-height: 30px;
        font-size: 16px;
        color: #4c4c4c;
        font-family: RobotoMedium;
        font-weight: 500;
        margin-bottom: 12px;
    }

    .project-info-block__description-block {
        margin-top: 30px;
    }

    .project-info-block__project-icon {
        font-size: 24px;
        color: #4c4c4c;
        transition: color 0.5s;
    }

    .project-info-block__project-icon:hover {
        color: #3971ff;
    }

    .project-info-block__project-link {
        display: inline-block;
        margin-left: 12px;
    }

    .project-info-block__project-link:first-child {
        margin-left: 24px;
    }

    .experience-info-block__project-technologies {
        font-weight: bold;
    }

    @media screen and (max-width: 850px) {
        .content__info-block {
            padding: 50px;
        }
    }

    @media screen and (max-width: 450px) {
        .content__info-block {
            padding: 25px;
        }
    }
</style>