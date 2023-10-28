<template>
    <div class="skills__technologies-list">
        <h3 class="article-title">
            {{ title }}
        </h3>

        <ul class="section-list">
            <li class="section-list__item" v-for="skill in skills" :key="skill">
                <div class="section-list__pointer"></div>

                <p class="list-item__text">
                    {{ skill }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },

    skills: {
        type: Array,
        required: true
    }
})
</script>

<style scoped lang="less">
.skills {
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
