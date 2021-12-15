import { Email, Lock } from '@styled-icons/material-outlined'
import { ErrorAlt } from '@styled-icons/boxicons-solid'
import Link from 'next/link'
import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './styles'
import {
  FormWrapper,
  FormLink,
  LinkAux,
  FormLoading,
  FormError
} from 'components/Form'
import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { FieldErrors, signInValidate } from 'utils/validations'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [values, setValues] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result?.url)
    }

    setLoading(false)

    setFormError('username or password is invalid')
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
          name="email"
          placeholder="E-mail"
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
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>
        <FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up" passHref>
            <LinkAux>sign up</LinkAux>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
