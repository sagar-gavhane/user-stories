import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Label = ({ title, htmlFor }) => {
	return (
		<Fragment>
			<label htmlFor={htmlFor}>{title}</label>
		</Fragment>
	)
}

export default Label
