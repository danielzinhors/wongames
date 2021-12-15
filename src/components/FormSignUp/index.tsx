import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import { ErrorAlt } from '@styled-icons/boxicons-solid'
import Button from 'components/Button'
import TextField from 'components/TextField'

import {
  FormWrapper,
  FormLink,
  LinkAux,
  FormLoading,
  FormError
} from 'components/Form'
import React, { useState } from 'react'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'

import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { useMutation } from '@apollo/client'
import { signIn } from 'next-auth/client'
import { FieldErrors, signUpValidate } from 'utils/validations'

type FormSignInProps = {
  confirm_password: string
} & UsersPermissionsRegisterInput

const FormSignUp = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<FormSignInProps>({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) =>
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      ),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  const handleInput = (field: string, value: string) => {
    setValues((oldValue) => ({ ...oldValue, [field]: value }))
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorAlt size={28} />
          {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          error={fieldError?.username}
          onInputChange={(value) => handleInput('username', value)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={(value) => handleInput('email', value)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(value) => handleInput('password', value)}
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(value) => handleInput('confirm_password', value)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in" passHref>
            <LinkAux>Sign in</LinkAux>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
