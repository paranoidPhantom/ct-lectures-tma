export const useApi = (options?: (typeof useFetch)["arguments"][1]) => {
    const {
        public: { baseURL },
    } = useAppConfig();
    return {
        baseURL: baseURL as string,
        ...options,
    };
};
