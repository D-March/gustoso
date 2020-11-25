import React from 'react'
import Hero from './components/Hero';
import Pasta from './components/Pasta';
import Pizza from './components/Pizza';
import Desserts from './components/Desserts/index';
import Featured from './components/Featured/index';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { pastaData, pizzaData, dessertData } from './components/Pasta/data';


function App() {
  
  return (
    
    <Router>
        <GlobalStyle />
        <Hero />
        <Pasta data={pastaData}/>
        <Featured pizzas={pizzaData}/>
        <Pizza data={pizzaData}/>
        <Desserts data={dessertData}/>
        <Footer />
    </Router>
  );
}

export default App;
