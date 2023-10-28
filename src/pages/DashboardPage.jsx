import { useLogOutRedirect } from "hooks/UseLogOutRedirect";

export const DashboardPage = () => {

    useLogOutRedirect();

    return <div>Dashboard Page</div>
};