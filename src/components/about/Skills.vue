<template>
    <section class="skills js-scroll-to-target">
        <div class="skills__title-block">
            <h2 class="section-title">
                {{ this.$t('message.skillsTitle') }}
            </h2>

            <div class="section-title__separator">
                <div class="section-title__separator-line"></div>
                <div class="section-title__separator-ring"></div>
            </div>
        </div>

        <div class="skills__technologies">
            <div
                class="skills__technologies-list"
                v-for="technologiesData in [frontEndTechs, backEndTechs]"
                :key="technologiesData.name"
            >
                <h3 class="article-title">
                    {{ $t(technologiesData.title) }}
                </h3>

                <ul class="section-list">
                    <li class="section-list__item" v-for="tech in technologiesData.technologies" :key="tech.name">
                        <div class="section-list__pointer"></div>

                        <div class="list-item__text">
                            {{ tech.name }}

                            <ul class="section-list" v-if="tech.children">
                                <li class="section-list__item" v-for="childTech in tech.children" :key="childTech.name">
                                    <div class="section-list__pointer"></div>

                                    <div class="list-item__text">
                                        {{ childTech.name }}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

export default @Component() class Skills extends Vue {
    created () {
        this.frontEndTechs = {
            title: 'message.frontEndTechs',
            technologies: [
                {
                    name: 'JavaScript',
                    children: [{ name: 'Vue.js 2 / Vue.js 3' }, { name: 'Nuxt.js' }, { name: 'Jest' }]
                },
                { name: 'HTML5' },
                { name: 'CSS3, Less, SCSS' }
            ]
        }

        this.backEndTechs = {
            title: 'message.backEndTechs',
            technologies: [{ name: 'Node.js' }, { name: 'Express.js' }, { name: 'Postgres' }, { name: 'Objection.js' }]
        }
    }
}
</script>

<style scoped lang="less">
.skills {
    &__technologies {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    &__technologies-list {
        flex-basis: calc(50% - 15px);
    }

    @media screen and (max-width: 750px) {
        &__technologies-list {
            flex-basis: 100%;

            &:last-child {
                margin-top: 18px;
            }
        }
    }
}
</style>
