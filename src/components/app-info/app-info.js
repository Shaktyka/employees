import './app-info.css';

const AppInfo = (props) => {
  const {allCount, bonusCount, companyName} = props;

  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании {companyName}</h1>
      <h2>Общее число сотрудников: {allCount}</h2>
      <p>Премию получат: {bonusCount}</p>
    </div>
  );
}

export default AppInfo;