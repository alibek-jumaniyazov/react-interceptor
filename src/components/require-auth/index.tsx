import { useGetPrivate } from "@/hooks";
import { TUserResponse } from "@/pages/login";
import { authCheckUrl } from "@/utils/urls";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function RequireAuth() {
    const location = useLocation();
    const { data, isLoading, status } =
        useGetPrivate<TUserResponse>(authCheckUrl);

    if (isLoading) return <h1>Loading...</h1>;
    if (data && status === 200) return <Outlet />;
    return <Navigate to="/" state={{ from: location }} replace />;
}
