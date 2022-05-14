<template>
    <div class="w-full flex justify-center items-center max-w-5xl">
        <div class="flex flex-col relative top-7 left-2 md:top-48 w-4/5">
            <div class="flex flex-col md:flex-row">
                <label for="name" class="text-whiteDiego text-xl md:text-3xl">
                    name:
                </label>
                <input
                    type="text"
                    placeholder="insert text"
                    id="name"
                    class="md:ml-2 text-whiteDiego w-full bg-blackDiego border border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-s"
                />
            </div>
            <div class="md:mt-5 flex flex-col md:flex-row">
                <label for="email" class="text-whiteDiego text-xl md:text-3xl">
                    email:
                </label>
                <input
                    type="text"
                    placeholder="insert text"
                    id="email"
                    class="md:ml-2 text-whiteDiego w-full bg-blackDiego border border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary"
                />
            </div>
            <div class="mt-2 md:mt-5 md:flex-row">
                <textarea
                    type="text"
                    placeholder="insert text"
                    class="text-center text-whiteDiego w-full md:h-16 bg-blackDiego border border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary"
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
