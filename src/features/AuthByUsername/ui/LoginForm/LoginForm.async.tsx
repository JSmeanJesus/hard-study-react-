import React, { FC } from 'react'
import { LoginFormProps } from './LoginForm'

export const LoginFormAsync = React.lazy<FC<LoginFormProps>>(async () => await import('./LoginForm'));
