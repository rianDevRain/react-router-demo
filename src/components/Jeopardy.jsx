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
			score: 0,   formData: {
				answwer: "",
				
			},
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
    


    // ======================

    handleChange = (event) => {
		const formData = { ...this.state.formData };

		console.log(formData);
		console.log(event.target);
		console.log(event.target.name);
		console.log(event.target.value);
		formData[event.target.name] = event.target.value;
		this.setState({
			formData,
		});
        console.table(this.state.score)

};
// ===================================

handleSubmit = (event) => {
    event.preventDefault();

    console.log('handleSubmit')

    let input = this.state.formData.answer.toLowerCase(); 

    let jeoAnswer = this.state.data.answer.toLowerCase();

    if (input === jeoAnswer) {
        console.log('match')
        this.setState( (state, props  )=> ({
            score: state.score + state.data.value,
            formData: {
                answer: ""
            }
        }))

    } else {
        console.log('WRONG you ARE in JEOPARDY')

        this.setState((state,props) =>({
            score: state.score - state.data.value,
            formData: {
                answer: ""
            }
        }) )
    }
    this.setState({
        submitted: true,
    });
    this.getNewQuestion();
};

//================================================

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
        {/* {console.table(this.state.data)}
        {console.table(this.state.data.category)}  */}
        <h3>Category: {this.state.data.category.title}</h3>
        <br/>
       <h3>Question: {this.state.data.question}</h3>
       <br/>
        <h3>Your Score: {this.state.data.value}</h3>
        {this.state.score}

                



        <form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="answer">Make A Guess:</label>
						<input 
                        type="text" 
                        name="answer" 
                        value={this.state.formData.answer} 
                        onChange={this.handleChange} />
					</div>
					<h4>Answer is Not case sensitive!!</h4>
					<button>Submit</button> <br />
					{/* {this.state.formData.answer} */}
				
				</form>
        </div>
        )
    }

}
export default Jeopardy;
