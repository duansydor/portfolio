import React from 'react';
import './assets/css/bootstrapgrid.css';
import './assets/css/App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Single from './pages/Single';



import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
  	<div>
		  	<HashRouter>
  				<Header/>
			    <Switch>
			    	<Route exact path='/' component={Home}/>
			    	<Route path='/projetos' component={Projetos}/>
			    	<Route path='/sobre' component={Sobre}/>
			    	<Route path='/contato' component={Contato}/>
			    	<Route path='/single' component={Single}/>
			    </Switch>
			</HashRouter>
	</div>
  );
}

export default App;
