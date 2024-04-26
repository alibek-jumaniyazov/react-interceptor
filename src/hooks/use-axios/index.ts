import axios from "axios";
import { baseURL } from "@/utils/urls";
import { useInterceptors, useSelector } from "@/hooks";

export function useAxios() {
    const { accessToken } = useSelector((state) => state.auth);

    const axiosPublic = axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    const axiosPrivate = axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });

    useInterceptors(axiosPublic, axiosPrivate);

    return { axiosPublic, axiosPrivate };
}
