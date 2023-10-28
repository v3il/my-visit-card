<template>
    <header class="header-block">
        <Intro class="header-block__intro" />
        <Description class="header-block__description" />
        <SocialNetworks class="header-block__socials" />
        <Navigation />
    </header>
</template>

<script setup>
import SocialNetworks from '@/components/header/SocialNetworks.vue'
import Navigation from '@/components/header/Navigation.vue'
import Description from '@/components/header/Description.vue'
import Intro from '@/components/header/Intro.vue'
</script>

<style scoped lang="less">
.header-block {
    background: #eaebed;
    padding: 63px 120px 63px 95px;

    @media screen and (max-width: 850px) {
        padding: 50px;
    }

    @media screen and (max-width: 600px) {
        padding: 25px;
    }
}

.header-block__intro {
    margin-bottom: 50px;
}

.header-block__socials,
.header-block__description {
    margin-bottom: 30px;
}
</style>
