<template>
    <div class="content__info-block info-block experience-info-block" id="experience">
        <div class="info-block__title-block">
            <h2 class="info-block__title">{{this.$t('message.experience')}}</h2>
            <div class="info-block__title-separator">
                <div class="info-block__title-separator-line"></div>
                <div class="info-block__title-separator-ring"></div>
            </div>
        </div>

        <div class="experience-info-block__experience-list-block">
            <div class="experience-info-block__experience-info">
                <div class="experience-info-block__experience-summary">
                    <div class="experience-info-block__experience-counter">01</div>
                    <div class="experience-info-block__experience-name-block">
                        <h1 class="experience-info-block__experience-name">uCoz</h1>
                        <h3 class="experience-info-block__experience-degree">{{$t('message.frontEndDev')}}</h3>
                        <h3 class="experience-info-block__experience-period">{{$t('message.jobSession', {
                            since: 2015,
                            before: 'текущий момент',
                            })}}</h3>
                    </div>
                </div>

                <div class="experience-info-block__experience-description experience-description">
                    <h1 class="experience-info-block__project-name">
                        {{$t('message.cpv2')}}
                    </h1>

                    <p class="experience-info-block__project-technologies">
                        Perl, jQuery, jQuery UI, Vue.js, Webpack, ES2015+, Less
                    </p>

                    <h3 class="default-title">
                        {{$t('message.projectDescription')}}
                    </h3>

                    <p class="experience-info-block__project-description">
                        {{$t('message.cpDescription')}}
                    </p>

                    <h3 class="default-title">
                        {{$t('message.duties')}}
                    </h3>

                    <ul class="list">
                        <li class="list-item">
                            <div class="list-item__pointer"></div>

                            <div class="list-item__text">
                                {{$t('message.cpDuty1')}}
                            </div>
                        </li>

                        <li class="list-item">
                            <div class="list-item__pointer"></div>

                            <div class="list-item__text">
                                {{$t('message.cpDuty2')}}
                            </div>
                        </li>

                        <li class="list-item">
                            <div class="list-item__pointer"></div>

                            <div class="list-item__text">
                                {{$t('message.cpDuty3')}}
                            </div>
                        </li>
                    </ul>

                    <h3 class="experience-description__achievements-title default-title">
                        {{$t('message.achievements')}}
                    </h3>

                    <table class="experience-description__achievements-table achievements-table">
                        <thead class="achievements-table__head">
                        <tr class="achievements-table__title-row">
                            <th class="achievements-table__th">{{$t('message.task')}}</th>
                            <th class="achievements-table__th">{{$t('message.result')}}</th>
                        </tr>
                        </thead>

                        <tbody class="achievements-table__body">
                        <tr class="achievements-table__item">
                            <td class="achievements-table__item__task">{{$t('message.cpTask1')}}</td>
                            <td class="achievements-table__item__result">{{$t('message.cpResult1')}}</td>
                        </tr>
                        <tr class="achievements-table__item">
                            <td class="achievements-table__item__task">{{$t('message.cpTask2')}}</td>
                            <td class="achievements-table__item__result">{{$t('message.cpResult2')}}</td>
                        </tr>
                        <tr class="achievements-table__item">
                            <td class="achievements-table__item__task">{{$t('message.cpTask3')}}</td>
                            <td class="achievements-table__item__result">{{$t('message.cpResult3')}}</td>
                        </tr>
                        <tr class="achievements-table__item">
                            <td class="achievements-table__item__task">{{$t('message.cpTask4')}}</td>
                            <td class="achievements-table__item__result">{{$t('message.cpResult4')}}</td>
                        </tr>
                        <tr class="achievements-table__item">
                            <td class="achievements-table__item__task">{{$t('message.cpTask5')}}</td>
                            <td class="achievements-table__item__result">{{$t('message.cpResult5')}}</td>
                        </tr>
                        </tbody>
                    </table>

                    <h3 class="experience-description__results-title default-title">
                        {{$t('message.results')}}
                    </h3>

                    <p class="block-description">
                        {{$t('message.imageGalleryDescription')}}
                    </p>

                    <images-gallery :imagesNames="newCpImages"></images-gallery>


                    <h1 class="experience-info-block__project-name">
                        {{$t('message.ucalc')}}
                    </h1>

                    <p class="experience-info-block__project-technologies">
                        jQuery, Gulp, Sass, Chartist.js, JSON
                    </p>

                    <h3 class="default-title">
                        {{$t('message.projectDescription')}}
                    </h3>

                    <p class="experience-info-block__project-description">
                        {{$t('message.uCalcDescription')}}
                    </p>

                    <h3 class="default-title">
                        {{$t('message.duties')}}
                    </h3>

                    <ul class="list">
                        <li class="list-item">
                            <div class="list-item__pointer"></div>

                            <div class="list-item__text">
                                {{$t('message.ucalcDuty1')}}
                            </div>
                        </li>

                        <li class="list-item">
                            <div class="list-item__pointer"></div>

                            <div class="list-item__text">
                                {{$t('message.ucalcDuty2')}}
                            </div>
                        </li>

                        <li class="list-item">
                            <div class="list-item__pointer"></div>

                            <div class="list-item__text">
                                {{$t('message.ucalcDuty3')}}
                            </div>
                        </li>
                    </ul>

                    <h3 class="experience-description__results-title default-title">
                        {{$t('message.results')}}
                    </h3>

                    <p class="block-description">
                        {{$t('message.imageGalleryDescription')}}
                    </p>

                    <images-gallery :imagesNames="uCalcImages"></images-gallery>


                    <h1 class="experience-info-block__project-name">
                        Mass Labeling
                    </h1>

                    <p class="experience-info-block__project-technologies">
                        Node.js, Express, ejs, mongo, Docker, jQuery, Vue.js, Webpack, eslint, Bootstrap
                    </p>

                    <h3 class="default-title">
                        {{$t('message.projectDescription')}}
                    </h3>

                    <p class="experience-info-block__project-description">
                        {{$t('message.mlDescription')}}
                    </p>

                    <h3 class="default-title">
                        {{$t('message.achievements')}}
                    </h3>

                    <ul class="list">
                        <li class="list-item">
                            <div class="list-item__pointer"></div>

                            <div class="list-item__text">
                                {{$t('message.mlDuty1')}}
                            </div>
                        </li>

                        <li class="list-item">
                            <div class="list-item__pointer"></div>

                            <div class="list-item__text">
                                {{$t('message.mlDuty2')}}
                            </div>
                        </li>

                        <li class="list-item">
                            <div class="list-item__pointer"></div>

                            <div class="list-item__text">
                                {{$t('message.mlDuty3')}}
                            </div>
                        </li>

                        <li class="list-item">
                            <div class="list-item__pointer"></div>

                            <div class="list-item__text">
                                {{$t('message.mlDuty4')}}
                            </div>
                        </li>

                        <li class="list-item">
                            <div class="list-item__pointer"></div>

                            <div class="list-item__text">
                                {{$t('message.mlDuty5')}}
                            </div>
                        </li>
                    </ul>

                    <h3 class="experience-description__results-title default-title">
                        {{$t('message.results')}}
                    </h3>

                    <p class="block-description">
                        {{$t('message.imageGalleryDescription')}}
                    </p>

                    <images-gallery :imagesNames="massLabelingImages"></images-gallery>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ImagesGallery from "@/components/ImagesGallery";

    export default {
        name: "Experience",

        components: {
            ImagesGallery
        },

        data: () => ({
            newCpImages: [
                'cp1.png',
                'cp2.png',
                'cp3.png',
                'cp4.png',
                'cp5.png',
                'cp6.png',
            ],

            uCalcImages: [
                'uc2.png',
                'uc1.png',
                'uc3.png',
                'uc4.png',
            ],

            massLabelingImages: [
                'ml2.png',
                'ml3.png',
                'ml1.png',
                'ml4.png',
            ],
        })
    }
</script>

<style scoped>

</style>