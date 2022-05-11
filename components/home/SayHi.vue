<template>
    <section id="say_hiSection" class="mt-20 bg-blackDiego">
        <!-- SVG SECTION -->
        <div class="w-4/5 flex flex-col mx-auto max-w-7xl flex-wrap">
            <div class="flex justify-end pb-2 md:mr-10 lg:mr-1">
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
                class="rounded-full w-64 h-64 border-l-8 border-r-2 border-t-4 border-b-4 border-pinkDiego md:w-96 md:h-96 relative -top-4 lg:left-12 lg:-top-10 md:-top-6"
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
