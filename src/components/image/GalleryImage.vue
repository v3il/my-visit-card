<template>
    <IKImage
        v-bind="$attrs"
        :path="imageName"
        :alt="imageName"
        :lqip="{ active: true }"
        :url-endpoint="$options.urlEndpoint"
        loading="lazy"
    />
</template>

<script>
import { IKImage } from 'imagekitio-vue'
import { config } from '@/config'

export default {
    name: 'GalleryImage',

    urlEndpoint: config.IMAGEKIT_PATH_PREFIX,

    props: {
        imageName: {
            required: true,
            type: String
        }
    },

    components: {
        IKImage
    }
}
</script>
