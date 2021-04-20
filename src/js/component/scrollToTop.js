import React from "react";
import PropTypes from "prop-types";

export class ScrollToTop extends React.Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		return this.props.children;
	}
}

//Validación de los props
ScrollToTop.propTypes = {
	location: PropTypes.object,
	children: PropTypes.any
};
