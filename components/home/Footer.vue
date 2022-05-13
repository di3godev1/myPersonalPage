<template>
    <footer class="w-full h-12 mt-5">
        <div>
            <div></div>
            <div></div>
        </div>
        <div class="flex flex-wrap items-center">
            <div class="mr-2">
                <P class="text-whiteDiego">Diego Reyes</P>
            </div>
            <Icons class="w-3 h-3 mr-2 text-whiteDiego" :name="copy"></Icons>
            <div>
                <p class="text-whiteDiego">2022</p>
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
};
</script>
