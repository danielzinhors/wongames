import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'

import Button, { ButtonProps } from 'components/Button'
import { useCart } from 'hooks/use-cart'

type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const CartButton = ({
  id,
  size = 'small',
  hasText = false
}: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()
  const inCart = isInCart(id)
  const ButtonText = inCart ? 'Remove from cart' : 'Add to cart'
  return (
    <Button
      icon={inCart ? <RemoveShoppingCart /> : <AddShoppingCart />}
      size={size}
      onClick={() => (inCart ? removeFromCart(id) : addToCart(id))}
      aria-label={ButtonText}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default CartButton
