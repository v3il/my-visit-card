<template>
    <div class="header-intro">
        <GalleryImage imageName="avatar.jpg" class="header-intro__avatar" />

        <div>
            <h3 class="header-intro__greetings">Hello, I am</h3>
            <h1 class="header-intro__name">Dmytro</h1>
            <p class="header-intro__specialization">
                Front-end developer
            </p>
        </div>
    </div>
</template>

<script setup>
import GalleryImage from '@/components/basic/image/GalleryImage.vue'
</script>

<style scoped lang="less">
.header-intro {
    --gap: 48px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--gap);

    @media screen and (max-width: 1150px) {
        --gap: 24px;
    }
}

.header-intro__avatar {
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #3971ff;
    display: block;
    flex-shrink: 0;
    width: 160px;
    height: 160px;
}

.header-intro__greetings {
    text-transform: uppercase;
    color: #4c4c4c;
    font-size: 30px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    line-height: 40px;
}

.header-intro__name {
    text-transform: uppercase;
    color: #4c4c4c;
    font-size: 48px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    line-height: 50px;
}

.header-intro__specialization {
    text-transform: uppercase;
    color: var(--primary);
    letter-spacing: 2px;
    padding: 15px 18px 13px 19px;
    font-size: 16px;
    border-top: 1px solid var(--color);
    border-bottom: 1px solid var(--color);
    margin-top: 24px;
    display: inline-block;
}
</style>
