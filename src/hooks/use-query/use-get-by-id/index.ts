import { useAxios } from "@/hooks";
import { useQuery } from "react-query";
import type { AxiosError, AxiosResponse } from "axios";

export function useGetById<TResponse>(
    urlGenerator: (id: number) => string,
    id?: number,
    key?: string
) {
    const { axiosPublic } = useAxios();

    const {
        data: res,
        error,
        ...rest
    } = useQuery<AxiosResponse<TResponse>, AxiosError<Error>>({
        queryKey: [key, id],
        queryFn: async () => await axiosPublic.get(urlGenerator(id!)),
        enabled: !!id,
    });

    return {
        data: res?.data,
        ...rest,
        status: res?.status,
        error: error?.response?.data,
    };
}

export function useGetByIdPrivate<TResponse>(
    urlGenerator: (id: number) => string,
    id?: number,
    key?: string
) {
    const { axiosPrivate } = useAxios();

    const {
        data: res,
        error,
        ...rest
    } = useQuery<AxiosResponse<TResponse>, AxiosError<Error>>({
        queryKey: [key, id],
        queryFn: async () => await axiosPrivate.get(urlGenerator(id!)),
        enabled: !!id,
    });

    return {
        data: res?.data,
        ...rest,
        status: res?.status,
        error: error?.response?.data,
    };
}
