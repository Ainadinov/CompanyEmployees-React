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
          {name: 'Marat L.', salary: 800, increase: true, rise: false, id:2},
          {name: 'Kanat K.', salary: 800, increase: false, rise: false, id:3},
      ],
      search: '',
      filter: 'all',
    }
    this.maxId = 4;
  }

  deleteItem = (id) =>{
    this.setState(({data})=>{
      return{
        data: data.filter(item => item.id !== id)
      }
    })
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

onToggleIncrease = (id) =>{
  this.setState(({data})=>({
      data: data.map(item=>{
          if(item.id === id){
              return{...item, increase: !item.increase}
          }
          return item;
      })
  }))
}

onToggleRise = (id) =>{
  this.setState(({data})=>({
      data: data.map(item=>{
          if(item.id === id){
              return{...item, rise: !item.rise}
          }
          return item;
      })
  }))
}

searchEmpl = (e) => {
  this.setState({ search: e.target.value });
};


filterPost = (items, filter) =>{
  switch(filter){
    case 'rise':
      return items.filter(item => item.rise)
    case 'moreThen1000':
      return items.filter(item => item.salary > 1000)
    default:
      return items
  }
}

onFilterSelect = (filter) => {
  this.setState({filter});
}

  render(){
    const {data, search, filter} = this.state
    const lowercasedSearch = search.toLowerCase();
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length
    const visibleData = this.filterPost(data, filter)
    return (
      <div className="app">
        <AppInfo employees={employees}increased={increased}/>

        <div className='search__panel'>
            <SearchPanel value={search} searchEmpl={this.searchEmpl}/>
            <AppFilter  filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>

        <EmployeesList
                      data={visibleData}
                      onDelete={this.deleteItem}
                      onToggleIncrease={this.onToggleIncrease}
                      onToggleRise={this.onToggleRise}
                      lowercasedSearch={lowercasedSearch}/>
        <EmployeesAddForm
                      onAdd={this.addItem}/>
      </div>
    );
  }
}
export default App;
