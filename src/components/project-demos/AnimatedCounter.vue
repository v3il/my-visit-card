<template>
    <div>
        <div class="counter counter-simple">
            <div class="animated-counter-element js-animated-counter-element-simple">
                {{simple.initial}}
            </div>

            <div class="counter-params">
                <label>
                    Animate to:
                    <input type="text" v-model="simple.to">
                </label>

                <label>
                    Duration:
                    <input type="text" v-model="simple.duration">
                </label>

                <label>
                    Delay:
                    <input type="text" v-model="simple.delay">
                </label>

                <label>
                    Result precision:
                    <input type="text" v-model="simple.precision">
                </label>

                <button @click="animateSimple()">Animate</button>
                <button @click="setRandom('simple')">Set random</button>
            </div>
        </div>
    </div>
</template>

<script>
    import AnimatedCounter from '../../../node_modules/animated-counter/src/AnimatedCounter';

    export default {
        name: "project-demos",

        data() {
            return {
                simple: {
                    initial: 0,
                    delay: 0,
                    to: 0,
                    duration: 1000,
                    precision: 0,
                }
            }
        },

        methods: {
            animateSimple() {
                const counterParams = this.simple;

                counterParams.instance.setValue(counterParams.to, {
                    delay: counterParams.delay,
                    animationTime: counterParams.duration,
                    resultPrecision: counterParams.precision,
                });
            },

            setRandom(counterParamsObjectKey) {
                this[counterParamsObjectKey] = Object.assign(this[counterParamsObjectKey], {
                    to: this._toInt(100 + Math.random() * 1000 + 50),
                    delay: this._toInt(500 + Math.random() * 1000 + 50),
                    duration: this._toInt(100 + Math.random() * 1900),
                    precision: this._toInt(Math.random() * 4),
                });
            },

            _toInt(value) {
                return Math.floor(value);
            },

            _getCounterElementByClass(counterClass) {
                return document.getElementsByClassName(
                    `js-animated-counter-element-${counterClass}`
                )[0];
            }
        },

        mounted() {
            ['simple']
                .forEach((counterName) => {
                    this[counterName].instance = new AnimatedCounter(
                        this._getCounterElementByClass(counterName)
                    );
                });
        }
    }
</script>

<style scoped>
    /*div {*/
        /*height: 100vh;*/
        /*background-color: #fff;*/
    /*}*/
</style>