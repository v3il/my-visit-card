<template>
    <div class="gallery">
        <div class="gallery__previews">
            <a
                v-for="(imageName, index) in imagesNames"
                :key="`mini-${imageName}`"
                class="gallery__preview-link"
                @click.prevent="openPreviewOverlay(index)"
            >
              <GalleryImage
                :image-name="imageName"
                :transformation="[{height:80, width: 170}]"
                class="gallery__preview-image"
              />
            </a>
        </div>

        <transition name="fade">
            <div class="gallery__overlay" v-show="overlayShown" @click.self="closeOverlay">
                <transition-group name="fade" tag="div" class="gallery__overlay-slide">
                    <div
                        key="list"
                        class="gallery__overlay-image-wrap"
                        @click.self="closeOverlay"
                    >
                      <GalleryImage
                        v-for="(imageName, index) in imagesNames"
                        :key="imageName"
                        :image-name="imageName"
                        v-show="currentImageIndex === index"
                        class="gallery__overlay-image"
                      />
                    </div>
                </transition-group>

                <button
                    ref="closeOverlayBtn"
                    aria-label="Close"
                    class="gallery__overlay-button gallery__overlay-button-close"
                    @click="closeOverlay"
                >
                    <i class="fa fa-times" />
                </button>

                <button
                    aria-label="Prev"
                    @click="showPrev"
                    class="gallery__overlay-button gallery__overlay-button-prev"
                >
                    <i class="fa fa-arrow-left" />
                </button>

                <button
                    aria-label="Next"
                    @click="showNext"
                    class="gallery__overlay-button gallery__overlay-button-next"
                >
                    <i class="fa fa-arrow-right" />
                </button>
            </div>
        </transition>
    </div>
</template>

<script>
import GalleryImage from '@/components/image/GalleryImage'

export default {
    name: 'ImagesGallery',

    props: {
        imagesNames: {
            type: Array,
            required: true
        }
    },

    components: {
        GalleryImage
    },

    data: () => ({
        currentImageIndex: 0,
        overlayShown: false,
        overlayRendered: false,
        focusedElBeforeOpen: null
    }),

    methods: {
        openPreviewOverlay (index) {
            this.overlayShown = true
            this.currentImageIndex = index

            this.overlayRendered = true

            this.$nextTick(() => {
                this.focusedElBeforeOpen = document.activeElement
                this.$refs.closeOverlayBtn.focus()
            })
        },

        closeOverlay () {
            this.overlayShown = false
            // eslint-disable-next-line no-unused-expressions
            this.focusedElBeforeOpen?.focus()
        },

        showNext () {
            let nextImageIndex = this.currentImageIndex + 1

            if (nextImageIndex > this.imagesNames.length - 1) {
                nextImageIndex = 0
            }

            this.currentImageIndex = nextImageIndex
        },

        showPrev () {
            let nextImageIndex = this.currentImageIndex - 1

            if (nextImageIndex < 0) {
                nextImageIndex = this.imagesNames.length - 1
            }

            this.currentImageIndex = nextImageIndex
        }
    },

    created () {
        const keyDownListener = event => {
            if (this.overlayShown) {
                const [LEFT_ARROW_CODE, ESC_CODE, RIGHT_ARROW_CODE] = [37, 27, 39]

                // Show prev image on left arrow hit
                if (event.which === LEFT_ARROW_CODE) {
                    this.showPrev()
                }

                // Show next image on right arrow hit
                if (event.which === RIGHT_ARROW_CODE) {
                    this.showNext()
                }

                // Close overlay on Escape hit
                if (event.which === ESC_CODE) {
                    this.closeOverlay()
                }
            }
        }

        window.addEventListener('keydown', keyDownListener)

        this.$once('hook:beforeDestroy', () => {
            window.removeEventListener('keydown', keyDownListener)
        })
    }
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
        border-radius: inherit;
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

    &__overlay-slide {
        width: 100%;
        height: 95vh;
        position: relative;
        background: rgba(0, 0, 0, 0.7);
        cursor: pointer;
        overflow-y: auto;
        min-height: 100%;

        padding: 12px 50px;

        @media screen and (max-width: @layoutChangeMaxWidth) {
            padding: 6px;
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
        background-color: #ffffff;
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
