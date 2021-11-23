import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [ 
        {
            id: 1,
            name: 'all',
            label: 'Все сотрудники' 
        },
        {
            id: 2,
            name: 'like',
            label: 'На повышение'
        },
        {
            id: 3,
            name: 'moreThen1000',
            label: 'З/П больше 1000$'
        }  
    ];

    const buttons = buttonsData.map(({id, name, label}) => {
        const isActive = props.filter === name;
        const clazz = isActive ? 'btn-light' : 'btn-outline-light';

        return (
            <button type="button"
                className={`btn ${clazz}`}
                name={name}
                key={id}
                onClick={(evt) => props.onFilterSelect(name)}
            >
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {
                buttons
            }
        </div>
    )
}

export default AppFilter;
