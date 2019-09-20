<template>
    <img :src="currentSrc" alt="" :class="{ blurred: !imageLoaded }" v-on="$listeners">
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
        }
    }
</script>

<style scoped>
    img.blurred {
        filter: blur(10px);
    }
</style>