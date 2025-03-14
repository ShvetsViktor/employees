import { Component } from 'react';

import './employee-add-form.css';

class EmployeeAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddEmployee(this.state.name, this.state.salary);
        this.setState({ name: '', salary: '' });
    }

    render () {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex" 
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What is their name?" 
                        value={name}
                        onChange={this.onValueChange} name='name'/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in £?" 
                        value={salary}
                        onChange={this.onValueChange} name='salary'/>

                    <button type="submit"
                            className="btn btn-outline-light"
                            style={{ width: "150px" }}
                            >Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeeAddForm;