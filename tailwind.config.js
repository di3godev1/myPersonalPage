const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
    ],
    theme: {
        colors: {
            greyDiego: "#636363",
            pinkDiego: "#DA87B1",
            blackDiego: "#071517",
            whiteDiego: "#FFFAFC",
        },
        extend: {
            fontFamily: {
                principal: ["Tomorrow", ...defaultTheme.fontFamily.sans],
                secondary: ["Helvok"],
            },
        },
    },
    plugins: [],
};
