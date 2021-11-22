import './employee-item.css';

const EmployeeItem = (props) => {
    /*
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
    */

    const {id, name, salary, increase, like, onDelete, onToggleProp} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    classNames = increase ? classNames + ' increase' : classNames;
    classNames = like ? classNames + ' like' : classNames;

    return (
        <li 
          className={classNames} 
          id={id} 
        >
            <span
                className="list-group-item-label"
                data-toggle="like" 
                onClick={onToggleProp}
            >
                {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    data-toggle="increase"
                    onClick={onToggleProp}
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        onClick={onDelete}
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
        
    )
}

export default EmployeeItem;