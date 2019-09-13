<template>
    <section class="content">
        <content-header></content-header>
        <router-view/>
    </section>
</template>

<script>
    import ContentHeader from "@/components/content/ContentHeader.vue";
    import AboutSection from "@/components/content/AboutSection.vue";
    import PortfolioSection from "@/components/content/PortfolioSection.vue";

    export default {
        data() {
            return {}
        },

        components: {
            "content-header": ContentHeader,
            "about-section": AboutSection,
            "portfolio-section": PortfolioSection,
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