<script lang="ts" setup></script>

<template>
    <ClientOnly>
        <div>
            <UtilInsetProvider>
                <UtilThemeProvider />
                <main class="p-4">
                    <NuxtLayout>
                        <NuxtPage />
                    </NuxtLayout>
                </main>
            </UtilInsetProvider>
        </div>
        <template #fallback>
            <div class="h-screen flex justify-center items-center text-3xl">
                <Icon name="svg-spinners:ring-resize" />
            </div>
        </template>
    </ClientOnly>
</template>
