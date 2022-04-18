<template>
    <div id="workSection">
        <div class="w-full h-40 grid grid-cols-3 grid-rows-1">
            <div class="w-4 h-3">
                <p class="text-greyDiego">{{ p }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        p: "<p>",
    }),
};
</script>
