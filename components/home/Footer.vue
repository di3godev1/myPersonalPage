<template>
    <footer class="w-full h-12 mt-5 flex justify-center items-center">
        <div class="w-4/5 flex justify-between items-center">
            <div class="flex flex-wrap items-center">
                <div class="mr-2">
                    <Icons class="w-3 h-3 text-whiteDiego" :name="web"></Icons>
                </div>
                <div>
                    <p class="text-sm text-whiteDiego">Ecuador</p>
                </div>
            </div>
            <div class="flex flex-wrap items-center">
                <div class="mr-2">
                    <P class="text-whiteDiego text-sm">Diego Reyes</P>
                </div>
                <Icons
                    class="w-3 h-3 mr-2 text-whiteDiego"
                    :name="copy"
                ></Icons>
                <div>
                    <p class="text-whiteDiego">{{ getCurrentYear }}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Icons from "../../components/global/Icons.vue";
export default {
    components: { Icons },
    data: () => ({
        copy: "copyright",
        web: "web",
    }),
    computed: {
        getCurrentYear() {
            return this.getYear();
        },
    },
    methods: {
        getYear() {
            const date = new Date();
            const currentYear = date.getFullYear();
            console.log(date);
            console.log(currentYear);
            return currentYear;
        },
    },
};
</script>
