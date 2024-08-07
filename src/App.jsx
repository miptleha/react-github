import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { RepoList } from './pages/RepoList';
import { Repo } from './pages/repo';
import { User } from './pages/User';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<RepoList />} />
                <Route path=":user" element={<User />} />
                <Route path=":user/:repo" element={<Repo />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}