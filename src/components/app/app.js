import {Component} from 'react';
import cryptoRandomString from 'crypto-random-string';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Sarah johnson', salary: 900, increase: false, rise: true, id: 1}, 
                {name: 'Michael Brown', salary: 4950, increase: true, rise: false, id: 2}, 
                {name: 'Emily Davis', salary: 7000, increase: false, rise: false, id: 3},
                {name: 'John Smith', salary: 1000, increase: false, rise: false, id: 4},
            ],
            term: '',
            filter: 'all',
        }
    }

    onChangeSalary = (e, id) => {
        this.setState(({data}) => ({
            data: data.map(elem => {
                return elem.id === id ? {...elem, salary: `${e.target.value}`.replace(/\D/, '')} : elem
            })
        }))
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id),
            }
        })
    }

    addItem = (name, salary) => {
        const htmlId = cryptoRandomString({length: 10, type: 'url-safe'});
        this.setState(({data}) => {
            return {
                data: [...data, {name, salary, increase: false, rise: false, id: htmlId}],
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(elem => elem.id === id ? {...elem, [prop]: !elem[prop]} : elem),
        }))
    }

    searchEmp = (items, term) => {
        return term.length === 0 ? items : items.filter(e => e.name.indexOf(term) > -1)
    }

    onUpdateData = (term) => {
        this.setState({term})
    }

    dataFilter = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(elem => elem.rise)
            case 'salary':
                return items.filter(elem => elem.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(e => e.increase).length;
        const visible = this.dataFilter(this.searchEmp(data, term), filter);
        return (
            <div className='app'>
                <AppInfo
                employees={employees}
                increased={increased}/>
    
                <div className='search-panel'>
                    <SearchPanel onUpdateData={this.onUpdateData}/>
                    <AppFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList 
                data={visible}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
                onChangeSalary={this.onChangeSalary}/>
                <EmployeesAddForm
                onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;


let str = 'Karl'

console.log(str.indexOf('Alex'))