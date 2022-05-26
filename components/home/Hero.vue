<template>
    <div id="aboutSection" class="w-full mx-auto max-w-screen-2xl">
        <div class="w-full flex flex-col justify-center items-center">
            <!-- FIRST SECTION -->
            <div class="w-full flex justify-center items-center">
                <!-- NAME SECTION -->
                <div class="w-3/4 flex justify-center relative left-5 top-7">
                    <div
                        class="w-full flex flex-col justify-center items-center"
                    >
                        <div
                            class="w-full flex flex-col justify-center items-start"
                        >
                            <div class="w-full flex relative lg:left-36">
                                <p
                                    class="text-xs sm:text-base font-secondary italic text-greyDiego bottom-3"
                                >
                                    {{ openTitle }}
                                </p>
                            </div>
                            <div class="w-full relative lg:left-36">
                                <div class="lg:pl-8">
                                    <p
                                        class="text-2xl uppercase text-whiteDiego lg:text-7xl sm:text-5xl"
                                    >
                                        hello,
                                    </p>
                                </div>
                                <div class="relative left-7">
                                    <p
                                        class="text-2xl uppercase text-whiteDiego sm:text-5xl lg:text-7xl"
                                    >
                                        I'm
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex flex-row justify-start">
                            <!-- SVGNAMESECTIOM -->
                            <div class="relative w-3/4 top-5 left-1">
                                <my-name class="flex sm:hidden" />
                                <my-name-tablet
                                    class="hidden sm:flex lg:hidden"
                                />
                                <my-name-desktop class="hidden lg:flex" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- IMAGE SECTION -->
                <div class="w-1/4">
                    <div class="w-full flex justify-center items-center">
                        <div
                            class="relative w-full bg-blackDiego lg:top-8 top-3 overflow-x-hidden"
                        >
                            <div
                                class="w-36 h-36 rounded-full relative lg:w-96 lg:h-96 sm:w-56 sm:h-56"
                            >
                                <img
                                    src="../../static/images/ImagesAboutMe/yo.png"
                                    alt=""
                                    srcset=""
                                    class="object-cover rounded-full w-36 h-36 border-t-2 border-l-4 border-b-8 border-pinkDiego lg:w-96 lg:h-96 sm:w-56 sm:h-56"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="relative top-6">
                <div class="w-full flex justify-center flex-col">
                    <div
                        class="flex flex-col justify-center items-center h-28 w-1/3 my-0 mx-auto"
                    >
                        <div class="relative w-full right-5">
                            <p
                                class="text-2xl uppercase text-whiteDiego text-right sm:text-5xl lg:text-7xl"
                            >
                                front-
                            </p>
                        </div>
                        <div class="relative w-full right-5">
                            <p
                                class="text-2xl sm:text-5xl uppercase text-whiteDiego text-right lg:text-7xl"
                            >
                                end
                            </p>
                        </div>
                    </div>
                    <div
                        class="bg-blackDiego relative w-1/3 -top-9 right-16 lg:top-1 lg:-left-36 my-0 mx-auto sm:mt-6 mt-2"
                    >
                        <p
                            class="text-2xl uppercase text-whiteDiego relative left-full top-1 sm:text-5xl lg:text-7xl"
                        >
                            developer
                        </p>
                        <div
                            class="flex justify-end -right-40 relative top-1 md:-right-72 md:top-3"
                        >
                            <p
                                class="text-greyDiego justify-end text-xs font-secondary italic"
                            >
                                {{ closeTitle }}
                            </p>
                        </div>
                    </div>
                </div>
                <!-- DESCRIPTION SECTION -->
                <div class="mt-44 w-full">
                    <div
                        class="px-5 relative -top-12 sm:flex sm:justify-end sm:items-center sm:right-80 top"
                    >
                        <p class="text-greyDiego">{{ startTheDescription }}</p>
                    </div>
                    <div
                        class="w-full flex justify-center items-center relative -top-12 sm:flex sm:justify-end sm:items-center sm:right-4 top"
                    >
                        <p
                            class="lg:text-2xl sm:text-base sm:w-1/2 px-2 text-whiteDiego text-center text-sm"
                        >
                            Soy Diego Reyes, frontend developer, un joven
                            estusiasmado por la tecnología y lo que esta puede
                            darnos como usuarios.
                        </p>
                    </div>
                    <div
                        class="px-5 relative bottom-9 sm:flex sm:justify-end sm:items-center sm:right-4 top"
                    >
                        <p class="text-greyDiego">{{ closeTheDescription }}</p>
                    </div>
                </div>
                <!-- SECOND IMAGE SECTION -->
                <div class="w-full relative -top-96 -left-11">
                    <div
                        class="border-t-2 border-r-4 border-b-8 border-pinkDiego w-56 h-56 rounded-full absolute -left-8 width-tablet width-desktop width-sm"
                    >
                        <img
                            src="../../static/images/ImagesAboutMe/yo.png"
                            alt=""
                            srcset=""
                            class="object-cover rounded-full w-56 h-56 width-tablet width-desktop width-sm mask"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyName from "../global/MyName.vue";
import MyNameDesktop from "../global/MyNameDesktop.vue";
import MyNameTablet from "../global/MyNameTablet.vue";
export default {
    components: {
        MyName,
        MyNameDesktop,
        MyNameTablet,
    },
    data: () => ({
        openTitle: "<h1>",
        closeTitle: "</h1>",
        startTheDescription: "<p>",
        closeTheDescription: "</p>",
    }),
};
</script>

<style scoped>
@media only screen and (min-device-width: 490px) and (max-device-width: 740px) {
    .top {
        position: relative;
        top: 80px;
    }
}

@media only screen and (min-device-width: 405px) and (max-device-width: 767px) {
    /* .hero-description {
        width: 50%;
        display: flex;
        justify-content: end;
        align-items: center;
        position: relative;
        right: 4;
    } */
    /* sm:flex sm:justify-end sm:items-center sm:right-4 */
}

@media only screen and (min-device-width: 490px) and (max-device-width: 767px) {
    .width-sm {
        width: 350px;
        height: 350px;
        margin-bottom: 40px;
    }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
    .width-tablet {
        width: 470px;
        height: 470px;
    }
}

@media only screen and (min-device-width: 1024px) {
    .width-desktop {
        width: 543px;
        height: 543px;
    }
}
/* .mask {
    clip-path: ellipse(30% 53% at 50% 50%);
} */
</style>
