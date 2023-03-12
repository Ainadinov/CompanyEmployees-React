import "./employees-list-item.css"

const EmployeesListItem = (props) => {
    const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise} = props
    
    let classNames = "list__group-item";
    if(increase){
        classNames += ' increase'
    }
    if(rise){
        classNames += ' like'
    }

    return(
        <li className={"list__group-item like increase"}>
            <span className="list__group-item-label">{name}</span>
            <input type="text" className="list__group-item-input" defaultValue={salary + '$'}/>
            <div className="list__group-btn">
                <button type="button"
                        className="btn__cookie">
                <i className="fas fa-cookie"/>
                </button>

                <button type="button"
                        className="btn__trash">
                <i className="fas fa-trash"/>
                </button >
                <i className="fas fa-star"/>
            </div>
            
        </li>
    )
}

export default EmployeesListItem;