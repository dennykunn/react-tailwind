import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';
import about from './pages/about';
import menu from './pages/menu';
import contact from './pages/contact';
import Dropdown from './components/Dropdown';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('i resizeddddd')
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }

  })

  return (
    <>
      <Navbar toggle={toggle}/>     
      <Dropdown isOpen={isOpen} toggle={toggle}/> 
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={menu} />
        <Route path="/about" component={about} />
        <Route path="/contact" exact component={contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
