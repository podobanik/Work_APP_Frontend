import {Table} from "reactstrap";
import { useTable } from "react-table";
import ModalProblem from "../appModalProblem/ModalProblem";
import AppRemoveProblem from "../appRemoveProblem/appRemoveProblem";


const ListProblems = (props) => {
    const {problems} = props
    return (
        <Table dark>
            <thead>
            <tr>
                <th>Задача</th>
                <th>Сотрудник</th>
                <th>Категория задачи</th>
                <th>Статус задачи</th>
                <th>Объект АСУТП</th>
                <th>Контрольный срок</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {!problems || problems.length <= 0 ? (
                <tr>
                    <td colSpan="6" align="center">
                        <b>Пока ничего нет</b>
                    </td>
                </tr>
            ) : problems.map(problem => (
                    <tr key={problem.pk}>
                        <td>{problem.problem_text}</td>
                        <td>{problem.staff}</td>
                        <td>{problem.problem_type}</td>
                        <td>{problem.problem_status}</td>
                        <td>{problem.object_of_work}</td>
                        <td>{problem.control_date}</td>
                        <td>
                            <ModalProblem
                                create={false}
                                problem={problem}
                                resetState={props.resetState}
                                newProblem={props.newProblem}
                            />
                            &nbsp;&nbsp;
                            <AppRemoveProblem
                                pk={problem.pk}
                                resetState={props.resetState}
                            />
                        </td>
                    </tr>
                )
            )}
            </tbody>
        </Table>
    )
}

export default ListProblems