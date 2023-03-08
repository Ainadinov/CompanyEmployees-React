import "./employees-list-item.css"

const EmployeesListItem = (props) => {
    return(
        <li className="list_group-item">
            <span className="list__group-item-label">name</span>
            <input type="text" className="list__group-item-input"/>
            <div>
                <button type="button"
                        className="btn__cookie">
                <i className="fas fas-cookie"/>
                </button>

                <button type="button"
                        className="btn__trash">
                <i className="fas fas-trash"/>
                </button>
                <i className="fas fas-star"/>
            </div>
            
        </li>
    )
}

export default EmployeesListItem;