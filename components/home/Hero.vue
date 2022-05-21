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
                                class="w-36 h-36 bg-pinkDiego rounded-full relative lg:w-96 lg:h-96 sm:w-56 sm:h-56"
                            >
                                <img
                                    src="https://scontent.fgye1-1.fna.fbcdn.net/v/t1.6435-9/83791809_178617506716119_9119597483725422592_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGzpdTYD3PcozAvkWuPUsEi2agwY1UxmJLZqDBjVTGYkjn0_rJ8Jsy54VmtdsX_MdTAdbBUlKwP2aJdJrwqgRq3&_nc_ohc=dJU3LvENLdMAX-qo4Rd&_nc_ht=scontent.fgye1-1.fna&oh=00_AT__chU2siPIMbC8Phn6uFmqsJqXYAol_fu3CNftq6Yttw&oe=62AC8270"
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
                <div class="w-full flex justify-end">
                    <div class="w-full">
                        <p
                            class="text-greyDiego text-right relative -top-5 -left-9 text-xs pt-16"
                        >
                            {{ startTheDescription }}
                        </p>

                        <p
                            class="text-greyDiego text-right relative top-28 lg:top-28 md:top-20 -left-9 text-xs pt-16"
                        >
                            {{ closeTheDescription }}
                        </p>
                    </div>
                    <div class="w-1/3 right-10 relative">
                        <p
                            class="text-whiteDiego text-xs lg:text-2xl sm:text-lg font-secondary pt-16"
                        >
                            Soy Diego Reyes, frontend developer, un joven
                            estusiasmado por la tecnología y lo que esta puede
                            darnos como usuarios.
                        </p>
                    </div>
                </div>
                <!-- SECOND IMAGE SECTION -->
                <div class="w-full relative md:-top-96 -top-80 -left-11">
                    <div
                        class="w-56 h-56 rounded-full absolute -left-8 width-tablet width-desktop width-sm"
                    >
                        <img
                            src="https://scontent.fgye1-1.fna.fbcdn.net/v/t1.6435-9/83791809_178617506716119_9119597483725422592_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGzpdTYD3PcozAvkWuPUsEi2agwY1UxmJLZqDBjVTGYkjn0_rJ8Jsy54VmtdsX_MdTAdbBUlKwP2aJdJrwqgRq3&_nc_ohc=dJU3LvENLdMAX-qo4Rd&_nc_ht=scontent.fgye1-1.fna&oh=00_AT__chU2siPIMbC8Phn6uFmqsJqXYAol_fu3CNftq6Yttw&oe=62AC8270"
                            alt=""
                            srcset=""
                            class="object-cover rounded-full w-56 h-56 border-t-2 border-r-4 border-b-8 border-pinkDiego width-tablet width-desktop width-sm"
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
</style>
