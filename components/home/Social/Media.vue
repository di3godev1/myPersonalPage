<template>
    <div class="w-full">
        <div class="w-4/5">
            <div
                v-for="(icon, index) in icons"
                :key="index"
                class="w-12 h-12 border-l-2 border-x-4 border-r-8"
            >
                <a :href="icon.url" target="_blank">
                    <Icons class="w-6 h-6" :name="icon.name"></Icons>
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
        ],
    }),
};
</script>
