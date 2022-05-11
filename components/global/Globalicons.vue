<template>
    <svg
        class="select-none"
        style="width=100%; height=100%; stroke-width:2.5px"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path :d="iconName"></path>
    </svg>
</template>

<script>
import icon from "../../helpers/icon";
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        computed: {
            iconName() {
                return icons[icon.name];
            },
        },
    },
};
</script>
