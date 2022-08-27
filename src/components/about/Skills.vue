<template>
    <section class="skills js-scroll-to-target">
        <div class="skills__title-block">
            <h2 class="section-title">
                Hard skills
            </h2>

            <div class="section-title__separator">
                <div class="section-title__separator-line"></div>
                <div class="section-title__separator-ring"></div>
            </div>
        </div>

        <div class="skills__technologies">
            <div
                class="skills__technologies-list"
                v-for="technologiesData in [$options.frontEndTechs, $options.backEndTechs]"
                :key="technologiesData.name"
            >
                <h3 class="article-title">
                    {{ technologiesData.title }}
                </h3>

                <ul class="section-list">
                    <li class="section-list__item" v-for="tech in technologiesData.technologies" :key="tech.name">
                        <div class="section-list__pointer"></div>

                        <p class="list-item__text">
                            {{ tech.name }}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Skills',

    frontEndTechs: {
        title: 'Front-end technologies',
        technologies: [
            { name: 'HTML5' },
            { name: 'CSS3, Less, SCSS' },
            { name: 'Vue.js 2 / Vue.js 3' },
            { name: 'Nuxt.js' },
            { name: 'Jest' }
        ]
    },

    backEndTechs: {
        title: 'Back-end technologies',
        technologies: [{ name: 'Node.js' }, { name: 'Express.js' }, { name: 'Postgres' }, { name: 'Objection.js' }]
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
