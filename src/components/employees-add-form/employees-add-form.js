import './employees-add-form.css'
import React from 'react'

class EmployeesAddForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='app__add-form'>
                <h3>Добавьте нового сотрудника</h3>
                <form className='add__from'>
                    <input type="text"  className='form__control new__post-label' placeholder='Как его зовут?'/>
                    <input type="number"  className='form__control new__post-label' placeholder='З\П в $?'/>
                    <button type='submit' className='btn btn__outline-ligth'>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm