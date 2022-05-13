<template>
    <div
        class="w-full h-screen bg-blackDiego fixed top-0 transition-all duration-300"
        :class="isShown"
    >
        <div>
            <figure class="mx-0 my-auto pl-5 mt-7">
                <img src="~/static/images/frame62.png" alt="Logo" />
            </figure>
            <div class="w-4 h-4">
                <button class="w-4 h-4" :class="isClosed" @click="closeMenu">
                    <Icons
                        class="w-6 h-6 text-whiteDiego"
                        :name="close"
                    ></Icons>
                </button>
            </div>
        </div>
        <div @click="closeMenu">
            <div class=""></div>
            <div
                class="absolute bottom-10 right-3 z-10 h-auto"
                :class="isClosed"
            >
                <a
                    :href="item.section"
                    v-for="(item, index) in menu"
                    :key="index"
                    class="m-7 bottom-0"
                >
                    <TheTextStyle
                        :name="item.name"
                        class="text-whiteDiego"
                    ></TheTextStyle>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Icons from "../global/Icons.vue";
export default {
    components: { Icons },
    data: () => ({
        close: "close",
        menu: [
            {
                name: "about",
                section: "#aboutSection",
            },
            {
                name: "work",
                section: "#workSection",
            },
            {
                name: "skills",
                section: "#skillsSection",
            },
            {
                name: "say_hi",
                section: "#say_hiSection",
            },
        ],
    }),
    computed: {
        ...mapGetters("menu", ["showMenu"]),
        isShown() {
            return this.showMenu === false ? "right-full" : "right-0";
        },
        isClosed() {
            return this.showMenu === true ? "right-0" : "right-full";
        },
    },
    methods: {
        closeMenu() {
            console.log("me debo de cerrar");
        },
    },
};
</script>
