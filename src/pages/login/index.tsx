import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreatePublic, useDispatch } from "@/hooks";
import { loginUrl } from "@/utils/urls";
import { setAuth } from "@/redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const FormScheme = z.object({
    username: z.string(),
    password: z.string(),
});

export type TUserResponse = {
    accessToken: string;
    refreshToken: string;
};

export default function LoginPage() {
    const { handleSubmit, register, reset } = useForm<
        z.infer<typeof FormScheme>
    >({
        resolver: zodResolver(FormScheme),
    });
    const { mutate, isLoading } = useCreatePublic<
        TUserResponse,
        z.infer<typeof FormScheme>
    >(loginUrl);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onSubmit(values: z.infer<typeof FormScheme>) {
        mutate(values, {
            onSuccess: (response) => {
                reset();
                dispatch(setAuth(response.data));
                return navigate("/profile");
            },
            onError: (error) => {
                console.error(error.message);
            },
        });
    }

    return (
        <main>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="username"
                    {...register("username")}
                />
                <input
                    type="password"
                    placeholder="password"
                    {...register("password")}
                />
                <button disabled={isLoading} type="submit">
                    submit
                </button>
            </form>
        </main>
    );
}
