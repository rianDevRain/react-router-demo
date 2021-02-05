/** @format */

import JeopardyService from "../jeopardyService.js";
import { Component } from "react";

class Jeopardy extends Component {
	//set our initial state and set up our service as this.client on this component
	constructor(props) {
		super(props);
		this.client = new JeopardyService();
		this.state = {
			data: {},
			score: 0,
		};
	}
	//get a new random question from the API and add it to the data object in state
	getNewQuestion() {
		return this.client.getQuestion().then((result) => {
			this.setState({
				data: result.data[0],
			});
		});
	}
	//when the component mounts, get a the first question
	componentDidMount() {
		this.getNewQuestion();
	}
	//display the results on the screen
    
	render() {
        
		if (!this.state.data.id) {
			return (
				<div>
					<p>Loading</p>
					<p>Loading</p>
					<p>Loading</p>
					<p>Loading</p>
					<p>Loading</p>
					<p>Loading</p>
					<p>Loading</p>
					<p>Loading</p>
				</div>
			);
		}
		return (
            
        <div>
        {console.log(this.state.data)}
        {console.table(this.state.data)}
        {console.table(this.state.data.category)}
        <h2>Category: {this.state.data.category.title}</h2>
       <h1>Question: {this.state.data.question}
        </h1>
        <h2>Points: {this.state.data.value}</h2>
        </div>
        )
    }

}
export default Jeopardy;
