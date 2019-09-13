<template>
    <div class="content__info-block info-block education-info-block js-scroll-to-target" id="education">
        <div class="info-block__title-block">
            <h2 class="info-block__title">{{this.$t('message.education')}}</h2>
            <div class="info-block__title-separator">
                <div class="info-block__title-separator-line"></div>
                <div class="info-block__title-separator-ring"></div>
            </div>
        </div>

        <div class="education-info-block__educations-info">
            <div
                class="education-info-block__education-info"
                v-for="(educationPlace, index) in educationPlaces"
            >
                <div class="education-info-block__education-summary">
                    <div class="education-info-block__education-counter">0{{index + 1}}</div>
                    <div class="education-info-block__education-name-block">
                        <h1 class="education-info-block__education-name" v-html="educationPlace.name"></h1>
                        <h3 class="education-info-block__education-degree">{{educationPlace.degree}}</h3>
                        <h3 class="education-info-block__education-period">{{educationPlace.session}}</h3>
                    </div>
                </div>

                <div class="education-info-block__education-description">
                    {{educationPlace.description}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Education",

        data() {
            return {
                educationPlaces: [
                    {
                        name: this.$t('message.university'),
                        degree: this.$t('message.phd'),
                        session: this.$t('message.jobSession', {
                            since: 2017,
                            before: 2021,
                        }),
                        description: this.$t('message.phdGraduationWorkTopic')
                    },
                    {
                        name: this.$t('message.university'),
                        degree: this.$t('message.master'),
                        session: this.$t('message.jobSession', {
                            since: 2016,
                            before: 2017,
                        }),
                        description: this.$t('message.masterGraduationWorkTopic')
                    },
                    {
                        name: this.$t('message.university'),
                        degree: this.$t('message.bachelor'),
                        session: this.$t('message.jobSession', {
                            since: 2014,
                            before: 2016,
                        }),
                        description: this.$t('message.bachelorGraduationWorkTopic')
                    },
                    {
                        name: this.$t('message.college'),
                        degree: this.$t('message.juniorSpecialist'),
                        session: this.$t('message.jobSession', {
                            since: 2010,
                            before: 2014,
                        }),
                        description: this.$t('message.juniorSpecialistGraduationWorkTopic')
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>