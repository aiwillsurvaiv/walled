// import './App.css';
import { useState } from 'react';
import logo from './assets/logo.png';
import NavItems from './components/navItems';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const menu = [
    {
      title: 'Dashboard',
      link: '#',
    },
    {
      title: 'Transfer',
      link: '#',
    },
    {
      title: 'Topup',
      link: '#',
    },
    {
      title: 'Signout',
      link: '#',
    },
  ];

  // const handleClick = (activeTab) => {
  //   setActiveTab(activeTab);
  // };

  return (
    <>
      <nav className="flex items-center w-screen justify-between bg-white py-4 px-8">
        <img src={logo} />
        <div className="flex gap-x-4">
          <NavItems menu={menu} activeTab={activeTab} handleClick={setActiveTab} />
        </div>
      </nav>
    </>
  );
}

export default App;
