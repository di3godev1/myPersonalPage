<template>
    <div class="w-full mt-14">
        <div class="ml-5 w-5/6 flex justify-start">
            <h3 class="uppercase text-whiteDiego text-2xl">social media</h3>
        </div>
        <div class="flex">
            <a
                v-for="(icon, index) in icons"
                :key="index"
                :href="icon.url"
                target="_blank"
                class=""
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
                name: "facebook",
                url: "https://www.facebook.com/di3godev",
            },
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
