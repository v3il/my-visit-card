<template>
    <img :src="currentSrc" class="lazy-image" v-on="$listeners" :class="{'lazy-image--loaded': imageLoaded}">
</template>

<script>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    const Props = Vue.extend({
        props: {
            imageName: {
                type: String,
                required: true,
            },
        },
    });

    @Component()
    export default class LazyLoadImage extends Props {
        image = {};
        currentSrc = '';
        imageLoaded = false;

        created() {
            const images = require.context('@/assets/images/', false);
            this.image = images(`./${this.imageName}`);
            this.currentSrc = this.image.preSrc;
        }

        mounted() {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.imageLoaded = true;
                        this.currentSrc = this.image.src;
                        observer.disconnect();
                    }
                });
            });

            imageObserver.observe(this.$el);

            this.$once('hook:beforeDestroy', () => {
                imageObserver.disconnect();
            });
        }
    }
</script>

<style scoped lang="less">
    .lazy-image {
        display: block;
        filter: blur(2px);

        &--loaded {
            filter: blur(0.2px);
        }

        &_overlay {
            opacity: 0.5;
        }
    }

    .desktop .lazy-image {
        transition: filter 0.3s;
    }
</style>