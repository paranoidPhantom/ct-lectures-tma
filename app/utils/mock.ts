import type { MinimalCourse } from "~~/shared/types/home";

export const useMockMinimalCourses = (): MinimalCourse[] => [
    {
        id: "1",
        title: "Алгоритмы и структуры данных",
        lecturer: "М.В. Первеев",
        imageId: "67a1294bc9faf55b8d5d09c1",
    },
    {
        id: "2",
        title: "Линейная алгебра",
        lecturer: "Р.А. Попков",
        imageId: "66d8ae7eae19cd3936331d35",
    },
    {
        id: "3",
        title: "Математический анализ",
        lecturer: "А.В. Иванов",
        imageId: "67a1294bc9faf55b8d5d09c1",
    },
    {
        id: "4",
        title: "Введение в программирование",
        lecturer: "С.С. Петров",
        imageId: "66d8ae7eae19cd3936331d35",
    },
];
