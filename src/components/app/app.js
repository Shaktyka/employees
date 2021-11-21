import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

const data = [
    {
      id: 1,
      name: 'Вася П.',
      salary: 300,
      increase: true
    },
    {
      id: 2,
      name: 'Миша Ф.',
      salary: 700,
      increase: false
    },
    {
      id: 3,
      name: 'Маша И.',
      salary: 1000,
      increase: false
    }
];

const App = () => {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />

      <EmployeeAddForm />
    </div>
  );
}

export default App;
