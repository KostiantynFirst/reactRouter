import { Outlet } from "react-router-dom";
// import { useDispatch, useSelector  } from "react-redux";
// import { increment, decrement } from "redux/myValue/slice";
import { AppBar } from "./AppBar";
export const Layout = () => {
    // const dispatch = useDispatch();
    // const value = useSelector(state => state.myValue)
    return (
        <div>
            <AppBar />
            <Outlet />
            {/* {value}
        <button onClick={() => dispatch(increment(100))}>Increment</button>
        <button onClick={() => dispatch(decrement(100))}>Decrement</button> */}
        </div>
    );
}