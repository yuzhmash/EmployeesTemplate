import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.sass'

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary}) => {
    const elements = data.map(elem => {
        let {id, ...itemProp} = elem;
        return (
        <EmployeesListItem 
        key={id} {...itemProp}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
        onChangeSalary={(e) => onChangeSalary(e, id)}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;