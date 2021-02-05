import { Component } from "react";

export class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			submitted: false,
			formData: {
				firstName: "",
				lastName: "",
			},
		};
	}

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
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			submitted: true,
		});
	};

	resetForm = (event) => {
		event.preventDefault();
		this.setState({
			submitted: false,
			formData: {
				firstName: "",
				lastName: "",
			},
		});
	};

	render() {
		if (this.state.submitted) {
			return (
				<div>
					<p>Thank You, {this.state.formData.firstName}, for submitting the form</p>
					<br />
					<button onClick={this.resetForm}>Reset</button>
				</div>
			);
		}
		return (
			<div className="contact">
				<form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="firstName">First Name</label>
						<input type="text" name="firstName" value={this.state.formData.firstName} onChange={this.handleChange} />
					</div>
					<div>
						<label htmlFor="lastName">Last Name</label>
						<input type="text" name="lastName" value={this.state.formData.lastName} onChange={this.handleChange} />
					</div>
					<button>Submit</button> <br />
					{this.state.formData.firstName}
					<br />
					{this.state.formData.lastName}
				</form>
				<div></div>
			</div>
		);
	}
}

