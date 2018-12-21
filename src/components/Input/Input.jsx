import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledInput = styled.input`
	background: #fff;
	margin: 0;
	padding: 5px 15px;
	caret-color: #333;

	:focus {
		outline: 2px solid #333;
	}
`

const Input = ({ type, value, onChange, ...args }) => {
	return (
		<Fragment>
			<StyledInput type={type} value={value} onChange={onChange} {...args} />
		</Fragment>
	)
}

Input.defaultProps = {
	type: 'text',
}

Input.propTypes = {
	type: PropTypes.string,
	value: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default Input
