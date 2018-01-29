import React from "react"
import "./App.css"
import logo from './vestLogo.jpg';

import {showDialog, Dialog} from "./components/Dialog"
import DialogForm from "./components/DialogForm";

class App extends React.Component {
	constructor(props, context) {
		super(props, context)
	}

	onClick() {
		showDialog(MyDialog)
	}


	render() {
		return (
			<div class="homePage">
				<div class="nav">
					<ul>
						<li><a class="active" href="#dashBoard">Dashboard</a></li>
						<li><a href="#portfolios">Portfolios</a></li>
						<li class="withSubMenu"><a href="#products">Products</a>
							<ul>
								<li class="createProduct"><a href="#createProduct" onClick={this.onClick}>Create product</a></li>
								<li class="invObj"><a href="#invObj">Inv. Obj</a></li>
							</ul>
						</li>
						<li><a href="#monitors">Monitors</a></li>
					</ul>
				</div>
				<div class="mainBody">
					<img src={logo} alt="Logo" width="100px" height="100px"/><h1>Welcome to Vestmark 2.0</h1>
				</div>
			</div>
		)
	}
}

const MyDialog = props =>
	<Dialog
		title="Create Product Dialog"
		okButtonText={props.okText}
		cancelButtonText={props.cancelText}
		okButtonCB={() => this.child.handleSubmit()}
	>
		<DialogForm ref={ref => {
			this.child = ref
		}}/>
	</Dialog>


export default App;
