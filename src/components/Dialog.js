import React from "react"
import PropTypes from "prop-types"
import DOM from "react-dom"
import "./Dialog.css"

class Dialog extends React.Component {
	destroy = () => {
		const node = this.refs.root.parentNode
		DOM.unmountComponentAtNode(node)
		node.remove()
	}
	ok = () => {
		if(this.props.okButtonDisabled) return
		if(this.props.okButtonCB) {
			this.props.okButtonCB(this);
		} else {
			this.destroy()
		}
	}

	cancel = () => {
		if(this.props.cancelButtonCB) {
			this.props.cancelButtonCB(this)
		} else {
			this.destroy()
		}
	}

	render() {
		return (
			<div ref="root" className="dialogContainer">
				<header className="dialogHeader">
					{this.props.title}
				</header>

				<div className="dialogContent" ref="content">
					{this.props.children}
				</div>

				<div className="dialogButtons">
					<div className="dialogOkBtn" type='submit' onClick={this.ok}>
						{this.props.okButtonText}
					</div>
					{
						this.props.hideCancelButton ? null :
						<div onClick={this.cancel} className="dialogCancelBtn" >
							{this.props.cancelButtonText}
						</div>
					}
				</div>
			</div>
		)
	}
}

Dialog.defaultProps = {
	title: "Create Dialog",
	okButtonText: "Ok",
	cancelButtonText: "Cancel",
	hideCancelButton: false,
}

Dialog.propTypes = {
	className: PropTypes.string,
	okButtonText: PropTypes.string,
	cancelButtonText: PropTypes.string,
	okButtonCB: PropTypes.func,
	cancelButtonCB: PropTypes.func,
	hideCancelButton: PropTypes.bool,
	title: PropTypes.string,
	okButtonDisabled: PropTypes.bool,
}

const showDialog = (Cmp, props) => {
	const div = document.createElement("div")
	div.className = "mainProductDialog"
	document.body.appendChild(div)
	DOM.render(<Cmp {...props}/>, div)
}

export {Dialog, showDialog}