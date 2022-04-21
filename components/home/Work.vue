<template>
    <section id="workSection">
        <div class="w-full">
            <my-work class="relative left-5 md:hidden lg:hidden" />
            <my-work-desktop class="lg:flex hidden" />
            <my-work-tablet class="md:flex hidden" />
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
};
</script>
