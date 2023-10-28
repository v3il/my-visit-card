<template>
    <div class="header-description">
        <p class="header-description__paragraph">
            I am {{age}}. I like music, traveling, cooking, video games and programming.
        </p>

        <p class="header-description__paragraph">
            I love JavaScript with all its oddities :)
        </p>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const age = computed(() => {
    const now = new Date()
    const age = now.getFullYear() - 1994

    return now.getMonth() === 11 && now.getDate() >= 28 ? age : age - 1
})
</script>

<style scoped lang="less">
.header-description__paragraph {
    line-height: 30px;
    font-weight: 400;
    color: var(--color);
    font-size: 16px;

    &:not(:last-child) {
        margin-bottom: 6px;
    }
}
</style>
