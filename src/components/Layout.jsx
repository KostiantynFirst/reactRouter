// import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { increment } from "redux/store";

export const Layout = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.myValue)
    return (
        <div>
            {value}
        <button onClick={() => dispatch(increment(100))}>Increment</button>
        </div>
    );
}