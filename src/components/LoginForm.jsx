import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "redux/UserSlice";

export const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget
        // console.log(form.elements.login.value);
        dispatch(logIn(form.elements.login.value))
        form.reset();
        navigate("/dashboard", { replace: true });

    }
    
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <br />
        <button type="submit">Log in</button>
    </form>
    );
}