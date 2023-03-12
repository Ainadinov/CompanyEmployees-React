import React from 'react';
import './App.css';
import AppFilter from './components/app-filter/app-filte';
import AppInfo from './components/app-info/app-info';
import EmployeesAddForm from './components/employees-add-form/employees-add-form';
import EmployeesList from './components/employees-list/employees-list';
import SearchPanel from './components/search-pannel/search-pannel';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: [
          {name: 'Samat K.', salary: 800, increase: false, rise: false, id:1},
          {name: 'Marat L.', salary: 800, increase: false, rise: false, id:2},
          {name: 'Kanat K.', salary: 800, increase: false, rise: false, id:3},
      ]
    }
    this.maxId = 4;
  }


  addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        rise: false,
        id: this.maxId++
    }

    if(newItem.name !== '' && newItem.salary !== '' ){
            this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
    }
}


  render(){
    const {data} = this.state
    return (
      <div className="app">
        <AppInfo/>

        <div className='search__panel'>
            <SearchPanel/>
            <AppFilter/>
        </div>

        <EmployeesList
                      data={data}/>
        <EmployeesAddForm
                      onAdd={this.addItem}/>
      </div>
    );
  }
}
export default App;
