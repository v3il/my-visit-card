<template>
    <div class="skills">
        <h3 class="skills__title">
            {{ title }}
        </h3>

        <ul class="skills__list">
            <li class="skills__list-item" v-for="skill in skills" :key="skill">
                {{ skill }}
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
    flex-basis: 350px;
}

.skills__title {
    text-decoration: none;
    text-transform: uppercase;
    line-height: 30px;
    font-size: 16px;
    color: var(--color);
    font-weight: 500;
    margin-bottom: 12px;
}

.skills__list {
    list-style: none;
}

.skills__list-item {
    position: relative;
    padding: 4px 24px;

    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 16px;
        height: 2px;
        background-color: var(--primary);
    }
}
</style>
