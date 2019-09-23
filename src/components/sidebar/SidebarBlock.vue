<template>
    <aside class="sidebar" :class="{'sidebar--opened': sidebarOpened}">
        <div class="sidebar__fixed-container">
            <h2 class="sidebar__name-title">{{$t('message.name')}}</h2>
            <h3 class="sidebar__specialization-title">{{$t('message.specialization')}}</h3>

            <ul class="sidebar__nav">
                <sidebar-link-item
                    v-for="linkItem in items"
                    :item="linkItem"
                    @scrollToInfoBlock="emitScrollToInfoBlock(linkItem)"
                ></sidebar-link-item>
            </ul>
        </div>

        <div class="sidebar__open-menu-btn" :class="{ active: sidebarOpened }" @click="emitSidebarClose">
            <i class="fa fa-chevron-left" v-if="sidebarOpened"></i>
            <i class="fa fa-chevron-right" v-else></i>
        </div>
    </aside>
</template>

<script>
    import SidebarLinkItem from "@/components/sidebar/SidebarLinkItem.vue";

    export default {
        props: ["items", "sidebarOpened"],

        components: {
            SidebarLinkItem
        },

        mounted() {
            const clickHandler = (event) => {
                const clickedElement = event.target;

                if (!clickedElement.closest('.sidebar') && this.sidebarOpened) {
                    this.emitSidebarClose();
                }
            };

            document.addEventListener('click', clickHandler);

            this.$once('hook:beforeDestroy', () => {
                document.removeEventListener('click', clickHandler);
            })
        },

        methods: {
            emitScrollToInfoBlock(linkItem) {
                this.$emit("scrollToInfoBlock", linkItem);
            },

            emitSidebarClose() {
                this.$emit('toggle-sidebar');
            },
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
        width: 250px;
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

    .sidebar__open-menu-btn {
        display: none;
        position: absolute;
        bottom: 10px;
        right: -50px;
        background: #f3f3f3;
        border: 1px solid #a7a7a7;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        z-index: 3;
        cursor: pointer;
        padding: 6px;
        opacity: 0.5;
        transition: opacity 0.3s;
    }

    .sidebar__open-menu-btn i {
        margin-left: 2px;
    }

    .sidebar__open-menu-btn.active i {
        margin-left: -2px;
    }

    .sidebar__open-menu-btn:hover {
        opacity: 1;
    }

    @media screen and (max-width: 1150px) {
        .sidebar__open-menu-btn {
            display: flex;
        }

        .sidebar {
            transform: translateX(-100%);
        }
    }
</style>