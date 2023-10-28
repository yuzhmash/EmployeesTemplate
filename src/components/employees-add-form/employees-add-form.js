import {Component} from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }
    
    render() {
        // const {onAdd} = this.props;
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add a new employees</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What's his name?"
                        required
                        minLength='3'
                        name='name' 
                        value={name}
                        onChange={this.onChangeValue}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $?"
                        required
                        name='salary'
                        value={salary}
                        onChange={this.onChangeValue}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
        </div>
        )
    }
}

export default EmployeesAddForm;