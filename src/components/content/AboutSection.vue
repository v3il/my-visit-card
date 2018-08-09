<template>
    <div class="content__section">
        <div class="content__info-block info-block skills-info-block" id="skills">
            <div class="info-block__title-block">
                <h2 class="info-block__title">Professional skills</h2>
                <div class="info-block__title-separator">
                    <div class="info-block__title-separator-line"></div>
                    <div class="info-block__title-separator-ring"></div>
                </div>
            </div>

            <div class="skills-info-block__skills-info">
                <div class="skills-info-block__skill-info">
                    <div class="skills-info-block__skill-title-block">
                        <h2 class="skills-info-block__skill-title">Test</h2>
                        <span class="skills-info-block__skill-value">90%</span>
                    </div>

                    <div class="skills-info-block__skill-ruler-block">
                        <div class="skills-info-block__skill-ruler-inactive"></div>
                        <div class="skills-info-block__skill-ruler-active"></div>
                    </div>
                </div>

                <div class="skills-info-block__skill-info">
                    <div class="skills-info-block__skill-title-block">
                        <h2 class="skills-info-block__skill-title">Test</h2>
                        <span class="skills-info-block__skill-value">90%</span>
                    </div>

                    <div class="skills-info-block__skill-ruler-block">
                        <div class="skills-info-block__skill-ruler-inactive"></div>
                        <div class="skills-info-block__skill-ruler-active"></div>
                    </div>
                </div>

                <div class="skills-info-block__skill-info">
                    <div class="skills-info-block__skill-title-block">
                        <h2 class="skills-info-block__skill-title">Test</h2>
                        <span class="skills-info-block__skill-value">90%</span>
                    </div>

                    <div class="skills-info-block__skill-ruler-block">
                        <div class="skills-info-block__skill-ruler-inactive"></div>
                        <div class="skills-info-block__skill-ruler-active"></div>
                    </div>
                </div>

                <div class="skills-info-block__skill-info">
                    <div class="skills-info-block__skill-title-block">
                        <h2 class="skills-info-block__skill-title">Test</h2>
                        <span class="skills-info-block__skill-value">90%</span>
                    </div>

                    <div class="skills-info-block__skill-ruler-block">
                        <div class="skills-info-block__skill-ruler-inactive"></div>
                        <div class="skills-info-block__skill-ruler-active"></div>
                    </div>
                </div>

                <div class="skills-info-block__skill-info">
                    <div class="skills-info-block__skill-title-block">
                        <h2 class="skills-info-block__skill-title">Test</h2>
                        <span class="skills-info-block__skill-value">90%</span>
                    </div>

                    <div class="skills-info-block__skill-ruler-block">
                        <div class="skills-info-block__skill-ruler-inactive"></div>
                        <div class="skills-info-block__skill-ruler-active"></div>
                    </div>
                </div>

                <div class="skills-info-block__skill-info">
                    <div class="skills-info-block__skill-title-block">
                        <h2 class="skills-info-block__skill-title">Test</h2>
                        <span class="skills-info-block__skill-value">90%</span>
                    </div>

                    <div class="skills-info-block__skill-ruler-block">
                        <div class="skills-info-block__skill-ruler-inactive"></div>
                        <div class="skills-info-block__skill-ruler-active"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content__info-block info-block experience-info-block" id="experience">
            <div class="info-block__title-block">
                <h2 class="info-block__title">Experience</h2>
                <div class="info-block__title-separator">
                    <div class="info-block__title-separator-line"></div>
                    <div class="info-block__title-separator-ring"></div>
                </div>
            </div>

            <div class="experience-info-block__experience-list-block">
                <div
                    class="experience-info-block__experience-info"
                    v-for="(experiencePlace, index) in experiencePlaces"
                >
                    <div class="experience-info-block__experience-summary">
                        <div class="experience-info-block__experience-counter">0{{index + 1}}</div>
                        <div class="experience-info-block__experience-name-block">
                            <h1 class="experience-info-block__experience-name">{{experiencePlace.name}}</h1>
                            <h3 class="experience-info-block__experience-degree">{{experiencePlace.profession}}</h3>
                            <h3 class="experience-info-block__experience-period">{{experiencePlace.session}}</h3>
                        </div>
                    </div>

                    <div class="experience-info-block__experience-description" v-html="experiencePlace.description">                    </div>
                </div>
            </div>
        </div>

        <div class="content__info-block info-block education-info-block" id="education">
            <div class="info-block__title-block">
                <h2 class="info-block__title">Education</h2>
                <div class="info-block__title-separator">
                    <div class="info-block__title-separator-line"></div>
                    <div class="info-block__title-separator-ring"></div>
                </div>
            </div>

            <div class="education-info-block__educations-info">
                <div
                    class="education-info-block__education-info"
                    v-for="(educationPlace, index) in educationPlaces"
                >
                    <div class="education-info-block__education-summary">
                        <div class="education-info-block__education-counter">0{{index + 1}}</div>
                        <div class="education-info-block__education-name-block">
                            <h1 class="education-info-block__education-name">{{educationPlace.name}}</h1>
                            <h3 class="education-info-block__education-degree">{{educationPlace.degree}}</h3>
                            <h3 class="education-info-block__education-period">{{educationPlace.session}}</h3>
                        </div>
                    </div>

                    <div class="education-info-block__education-description">
                        {{educationPlace.description}}
                    </div>
                </div>
            </div>
        </div>

        <div class="content__info-block info-block contact-info-block" id="contact">
            <div class="info-block__title-block">
                <h2 class="info-block__title">Say hello</h2>
                <div class="info-block__title-separator">
                    <div class="info-block__title-separator-line"></div>
                    <div class="info-block__title-separator-ring"></div>
                </div>
            </div>

            <div class="contact-info-block__contacts-block">
                <div class="contact-info-block__contact-data-block">
                    <div class="contact-info-block__location-block">
                        <div class="contact-info-block__location-title">
                            <i class="pe-7s-home contact-info-block__location-icon"></i>
                            <h2 class="contact-info-block__location-title-text">Location</h2>
                        </div>

                        <div class="contact-info-block__location-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                    </div>

                    <div class="contact-info-block__mail-block">
                        <div class="contact-info-block__mail-title">
                            <i class="pe-7s-mail-open contact-info-block__mail-icon"></i>
                            <h2 class="contact-info-block__mail-title-text">Contact</h2>
                        </div>

                        <div class="contact-info-block__mail-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                    </div>

                    <div class="contact-info-block__socials-block">
                        <div class="contact-info-block__socials-list">
                            <a href="#" class="contact-info-block__social-item"><i class="fa fa-skype" aria-hidden="true"></i></a>
                            <a href="#" class="contact-info-block__social-item"><i class="fa fa-telegram"></i></a>
                            <a href="#" class="contact-info-block__social-item"><i class="fa fa-phone"></i></a>
                        </div>
                    </div>
                </div>

                <div class="contact-info-block__contact-form-block">
                    <div class="contact-info-block__form-block">
                        <label class="contact-info-block__label" for="name">Your Name</label>
                        <input v-model="name" class="contact-info-block__input" type="text" name="name" id="name">
                    </div>

                    <div class="contact-info-block__form-block">
                        <label class="contact-info-block__label" for="email">Your Email</label>
                        <input v-model="email" class="contact-info-block__input" type="text" name="email" id="email">
                    </div>

                    <div class="contact-info-block__form-block">
                        <label class="contact-info-block__label" for="message">Type Your Message</label>
                        <textarea v-model="message" class="contact-info-block__textarea" rows="5" type="text" name="message" id="message"></textarea>
                    </div>

                    <div class="contact-info-block__form-block contact-info-block__submit-block">
                        <button @click.prevent="sendResponse()" type="submit" class="contact-info-block__submit-button">Lets Talk To Me</button>
                        <div class="contact-info-block__nav-line"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from "firebase";
    import firebaseConfig from "../../../firebase.config";

    import EventBus from "@/components/EventBus";

    export default {
        data() {
            return {
                name: "",
                email: "",
                message: "",

                educationPlaces: [
                    {
                        name: "Cherkasy State Technological University",
                        degree: "PhD",
                        session: "Session: 2017 - 2021",
                        description: "Entered after the master's degree. Research topic: Creation of 3D models of X-ray research using machine learning"
                    },
                    {
                        name: "Cherkasy State Technological University",
                        degree: "Master",
                        session: "Session: 2016 - 2017",
                        description: "Entered after bachelor degree. Graduation work: Creating of 2D arcade on Java (Swing)"
                    },
                    {
                        name: "Cherkasy State Technological University",
                        degree: "Bachelor",
                        session: "Session: 2014 - 2016",
                        description: "Entered after college. Graduation work: Creating of 2D arcade on Java (Swing)"
                    },
                    {
                        name: "Cherkasy Polytechnic college",
                        degree: "Junior specialist",
                        session: "Session: 2010 - 2014",
                        description: "Entered after the 9th grade. Graduation work: Creating of Android application of a travel agency"
                    }
                ],

                experiencePlaces: [
                    {
                        name: "uCoz",
                        profession: "Front-end developer",
                        session: "Session: 2015 - NOW",
                        description: `Duties:<br>
- adding new and supporting existing solutions<br>
- improvement of old and low-performance solutions<br>
- layout of cross-platform components for mock-ups<br>
<br>
Achievements:<br>
- adapted the project for mobile devices<br>
- translated the project's front-end to the ES2015-modules, Webpack; started
replacement of jQuery by Vue<br>`
                    }
                ],
            }
        },

        methods: {
            async sendResponse() {
                const {name, email, message} = this;

                try {
                    await this.db
                        .collection("responses")
                        .add({ name, email, message });

                    EventBus.$emit("notification", {
                        type: "success",
                        message: "Your message was successfully sent, thank you!"
                    });
                } catch(error) {
                    EventBus.$emit("notification", {
                        type: "error",
                        message: "Something went wrong :( Please, try again later."
                    });
                }
            }
        },

        created() {
            if(!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }

            this.db = firebase.firestore();

            const settings = {timestampsInSnapshots: true};
            this.db.settings(settings);
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

    .skills-info-block__skill-info {
        flex-basis: calc(50% - 15px);
        margin-bottom: 40px;
    }

    .skills-info-block__skill-info:nth-last-child(-n + 2) {
        margin-bottom: 0;
    }

    .skills-info-block__skill-title-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .skills-info-block__skill-title, .skills-info-block__skill-value {
        font-size: 16px;
        font-weight: 400;
        line-height: 27px;
        color: #4c4c4c;
        text-transform: uppercase;
    }

    .skills-info-block__skill-ruler-block {
        margin-top: 15px;
        height: 5px;
        position: relative;
    }

    .skills-info-block__skill-ruler-inactive, .skills-info-block__skill-ruler-active {
        height: inherit;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .skills-info-block__skill-ruler-inactive {
        background-color: #b0c6ff;
    }

    .skills-info-block__skill-ruler-active {
        background-color: #3971ff;
        width: 60%;
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

    .experience-info-block__experience-description {
        font-size: 16px;
        line-height: 30px;
        color: #4c4c4c;
        font-weight: 400;
        margin-top: 50px;
    }
    /* EXPERIENCE */

    /* CONTACT */
    .contact-info-block__contacts-block {
        display: flex;
    }

    .contact-info-block__contact-data-block {
        flex-basis: 305px;
        margin-right: 100px;
    }

    .contact-info-block__location-block {
        margin-bottom: 50px;
    }

    .contact-info-block__location-title,
    .contact-info-block__mail-title {
        display: flex;
        align-items: flex-end;
    }

    .contact-info-block__location-icon,
    .contact-info-block__mail-icon {
        width: 40px;
        height: 40px;
        font-size: 48px;
        line-height: 27.81px;
        color: #4c4c4c;
        font-weight: 400;
        margin-right: 32px;
    }

    .contact-info-block__mail-icon {
        color: #3971ff;
    }

    .contact-info-block__location-title-text,
    .contact-info-block__mail-title-text {
        color: #4c4c4c;
        font-weight: 400;
        line-height: 36px;
        font-size: 24px;
        text-transform: uppercase;
    }

    .contact-info-block__location-description,
    .contact-info-block__mail-description {
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        color: #4c4c4c;
        margin-top: 25px;
    }


    .contact-info-block__socials-block {
        margin-top: 50px;
        display: flex;

    }

    .contact-info-block__social-item {
        font-weight: 400;
        color: #4c4c4c;
        font-size: 30px;
        margin-right: 40px;
        transition: color 0.5s ease;
    }

    .contact-info-block__social-item:hover {
        color: #3971ff;
    }

    .contact-info-block__contact-form-block {
        flex: 1;
    }

    .contact-info-block__form-block {
        margin-bottom: 24px;
    }

    .contact-info-block__label {
        font-size: 16px;
        color: #4c4c4c;
        font-weight: 400;
        display: block;
    }

    .contact-info-block__input,
    .contact-info-block__textarea {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #a7a7a7;
        padding: 0 0 6px 0;
        outline: none;
        width: 100%;
        transition: border-color 0.5s ease;
        resize: none;
        margin-top: 6px;
    }

    .contact-info-block__input {
        height: 25px;
    }

    .contact-info-block__input:focus,
    .contact-info-block__textarea:focus {
        border-bottom: 1px solid #3971ff;
    }

    .contact-info-block__submit-block {
        margin-top: 44px;
    }

    .contact-info-block__submit-button {
        background-color: transparent;
        border: none;
        outline: none;
        color: #3971ff;
        font-family: RobotoMedium;
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        cursor: pointer;
    }

    .contact-info-block__nav-line {
        height: 2px;
        background-color: #3971ff;
        width: 50px;
        margin-top: 7px;
        transition: width 0.5s ease;
    }

    .contact-info-block__submit-block:hover .contact-info-block__nav-line {
        width: 150px;
    }
    /* CONTACT */

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