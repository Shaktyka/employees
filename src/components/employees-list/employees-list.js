import EmployeeItem from "../employee-item/employee-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeeItem/>
            <EmployeeItem/>
            <EmployeeItem/>
        </ul>
    )
}

export default EmployeesList;