<template>
    <section id="say_hiSection" class="mt-20 bg-blackDiego">
        <!-- SVG SECTION -->
        <div
            class="w-full md:w-4/5 flex flex-col mx-auto max-w-7xl flex-wrap justify-center items-center relative lg:right-10"
        >
            <div
                class="flex justify-end pb-2 md:mr-10 lg:mr-1 relative md:left-40 left-16"
            >
                <!-- SVG TO MOBILE -->
                <div>
                    <my-say-hi class="flex sm:hidden" />
                </div>
                <!-- SVG TO DESKTOP -->
                <div>
                    <my-say-hi-desktop class="hidden lg:flex" />
                </div>
                <!-- SVG TO TABLET -->
                <div>
                    <my-say-hi-tablet class="hidden sm:flex lg:hidden" />
                </div>
            </div>
        </div>
        <div class="w-full">
            <HomeCardForm />
        </div>
        <div>
            <Media />
        </div>
    </section>
</template>

<script>
import Media from "../home/Social/Media.vue";
export default {
    components: {
        Media,
    },
};
</script>

<style scoped>
@media only screen and (max-device-width: 767px) {
    .size-tablet {
        width: 285px;
        height: 285px;
    }
}
@media only screen and (min-device-width: 768px) {
    .size-tablet {
        width: 664px;
        height: 664px;
    }
}
@media only screen and (min-device-width: 641px) and (max-device-width: 769px) {
    .size-tablet {
        width: 420px;
        height: 420px;
    }
}
</style>
