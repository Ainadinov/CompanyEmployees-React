import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleRise, onToggleIncrease, lowercasedSearch}) =>{
    const elements = data.filter(item =>item.name.toLowerCase().includes(lowercasedSearch)).map((item)=>{
        const {id, ...itemProps} = item
        return(
            <EmployeesListItem
                                key={id}
                                {...itemProps}
                                onDelete={() => onDelete(id)}
                                onToggleRise={() => onToggleRise(id)}
                                onToggleIncrease={() => onToggleIncrease(id)}/>
        )
    })
    return(
        <ul className='app__list list__grop'>
            {elements}
        </ul>   
    )
}

export default EmployeesList;