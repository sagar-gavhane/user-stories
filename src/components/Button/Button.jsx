import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
	background: papayawhip;
`

const Button = ({ type, children, ...args }) => {
	return (
		<Fragment>
			<StyledButton type={type} {...args}>
				{children}
			</StyledButton>
		</Fragment>
	)
}

Button.defaultProps = {
	type: 'submit',
	children: null,
}

Button.propTypes = {
	type: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
}

export default Button
