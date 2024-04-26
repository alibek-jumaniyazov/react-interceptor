import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreatePublic, useDispatch } from "@/hooks";
import { signupUrl } from "@/utils/urls";
import { setAuth } from "@/redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

type Props = {};
const FormScheme = z.object({
    username: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
});

export type TUserResponse = {
    accessToken: string;
    refreshToken: string;
};

export default function SignUp({ }: Props) {
    const { handleSubmit, register, reset } = useForm<
        z.infer<typeof FormScheme>
    >({
        resolver: zodResolver(FormScheme),
    });
    const { mutate, isLoading } = useCreatePublic<
        TUserResponse,
        z.infer<typeof FormScheme>
    >(signupUrl);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onSubmit(values: z.infer<typeof FormScheme>) {
        mutate(values, {
            onSuccess: (response) => {
                reset();
                dispatch(setAuth(response.data));
                console.log(response.data);
                
                return navigate("/profile");
            },
            onError: (error) => {
                console.error(error.message);
            },
        });
    }

    return (
        <div>
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
                <input
                    type="password"
                    placeholder="coniform password"
                    {...register("confirmPassword")}
                />
                <button disabled={isLoading} type="submit">
                    Signup
                </button>
            </form>
            <p> go to <Link to='/login'>login</Link> </p>
        </div>
    );
}
