<template>
    <aside class="sidebar" :class="{'sidebar--opened': sidebarOpened}">
        <div class="sidebar__avatar-block">
            <lazy-load-image class="sidebar__avatar" image-name="avatar.jpg" alt="avatar"></lazy-load-image>
        </div>

        <div class="sidebar__fixed-container">
            <!--<h2 class="sidebar__name-title">{{$t('message.name')}}</h2>-->
            <!--<h3 class="sidebar__specialization-title">{{$t('message.specialization')}}</h3>-->

            <ul class="sidebar__nav">
                <sidebar-link-item
                    v-for="linkItem in items"
                    :item="linkItem"
                    :key="linkItem.name"
                    @scrollToInfoBlock="emitScrollToInfoBlock(linkItem)"
                ></sidebar-link-item>
            </ul>
        </div>

        <div class="sidebar__open-menu-btn" :class="{ active: sidebarOpened }" @click="emitSidebarClose">
            <i class="fa fa-chevron-left sidebar__open-menu-btn-icon" v-if="sidebarOpened"></i>
            <i class="fa fa-chevron-right sidebar__open-menu-btn-icon" v-else></i>
        </div>
    </aside>
</template>

<script>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    import SidebarLinkItem from "@/components/sidebar/SidebarLinkItem.vue";
    import LazyLoadImage from "@/components/LazyLoadImage.vue";

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
        }

        emitScrollToInfoBlock(linkItem) {
            this.$emit("scrollToInfoBlock", linkItem);
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
        padding: 63px 30px 0 30px;
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

        &__name-title {
            font-size: 24px;
            text-transform: uppercase;
            line-height: 30px;
            color: #333;
            font-weight: bold;
            font-family: Exo2,serif;
        }

        &__specialization-title {
            font-size: 16px;
            color: #3971ff;
            font-family: RobotoLight,serif;
            margin-top: 15px;
            line-height: 30px;
            font-weight: 300;
        }

        &__nav {
            margin-top: 50px;
            list-style: none;
        }

        &__open-menu-btn {
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

        &__open-menu-btn &__open-menu-btn-icon {
            margin-left: 2px;
        }

        &__open-menu-btn.active &__open-menu-btn-icon {
            margin-left: -2px;
        }

        &__open-menu-btn:hover {
            opacity: 1;
        }

        @media screen and (max-width: 1150px) {
            transition: transform 0.6s ease-in-out;
            transform: translateX(-100%);

            &__open-menu-btn {
                display: flex;
            }

            &--opened {
                transform: translateX(0);
            }
        }

        @media screen and (max-width: 600px) {
            padding-top: 25px;
        }
    }
</style>