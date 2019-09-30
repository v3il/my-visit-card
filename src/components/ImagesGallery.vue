<template>
    <div>
        <div class="images-gallery">
            <a
                href="javascript://"
                v-for="(imageSrc, index) in imagesNames"
                :key="`mini-${imageSrc}`"
                class="gallery-item"
                @click="openPreviewOverlay(index)"
            >
                <lazy-load-image :image-name="`mini-${imageSrc}`" :alt="imageSrc" :aria-label="imageSrc" />
            </a>
        </div>

        <transition name="fade">
            <div class="preview-overlay" v-show="overlayShown">
                <div class="preview-overlay-content" @click.self="closeOverlay">
                    <lazy-load-image
                        :image-name="imageSrc"
                        :key="imageSrc"
                        v-for="(imageSrc, index) in imagesNames"
                        v-show="index === currentImageIndex"
                    ></lazy-load-image>
                </div>

                <a ref="closeOverlayBtn" aria-label="Close" href="javascript://"  class="close-overlay-btn" @click="closeOverlay">
                    <i class="fa fa-times"></i>
                </a>

                <a href="javascript://" aria-label="Prev" @click="showPrev" class="show-prev-btn">
                    <i class="fa fa-arrow-left"></i>
                </a>

                <a href="javascript://" aria-label="Next" @click="showNext" class="show-next-btn">
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
        </transition>
    </div>
</template>

<script>
    import LazyLoadImage from './LazyLoadImage';

    export default {
        name: "ImagesGallery",

        props: ['imagesNames'],

        components: {
            LazyLoadImage,
        },

        data() {
            const images = require.context('../assets/images/', false);

            const imagesSrc = this.imagesNames.map((name) => {
                return images(`./${name}`);
            });

            return {
                imagesSrc,

                overlayShown: false,
                currentImageSrc: '',

                focusedElBeforeOpen: null,
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

                this.$nextTick(() => {
                    this.focusedElBeforeOpen = document.activeElement;
                    this.$refs.closeOverlayBtn.focus();
                });
            },

            closeOverlay() {
                this.overlayShown = false;
                this.focusedElBeforeOpen.focus();
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

<style scoped lang="less">
    .images-gallery {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
    }

    .gallery-item {
        max-width: 170px;
        width: 100%;
        height: 80px;
        object-fit: cover;
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
        min-height: 100vh;
        /*overflow-y: scroll;*/
    }

    .preview-overlay-content {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        overflow-y: auto;
        min-height: 100%;
    }

    .preview-overlay-content img {
        /*height: auto;*/
        display: block;
        margin: 0 auto;
        max-width: calc(100% - 80px);
        height: 95vh;
        width: auto;
    }

    @media screen and (max-width: 850px) {
        .preview-overlay-content {
            padding: 6px;
        }
    }

    @buttonsSize: 40px;

    .show-prev-btn, .show-next-btn, .close-overlay-btn {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.3s;
        width: @buttonsSize;
        height: @buttonsSize;
        background-color: #FFFFFF;
        color: #242424;
        opacity: 0.7;
        cursor: pointer;
        border-radius: 3px;
        text-decoration: none;

        &:hover {
            opacity: 1;
        }
    }

    .show-prev-btn {
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
    }

    .show-next-btn {
        right: 5px;
        top: 50%;
    }

    .close-overlay-btn {
        top: 5px;
        right: 5px;

        & i {
            vertical-align: text-top;
        }
    }

    @media screen and (max-width: 380px) {
        .gallery-item {
            max-width: none;
        }
    }
</style>