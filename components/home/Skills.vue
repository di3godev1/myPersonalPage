<template>
    <section id="skillsSection " class="pt-28 max-w-screen-2xl">
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
                <div>
                    <my-skills-tablet class="hidden sm:flex lg:hidden" />
                </div>
            </div>
        </div>
        <!-- DETAILS SKILLS SECTION   -->
        <div class="mt-16 w-full mx-auto flex justify-center relative">
            <!-- LETTERS BACKGROUND -->
            <div class="w-full absolute top-6 md:top-1/3 left-0 z-10">
                <p
                    class="uppercase w-full text-7xl whitespace-nowrap absolute top-0 left-0 text-whiteDiego overflow-hidden"
                >
                    vue-html-css-nuxt-tailwindcss-javascript
                </p>
            </div>
            <!-- CIRCLE -->
            <div
                class="w-40 h-40 md:h-96 lg:h-96 border-l-8 border-y-4 relative z-0 border-r-2 border-pinkDiego rounded-full md:w-1/2 size-desktop"
            />
            <!-- IMAGE -->
            <div
                class="w-1/2 h-40 md:h-96 size-desktop absolute top-0 md:top left-1/4 right-0 z-20 rounded-full"
            >
                <img
                    src="~/static/images/ImagesAboutMe/elbichosiu.png"
                    class="h-40 md:h-96 absolute top-0 left-0 right-0 w-full object-cover object-center mask size-desktop"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.mask {
    clip-path: circle(50% at 50% 50%);
}
@media only screen and (min-device-width: 1024px) and (max-device-width: 1440px) {
    .size-desktop {
        height: 520px;
    }
}
</style>
