import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
	type,
	name,
	onChange,
	placeholder,
	value,
	className,
  style,
  innerRef
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
				ref={innerRef}
			/>
		</>
	)
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	className: PropTypes.string,
	id: PropTypes.string,
	onChange: PropTypes.func,
	innerRef: PropTypes.object,
}

Input.defaultProps = {
	placeholder: null,
	value: '',
	name: '',
	className: '',
	id: '',
	innerRef: null,
}

export default Input
