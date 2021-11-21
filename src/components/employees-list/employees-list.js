import EmployeeItem from "../employee-item/employee-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {
    return (
        <ul className="app-list list-group">
            {
                data.map((item) => {
                    const {id, ...itemProps} = item;

                    return <EmployeeItem 
                                onDelete={() => onDelete(id)}
                                key={id} 
                                {...itemProps}
                            />;
                })
            }
        </ul>
    )
}

export default EmployeesList;