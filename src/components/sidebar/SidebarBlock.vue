<template>
    <aside class="sidebar">
        <div class="sidebar__fixed-container">
            <h2 class="sidebar__name-title">Dima Kit</h2>
            <h3 class="sidebar__specialization-title">Full-Stack Developer</h3>

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

        props: ["items"],

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
        width: 215px;
        padding: 63px 30px 0 30px;
        border-right: 1px solid #a7a7a7;
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
</style>