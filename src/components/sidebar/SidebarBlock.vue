<template>
    <aside class="sidebar" :class="{'sidebar--opened': sidebarOpened}">
        <div class="sidebar__fixed-container">
            <h2 class="sidebar__name-title">{{$t('message.name')}}</h2>
            <h3 class="sidebar__specialization-title">{{$t('message.profession')}}</h3>

            <ul class="sidebar__nav">
                <sidebar-link-item
                    v-for="linkItem in items"
                    :item="linkItem"
                    @scrollToInfoBlock="emitScrollToInfoBlock(linkItem)"
                ></sidebar-link-item>
            </ul>
        </div>
    </aside>
</template>

<script>
    import SidebarLinkItem from "@/components/sidebar/SidebarLinkItem.vue";

    export default {
        data() {
            return {

            }
        },

        props: ["items", "sidebarOpened"],

        components: {
            "sidebar-link-item": SidebarLinkItem
        },

        methods: {
            emitScrollToInfoBlock(linkItem) {
                this.$emit("scrollToInfoBlock", linkItem);
            }
        }
    }
</script>

<style>
    .sidebar {
        border-right: 1px solid #a7a7a7;
        transition: transform 0.6s ease-in-out;
        z-index: 2;
        position: fixed;
        background: #f3f3f3;
        bottom: 0;
        top: 0;
        padding: 63px 30px 0 30px;
        width: 215px;
    }

    .sidebar.sidebar--opened {
        transform: translateX(0);
    }

    .sidebar__fixed-container {
        position: fixed;
    }

    .sidebar__name-title {
        font-size: 24px;
        text-transform: uppercase;
        line-height: 30px;
        color: #333;
        font-weight: bold;
        font-family: Exo2,serif;
    }

    .sidebar__specialization-title {
        font-size: 16px;
        color: #3971ff;
        font-family: RobotoLight,serif;
        margin-top: 15px;
        line-height: 30px;
        font-weight: 300;
    }

    .sidebar__nav {
        margin-top: 50px;
        list-style: none;
    }

    @media screen and (max-width: 1150px) {
        .sidebar {
            transform: translateX(-100%);
        }
    }
</style>