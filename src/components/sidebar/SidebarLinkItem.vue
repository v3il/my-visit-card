<template>
    <li class="sidebar__nav-item" :class="{'sidebar__nav-item--active': isActive}">
        <div class="sidebar__nav-item-pointer"></div>
        <a :href="link" class="sidebar__nav-item-link">{{text}}</a>
    </li>
</template>

<script>
    export default {
        data() {
            return {}
        },

        props: ["link", "text", "isActive"]
    }
</script>

<style>
    .sidebar__nav-item {
        padding: 20px 0;
        border-bottom: 1px solid #a7a7a7;

        display: flex;
        align-items: center;
    }

    .sidebar__nav-item:last-child {
        border-bottom: none;
    }

    .sidebar__nav-item-pointer {
        width: 10px;
        height: 2px;
        background-color: #9db7f9;
        margin-right: 8px;
    }

    .sidebar__nav-item-link {
        text-decoration: none;
        color: #a7a7a7;
        text-transform: uppercase;
    }

    .sidebar__nav-item--active .sidebar__nav-item-pointer {
        width: 20px;
        background-color: #6b94fc;
    }

    .sidebar__nav-item--active .sidebar__nav-item-link {
        color: #4c4c4c;
        font-weight: 600;
    }
</style>