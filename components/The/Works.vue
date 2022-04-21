<template>
    <div class="w-full flex hsfdha">
        <div class="w-3/4 flex flex-row flex-wrap">
            <div class="w-3/4">
                <h3 class="text-2xl lg:text-4xl">{{ name }}</h3>
                <p class="text-greyDiego text-xs sm:text-base">{{ date }}</p>
            </div>
            <div>
                <p class="text-whiteDiego text-xs sm:text-base lg:text-2xl">
                    {{ description }}
                </p>
            </div>
            <div class="w-1/4">
                <div class="w-9 h-9 rounded-full border border-pinkDiego"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
    },
};
</script>
