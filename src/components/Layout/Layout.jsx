import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
	display: flex;
`

const Layout = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>
}

export default Layout
