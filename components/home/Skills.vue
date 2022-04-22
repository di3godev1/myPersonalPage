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
    </section>
</template>
