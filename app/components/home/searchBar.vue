<script lang="ts" setup>
import { InputGroup, InputText, Select } from "primevue";

const options = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "SC"];

const search = defineModel<string>();
const selected = defineModel<string>("semester");
</script>

<template>
    <InputGroup class="fixed bottom-4 left-0 px-4">
        <InputText
            v-model="search"
            class="w-full"
            type="text"
            placeholder="Поиск"
        />
        <Select v-model="selected" :options="options" style="flex: 0.4 1 auto">
            <template #dropdownicon>
                <Icon
                    name="material-symbols:chevron-right-rounded"
                    class="-rotate-90"
                />
            </template>
        </Select>
    </InputGroup>
</template>

<style lang="scss" scoped></style>
