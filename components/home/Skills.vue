<template>
    <section id="skillsSection" class="pt-28 my-0">
        <!-- SVG SECTION -->
        <div class="w-full">
            <div class="flex justify-center">
                <!-- SVG TO MOBILE -->
                <div>
                    <my-skills class="flex sm:hidden" />
                </div>
                <!-- SVG TO DESKTOP -->
                <div>
                    <my-skills-desktop class="hidden lg:flex" />
                </div>
                <!-- SVG TO TABLET -->
                <div class="">
                    <my-skills-tablet class="hidden sm:flex lg:hidden" />
                </div>
            </div>
        </div>
        <!-- DETAILS SKILLS SECTION   -->
        <div class="mt-16 w-full mx-auto flex justify-center relative">
            <!-- LETTERS BACKGROUND -->
            <div class="w-full absolute top-6 sm:top-24 lg:top-1/3 left-0 z-10">
                <vue-tiny-slider v-bind="tinySliderOptions">
                    <div
                        v-for="(slide, index) in sliders"
                        :key="index"
                        class="flex justify-center items-center"
                    >
                        <p
                            class="text-whiteDiego text-7xl uppercase text-center"
                        >
                            {{ slide.name }}
                        </p>
                    </div>
                </vue-tiny-slider>
            </div>

            <!-- CIRCLE -->
            <div
                class="w-60 h-60 sm:h-80 sm:w-80 md:h-96 lg:h-96 border-l-8 border-y-4 relative z-0 border-r-2 border-pinkDiego rounded-full md:w-1/2 size-desktop size-353px"
            />
            <!-- IMAGE -->
        </div>
    </section>
</template>

<script>
export default {
    head() {
        return {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css",
                },
            ],
        };
    },

    data: () => ({
        tinySliderOptions: {
            mouseDrag: false,
            loop: true,
            items: 3,
            swipeAngle: 45,
            autoplay: true,
            autoplayTimeout: 1000,
            touch: false,
            center: true,
            autoWidth: true,
            controls: false,
            nav: false,
            autoplayText: ["", ""],
        },
        sliders: [
            {
                name: "html",
            },
            {
                name: "-",
            },
            {
                name: "nuxt",
            },
            {
                name: "-",
            },
            {
                name: "vue",
            },
            {
                name: "-",
            },
            {
                name: "css",
            },
            {
                name: "-",
            },
            {
                name: "javascript",
            },
            {
                name: "-",
            },
            {
                name: "-",
            },
            {
                name: "scss",
            },
            {
                name: "-"
            },
            {
                name: "typescript"
            },
            {
                name: "-"
            },
            {
                name: "express"
            },
            {
                name: "-"
            },
            {
                name: "docker"
            },
            {
                name: "-"
            },
        ],
    }),
};
</script>

<style scoped>
.mask {
    clip-path: circle(50% at 50% 50%);
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1024px) {
    .size-desktop {
        height: 520px;
    }
}
@media only screen and (min-device-width: 353px) and (max-device-width: 639px) {
    .size-353px {
        height: 340px;
        width: 340px;
    }
    .left-353px {
        position: absolute;
        left: 13px;
    }
    .right-353px {
        position: absolute;
        left: 0px;
        margin: 0 auto;
    }
}
@media only screen and (min-device-width: 425px) and (max-device-width: 509px) {
    .size-353px {
        height: 340px;
        width: 340px;
    }
    .left-353px {
        position: absolute;
        left: 15%;
    }
}
@media only screen and (min-device-width: 510px) and (max-device-width: 700px) {
    .size-353px {
        height: 340px;
        width: 340px;
    }
    .left-353px {
        position: absolute;
        left: 22%;
    }
}
@media only screen and (min-device-width: 701px) and (max-device-width: 920px) {
    .size-353px {
        height: 340px;
        width: 340px;
    }
    .left-353px {
        position: absolute;
        left: 30%;
    }
}
@media only screen and (min-device-width: 921px) and (max-device-width: 1025px) {
    .size-353px {
        height: 440px;
        width: 440px;
    }
    .left-353px {
        position: absolute;
        left: 28%;
    }
}
@media only screen and (min-device-width: 1026px) and (max-device-width: 1094px) {
    .size-353px {
        height: 500px;
        width: 500px;
    }
    .left-353px {
        position: absolute;
        left: 26%;
    }
}
@media only screen and (min-device-width: 1095px) and (max-device-width: 2086px) {
    .size-353px {
        height: 500px;
        width: 500px;
    }
    .left-353px {
        position: absolute;
        left: 30%;
    }
}
</style>
