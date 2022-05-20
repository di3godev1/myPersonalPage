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
            <div class="w-full absolute top-6 md:top-1/3 left-0 z-10">
                <p
                    class="uppercase w-full text-7xl whitespace-nowrap absolute top-0 left-0 text-whiteDiego overflow-hidden text-center"
                >
                    vue-html-css-nuxt-tailwindcss-javascript
                </p>
            </div>

            <!-- CIRCLE -->
            <div
                class="w-48 h-48 sm:h-80 sm:w-80 md:h-96 lg:h-96 border-l-8 border-y-4 relative z-0 border-r-2 border-pinkDiego rounded-full md:w-1/2 size-desktop size-353px"
            />
            <!-- IMAGE -->
            <div
                class="w-1/2 md:h-96 size-desktop size-353px absolute top-0 md:top-1 left-1/4 right-0 z-20 rounded-full left-353px"
            >
                <img
                    src="~/static/images/ImagesAboutMe/elbichosiu.png"
                    class="md:h-96 absolute -top-1 -left-0 right-0 w-full object-cover object-center mask size-desktop size-353px"
                />
            </div>
        </div>
    </section>
</template>

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
        height: 340px;
        width: 340px;
    }
    .left-353px {
        position: absolute;
        left: 32%;
    }
}
</style>
