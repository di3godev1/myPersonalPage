<template>
    <div class="w-full mx-auto max-w-screen-2xl">
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
                            <div class="w-full">
                                <p
                                    class="text-xs sm:text-base font-secondary text-greyDiego"
                                >
                                    {{ openTitle }}
                                </p>
                            </div>
                            <div class="w-full relative lg:left-36">
                                <div class="">
                                    <p
                                        class="uppercase text-whiteDiego lg:text-7xl sm:text-5xl"
                                    >
                                        hello,
                                    </p>
                                </div>
                                <div
                                    class="relative left-7 lg:left-32 sm:left-24"
                                >
                                    <p
                                        class="uppercase text-whiteDiego sm:text-5xl lg:text-7xl"
                                    >
                                        I'm
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex flex-row justify-start">
                            <!-- SVGNAMESECTIOM -->
                            <div class="relative w-3/4 top-5 left-6">
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
                            class="relative w-full bg-blackDiego lg:-top-20 overflow-x-hidden"
                        >
                            <div
                                class="w-36 h-36 bg-pinkDiego rounded-full relative -right-11 lg:w-96 lg:h-96 sm:w-56 sm:h-56"
                            >
                                <img
                                    src="https://scontent.fgye1-2.fna.fbcdn.net/v/t39.30808-6/246461857_579754813269051_2270695955322423465_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=19026a&_nc_eui2=AeGMACMPNU3oK0YKJVqslhMKyyiwZR7f0lrLKLBlHt_SWvOltMLOo4L6g5hV1yKPxYTyp6B2rpmijfXqdNjRgZGH&_nc_ohc=psQ_vFbI578AX8yYAHR&_nc_ht=scontent.fgye1-2.fna&oh=00_AT_VqgJg6IXqqEWrhj7U3LVLPGM0IU15E-EjCWzVjIf3dA&oe=627B1BA2"
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
                        <div class="relative w-full">
                            <p
                                class="text-2xl uppercase text-whiteDiego text-right sm:text-5xl"
                            >
                                front-
                            </p>
                        </div>
                        <div class="relative w-full">
                            <p
                                class="text-2xl sm:text-5xl uppercase text-whiteDiego text-right"
                            >
                                end
                            </p>
                        </div>
                    </div>
                    <div
                        class="bg-blackDiego relative w-1/3 -top-9 right-8 my-0 mx-auto sm:mt-6 mt-2"
                    >
                        <p
                            class="text-2xl uppercase text-whiteDiego relative left-full top-1 sm:text-5xl"
                        >
                            developer
                        </p>
                        <div class="flex justify-end left-full relative top-1">
                            <p class="text-greyDiego justify-end text-xs">
                                {{ closeTitle }}
                            </p>
                        </div>
                    </div>
                </div>
                <!-- DESCRIPTION SECTION -->
                <div class="w-full h-52 flex justify-end">
                    <div class="w-1/3 h-52 pr-10">
                        <p
                            class="text-whiteDiego text-xs lg:text-2xl sm:text-lg"
                        >
                            Soy Diego Reyes, frontend developer, un joven
                            estusiasmado por la tecnología y lo que esta puede
                            darnos como usuarios.
                        </p>
                    </div>
                </div>
                <!-- SECOND IMAGE SECTION -->
                <div class="w-full relative -top-80 -left-11">
                    <div
                        class="w-56 h-56 rounded-full border-8 border-pinkDiego absolute -left-8 width-tablet"
                    >
                        <img
                            src="https://scontent.fgye1-2.fna.fbcdn.net/v/t39.30808-6/246461857_579754813269051_2270695955322423465_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=19026a&_nc_eui2=AeGMACMPNU3oK0YKJVqslhMKyyiwZR7f0lrLKLBlHt_SWvOltMLOo4L6g5hV1yKPxYTyp6B2rpmijfXqdNjRgZGH&_nc_ohc=psQ_vFbI578AX8yYAHR&_nc_ht=scontent.fgye1-2.fna&oh=00_AT_VqgJg6IXqqEWrhj7U3LVLPGM0IU15E-EjCWzVjIf3dA&oe=627B1BA2"
                            alt=""
                            srcset=""
                            class="object-cover rounded-full w-56 h-56 border-t-2 border-r-4 border-b-8 border-pinkDiego width-tablet"
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
    }),
};
</script>

<style scoped>
@media only screen and (min-device-width: 720px) and (max-device-width: 1023px) {
    .width-tablet {
        width: 470px;
        height: 470px;
    }
}
</style>
