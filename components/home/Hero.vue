<template>
    <div class="w-full max-w-7xl mx-auto overflow-x-hidden">
        <div class="w-full flex flex-col justify-center items-center">
            <!-- FIRST SECTION -->
            <div class="w-full flex justify-center items-center">
                <!-- NAME SECTION -->
                <div class="w-3/4 flex justify-center">
                    <div class="w-full flex justify-center items-center">
                        <div class="w-full">
                            <div class="">
                                <p
                                    class="text-xs font-secondary text-greyDiego"
                                >
                                    {{ h1 }}
                                </p>
                            </div>
                            <div class="">
                                <div class="">
                                    <p
                                        class="uppercase text-whiteDiego lg:text-5xl"
                                    >
                                        hello
                                    </p>
                                </div>
                                <div class="">
                                    <p class="uppercase text-whiteDiego">I'm</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex flex-row justify-start">
                            <div class="relative w-3/4">
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
                        <div class="relative w-full bg-blackDiego">
                            <div
                                class="w-36 h-36 bg-pinkDiego rounded-full absolute top-0 right-0"
                            >
                                <img
                                    src="https://scontent.fgye4-1.fna.fbcdn.net/v/t39.30808-6/246461857_579754813269051_2270695955322423465_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeGMACMPNU3oK0YKJVqslhMKyyiwZR7f0lrLKLBlHt_SWvOltMLOo4L6g5hV1yKPxYTyp6B2rpmijfXqdNjRgZGH&_nc_ohc=sHpNpAzHlUcAX-eWAlR&_nc_ht=scontent.fgye4-1.fna&oh=00_AT-BfKg_t3xvI0i8VIYqDcMOtuaT9JcLgZCpcxXHBjYXMw&oe=62616662"
                                    alt=""
                                    srcset=""
                                    class="object-cover rounded-full w-36 h-36 border-t-2 border-l-4 border-b-8 border-pinkDiego"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="relative top-6 overflow-x-hidden">
                <div class="w-full flex justify-center flex-col">
                    <div
                        class="flex flex-col justify-center items-center h-28 w-1/3 my-0 mx-auto"
                    >
                        <div class="relative w-full">
                            <p class="uppercase text-whiteDiego text-right">
                                front-
                            </p>
                        </div>
                        <div class="relative w-full">
                            <p class="uppercase text-whiteDiego text-right">
                                end
                            </p>
                        </div>
                    </div>
                    <div
                        class="bg-blackDiego relative w-1/3 -top-9 right-8 my-0 mx-auto"
                    >
                        <p
                            class="uppercase text-whiteDiego relative left-full top-1"
                        >
                            developer
                        </p>
                        <div class="flex justify-end left-full relative top-1">
                            <p class="text-greyDiego justify-end text-xs">
                                {{ closedH1 }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full h-52 flex justify-end">
                    <div class="w-1/3 h-52">
                        <p class="text-whiteDiego">
                            Soy Diego Reyes, frontend developer
                        </p>
                    </div>
                </div>
                <div class="w-full h-auto relative -top-80 -left-7">
                    <div
                        class="w-56 h-56 rounded-full border-8 border-pinkDiego sticky"
                    >
                        <img
                            src="https://scontent.fgye4-1.fna.fbcdn.net/v/t39.30808-6/246461857_579754813269051_2270695955322423465_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeGMACMPNU3oK0YKJVqslhMKyyiwZR7f0lrLKLBlHt_SWvOltMLOo4L6g5hV1yKPxYTyp6B2rpmijfXqdNjRgZGH&_nc_ohc=sHpNpAzHlUcAX-eWAlR&_nc_ht=scontent.fgye4-1.fna&oh=00_AT-BfKg_t3xvI0i8VIYqDcMOtuaT9JcLgZCpcxXHBjYXMw&oe=62616662"
                            alt=""
                            srcset=""
                            class="object-cover rounded-full w-56 h-56 border-t-2 border-r-4 border-b-8 border-pinkDiego"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyName from "../home/MyName.vue";
import MyNameDesktop from "../home/MyNameDesktop.vue";
import MyNameTablet from "../home/MyNameTablet.vue";
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

<style></style>
