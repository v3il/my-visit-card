<template>
    <li class="education__education-item">
        <div class="education__education-data">
            <div class="education__education-counter">0{{ index }}</div>

            <div class="education__education-info">
                <h2 class="education__education-place">
                    {{ education.name }}
                </h2>

                <h3 class="education__education-degree">
                    {{ education.degree }}
                </h3>

                <p class="education__education-period">
                    {{ education.session }}
                </p>
            </div>
        </div>

        <div class="education__education-description">
            {{ education.description }}
        </div>
    </li>
</template>

<script setup>
defineProps({
    index: {
        type: Number,
        required: true
    },

    education: {
        type: Object,
        required: true
    }
})
</script>

<style scoped lang="less">
.education {
    &__education-item {
        list-style: none;
        flex-basis: calc(50% - 19px);
        margin-bottom: 100px;

        &:nth-last-child(-n + 2) {
            margin-bottom: 0;
        }
    }

    &__education-data {
        display: flex;
    }

    &__education-counter {
        margin-right: 23px;
        line-height: 30px;
        color: #4c4c4c;
        font-size: 30px;
        font-weight: 400;
    }

    &__education-place {
        font-size: 24px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        text-transform: uppercase;
    }

    &__education-degree {
        margin-top: 10px;
    }

    &__education-degree,
    &__education-period {
        font-size: 16px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        text-transform: uppercase;
    }

    &__education-description {
        font-size: 16px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        margin-top: 50px;
    }

    @media screen and (max-width: 850px) {
        &__education-item {
            flex-basis: 100%;
            margin-bottom: 50px;

            &:nth-last-child(-n + 2) {
                margin-bottom: 50px;
            }
        }

        &__education-place {
            min-height: 0;
        }
    }
}
</style>
