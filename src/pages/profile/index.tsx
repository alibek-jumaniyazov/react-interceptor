import { useSelector } from "@/hooks";
import { useDispatch } from "@/hooks/use-dispatch/index";
import { clearAuth } from "@/redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
export default function ProfilePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    return (
        <main>
            <h1>Profile</h1>
            <p>
                change accaunt <button onClick={() => (dispatch(clearAuth()) ,navigate("/") )}>logout</button>{" "}
            </p>
        </main>
    );
}
