<template>
    <div class="gallery">
        <div class="gallery__previews">
            <a
                href="javascript://"
                v-for="(imageSrc, index) in imagesNames"
                :key="`mini-${imageSrc}`"
                class="gallery__preview-link"
                @click="openPreviewOverlay(index)"
            >
                <lazy-load-image
                    class="gallery__preview-image"
                    :image-name="`mini-${imageSrc}`"
                    :alt="imageSrc"
                    :aria-label="imageSrc"
                />
            </a>
        </div>

        <transition name="fade">
            <div class="gallery__overlay" v-show="overlayShown">
                <div class="gallery__overlay-content" @click.self="closeOverlay">
                    <transition-group name="fade" tag="div" class="gallery__overlay-slide">
                        <div class="gallery__overlay-spinner-wrap" v-show="!allImagesLoaded" key="loader">
                            <i class="fa fa-spinner fa-spin gallery__overlay-spinner"></i>
                        </div>

                        <div v-show="allImagesLoaded" key="list" class="gallery__overlay-image-wrap" @click.self="closeOverlay">
                            <img
                                v-for="(imageData, index) in images"
                                :src="overlayRendered ? imageData.image.src : ''"
                                :alt="imageData.imageName"
                                :key="imageData.imageName"
                                @load="imageData.loaded = true"
                                v-show="currentImageIndex === index"
                                class="gallery__overlay-image"
                            >
                        </div>
                    </transition-group>
                </div>

                <button ref="closeOverlayBtn" aria-label="Close" class="gallery__overlay-button gallery__overlay-button-close" @click="closeOverlay">
                    <i class="fa fa-times"></i>
                </button>

                <button aria-label="Prev" @click="showPrev" class="gallery__overlay-button gallery__overlay-button-prev">
                    <i class="fa fa-arrow-left"></i>
                </button>

                <button aria-label="Next" @click="showNext" class="gallery__overlay-button gallery__overlay-button-next">
                    <i class="fa fa-arrow-right"></i>
                </button>
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
            return {
                images: [],

                currentImageIndex: 0,

                overlayShown: false,
                overlayRendered: false,

                focusedElBeforeOpen: null,
            }
        },

        computed: {
            allImagesLoaded() {
                return this.images.every(item => item.loaded);
            },
        },

        methods: {
            openPreviewOverlay(index) {
                this.overlayShown = true;
                this.currentImageIndex = index;

                this.overlayRendered = true;

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

                if(nextImageIndex > this.images.length - 1) {
                    nextImageIndex = 0;
                }

                this.currentImageIndex = nextImageIndex;
            },

            showPrev() {
                let nextImageIndex = this.currentImageIndex - 1;

                if(nextImageIndex < 0) {
                    nextImageIndex = this.images.length - 1;
                }

                this.currentImageIndex = nextImageIndex;
            },
        },

        created() {
            const images = require.context('@/assets/images/', false);

            this.images = this.imagesNames.map(imageName => ({
                imageName,
                image: images(`./${imageName}`),
                loaded: false,
            }));

            const keyUpListener = (event) => {
                if (!this.overlayShown) {
                    return;
                }

                const [ LEFT_ARROW_KEYCODE, ESC_KEYCODE, RIGHT_ARROW_KEYCODE ] = [ 37, 27, 39 ];

                // Show prev image on left arrow hit
                if(event.which === LEFT_ARROW_KEYCODE) {
                    this.showPrev();
                }

                // Show next image on right arrow hit
                if(event.which === RIGHT_ARROW_KEYCODE) {
                    this.showNext();
                }

                // Close overlay on Escape hit
                if(event.which === ESC_KEYCODE) {
                    this.closeOverlay();
                }
            };

            window.addEventListener('keyup', keyUpListener);

            this.$once('hook:beforeDestroy', () => {
                window.removeEventListener('keyup', keyUpListener);
            });
        },
    }
</script>

<style scoped lang="less">
    @buttonsSize: 40px;
    @layoutChangeMaxWidth: 750px;

    .gallery {
        // Mini previews
        &__previews {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-wrap: wrap;
        }

        &__preview-link {
            display: block;
            width: 170px;
            height: 80px;
            margin-right: 10px;
            margin-bottom: 10px;
            cursor: pointer;
            border-radius: 4px;
            border: 1px solid rgb(167, 167, 167);
        }

        &__preview-image {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        // Overlay
        &__overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9999;
            min-height: 100vh;
        }

        &__overlay-content {
            display: flex;
            align-items: center;
            padding: 12px;
            background: rgba(0, 0, 0, 0.7);
            cursor: pointer;
            overflow-y: auto;
            min-height: 100%;
        }

        &__overlay-slide {
            margin: 0 auto;
            width: calc(100% - 100px);
            height: 95vh;
            position: relative;

            @media screen and (max-width: @layoutChangeMaxWidth) {
                max-width: 100%;
                width: 100%;
            }
        }

        &__overlay-image-wrap {
            margin: 0 auto;
            max-width: 100%;
            height: 100%;
            max-height: 100%;
            display: flex;
            align-items: center;

            @media screen and (max-width: @layoutChangeMaxWidth) {
                width: 100%;
            }
        }

        &__overlay-image {
            display: block;
            max-height: 100%;
            max-width: 100%;
            width: auto;
            height: auto;
            margin: 0 auto;
        }

        &__overlay-spinner-wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            font-size: 50px;
            color: #eaebed;
        }

        // Overlay buttons
        &__overlay-button {
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
            border: 0;

            &:hover {
                opacity: 1;
            }
        }

        &__overlay-button-close {
            top: 5px;
            right: 5px;

            & i {
                vertical-align: text-top;
            }
        }

        &__overlay-button-prev {
            left: 5px;
            top: 50%;
            transform: translateY(-50%);

            @media screen and (max-width: @layoutChangeMaxWidth) {
                position: fixed;
                top: auto;
                transform: none;
                left: auto;
                bottom: 15px;
                right: 55px;
            }
        }

        &__overlay-button-next {
            right: 5px;
            top: 50%;
            transform: translateY(-50%);

            @media screen and (max-width: @layoutChangeMaxWidth) {
                position: fixed;
                top: auto;
                transform: none;
                left: auto;
                bottom: 15px;
                right: 5px;
            }
        }
    }
</style>