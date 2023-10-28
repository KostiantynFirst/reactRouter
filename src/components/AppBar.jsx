import { Link } from "react-router-dom";

import { UserMenu } from "./UserMenu";


export const AppBar = () => {
    return <header style={{display: 'flex', justifyContent: 'space-between', padding: 8, borderBottom: '1px solid black', margin: 12}}>
                <nav>
                    <Link to="/login">Log in</Link>
                </nav>
                <UserMenu />
    </header>
}