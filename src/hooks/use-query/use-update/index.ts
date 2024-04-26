import { useAxios } from "@/hooks";
import { useMutation } from "react-query";
import type { AxiosError, AxiosResponse } from "axios";

export function useUpdate<TResponse, TData>(
    urlGenerator: (id: number) => string,
    key?: string
) {
    const { axiosPrivate } = useAxios();

    return useMutation<
        AxiosResponse<TResponse>,
        AxiosError<Error>,
        { id: number; data: TData }
    >({
        mutationKey: [key],
        mutationFn: async ({ id, data }) =>
            await axiosPrivate.patch(urlGenerator(id), data),
    });
}
