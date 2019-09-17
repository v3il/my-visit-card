<template>
    <div class="content__section">
        <skills />
        <experience />
        <education />
        <contact-me />
    </div>
</template>

<script>
    // import firebase from "firebase";
    // import firebaseConfig from "../../../firebase.config";
    //
    // import EventBus from "@/components/EventBus";

    import Skills from '@/components/about/Skills';
    import Experience from '@/components/about/Experience';
    import Education from '@/components/about/Education';
    import ContactMe from '@/components/about/ContactMe';

    import "@/vendor/popped-element/Tooltip";

    export default {
        components: {
            Skills,
            Experience,
            Education,
            ContactMe,
        },

        methods: {
            // async sendResponse() {
            //     const {name, email, message} = this;
            //
            //     try {
            //         await this.db
            //             .collection("responses")
            //             .add({ name, email, message });
            //
            //         EventBus.$emit("notification", {
            //             type: "success",
            //             message: "Your message was successfully sent, thank you!"
            //         });
            //     } catch(error) {
            //         EventBus.$emit("notification", {
            //             type: "error",
            //             message: "Something went wrong :( Please, try again later."
            //         });
            //     }
            // }
        },

        created() {
            // if(!firebase.apps.length) {
            //     firebase.initializeApp(firebaseConfig);
            // }
            //
            // this.db = firebase.firestore();
        }
    }
</script>

<style>
    .content__info-block {
        padding: 100px 120px 100px 95px;
    }

    .content__info-block:nth-child(2n) {
        background-color: #fff;
    }

    .info-block__title {
        font-size: 30px;
        text-transform: uppercase;
        font-family: Exo2SemiBold;
        font-weight: 400;
        color: #333;
    }

    .info-block__title-separator {
        margin-top: 25px;
        display: flex;
        align-items: center;
        margin-bottom: 100px;
    }

    .info-block__title-separator-line {
        background-color: #3971ff;
        height: 2px;
        width: 65px;
    }

    .info-block__title-separator-ring {
        background-color: transparent;
        border: 1px solid #3971ff;
        border-radius: 50%;
        width: 5px;
        height: 5px;
        margin-left: -1px;
    }

    /* SKILLS */

    .skills-info-block__skills-info {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .skills-info-block__languages-list {
        flex-basis: calc(50% - 15px);
    }

    @media screen and (max-width: 750px) {
        .skills-info-block__languages-list {
            flex-basis: 100%;
        }

        .skills-info-block__languages-list:last-child {
            margin-top: 18px;
        }
    }

    /* SKILLS */

    /* EDUCATION */
    .education-info-block__educations-info {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .education-info-block__education-info {
        flex-basis: calc(50% - 19px);
        margin-bottom: 100px;
    }

    .education-info-block__education-info:nth-last-child(-n + 2) {
        margin-bottom: 0;
    }

    .education-info-block__education-summary {
        display: flex;
    }

    .education-info-block__education-counter {
        margin-right: 23px;
        line-height: 30px;
        color: #4c4c4c;
        font-size: 30px;
        font-weight: 400;
    }

    .education-info-block__education-name {
        font-size: 24px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        text-transform: uppercase;
    }

    .education-info-block__education-degree {
        margin-top: 10px;
    }

    .education-info-block__education-degree,
    .education-info-block__education-period {
        font-size: 16px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        text-transform: uppercase;
    }

    .education-info-block__education-description {
        font-size: 16px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        margin-top: 50px;
    }
    /* EDUCATION */

    /* EXPERIENCE */
    .experience-info-block__experience-list-block {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .experience-info-block__experience-info {
        /*flex-basis: calc(50% - 19px);*/
        flex-basis: 100%;
        margin-bottom: 100px;
    }

    .experience-info-block__experience-info:nth-last-child(-n + 2) {
        margin-bottom: 0;
    }

    .experience-info-block__experience-summary {
        display: flex;
    }

    .experience-info-block__experience-counter {
        margin-right: 23px;
        line-height: 30px;
        color: #4c4c4c;
        font-size: 30px;
        font-weight: 400;
    }

    .experience-info-block__experience-name {
        font-size: 24px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        text-transform: uppercase;
    }

    .experience-info-block__experience-degree {
        margin-top: 10px;
    }

    .experience-info-block__experience-degree,
    .experience-info-block__experience-period {
        font-size: 16px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        text-transform: uppercase;
    }

    .experience-info-block__project-name {
        line-height: 30px;
        color: #3971ff;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 18px;
        margin-top: 48px;
        font-size: 20px;
    }

    .experience-info-block__project-technologies {
        font-weight: bold;
        margin-bottom: 18px;
    }

    .experience-info-block__project-description {
        margin-bottom: 18px;
    }

    .default-title {
        text-decoration: none;
        text-transform: uppercase;
        line-height: 30px;
        font-size: 16px;
        color: #4c4c4c;
        font-family: RobotoMedium;
        font-weight: 500;
        margin-bottom: 12px;
    }

    .list {
        list-style: none;
    }

    .list-item {
        display: flex;
        align-items: flex-start;
        padding: 3px 0;
    }

    .sublist .list-item__pointer {
        min-width: 5px;
    }

    .list-item__pointer {
        min-width: 10px;
        height: 2px;
        background-color: #3971ff;
        margin-right: 8px;
        margin-top: 13px;
    }

    .experience-description__achievements-title,
    .experience-description__results-title {
        margin-top: 30px;
    }

    .experience-description__achievements-table {
        text-align: left;
        border-collapse: collapse;
        width: 100%;
    }

    .achievements-table__item__task,
    .achievements-table__item__result,
    .achievements-table__th {
        border-bottom: 1px solid #a7a7a7;
        padding: 6px 0;
        vertical-align: top;
    }

    .achievements-table__item__task {
        width: 50%;
    }

    .experience-info-block__experience-description {
        font-size: 16px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        margin-top: 50px;
    }

    .experience-description__results-title {
        margin-bottom: 0;
    }

    .block-description {
        margin-bottom: 18px;
        opacity: 0.8;
        font-size: smaller;
    }

    /* EXPERIENCE */



    @media screen and (max-width: 850px) {
        .content__info-block {
            padding: 50px;
        }

        .intro-block {
            margin: 50px;
        }

        .skills-info-block__skill-info:nth-last-child(2) {
            margin-bottom: 40px;
        }

        .experience-info-block__experience-info:nth-last-child(2),
        .education-info-block__education-info:nth-last-child(2) {
            margin-bottom: 100px;
        }

        .skills-info-block__skill-info,
        .experience-info-block__experience-info,
        .education-info-block__education-info {
            flex-basis: 100%;
        }

        .contact-info-block__contacts-block {
            flex-direction: column;
        }

        .contact-info-block__contact-data-block {
            margin-right: 0;
            flex-basis: 100%;
            order: 2;
            margin-top: 50px;
        }

        .contact-info-block__contact-form-block {
            order: 1;
        }
    }

    @media screen and (max-width: 450px) {
        .intro-block__nav-tabs {
            flex-direction: column;
        }

        .intro-block__nav-tab {
            margin-right: 0;
            margin-bottom: 25px;
        }

        .content__info-block {
            padding: 25px;
        }

        .intro-block {
            margin: 25px;
        }
    }
</style>