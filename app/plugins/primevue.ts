import PrimeVue from "primevue/config";
import Lara from "@primeuix/themes/lara";
import { definePreset } from "@primeuix/themes";
import { useWebAppTheme } from "vue-tg";

const { themeParams } = useWebAppTheme();

const theme = themeParams.value;

const hexToHsl = (hex?: string): [number, number, number] | undefined => {
    if (!hex) return undefined;
    hex = hex.replace(/^#/, "");
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
        s = 0;

    const l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
};

const buttonHsl = hexToHsl(theme.button_color);

const Noir = definePreset(Lara, {
    semantic: {
        primary: {
            50: buttonHsl
                ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, 5%)`
                : "{zinc.50}",
            100: buttonHsl
                ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, 10%)`
                : "{zinc.100}",
            200: buttonHsl
                ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, 20%)`
                : "{zinc.200}",
            300: buttonHsl
                ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, 30%)`
                : "{zinc.300}",
            400: buttonHsl
                ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, 40%)`
                : "{zinc.400}",
            500: buttonHsl
                ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, 50%)`
                : "{zinc.500}",
            600: buttonHsl
                ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, 60%)`
                : "{zinc.600}",
            700: buttonHsl
                ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, 70%)`
                : "{zinc.700}",
            800: buttonHsl
                ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, 80%)`
                : "{zinc.800}",
            900: buttonHsl
                ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, 90%)`
                : "{zinc.900}",
            950: buttonHsl
                ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, 95%)`
                : "{zinc.950}",
        },
        colorScheme: {
            light: {
                primary: {
                    color: buttonHsl
                        ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, ${buttonHsl[2]}%)`
                        : "{zinc.950}",
                    inverseColor: "#ffffff",
                    hoverColor: buttonHsl
                        ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, ${
                              buttonHsl[2] / 1.2
                          }%)`
                        : "{zinc.900}",
                    activeColor: "{zinc.800}",
                },
                highlight: {
                    background: "{zinc.950}",
                    focusBackground: "{zinc.700}",
                    color: "#ffffff",
                    focusColor: "#ffffff",
                },
            },
            dark: {
                primary: {
                    color: buttonHsl
                        ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, ${buttonHsl[2]}%)`
                        : "{zinc.50}",
                    inverseColor: "{zinc.950}",
                    hoverColor: buttonHsl
                        ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, ${
                              buttonHsl[2] * 1.1
                          }%)`
                        : "{zinc.50}",
                    activeColor: buttonHsl
                        ? `hsl(${buttonHsl[0]}, ${buttonHsl[1]}%, ${
                              buttonHsl[2] * 1.2
                          }%)`
                        : "{zinc.200}",
                    contrastColor: "#ffffff",
                },
                highlight: {
                    background: "rgba(250, 250, 250, .16)",
                    focusBackground: "rgba(250, 250, 250, .24)",
                    color: "rgba(255,255,255,.87)",
                    focusColor: "rgba(255,255,255,.87)",
                },
            },
        },
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        theme: { preset: Noir, options: { darkModeSelector: ".dark" } },
    });
});
