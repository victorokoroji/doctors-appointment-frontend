import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
	type,
	name,
	onChange,
	placeholder,
	value,
	className,
	style
}) => {
	return (
		<>
			<input
				type={type}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				value={value}
				className={className}
				style={style}
			/>
		</>
	)
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	className: PropTypes.string,
	className: PropTypes.any,
	onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
	placeholder: null,
	value: '',
	className: '',
}

export default Input
