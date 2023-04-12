import './employees-add-form.css'
import React from 'react'

class EmployeesAddForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            salary: '',
        }
    }

    onValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render(){
        const {name, salary} = this.state
        return(
            <div className='app__add-form'>
                <h3>Добавьте нового сотрудника</h3>
                <form 
                    className='add__from'
                    onSubmit={this.onSubmit}>
                    <input type="text"  
                            className='addform__control' 
                            placeholder='Как его зовут?'
                            name='name'
                            value={name}
                            onChange={this.onValueChange}/>
                    <input type="number"  
                            className='addform__control' 
                            placeholder='З\П в $?'
                            name='salary'
                            value={salary}
                            onChange={this.onValueChange}/>
                    <button type='submit' 
                            className='btn'>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm