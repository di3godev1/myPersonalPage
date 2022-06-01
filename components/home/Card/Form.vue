<template>
    <div
        class="w-full flex justify-center items-center max-w-5xl relative top-768px sm:top-16"
    >
        <form class="flex flex-col relative top-7 left-2 md:top-14 w-4/5">
            <div class="flex flex-col md:flex-row">
                <label for="name" class="text-whiteDiego text-2xl uppercase">
                    name:
                </label>
                <input
                    v-model="userName"
                    required
                    type="text"
                    placeholder="insert text"
                    id="name"
                    class="text-xs md:text-base italic py-1 px-2 md:ml-2 text-whiteDiego w-full bg-blackDiego border border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary md:placeholder:text-base h-11"
                />
                <span
                    class="text-whiteDiego italic text-xs"
                    v-if="!checkName"
                    >{{ userNameError }}</span
                >
            </div>
            <div class="mt-5 md:mt-5 flex flex-col md:flex-row">
                <label for="email" class="text-whiteDiego text-2xl uppercase">
                    email:
                </label>
                <input
                    v-model="userEmail"
                    type="email"
                    placeholder="insert text"
                    id="email"
                    required
                    class="text-xs italic py-1 px-2 md:ml-2 text-whiteDiego w-full bg-blackDiego border border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary md:text-base md:placeholder:text-base h-11"
                />
                <span class="text-whiteDiego italic text-xs" v-if="!checkMail">
                    {{ userEmailError }}</span
                >
            </div>
            <div class="mt-5 md:mt-5 md:flex-row">
                <label for="text" class="text-whiteDiego text-2xl uppercase">
                    text
                </label>
                <textarea
                    v-model="userMessage"
                    type="text"
                    placeholder="insert text"
                    class="py-1 px-2 text-whiteDiego w-full md:h-28 bg-blackDiego border border-pinkDiego rounded-3xl placeholder:text-sm placeholder:text-greyDiego placeholder:font-secondary text-sm sm:text-base italic md:placeholder:text-base h-28"
                />
            </div>
            <div class="w-full mt-3 flex justify-end items-end">
                <div class="w-24 h-10">
                    <button
                        type="submit"
                        class="w-full h-10 border text-xs rounded-3xl font-secondary md:w-full md:h-10"
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
        userNameError: "",
        userEmail: "",
        userEmailError: "",
        userMessage: "",
    }),
    computed: {
        //GETTING MAIL VALID IF NOT HAS REGEX OR EMPT
        checkMail() {
            if (!this.validMail(this.mail) && this.mail !== "") {
                this.userEmailError = "Ingresa un correo válido 😸";
                return false;
            } else {
                return true;
            }
        },

        //GETTING NAME VALID
        checkName() {
            if (!this.validName(this.name) && this.name !== "") {
                this.userNameError = "Ingresa tu nombre completo 😸";
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
                this.resetInputs();
            } catch (error) {
                console.error("CANNOT_SEND_EMAIL", error);
            }
        },
        //FUNCTION TO VALIDATE THE NAME
        validName(name) {
            const regex =
                /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/;
            return regex.test(name);
        },
        resetInputs() {
            this.userName = "";
            this.userEmail = "";
            this.userMessage = "";
        },
    },
};
</script>

<style scoped>
@media only screen and (min-device-width: 788px) {
    .top-768px {
        position: relative;
        top: 23%;
    }
}
</style>
