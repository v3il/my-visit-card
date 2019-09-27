<template>
    <div>
        <div class="images-gallery">
            <lazy-load-image
                :image-name="`mini-${imageSrc}`"
                v-for="(imageSrc, index) in imagesNames"
                class="gallery-item"
                @click="openPreviewOverlay(index)"
                :key="`mini-${imageSrc}`"
            ></lazy-load-image>
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

                <div @click="showPrev" class="show-prev-btn">
                    <i class="fa fa-arrow-left"></i>
                </div>

                <div @click="showNext" class="show-next-btn">
                    <i class="fa fa-arrow-right"></i>
                </div>

                <div class="close-overlay-btn" @click="closeOverlay">
                    <i class="fa fa-times"></i>
                </div>
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
        overflow-y: scroll;
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
        height: auto;
        display: block;
        margin: 0 auto;
        max-width: calc(100% - 80px);
        /*min-width: 100%;*/
    }

    @media screen and (max-width: 850px) {
        .preview-overlay-content {
            padding: 6px;
        }
    }

    .show-prev-btn {
        position: fixed;
        left: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.3s;
        width: 30px;
        height: 30px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #FFFFFF;
        color: #242424;
        opacity: 0.7;
        cursor: pointer;
        border-radius: 3px;

        &:hover {
            opacity: 1;
        }
    }

    .show-next-btn {
        position: absolute;
        right: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.3s;
        width: 30px;
        height: 30px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #FFFFFF;
        color: #242424;
        opacity: 0.7;
        cursor: pointer;
        border-radius: 3px;

        &:hover {
            opacity: 1;
        }
    }

    .close-overlay-btn {
        cursor: pointer;
        transition: opacity 0.5s;
        text-align: center;
        position: absolute;
        top: 5px;
        right: 5px;
        width: 30px;
        height: 30px;
        background-color: #FFFFFF;
        color: #242424;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }

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