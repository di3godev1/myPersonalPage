<template>
    <section id="workSection max-w-screen-2xl">
        <div class="w-full">
            <!-- SVG SECTION -->
            <my-work class="flex sm:hidden pl-5" />
            <my-work-desktop class="hidden lg:flex lg:pl-36" />
            <my-work-tablet class="hidden sm:flex lg:hidden sm:pl-10" />
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
        <!-- <div class="w-full pt-12 pl-8 sm:pl-36 lg:pl-52">
            <div class="">
                <h2 class="uppercase text-whiteDiego text-2xl lg:text-4xl">
                    maverick
                </h2>
            </div>
            <div class="">
                <p class="text-greyDiego text-xs sm:text-lg lg:text-lg">
                    {{ DateOfTheWorks }}
                </p>
            </div>
            <div>
                <h3>
                    {{ Work1 }}
                </h3>
            </div>
        </div> -->
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
