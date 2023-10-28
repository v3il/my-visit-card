<template>
    <IKImage
        v-bind="$attrs"
        :path="imageName"
        :alt="imageName"
        :lqip="{ active: true }"
        :url-endpoint="urlEndpoint"
        loading="lazy"
    />
</template>

<script setup>
import { IKImage } from 'imagekit-vue3'
import { config } from '@/config'

defineProps({
    imageName: {
        required: true,
        type: String
    }
})

const urlEndpoint = config.IMAGEKIT_PATH_PREFIX
</script>
