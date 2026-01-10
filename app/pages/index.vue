<script lang="ts" setup>
import { Button } from "primevue";

const search = useLocalStorage<string>("search", () => "");
const semester = useLocalStorage<string>("semester", () => "S1");

const { data: courses, error: coursesError } = await useFetch<MinimalCourse[]>(
    () => `/api/courses/${semester.value.toLowerCase()}`,
    { ...useApi(), watch: [semester] }
);

courses.value = useMockMinimalCourses() || courses.value;

const filteredCourses = computed(() => {
    if (!courses.value) return null;
    return courses.value.filter(
        (course) =>
            course.title.toLowerCase().includes(search.value.toLowerCase()) ||
            course.lecturer.toLowerCase().includes(search.value.toLowerCase())
    );
});
</script>

<template>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-16">
        <template v-if="filteredCourses">
            <HomeCourse
                v-for="course in filteredCourses"
                :key="course.id"
                v-bind="course"
            />
            <h4 v-if="filteredCourses.length === 0" class="mx-auto">
                Ничего не нашлось 👀
            </h4>
        </template>

        <p v-else>{{ coursesError }}</p>

        <NuxtLink class="mx-auto sm:mx-0" to="/create">
            <Button icon="pi">+</Button>
        </NuxtLink>

        <HomeSearchBar v-model="search" v-model:semester="semester" />
    </section>
</template>

<style lang="scss" scoped></style>
