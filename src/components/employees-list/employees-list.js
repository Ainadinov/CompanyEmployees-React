import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeesList = () =>{
    return(
        <ul className='app__list list__grop'>
            <EmployeesListItem/>
        </ul>   
    )
}

export default EmployeesList;