<template>
    <aside class="sidebar" :class="{ 'sidebar--opened': sidebarOpened }">
        <nav class="sidebar__fixed-container">
            <ul class="sidebar__nav">
                <SidebarLinkItem
                    v-for="linkItem in items"
                    :item="linkItem"
                    :key="linkItem.name"
                    @scrollToInfoBlock="emitScrollToInfoBlock"
                ></SidebarLinkItem>
            </ul>
        </nav>
    </aside>
</template>

<script>
import SidebarLinkItem from '@/components/sidebar/SidebarLinkItem.vue'

export default {
    name: 'SidebarBlock',

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
        SidebarLinkItem
    },

    methods: {
        emitScrollToInfoBlock (linkItem) {
            this.$emit('scroll-to-info-block', linkItem)
        }
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

    &__nav {
        //margin-top: 50px;
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

        &__nav {
            margin-top: 20px;
        }
    }
}
</style>
