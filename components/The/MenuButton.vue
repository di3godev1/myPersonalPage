<template>
    <div class="text-whiteDiego flex">
        <button class="pr-5 font-secondary" @click="getMenu">.menu()</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    methods: {
        ...mapActions("menu", ["activeMenu"]),
        getMenu() {
            this.activeMenu(true);
        },
    },
};
</script>
