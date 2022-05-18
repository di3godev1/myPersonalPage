<template>
    <div class="w-full flex justify-center items-center max-w-5xl">
        <form class="flex flex-col relative top-7 left-2 md:top-48 w-4/5">
            <div class="flex flex-col md:flex-row">
                <label for="name" class="text-whiteDiego text-base md:text-3xl">
                    name:
                </label>
                <input
                    v-model="userName"
                    required
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
                    type="email"
                    placeholder="insert text"
                    id="email"
                    required
                    class="text-xs italic py-1 px-2 md:ml-2 text-whiteDiego w-full bg-blackDiego border border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary md:text-base md:placeholder:text-base"
                />
                <span class="text-whiteDiego italic" v-if="!checkMail">
                    {{ userEmailError }}</span
                >
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
                        class="w-full h-6 border text-xs rounded-3xl font-secondary md:w-full md:h-10"
                        :class="{
                            'border-pinkDiego text-whiteDiego': !checkMail,
                            'text-greyDiego border-greyDiego': checkMail,
                        }"
                        :disabled="checkMail"
                        @click.prevent="sendEmail"
                    >
                        .send()
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
    data: () => ({
        userName: "",
        userEmail: "",
        userEmailError: "",
        userMessage: "",
    }),
    computed: {
        //GETTING MAIL VALID IF NOT HAS REGEX OR EMPT
        checkMail() {
            if (!this.validMail(this.userMail) && this.userEmail !== "") {
                this.userEmailError = "Ingresa un correo valido";
                return false;
            } else {
                return true;
            }
        },
    },
    methods: {
        // FUNTION TO VALIDATE THE EMAIL
        validMail(mail) {
            const regex =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(mail);
        },
        // FUCTION TO GET THE EMAIL
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
