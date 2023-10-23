<template>
    <main class="about">
        <Skills class="info-section" />
        <Experience class="info-section" />
        <Education class="info-section" />
    </main>
</template>

<script setup>
import Skills from '@/components/about/Skills'
import Experience from '@/components/about/Experience'
import Education from '@/components/about/Education'
</script>

<style scoped lang="less">
.about {
    .info-section:nth-child(2n) {
        background-color: #fff;
    }
}
</style>
