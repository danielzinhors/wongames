import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { FormLoading } from 'components/Form'
import Heading from 'components/Heading'
import { useCart } from 'hooks/use-cart'
import { Session } from 'next-auth'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { createPaymentIntent, createPayment } from 'utils/stripe/methods'
import { PaymentIntent } from '@stripe/stripe-js'

import * as S from './styles'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()
  const { push } = useRouter()
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        const data = await createPaymentIntent({
          items,
          token: session.jwt as string
        })

        if (data.freeGames) {
          setFreeGames(true)
          return
        }

        if (data.error) {
          setError(data.error)
          return
        }
        setFreeGames(false)
        setClientSecret(data.client_secret)
      }
    }
    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPayment({
      items,
      paymentIntent,
      token: session.jwt as string
    })
    if (data.error !== '') {
      setError(data.error)
    } else {
      setError(null)
    }
    return data
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (freeGames) {
      setLoading(true)
      saveOrder()
      push('/success')
      return
    }

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setLoading(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!
      }
    })

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
    } else {
      setError(null)
      saveOrder(payload.paymentIntent)
      if (error === '') {
        push('/success')
      }
    }
    setLoading(false)
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading color="black" lineBottom lineColor="secondary">
            Payment
          </Heading>
          {freeGames ? (
            <S.FreeGames>Only free games, click buy and enjoy </S.FreeGames>
          ) : (
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: '16px'
                  }
                }
              }}
              onChange={handleChange}
            />
          )}
          {error && (
            <S.Error>
              <ErrorOutline size={20} />
              {error}
            </S.Error>
          )}
        </S.Body>
        <S.Footer>
          <Button as="a" fullWidth minimal>
            Continue shopping
          </Button>
          <Button
            fullWidth
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            disabled={!freeGames && (disabled || !!error)}
          >
            {!loading && <S.SpanBuy>Buy now</S.SpanBuy>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
