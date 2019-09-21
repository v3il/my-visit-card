<template>
    <img :src="currentSrc" class="lazy-image" :class="{ 'lazy-image--blurred': !imageLoaded }" v-on="$listeners">
</template>

<script>
    export default {
        name: "LazyLoadImage",

        props: {
            imageName: {
                type: String,
                required: true,
            },
        },

        data() {
            return {
                image: {},
                currentSrc: '',
                imageLoaded: false,
            }
        },

        created() {
            const images = require.context('@/assets/images/', false);
            this.image = images(`./${this.imageName}`);

            this.currentSrc = this.image.preSrc;
        },

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
        },
    }
</script>

<style scoped>
    .lazy-image {
        /* https://stackoverflow.com/a/47964779 */
        filter: blur(0.2px);
        display: block;
        overflow: hidden;
    }

    .lazy-image--blurred {
        filter: blur(10px);
    }

    .desktop .lazy-image {
        transition: filter 0.3s;
    }
</style>