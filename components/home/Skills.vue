<template>
    <section id="skillsSection " class="pt-28">
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
        <div class="mt-16 w-full flex justify-center">
            <div
                class="w-44 h-44 rounded-full border-pinkDiego border-2 border-l-8 border-y-2 border-r md:w-96 md:h-96 size-desktop"
            ></div>
        </div>
    </section>
</template>

<style scoped>
@media only screen and (min-device-width: 1024px) and (max-device-width: 1440px) {
    .size-desktop {
        width: 520px;
        height: 520px;
    }
}
</style>
