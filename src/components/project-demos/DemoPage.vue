<template>
    <main>
        <header></header>

        <section>
            <router-view />
        </section>
    </main>
</template>

<script>
    export default {
        name: "demo-page"
    }
</script>

<style scoped>
    main {
        /*height: 100vh;*/
    }

    header {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        height: 50px;
        background: #000;
    }

    section {
        margin-top: 50px;
        background-color: #fff;
        min-height: calc(100vh - 50px);
    }
</style>