<template>
    <transition name="fade">
        <div class="notification" :class="[notificationParams.type]" v-show="isVisible">
            <i class="fa fa-check notification__icon" v-if="notificationParams.type === 'success'"></i>
            <i class="fa fa-times notification__icon" v-if="notificationParams.type === 'error'"></i>

            <div class="notification__message">{{notificationParams.message}}</div>
        </div>
    </transition>
</template>

<script>
    import EventBus from "@/components/EventBus";

    export default {
        name: "notification",

        data() {
            return {
                notificationParams: {
                    type: "",
                    message: "",
                    duration: 5000,
                },

                isVisible: false,
                timeoutId: null,
            }
        },

        methods: {
            dismissNotification() {
                this.isVisible = false;
                clearTimeout(this.timeoutId);
            },
        },

        created() {
            EventBus.$on("notification", (data = {}) => {
                this.dismissNotification();

                this.notificationParams = Object.assign(this.notificationParams, data);
                this.isVisible = true;

                this.timeoutId = setTimeout(
                    () => this.dismissNotification(),
                    this.notificationParams.duration
                );
            });
        }
    }
</script>

<style scoped>
    .notification {
        position: fixed;
        right: 12px;
        top: 12px;
        background-color: #4c4c4c;
        padding: 6px 18px;
        border-radius: 6px;
        max-width: 308px;
        z-index: 3;
        color: white;
        line-height: 24px;
        display: flex;
        align-items: center;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .notification__icon {
        font-size: 24px;
        margin-right: 12px;
    }

    .notification.success {
        border: 3px solid #86adff;
    }

    .notification.success .notification__icon {
        color: #86adff;
    }

    .notification.error .notification__icon {
        color: #ff9098;
    }

    .notification.error {
        border: 3px solid #ff9098;
    }
</style>