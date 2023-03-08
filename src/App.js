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

  }
  render(){
    return (
      <div className="app">
        <AppInfo/>

        <div className='search__panel'>
            <SearchPanel/>
            <AppFilter/>
        </div>

        <EmployeesList/>
        <EmployeesAddForm/>
      </div>
    );
  }
}
export default App;
