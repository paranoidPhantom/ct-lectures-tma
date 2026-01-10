<script lang="ts" setup>
useThemeProvider();
</script>

<template>
    <UtilInsetProvider>
        <main class="p-4">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </main>
    </UtilInsetProvider>
</template>
