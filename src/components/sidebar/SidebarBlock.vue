<template>
    <aside class="sidebar" :class="{ 'sidebar--opened': sidebarOpened }">
        <div class="sidebar__avatar-block">
            <lazy-load-image class="sidebar__avatar" image-name="avatar.jpg" alt="avatar"></lazy-load-image>
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
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import SidebarLinkItem from '@/components/sidebar/SidebarLinkItem.vue';
import LazyLoadImage from '@/components/LazyLoadImage.vue';

const Props = Vue.extend({
    props: {
        items: {
            type: Array,
            required: true,
        },

        sidebarOpened: {
            type: Boolean,
            required: true,
        },
    },
});

@Component({
    components: {
        SidebarLinkItem,
        LazyLoadImage,
    },
})
export default class SidebarBlock extends Props {
    emitScrollToInfoBlock(linkItem) {
        this.$emit('scroll-to-info-block', linkItem);
    }

    emitSidebarClose() {
        this.$emit('toggle-sidebar');
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

        &--opened {
            transform: translateX(0);
            background: #f3f3f3;
        }
    }

    @media screen and (max-width: 600px) {
        padding-top: 25px;
    }
}
</style>
