<template>
    <section class="education js-scroll-to-target">
        <div class="education__title-block">
            <h2 class="section-title">
                {{ this.$t('message.education') }}
            </h2>

            <div class="section-title__separator">
                <div class="section-title__separator-line"></div>
                <div class="section-title__separator-ring"></div>
            </div>
        </div>

        <ul class="education__education-list">
            <li class="education__education-item" v-for="(educationPlace, index) in educationPlaces" :key="index">
                <div class="education__education-data">
                    <div class="education__education-counter">0{{ index + 1 }}</div>

                    <div class="education__education-info">
                        <h2 class="education__education-place">
                            {{ educationPlace.name }}
                        </h2>

                        <h3 class="education__education-degree">
                            {{ educationPlace.degree }}
                        </h3>

                        <p class="education__education-period">
                            {{ educationPlace.session }}
                        </p>
                    </div>
                </div>

                <div class="education__education-description">
                    {{ educationPlace.description }}
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

export default @Component() class Education extends Vue {
    created () {
        this.educationPlaces = [
            {
                name: this.$t('message.university'),
                degree: this.$t('message.phd'),
                session: this.$t('message.jobSession', [2017, 2021]),
                description: this.$t('message.phdGraduationWorkTopic')
            },
            {
                name: this.$t('message.university'),
                degree: this.$t('message.master'),
                session: this.$t('message.jobSession', [2016, 2017]),
                description: this.$t('message.masterGraduationWorkTopic')
            },
            {
                name: this.$t('message.university'),
                degree: this.$t('message.bachelor'),
                session: this.$t('message.jobSession', [2014, 2016]),
                description: this.$t('message.bachelorGraduationWorkTopic')
            },
            {
                name: this.$t('message.college'),
                degree: this.$t('message.juniorSpecialist'),
                session: this.$t('message.jobSession', [2010, 2014]),
                description: this.$t('message.juniorSpecialistGraduationWorkTopic')
            }
        ]
    }
}
</script>

<style scoped lang="less">
.education {
    &__education-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    &__education-item {
        list-style: none;
        flex-basis: calc(50% - 19px);
        margin-bottom: 100px;

        &:nth-last-child(-n + 2) {
            margin-bottom: 0;
        }
    }

    &__education-data {
        display: flex;
    }

    &__education-counter {
        margin-right: 23px;
        line-height: 30px;
        color: #4c4c4c;
        font-size: 30px;
        font-weight: 400;
    }

    &__education-place {
        font-size: 24px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        text-transform: uppercase;
    }

    &__education-degree {
        margin-top: 10px;
    }

    &__education-degree,
    &__education-period {
        font-size: 16px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        text-transform: uppercase;
    }

    &__education-description {
        font-size: 16px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        margin-top: 50px;
    }

    @media screen and (max-width: 850px) {
        &__education-item {
            flex-basis: 100%;
            margin-bottom: 50px;

            &:nth-last-child(-n + 2) {
                margin-bottom: 50px;
            }
        }

        &__education-place {
            min-height: 0;
        }
    }
}

// For beautiful render of education place name in Ru locale
.ru .education__education-place {
    min-height: 120px;
}
</style>
