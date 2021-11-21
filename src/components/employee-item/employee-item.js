import {Component} from 'react';
import './employee-item.css';

class EmployeeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {id, name, salary} = this.props;
        const {increase, like} = this.state;
        let classNames = "list-group-item d-flex justify-content-between";
        classNames = increase ? classNames + ' increase' : classNames;
        classNames = like ? classNames + ' like' : classNames;

        return (
            <li className={classNames} id={id}>
                <span 
                    onClick={this.onLike}
                    className="list-group-item-label"
                >
                        {name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={this.onIncrease}
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
            
        )
    };
}

export default EmployeeItem;