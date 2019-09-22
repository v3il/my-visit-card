<template>
    <section class="content">
        <content-header></content-header>
        <!--<transition name="fade">-->
            <keep-alive>
                <router-view/>
            </keep-alive>
        <!--</transition>-->
    </section>
</template>

<script>
    import ContentHeader from "@/components/content/ContentHeader.vue";

    export default {
        data() {
            return {}
        },

        components: {
            ContentHeader,
        },
    }
</script>

<style>
    .content {
        margin-left: 250px;
    }

    @media screen and (max-width: 1150px) {
        .content {
            margin-left: 0;
        }
    }
</style>