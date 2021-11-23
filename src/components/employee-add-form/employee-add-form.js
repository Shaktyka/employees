import {Component} from 'react';
import './employee-add-form.css';

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
        this.maxNameLength = 3
    }

    onValueChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            salary: ''
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const {onAdd} = this.props;

        if (this.state.name.length > this.maxNameLength 
            && this.state.salary !== '') {
            onAdd(this.state.name, this.state.salary);
            this.resetForm();
        }
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.handleSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        onChange={this.onValueChange}
                        name="name"
                        value={name}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input type="number"
                        onChange={this.onValueChange}
                        name="salary"
                        value={salary}
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />
    
                    <button
                        type="submit"
                        className="btn btn-outline-light"
                    >Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeeAddForm;
