import EmployeeItem from "../employee-item/employee-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    return (
        <ul className="app-list list-group">
            {
                data.map((item) => {
                    const {id, ...itemProps} = item;

                    return <EmployeeItem 
                                onDelete={() => onDelete(id)}
                                onToggleProp={(evt) => onToggleProp(id, evt.currentTarget.getAttribute('data-toggle'))}
                                key={id} 
                                {...itemProps}
                            />;
                })
            }
        </ul>
    )
}

export default EmployeesList;