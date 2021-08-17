import {useState} from "react";
import EmployeesPage from "./components/EmployeesPage.jsx";
import MainPage from "./components/MainPage.jsx";
import './App.css';

function App() {

  const MAIN_MENU = 'main';
  const EMPLOYEES_MENU = 'employees';

  const currentPath = window.location.pathname.substring(1);

  const [menu, setMenu] = useState([MAIN_MENU, EMPLOYEES_MENU].includes(currentPath) ? currentPath : MAIN_MENU);
  const menuHandler = newMenu => event => {
    event.preventDefault();
    if (newMenu === menu) {return;}
    setMenu(newMenu);
    window.history.pushState(null, null, `/${newMenu}`);
  }  

  return (
    <div>
      <header>
        <a href="/main" onClick={menuHandler(MAIN_MENU)}>Главная</a>
        <a href="/employees" onClick={menuHandler(EMPLOYEES_MENU)}>Сотрудники</a>
      </header>
      {
        menu === MAIN_MENU && <MainPage/>
      }
      {
        menu === EMPLOYEES_MENU && <EmployeesPage/>
      }
    </div>
  );
}

export default App;
