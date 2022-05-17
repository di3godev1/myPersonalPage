<template>
    <div class="w-full flex justify-center items-center max-w-5xl">
        <div class="flex flex-col relative top-7 left-2 md:top-48 w-4/5">
            <div class="flex flex-col md:flex-row">
                <label for="name" class="text-whiteDiego text-base md:text-3xl">
                    name:
                </label>
                <input
                    v-model="userName"
                    type="text"
                    placeholder="insert text"
                    id="name"
                    class="text-xs md:text-base italic py-1 px-2 md:ml-2 text-whiteDiego w-full bg-blackDiego border border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary md:placeholder:text-base"
                />
            </div>
            <div class="md:mt-5 flex flex-col md:flex-row">
                <label
                    for="email"
                    class="text-whiteDiego text-base md:text-3xl"
                >
                    email:
                </label>
                <input
                    v-model="userEmail"
                    type="text"
                    placeholder="insert text"
                    id="email"
                    class="text-xs italic py-1 px-2 md:ml-2 text-whiteDiego w-full bg-blackDiego border border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary md:text-base md:placeholder:text-base"
                />
            </div>
            <div class="mt-2 md:mt-5 md:flex-row">
                <textarea
                    v-model="userMessage"
                    type="text"
                    placeholder="insert text"
                    class="py-1 px-2 text-whiteDiego w-full md:h-28 bg-blackDiego border border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary md:text-base italic text-xs md:placeholder:text-base"
                />
            </div>
            <div class="w-full mt-3">
                <div
                    class="top-16 w-16 h-6 mx-auto relative right-3 md:w-32 md:h-10"
                >
                    <button
                        type="submit"
                        class="w-full h-6 text-whiteDiego border text-xs border-pinkDiego rounded-3xl font-secondary md:w-full md:h-10"
                        @click="sendEmail"
                    >
                        .send()
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
    data: () => ({
        userName: "",
        userEmail: "",
        userMessage: "",
    }),
    methods: {
        async sendEmail() {
            const mail = {
                from_name: this.userName,
                from_email: this.userEmail,
                message: this.userMessage,
            };
            try {
                await emailjs.send(
                    process.env.NUXT_APP_SERVICE,
                    process.env.NUXT_APP_TEMPLATE,
                    mail,
                    process.env.NUXT_APP_ID
                );
                alert("correo enviado");
            } catch (error) {
                console.error("CANNOT_SEND_EMAIL", error);
            }
        },
    },
};
</script>
