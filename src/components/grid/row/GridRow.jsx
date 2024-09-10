import { useDispatch } from "react-redux";
import { selectRepo } from "../../../storage/repoSlice";
import { repoAction } from "../../../actions/repo";

const MAX_DESC = 100;
const MAX_TOPICS = 40;

export function GridRow({ i, n }) {
    const dispatch = useDispatch();

    function activeTr(e) {
        const tr = e.currentTarget;
        const rows = tr.parentElement.rows;
        Object.values(rows).forEach(i => i.classList.remove('table-primary'));
        tr.classList.add('table-primary');

        dispatch(repoAction(i.owner.login, i.name));
    }


    return (
        <tr onClick={activeTr}>
            <td>{n + 1}</td>
            <td>{i.full_name}</td>
            <td>{i.description?.length > MAX_DESC ? i.description.slice(0, MAX_DESC) + "..." : i.description}</td>
            <td>{i.language}</td>
            <td>{i.stargazers_count}</td>
            <td>{new Date(i.updated_at.slice(0, -1)).toLocaleDateString()}</td>
            <td>{i.topics.reduce((a, v) => {
                const res = a.length === 0 ? v :
                    a.length > MAX_TOPICS ? a : a + ", " + v;
                return res;
            }, "")}</td>
        </tr>
    )
}