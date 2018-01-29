import React from "react"
import "./DialogForm.css"
import data from "./data/data"

class ReactFormLabel extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<label htmlFor={this.props.htmlFor}>{this.props.title}</label>
		)
	}
}
class DialogForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			prodName: '',
			prodDescription: '',
			invObjective: '',
			prodType: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange = (e) => {
		let newState = {};
		newState[e.target.name] = e.target.value;
		this.setState(newState);
	};

	handleSubmit = () => {
		let formData = {
			formProdName: this.state.prodName,
			formProdDescription: this.state.prodDescription,
			formInvObjective: this.state.invObjective,
			formProdType: this.state.prodType
		}

		if(formData.formProdName.length < 1 || formData.formProdDescription.length < 1 || formData.formInvObjective.length < 1 || formData.formProdType.length < 1) {
			alert("You have one or more missing fields!");
			return false;
		} else {
			alert ("You have created Product " + formData.formProdName + "!");
		}

		this.setState({
			prodName: '',
			prodDescription: '',
			invObjective: '',
			prodType: ''
		});
	};

	render() {
		return (
			<form className='dialogForm' onSubmit={this.handleSubmit}>
				<fieldset className='form-group'>
					<ReactFormLabel htmlFor='prodName' title='Product Name:'/>
					<input id='prodName' className='form-input' name='prodName' type='text' required value={this.state.prodName} onChange={this.handleChange}/>
				</fieldset>

				<fieldset className='form-group'>
					<ReactFormLabel htmlFor='prodDescription' title='Product Description:'/>
					<textarea id='prodDescription' className='form-textarea' name='prodDescription' type='text' value={this.state.prodDescription} required onChange={this.handleChange}/>
				</fieldset>

				<fieldset className='form-group'>
					<ReactFormLabel htmlFor='prodType' title='Product Type:'/>
					<select id='prodType' className='form-select' name='prodType' value={this.state.prodType} onChange={this.handleChange}>
						{data.prodType.map((e, key) => {
							return <option key={key} value={e.value}>{e.name}</option>;
						})}
					</select>
				</fieldset>

				<fieldset className='form-group'>
					<ReactFormLabel htmlFor='invObjective' title='Inv Objective:'/>
					<select id='invObjective' className='form-select' name='invObjective' required value={this.state.invObjective} onChange={this.handleChange}>
						{data.invObjective.map((e, key) => {
							return <option key={key} value={e.value}>{e.name}</option>;
						})}
					</select>
				</fieldset>
			</form>
		)
	}
};

export default DialogForm;
