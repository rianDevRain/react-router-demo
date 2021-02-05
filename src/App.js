/** @format */
import { Home } from './components/Home';
import { Welcome } from "./components/Welcome";
import { Clock } from "./components/Clock";
import { Navigation } from "./components/Navigation";
import { Contact } from './components/Contact';
import { FourZeroFour } from './components/FourZeroFour';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jeopardy from './components/Jeopardy';

export default function App() {
	return (
		<Router>
			<div>
				<Navigation />
				<Switch>
				
					<Route 
						exact 
						path="/"
						render={(props) => <Home {...props} name="To My Website" />}
					
					>
						
					</Route>
					<Route 
						path="/welcome/:name"
						render={(props)=> <Welcome {...props} />}
						>
						
					</Route>
					<Route 
						path="/welcome"
						render={(props)=> <Welcome {...props} name="Anon"/>}
						>
						
					</Route>
					
					<Route path="/clock">
						<Clock />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/jeopardy">
						<Jeopardy />
					</Route>
					<Route path="*">
						<FourZeroFour />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
