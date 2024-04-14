import React from 'react'
import RegisterPage from './RegisterPage'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Register',
  description: 'Register Page for new users',
}

type Props = {}

const Register = (props: Props) => {
  return (
    <div>
        <RegisterPage/>
    </div>
  )
}

export default Register