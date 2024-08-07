import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <header>Header</header>
            <main><Outlet /></main>
            <footer>Footer</footer>
        </>
    )
}