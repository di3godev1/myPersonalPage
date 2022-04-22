<template>
    <div class="w-full flex">
        <!-- WORKS DETAILS SECTION -->
        <div class="w-4/5">
            <div class="w-full grid grid-cols-3 grid-rows-2">
                <div class="">
                    <h3 class="text-2xl lg:text-4xl">{{ name }}</h3>
                </div>
                <div class="row-start-2 col-start-1">
                    <p class="text-greyDiego text-xs sm:text-base">
                        {{ date }}
                    </p>
                </div>
                <div class="row-start-3 col-end-4 col-start-1 relative -top-3">
                    <p class="text-whiteDiego text-xs sm:text-base lg:text-2xl">
                        {{ description }}
                    </p>
                </div>
            </div>
        </div>
        <!-- <div class="w-3/4 flex flex-row flex-wrap">
            <div class="w-3/4 flex flex-row">
                <div>
                    <h3 class="text-2xl lg:text-4xl">{{ name }}</h3>
                    <p class="text-greyDiego text-xs sm:text-base">
                        {{ date }}
                    </p>
                </div>
                <div>hey</div>
            </div>
            <div>
                <p class="text-whiteDiego text-xs sm:text-base lg:text-2xl">
                    {{ description }}
                </p>
            </div>
        </div> -->
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
