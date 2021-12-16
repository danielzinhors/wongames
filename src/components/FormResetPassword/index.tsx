import { Email } from '@styled-icons/material-outlined'
import { ErrorAlt } from '@styled-icons/boxicons-solid'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLoading, FormError } from 'components/Form'
import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { FieldErrors } from 'utils/validations'

const FormForgotPassword = () => {
  const [formError, setFormError] = useState('')
  const [values, setValues] = useState({ email: '' })
  const [loading, setLoading] = useState(false)
  const routes = useRouter()
  const { push, query } = routes
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    const errors = {}

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
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
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Send e-mail</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormForgotPassword