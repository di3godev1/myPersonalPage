<template>
    <section id="say_hiSection" class="mt-20 bg-blackDiego">
        <!-- SVG SECTION -->
        <div
            class="w-4/5 flex flex-col mx-auto max-w-7xl flex-wrap justify-center items-center"
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
            <div
                class="rounded-full w-64 h-64 border-l-8 border-r-2 border-t-4 border-b-4 border-pinkDiego md:w-96 md:h-96 relative -top-4 lg:left-12 lg:-top-6 md:-top-6 size-tablet"
            >
                <HomeCardForm />
            </div>
            <div>
                <Media />
            </div>
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
@media only screen and (min-device-width: 768px) {
    .size-tablet {
        width: 664px;
        height: 664px;
    }
}
</style>
