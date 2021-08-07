import { useState } from 'react'
import { ShoppingCart as ShopingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'
import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open menu" />
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <MediaMatch greaterThan="medium">
        <S.MenuLink href="#">Home</S.MenuLink>
        <S.MenuLink href="#">Explore</S.MenuLink>
      </MediaMatch>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShopingCartIcon aria-label="Open shopping cart" />
        </S.IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Button as="a">Sign in</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {!!username && (
            <>
              <S.MenuLink href="#">My acoount</S.MenuLink>
              <S.MenuLink href="#">Wishilist</S.MenuLink>
            </>
          )}
        </S.MenuNav>
        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Sign in
            </Button>
            <span>or</span>
            <S.CreateAcount href="#" title="Sign Up">
              Sign Up
            </S.CreateAcount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
