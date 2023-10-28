import classNames from 'classnames';

import './app-filter.css'

const AppFilter = ({filter, onFilterSelect}) => {
    const btnsData = [
        {name: 'all', label: 'All employees'},
        {name: 'rise', label: 'For a promotion'},
        {name: 'salary', label: 'Salary more than 1000$'},
    ]
    const btns = btnsData.map(({name, label}) => {
        const active = filter === name;
        return (
            <button 
            className={classNames("btn", {'btn-light': active, 'btn-outline-light': !active})}
            type="button" 
            key={name}
            onClick={() => onFilterSelect(name)}>
                {label}
            </button>
        )
    })
    return (
        <div className='btn-group'>
            {btns}
        </div>
        
    )
}

export default AppFilter;