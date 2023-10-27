<template>
    <h2 class="heading">{{title}}</h2>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.heading {
    position: relative;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 500;
    color: #333;
    padding-bottom: 25px;
}

.heading:before {
    content: "";
    position: absolute;
    bottom: 2px;
    background-color: var(--primary-color);
    height: 2px;
    width: 65px;
}

.heading:after {
    content: "";
    position: absolute;
    bottom: 0;
    background-color: transparent;
    border: 1px solid var(--primary-color);
    border-radius: 50%;
    width: 4px;
    height: 4px;
    left: 65px;
}
</style>
