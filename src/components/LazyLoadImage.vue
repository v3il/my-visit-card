<template>
    <img :src="currentSrc" class="lazy-image" v-on="$listeners" v-if="imageLoaded">
    <div v-else :style="{ backgroundColor: image.palette[0] }" class="lazy-image_overlay"></div>
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

        &_overlay {
            opacity: 0.5;
        }
    }
</style>