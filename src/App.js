import React from 'react';
import './assets/css/bootstrapgrid.css';
import './assets/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
  	<div className="container">
  		<Header/>
		  	<BrowserRouter>
			    <Switch>
			    	<Route exact path='/' component={Home}/>
			    </Switch>
			</BrowserRouter>
		<Footer/>
	</div>
  );
}

export default App;
