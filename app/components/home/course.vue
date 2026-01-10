<script lang="ts" setup>
import { Card } from "primevue";
import type { MinimalCourse } from "~~/shared/types/home";
const {
    public: { baseURL },
} = useAppConfig();

defineProps<MinimalCourse>();
</script>

<template>
    <Card class="relative overflow-hidden">
        <template #content>
            <div class="flex flex-col gap-2 justify-center pr-24 h-28">
                <h4 class="text-xl font-semibold">{{ title }}</h4>
                <p>{{ lecturer }}</p>
            </div>
            <div class="course-image absolute h-full right-0 top-0 w-fit">
                <img
                    class="h-full"
                    :src="`${baseURL}/thumbnailsImages/${imageId}.png`"
                    alt="Lecture image"
                />
            </div>
        </template>
    </Card>
</template>

<style lang="scss" scoped>
.course-image::after {
    content: "";
    position: absolute;
    top: 0;
    left: -1px;
    width: 100%;
    height: 110%;
    background: linear-gradient(
        to right,
        var(--p-card-background) 1px,
        rgba(255, 255, 255, 0) 40%
    );

    pointer-events: none;
}
</style>
