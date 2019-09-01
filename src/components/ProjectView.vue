<template>
    <div class="project">
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
    </div>
</template>

<script>
    export default {
        name: "ProjectView"
    }
</script>

<style scoped>

</style>