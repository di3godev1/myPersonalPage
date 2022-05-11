<template>
    <div class="w-full flex justify-center items-center">
        <div class="flex flex-col">
            <div class="">
                <label for="name" class="text-whiteDiego"> name: </label>
                <input
                    type="text"
                    placeholder="insert text"
                    id="name"
                    class="w-5/6 bg-blackDiego border-2 border-pinkDiego rounded-xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-s"
                />
            </div>
            <div class="">
                <label for="email" class="text-whiteDiego"> email: </label>
                <input
                    type="text"
                    placeholder="insert text"
                    id="email"
                    class="w-5/6 bg-blackDiego border-2 border-pinkDiego rounded-xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary"
                />
                <div>
                    <input
                        type="text"
                        placeholder="insert text"
                        class="w-5/6 bg-blackDiego border-2 border-pinkDiego rounded-xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
