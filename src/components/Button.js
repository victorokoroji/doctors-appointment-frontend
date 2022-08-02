import React from 'react'
import PropTypes from 'prop-types'
const Button = ({ type, onClick, children, className }) => {
	return (
		<button type={type} onClick={onClick} className={className}>
			{children}
		</button>
	)
}

Button.propTypes = {
	type: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	onClick: PropTypes.func,
	className: PropTypes.string,
}

Button.defaultProps = {
	className: '',
}

export default Button
