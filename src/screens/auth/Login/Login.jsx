import React, { useState, Fragment } from 'react'
import Input from '../../../components/Input/Input'
import Layout from '../../../components/Layout/Layout'
import Button from '../../../components/Button/Button'
import Label from '../../../components/Label/Label'

const Login = props => {
	const [inputs, setInputs] = useState({ email: '', password: '' })

	const onInputChange = e => {
		const { name, value } = e.target
		setInputs({ ...inputs, [name]: value })
	}

	const onSubmit = e => {
		e.preventDefault()
	}

	return (
		<Fragment>
			<Layout>
				<form onSubmit={onSubmit} style={{ flex: 0 }}>
					<Label htmlFor='email' title='Email Address' />
					<Input name='email' value={inputs.email} onChange={onInputChange} />
					<Label htmlFor='password' title='Password' />
					<Input
						type='password'
						name='password'
						value={inputs.password}
						onChange={onInputChange}
					/>
					<Button>click me</Button>
				</form>
			</Layout>
		</Fragment>
	)
}

export default Login
