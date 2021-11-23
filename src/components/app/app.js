import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

const data = [
    {
      id: 1,
      name: 'Вася П.',
      salary: 300,
      increase: false,
      like: true
    },
    {
      id: 2,
      name: 'Миша Ф.',
      salary: 700,
      increase: true,
      like: false
    },
    {
      id: 3,
      name: 'Маша И.',
      salary: 1000,
      increase: false,
      like: false
    }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: data,
        term: '',
        filter: 'all'
    }
    this.maxId = 3;
    this.companyName = 'WorkShop';
    this.maxSalaryFilter = 1000;
  }

  deleteItem = (id) => {
      this.setState(({data}) => {
        return {
          data: data.filter((item) => item.id !== id)
        }
      });
  }

  increaseMaxId = () => {
    this.maxId = this.maxId + 1
  }

  addItem = (name, salary) => {
    const newItem = {
      id: this.maxId + 1,
      name,
      salary,
      increase: false,
      like: false
    };

    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
          data: newArr
        }
    })

    this.increaseMaxId();
  }

  onToggleProp = (id, prop) => {
    /* 1 способ:
    this.setState(({data}) => {
        const index = data.findIndex((elem) => elem.id === id);
        const old = data[index];
        const newItem = {...old, increase: !old.increase};
        const newArr = [...data.slice(0,index), newItem, ...data.slice(index + 1)];
        return {
          data: newArr
        }
    })
    */
    this.setState(({data}) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]} 
        }
        return item;
      })
    }))
  }

  /*
  onToggleLike = (id) => {
    this.setState(({data}) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {...item, like: !item.like} 
        }
        return item;
      })
    }))
  }
  */

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterItems = (items, filter) => {
    switch (filter) {
      case 'like': 
        return items.filter((item) => item.lik);
      case 'moreThen1000':
        return items.filter((item) => item.salary > this.maxSalaryFilter);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({
        filter
    });
  }

  render() {

    const {data, term, filter} = this.state;
    const companyName = this.companyName;
    const employees = this.state.data.length;
    const employeesForBonus = this.state.data
      .filter((item) => item.increase === true).length;
    const visibleData = this.filterItems( this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo
            companyName={companyName}
            allCount={employees}
            bonusCount={employeesForBonus}
        />
  
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter 
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
  
        <EmployeesList 
          data={visibleData} 
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
  
        <EmployeeAddForm
          onAdd={this.addItem}
        />
      </div>
    );
  }

}

export default App;
