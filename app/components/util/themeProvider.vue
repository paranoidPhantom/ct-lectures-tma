<script lang="ts" setup>
import { useTheme } from "vue-tg";

const { onChange: onThemeChange, colorScheme } = useTheme();

const applyTheme = (override?: boolean) => {
    if (colorScheme.value == "dark" || override === true) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};

onThemeChange(applyTheme);

onMounted(() => {
    setTimeout(applyTheme, 100);
});
</script>
