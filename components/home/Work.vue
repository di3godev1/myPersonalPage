<template>
    <section id="workSection " class="max-w-screen-2xl md:mt-36 lg:mt-52">
        <div class="w-full">
            <!-- SVG SECTION -->
            <!-- <my-work class="flex sm:hidden pl-5" />
            <my-work-desktop class="hidden lg:flex lg:pl-36" />
            <my-work-tablet class="hidden sm:flex lg:hidden sm:pl-10" /> -->
            <!-- SVG SECTION -->
            <div class="w-full">
                <div class="flex justify-center">
                    <!-- SVG TO MOBILE -->
                    <div>
                        <my-work class="flex sm:hidden" />
                    </div>
                    <!-- SVG TO DESKTOP -->
                    <div>
                        <my-work-desktop class="hidden lg:flex" />
                    </div>
                    <!-- SVG TO TABLET -->
                    <div>
                        <my-work-tablet class="hidden sm:flex lg:hidden" />
                    </div>
                </div>
            </div>
            <!-- WORK'S NAMES SECTION -->
        </div>
        <div
            class="w-full pt-12 pl-8 sm:pl-36 lg:pl-52"
            :href="work.link"
            v-for="(work, index) in works"
            :key="index"
        >
            <a target="_blank" rel="noopener noreferrer " :href="work.link">
                <TheWorks
                    :name="work.name"
                    class="text-whiteDiego"
                    :description="work.description"
                    :date="work.date"
                >
                </TheWorks>
            </a>
        </div>
    </section>
</template>

<script>
import MyWork from "../global/MyWork.vue";
import MyWorkDesktop from "../global/MyWork.vue";
import MyWorkTablet from "../global/MyWork.vue";
export default {
    components: {
        MyWork,
        MyWorkDesktop,
        MyWorkTablet,
    },
    data: () => ({
        // DateOfTheWorks: "<!-- 2022 -->",
        works: [
            {
                name: "maverick",
                link: "somosmaverick.com",
                description: "Agencia de desarrollo de productos digitales",
                date: "<!-- 2022 -->",
            },
        ],
    }),
};
</script>
