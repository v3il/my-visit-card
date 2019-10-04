<template>
    <main class="about">
        <skills class="info-section" />
        <experience class="info-section" />
        <education class="info-section" />
    </main>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import Skills from '@/components/about/Skills';
import Experience from '@/components/about/Experience';
import Education from '@/components/about/Education';

@Component({
    components: {
        Skills,
        Experience,
        Education,
    },
})
export default class About extends Vue {}
</script>

<style scoped lang="less">
.about {
    .info-section:nth-child(2n) {
        background-color: #fff;
    }
}
</style>
