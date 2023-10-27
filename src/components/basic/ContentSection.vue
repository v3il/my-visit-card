<template>
    <section class="content-section js-scroll-to-target" :class="classes">
        <Heading class="content-section__title" :title="title" />
        <slot />
    </section>
</template>

<script setup>
import Heading from '@/components/basic/Heading.vue'
import { computed } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },

    white: {
        type: Boolean,
        required: false,
        default: false
    }
})

const classes = computed(() => ({
    'content-section--white': props.white
}))
</script>

<style scoped lang="less">
.content-section {
    padding: 100px 120px 100px 95px;

    @media screen and (max-width: 850px) {
        padding: 50px;
    }

    @media screen and (max-width: 600px) {
        padding: 25px;
    }
}

.content-section--white {
    background-color: #fff;
}

.content-section__title {
    margin-bottom: 100px;
}
</style>
