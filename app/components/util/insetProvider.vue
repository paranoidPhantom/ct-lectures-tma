<script lang="ts" setup>
import { useViewport } from "vue-tg";

const { safeAreaInset, contentSafeAreaInset } = useViewport();
</script>

<template>
    <div
        :style="{
            'padding-top': safeAreaInset.top + 'px',
            'padding-bottom': safeAreaInset.bottom + 'px',
            'padding-left': safeAreaInset.left + 'px',
            'padding-right': safeAreaInset.right + 'px',
        }"
    >
        <div
            :style="{
                'margin-top': contentSafeAreaInset.top + 'px',
                'margin-bottom': contentSafeAreaInset.bottom + 'px',
                'margin-left': contentSafeAreaInset.left + 'px',
                'margin-right': contentSafeAreaInset.right + 'px',
            }"
        >
            <!-- Inset provider content -->
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
