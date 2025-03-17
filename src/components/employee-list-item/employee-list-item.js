import './employee-list-item.css';

const EmployeeListItem = (props) => {
    const {salary, name, onDelete, onToggleIncrease, onToggleRise, increase, rise, id, onSalaryChange} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += " increase";
    }
    if (rise) {
        classNames += " like";
    }
    
    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
            <input type="text" 
                    className="list-group-item-input" 
                    value={'£'+salary}
                    onChange={(e) => {onSalaryChange(e.target.value.replace(/£/g, ''), id)}}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button" 
                    className="btn-cookie btn-sm "
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm" 
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeeListItem;