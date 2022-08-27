<template>
    <aside class="sidebar" :class="{ 'sidebar--opened': sidebarOpened }">
        <div class="sidebar__avatar-block">
          <GalleryImage imageName="avatar.jpg" class="sidebar__avatar" />
        </div>

        <nav class="sidebar__fixed-container">
            <ul class="sidebar__nav">
                <sidebar-link-item
                    v-for="linkItem in items"
                    :item="linkItem"
                    :key="linkItem.name"
                    @scrollToInfoBlock="emitScrollToInfoBlock(linkItem)"
                ></sidebar-link-item>
            </ul>
        </nav>
    </aside>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import SidebarLinkItem from '@/components/sidebar/SidebarLinkItem.vue'
import GalleryImage from '@/components/image/GalleryImage'

const Props = Vue.extend({
    props: {
        items: {
            type: Array,
            required: true
        },

        sidebarOpened: {
            type: Boolean,
            required: true
        }
    },

    components: {
        GalleryImage
    }
})

export default @Component({
    components: {
        SidebarLinkItem
    }
}) class SidebarBlock extends Props {
    emitScrollToInfoBlock (linkItem) {
        this.$emit('scroll-to-info-block', linkItem)
    }
}
</script>

<style scoped lang="less">
.sidebar {
    border-right: 1px solid #a7a7a7;
    z-index: 2;
    position: fixed;
    background: #f3f3f3;
    bottom: 0;
    top: 0;
    padding: 63px 35px 0;
    width: 280px;
    max-height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &__avatar-block {
        width: 200px;
        height: 200px;
        margin: 0 auto;
    }

    &__avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid #3971ff;
        display: block;
    }

    &__nav {
        margin-top: 50px;
        list-style: none;
    }

    @media screen and (max-width: 1150px) {
        z-index: 5;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
        padding-top: 25px;

        &--opened {
            transform: translateX(0);
            background: #f3f3f3;
        }

        &__avatar-block {
            width: 130px;
            height: 130px;
            margin: 0 auto;
        }

        &__nav {
            margin-top: 20px;
        }
    }
}
</style>
