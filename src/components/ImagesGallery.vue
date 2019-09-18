<template>
    <div>
        <div class="images-gallery">
            <img
                v-for="(imageSrc, index) in imagesMiniSrc"
                :src="imageSrc"
                alt=""
                class="gallery-item"
                @click="openPreviewOverlay(index)"
            >
        </div>

        <div class="preview-overlay" v-if="overlayShown">
            <div class="preview-overlay-header">
                <div class="overlay-header-counters">
                    <i @click="showPrev()" class="fa fa-arrow-left show-prev-btn"></i>

                    {{currentImageIndex + 1}} / {{imagesSrc.length}}

                    <i @click="showNext()" class="fa fa-arrow-right show-next-btn"></i>
                </div>

                <div class="overlay-header-close-btn-block">
                    <i @click="closeOverlay()" class="fa fa-times close-overlay-btn"></i>
                </div>
            </div>

            <div class="preview-overlay-content" @click.self="closeOverlay">
                <img :src="currentImageSrc" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ImagesGallery",

        props: ['imagesNames'],

        data() {
            const images = require.context('../assets/images/', false);

            const imagesSrc = this.imagesNames.map((name) => {
                return images(`./${name}`);
            });

            const imagesMini = require.context('../assets/images/mini/', false);

            const imagesMiniSrc = this.imagesNames.map((name) => {
                return imagesMini(`./${name}`);
            });

            return {
                imagesSrc,
                imagesMiniSrc,

                overlayShown: false,
                currentImageSrc: '',
            }
        },

        computed: {
            currentImageIndex() {
                return this.imagesSrc.indexOf(this.currentImageSrc);
            },
        },

        methods: {
            openPreviewOverlay(index) {
                this.overlayShown = true;
                this.currentImageSrc = this.imagesSrc[index];
            },

            closeOverlay() {
                this.overlayShown = false;
            },

            showNext() {
                let nextImageIndex = this.currentImageIndex + 1;

                if(nextImageIndex > this.imagesSrc.length - 1) {
                    nextImageIndex = 0;
                }

                this.currentImageSrc = this.imagesSrc[nextImageIndex];
            },

            showPrev() {
                let nextImageIndex = this.currentImageIndex - 1;

                if(nextImageIndex < 0) {
                    nextImageIndex = this.imagesSrc.length - 1;
                }

                this.currentImageSrc = this.imagesSrc[nextImageIndex];
            },

            _keyUpListener(event) {
                if(!this.overlayShown) {
                    return;
                }

                // Show prev image on left arrow hit
                if(event.keyCode === 37) {
                    this.showPrev();
                }

                // Show next image on right arrow hit
                if(event.keyCode === 39) {
                    this.showNext();
                }

                // Close overlay on Escape hit
                if(event.keyCode === 27) {
                    this.closeOverlay();
                }
            }
        },

        created() {
            window.addEventListener('keyup', this._keyUpListener);
        },

        beforeDestroy() {
            window.removeEventListener('keyup', this._keyUpListener);
        }
    }
</script>

<style scoped>
    .images-gallery {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
    }

    .gallery-item {
        max-width: 170px;
        width: 100%;
        display: block;
        margin-right: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        border-radius: 4px;
        border: 1px solid rgba(76, 76, 76, 0.33);
    }

    .preview-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
    }

    .preview-overlay-header {
        height: 50px;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 24px;
        color: #fff;
    }

    .preview-overlay-content {
        height: calc(100vh - 50px);
        display: flex;
        align-items: center;
        padding: 0 24px;
        background: #121212;
        cursor: pointer;
    }

    .preview-overlay-content img {
        height: auto;
        display: block;
        margin: 0 auto;
        max-width: 90%;
    }

    .overlay-header-counters {
        margin: auto;
    }

    .show-prev-btn {
        margin-right: 12px;
    }

    .show-next-btn {
        margin-left: 12px;
    }

    .close-overlay-btn, .show-next-btn, .show-prev-btn {
        cursor: pointer;
        transition: color 0.5s;
        line-height: 50px;
        width: 50px;
        text-align: center;
    }

    .close-overlay-btn:hover, .show-next-btn:hover, .show-prev-btn:hover {
        color: #4c4c4c;
    }

    .overlay-header-close-btn-block {
        position: absolute;
        right: 5px;
    }

    @media screen and (max-width: 380px) {
        .gallery-item {
            max-width: none;
        }
    }

    @media screen and (max-width: 600px) {
        .preview-overlay-content img {
            width: 95%;
        }
    }
</style>