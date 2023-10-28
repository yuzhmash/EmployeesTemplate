import {Component} from 'react';

import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateData = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateData(term)
    }

    render() {
        const {term} = this.state
        return (
            <div>
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search an employee"
                    value={term}
                    onChange={this.onUpdateData}/>
            </div>
        )
    }
};


export default SearchPanel;