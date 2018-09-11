<template>
    <div class="demo-page">
        <div class="counter counter-simple">
            <div class="animated-counter-element js-animated-counter-element-simple">
                {{simple.initial}}
            </div>

            <div class="counter-params">
                <label>
                    Animate to:
                    <input type="number" v-model="simple.to">
                </label>

                <label>
                    Duration:
                    <input type="number" v-model="simple.duration">
                </label>

                <label>
                    Delay:
                    <input type="number" v-model="simple.delay">
                </label>

                <label>
                    Result precision:
                    <input type="number" v-model="simple.precision">
                </label>

                <div class="counter-actions">
                    <button @click="animateSimple()">Animate</button>
                    <button @click="setRandom('simple')">Set random</button>
                </div>
            </div>
        </div>

        <div class="counter counter-colorful">
            <div class="animated-counter-element js-animated-counter-element-colorful">
                {{simple.initial}}
            </div>

            <div class="counter-params">
                <div class="counter-actions">
                    <button @click="animateColorful()">Animate</button>
                </div>
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
                },

                colorful: {
                    initial: 0,
                    delay: 0,
                    to: 1000,
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

            animateColorful() {
                const counterParams = this.colorful;

                counterParams.instance.setValue(1000, {
                    delay: 0,
                    animationTime: 3000,
                    resultPrecision: 0,
                });

                counterParams.instance.on('animated-counter-tick', (currentValue) => {
                    counterParams.element.classList.remove('yellow', 'red');

                    if (currentValue > 400 && currentValue < 800) {
                        counterParams.element.classList.add('yellow');
                    }

                    if (currentValue >= 800) {
                        counterParams.element.classList.add('red');
                    }
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
            ['simple', 'colorful']
                .forEach((counterName) => {
                    const counterElement = this._getCounterElementByClass(counterName);

                    this[counterName].element = counterElement;
                    this[counterName].instance = new AnimatedCounter(counterElement);
                });
        }
    }
</script>

<style scoped>
    .demo-page {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
    }

    .counter {
        display: flex;
        padding: 24px;
    }

    @media screen and (max-width: 600px) {
        .counter {
            flex-direction: column;
        }

        .animated-counter-element {
            padding: 18px 0;
        }
    }

    .animated-counter-element, .counter-params {
        flex-basis: 50%;
    }

    .animated-counter-element {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 36px;
    }

    .animated-counter-element.yellow {
        color: darkorange;
    }

    .animated-counter-element.red {
        color: lightcoral;
    }

    .animated-counter-element {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 36px;
    }

    .counter-params {
        display: flex;
        flex-direction: column;
    }

    .counter-actions {
        margin-top: 12px;
    }

    input {
        width: 100%;
        padding: 6px 12px;
        border-radius: 3px;
        outline: none;
        border: 1px solid #4c4c4c;
    }

    label {
        font-weight: bold;
    }

    button {
        padding: 6px 12px;
        background: #3971ff;
        color: white;
        border: 1px solid #3971ff;
        outline: none;
        border-radius: 3px;
        cursor: pointer;
    }
</style>