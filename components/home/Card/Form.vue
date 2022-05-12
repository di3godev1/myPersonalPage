<template>
    <div class="w-full flex justify-center items-center max-w-5xl">
        <div class="flex flex-col relative top-7 left-4 md:top-48 w-4/5">
            <div class="relative left-4 md:left-0">
                <label for="name" class="text-whiteDiego text-xl md:text-3xl">
                    name:
                </label>
                <input
                    type="text"
                    placeholder="insert text"
                    id="name"
                    class="text-whiteDiego w-2/4 bg-blackDiego border md:w-3/5 border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-s"
                />
            </div>
            <div class="md:mt-5 flex">
                <label for="email" class="text-whiteDiego text-xl md:text-3xl">
                    email:
                </label>
                <input
                    type="text"
                    placeholder="insert text"
                    id="email"
                    class="text-whiteDiego relative left-3 w-3/5 bg-blackDiego border border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary"
                />
            </div>
            <div class="mt-2 md:mt-5">
                <textarea
                    type="text"
                    placeholder="insert text"
                    class="md:w-4/5 mx-2 text-center text-whiteDiego w-5/6 md:h-16 bg-blackDiego border border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary"
                />
            </div>
            <div class="w-full mt-3">
                <div class="w-1/2 mx-auto relative right-5">
                    <button
                        type="submit"
                        class="w-full text-whiteDiego border border-pinkDiego rounded-3xl"
                    >
                        .send()
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
