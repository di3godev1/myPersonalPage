<template>
    <div class="w-4/5 mt-24 ml-8">
        <div class="ml-5 w-5/6 flex justify-start flex-col">
            <a
                v-for="(network, index) in networks"
                :key="index"
                target="_blank"
                :href="network.url"
                class="text-4xl text-whiteDiego mb-4"
                >{{ network.name }}</a
            >
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        networks: [
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
