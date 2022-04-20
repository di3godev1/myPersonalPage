<template>
    <div class="w-screen h-screen bg-blackDiego fixed top-0" :class="isShown">
        <div @click="closeMenu">
            <div>
                <svg
                    width="318"
                    height="567"
                    viewBox="0 0 318 567"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-1.00136e-05 277.5C-1.00136e-05 437.386 129.614 567 289.5 567C449.386 567 579 437.386 579 277.5C579 117.614 449.386 -12 289.5 -12C129.614 -12 -1.00136e-05 117.614 -1.00136e-05 277.5Z"
                        fill="#DA87B1"
                    />
                    <path
                        d="M4.07746 277.5C4.07746 431.757 128.214 556.806 281.345 556.806C434.476 556.806 558.613 431.757 558.613 277.5C558.613 123.243 434.476 -1.80634 281.345 -1.80634C128.214 -1.80634 4.07746 123.243 4.07746 277.5Z"
                        fill="#071517"
                    />
                </svg>
            </div>
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
export default {
    data: () => ({
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
