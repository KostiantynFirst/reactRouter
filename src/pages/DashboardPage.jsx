import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export const DashboardPage = () => {

    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn) {
            navigate('/login', { replace: true })
        }
    })

    return <div>Dashboard Page</div>
};