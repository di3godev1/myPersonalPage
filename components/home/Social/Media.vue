<template>
    <div class="w-full mt-14 sm:pt-20 mx-auto">
        <div class="ml-5 w-5/6 flex justify-start">
            <h3 class="uppercase text-whiteDiego text-2xl">social media</h3>
        </div>
        <div class="flex w-5/6 ml-5 sm:w-2/5">
            <a
                v-for="(icon, index) in icons"
                :key="index"
                :href="icon.url"
                target="_blank"
                class="w-12 h-12 mt-5 mr-5 border-l border-t-2 border-b-2 border-r-4 rounded-full border-pinkDiego flex items-center justify-center"
            >
                <Icons
                    :name="icon.name"
                    class="w-6 h-6 text-whiteDiego"
                ></Icons>
            </a>
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
                name: "instagram",
                url: "https://www.instagram.com/yeyo.dev/",
            },
            {
                name: "twitter",
                url: "https://twitter.com/yeyodev",
            },
            {
                name: "github",
                url: "https://github.com/yeyodev1",
            },
        ],
    }),
};
</script>
