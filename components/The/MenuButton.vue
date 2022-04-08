<template>
    <div class="text-whiteDiego flex">
        <button class="pr-5" @click="getMenu">.menu()</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    methods: {
        ...mapActions("menu", ["activeMenu"]),
        getMenu() {
            console.log("menu activado");
            this.activeMenu(true);
        },
    },
};
</script>
