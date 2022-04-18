<template>
    <footer
        class="w-full h-40 flex justify-between flex-col items-center max-w-screen-2xl"
    >
        <div class="w-4/5 h-14 mt-7">
            <div class="w-full h-14 flex flex-wrap justify-between">
                <div
                    class="w-12 h-12 border-2 border-pinkDiego rounded-full flex items-center justify-center"
                    v-for="(icon, index) in icons"
                    :key="index"
                >
                    <a :href="icon.url" target="_blank">
                        <icons
                            class="w-6 h-6 text-whiteDiego top-1/2"
                            :name="icon.name"
                        >
                        </icons>
                    </a>
                </div>
            </div>
        </div>
        <div class="w-full h-10 border-2 border-pinkDiego">
            <div class="w-20 h-4 flex flex-row">
                <div
                    v-for="(item, index) in items"
                    :key="index"
                    class="w-1/5 h-4 top-12 mr-2"
                >
                    <icons
                        :name="item.name"
                        class="w-full h-4 text-whiteDiego"
                    ></icons>
                </div>
                <div class="w-4/5 h-4">
                    <p class="text-whiteDiego text-sm">Ecuador</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import icons from "~/components/global/Icons.vue";
export default {
    components: {
        icons,
    },
    data: () => ({
        items: [
            {
                name: "web",
            },
        ],
        icons: [
            {
                name: "instagram",
                url: "google.com",
            },
            {
                name: "facebook",
                url: "facebook.com",
            },
            {
                name: "twitter",
                url: "twitter.com",
            },
            {
                name: "github",
                url: "github.com",
            },
        ],
    }),
};
</script>
