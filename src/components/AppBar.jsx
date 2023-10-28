import { Link } from "react-router-dom"

export const AppBar = () => {
    return <header>
                <nav>
                    <Link to="/login">Log in</Link>
                </nav>
    </header>
}