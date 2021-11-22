import {Component} from 'react';
import './employee-add-form.css';

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        const {name, salary} = this.state;
        // const {onAdd} = this.props;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    {/* Управляемые элементы */}
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
