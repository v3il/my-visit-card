<template>
    <main class="about">
        <skills class="about__section" />
        <experience class="about__section" />
        <education class="about__section" />
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
    &__section {
        padding: 100px 120px 100px 95px;

        &:nth-child(2n) {
            background-color: #fff;
        }
    }

    @media screen and (max-width: 850px) {
        &__section {
            padding: 50px;
        }
    }

    @media screen and (max-width: 600px) {
        &__section {
            padding: 25px;
        }
    }
}
</style>
