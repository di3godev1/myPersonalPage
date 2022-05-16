<template>
    <header class="w-full h-12 flex justify-between max-w-screen-2xl lg:h-28">
        <figure class="mx-0 my-auto pl-5">
            <img src="~/static/images/frame62.png" alt="Logo" />
        </figure>
        <!-- MENUBUTTON TO MOBILE VIEWS -->
        <TheMenuButton class="lg:hidden"></TheMenuButton>
        <!-- HEADER OF THE DESKTOP VIEW -->
        <div class="lg:flex hidden">
            <div class="w-full">
                <div class="justify-between flex flex-row">
                    <a
                        :href="item.section"
                        v-for="(item, index) in menu"
                        :key="index"
                    >
                        <TheTextStyle
                            :name="item.name"
                            class="text-whiteDiego mr-14 relative top-10 font-secondary"
                        >
                        </TheTextStyle>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data: () => ({
        menu: [
            {
                name: "about",
                section: "#aboutSection",
            },
            {
                name: "work",
                section: "workSection",
            },
            {
                name: "skills",
                section: "skillsSection",
            },
            {
                name: "say_hi",
                section: "#say_hiSection",
            },
        ],
    }),
};
</script>
