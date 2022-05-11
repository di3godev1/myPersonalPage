<template>
    <div class="w-full flex justify-center items-center">
        <div class="flex flex-col relative top-7 left-4 md:top-12">
            <div class="relative left-5">
                <label for="name" class="text-whiteDiego text-3xl">
                    name:
                </label>
                <input
                    type="text"
                    placeholder="insert text"
                    id="name"
                    class="w-2/4 bg-blackDiego border-2 border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-s"
                />
            </div>
            <div class="">
                <label for="email" class="text-whiteDiego text-3xl">
                    email:
                </label>
                <input
                    type="text"
                    placeholder="insert text"
                    id="email"
                    class="w-5/6 bg-blackDiego border-2 border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary"
                />
                <div class="mt-2">
                    <input
                        type="text"
                        placeholder="insert text"
                        class="w-5/6 h-16 bg-blackDiego border-2 border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary"
                    />
                </div>
            </div>
            <div class="w-full mt-3">
                <div class="w-1/2 mx-auto relative right-5">
                    <button
                        type="submit"
                        class="w-full text-whiteDiego border-2 border-pinkDiego rounded-3xl"
                    >
                        .send()
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
