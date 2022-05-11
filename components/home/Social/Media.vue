<template>
    <div class="w-full">
        <div class="w-full flex flex-wrap justify-between mx-auto">
            <div
                v-for="(icon, index) in icons"
                :key="index"
                class="mt-14 ml-4 w-12 h-12 border-l-2 border-t-4 border-b-4 border-r-8 rounded-full border-pinkDiego flex justify-center items-center"
            >
                <a :href="icon.url" target="_blank">
                    <Icons
                        class="w-6 h-6 text-whiteDiego"
                        :name="icon.name"
                    ></Icons>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Icons from "../../global/Icons.vue";
export default {
    components: { Icons },
    data: () => ({
        icons: [
            {
                name: "facebook",
                url: "https://www.facebook.com/di3godev",
            },
            {
                name: "instagram",
                url: "https://www.instagram.com/di3godev/",
            },
            {
                name: "twitter",
                url: "https://twitter.com/di3godev",
            },
            {
                name: "github",
                url: "https://github.com/di3godev1",
            },
        ],
    }),
};
</script>
