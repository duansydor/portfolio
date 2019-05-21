import React from 'react';
import './assets/css/bootstrapgrid.css';
import './assets/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
  	<div className="container">
  		<Header/>
		  	<BrowserRouter>
			    <Switch>
			    	<Route exact path='/' component={Home}/>
			    	<Route path='/projetos' component={Projetos}/>
			    </Switch>
			</BrowserRouter>
		<Footer/>
	</div>
  );
}

export default App;
