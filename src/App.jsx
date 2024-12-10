// import './App.css';
import { useState } from 'react';
import logo from './assets/logo.png';
import foto from './assets/profil.png';
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

      <section className="flex item-center w-screen justify-between px-8 py-4">
        <div>
          <h1 className="py-2">`Good Morning, ${username}!`</h1>
          <p>Check all your incoming and outgoing transactions here</p>
        </div>

        <div className="flex items-center">
          <div className="text-right">
            <p>
              <b>Chelsea Immanuela</b>
            </p>
            <p>Personal Account</p>
          </div>

          <img src={foto} className="px-4" />
        </div>
      </section>
    </>
  );
}

export default App;
