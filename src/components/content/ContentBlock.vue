<template>
    <section class="content">
        <ContentHeader />

        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </section>
</template>

<script setup>
import ContentHeader from './ContentHeader.vue'
</script>

<style scoped lang="less">
.content {
    position: relative;
    margin-left: 280px;

    @media screen and (max-width: 1150px) {
        margin-left: 0;
    }
}
</style>
