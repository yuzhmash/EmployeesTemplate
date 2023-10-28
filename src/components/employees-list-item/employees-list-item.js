import classNames from 'classnames';

import './employees-list-item.css';

const EmployeesListItem = ({name, salary, onDelete, onToggleProp, rise, increase, onChangeSalary}) => {
    return (
        <div>
            <li className={classNames("list-group-item d-flex justify-content-between", {increase}, {like: rise})}>
                <span 
                onClick={onToggleProp}
                data-toggle='rise' 
                className="list-group-item-label">{name}</span>
                <input 
                onChange={onChangeSalary}
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle='increase'>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        </div>
    )
}

export default EmployeesListItem;