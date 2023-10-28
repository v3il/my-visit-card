<template>
    <ul class="project-technologies">
        <li v-for="technology in technologies" :key="technology" class="project-technologies__item">
            {{ technology }}
        </li>
    </ul>
</template>

<script setup>
defineProps({
    technologies: {
        type: Array,
        required: true
    }
})
</script>

<style scoped lang="less">
.project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
}

.project-technologies__item {
    background-color: var(--primary);
    border-radius: 16px;
    color: white;
    padding: 0 16px;
    font-size: 12px;
}
</style>
