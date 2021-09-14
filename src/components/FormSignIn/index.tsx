import { Email, Lock } from '@styled-icons/material-outlined'
import Link from 'next/link'
import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './styles'
import { FormWrapper, FormLink, LinkAux } from 'components/Form'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="E-mail"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
      <Button size="large" fullWidth>
        Sign in now
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

export default FormSignIn
