import { useTheme } from "vue-tg";

export const useThemeProvider = () => {
    const { onChange: onThemeChange, colorScheme } = useTheme();

    const applyTheme = (override?: boolean) => {
        if (colorScheme.value == "dark" || override === true) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    onThemeChange(applyTheme);

    if (import.meta.dev) {
        applyTheme(true);
        return;
    }
    setTimeout(applyTheme, 100);
};
