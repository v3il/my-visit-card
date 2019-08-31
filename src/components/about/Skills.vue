<template>
    <div class="content__info-block info-block skills-info-block" id="skills">
        <div class="info-block__title-block">
            <h2 class="info-block__title">{{$t('message.skillsTitle')}}</h2>
            <div class="info-block__title-separator">
                <div class="info-block__title-separator-line"></div>
                <div class="info-block__title-separator-ring"></div>
            </div>
        </div>

        <div class="skills-info-block__skills-info">
            <div class="skills-info-block__languages-list">
                <h3 class="default-title">
                    {{$t('message.frontEndTechs')}}
                </h3>

                <ul class="list">
                    <li class="list-item">
                        <div class="list-item__pointer"></div>

                        <div class="list-item__text">
                            JavaScript

                            <ul class="sublist">
                                <li class="list-item">
                                    <div class="list-item__pointer"></div>

                                    <div class="list-item__text">
                                        Pure JS (with ES2015+)
                                    </div>
                                </li>

                                <li class="list-item">
                                    <div class="list-item__pointer"></div>

                                    <div class="list-item__text">
                                        Vue.js + vue-stack (vue-router, vuex, axios, SFC)
                                    </div>
                                </li>

                                <li class="list-item">
                                    <div class="list-item__pointer"></div>

                                    <div class="list-item__text">
                                        jQuery + jQuery UI
                                    </div>
                                </li>

                                <li class="list-item">
                                    <div class="list-item__pointer"></div>

                                    <div class="list-item__text">
                                        Webpack
                                    </div>
                                </li>

                                <li class="list-item">
                                    <div class="list-item__pointer"></div>

                                    <div class="list-item__text">
                                        Jest
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="list-item">
                        <div class="list-item__pointer"></div>

                        <div class="list-item__text">
                            HTML5 (semantic, cross-browser markup)
                        </div>
                    </li>

                    <li class="list-item">
                        <div class="list-item__pointer"></div>

                        <div class="list-item__text">
                            CSS3 (responsive layouts), Less
                        </div>
                    </li>
                </ul>
            </div>

            <div class="skills-info-block__languages-list">
                <h3 class="default-title">
                    {{$t('message.backEndTechs')}}
                </h3>

                <ul class="list">
                    <li class="list-item">
                        <div class="list-item__pointer"></div>

                        <div class="list-item__text">
                            Node.js
                        </div>
                    </li>

                    <li class="list-item">
                        <div class="list-item__pointer"></div>

                        <div class="list-item__text">
                            Express
                        </div>
                    </li>

                    <li class="list-item">
                        <div class="list-item__pointer"></div>

                        <div class="list-item__text">
                            Mongo DB
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Skills"
    }
</script>

<style scoped>

</style>