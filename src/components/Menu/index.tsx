import { useState } from 'react'
import Link from 'next/link'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'
import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

import CartDropdown from 'components/CartDropdown'
import CartIcon from 'components/CartIcon'
import UserDropdown from 'components/UserDropdown'

export type MenuProps = {
  username?: string | null
  loading?: boolean
}

const Menu = ({ username, loading }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open menu" />
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper>
        <Link href="/" passHref>
          <S.Link>
            <Logo hideOnMobile />
          </S.Link>
        </Link>
      </S.LogoWrapper>
      <MediaMatch greaterThan="medium">
        <Link href="/" passHref>
          <S.MenuLink>Home</S.MenuLink>
        </Link>
        <Link href="/games" passHref>
          <S.MenuLink>Explore</S.MenuLink>
        </Link>
      </MediaMatch>
      {!loading && (
        <>
          <S.MenuGroup>
            <S.IconWrapper>
              <SearchIcon aria-label="Search" />
            </S.IconWrapper>
            <S.IconWrapper>
              <MediaMatch greaterThan="medium">
                <CartDropdown />
              </MediaMatch>
              <MediaMatch lessThan="medium">
                <Link href="/cart" passHref>
                  <S.Link>
                    <CartIcon />
                  </S.Link>
                </Link>
              </MediaMatch>
            </S.IconWrapper>
            <MediaMatch greaterThan="medium">
              {!username ? (
                <Link href="/sign-in" passHref>
                  <Button as="a">Sign in</Button>
                </Link>
              ) : (
                <UserDropdown username={username} />
              )}
            </MediaMatch>
          </S.MenuGroup>
          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <CloseIcon
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            />
            <S.MenuNav>
              <S.MenuLink href="#">Home</S.MenuLink>
              <Link href="/games" passHref>
                <S.MenuLink>Explore</S.MenuLink>
              </Link>
              {!!username && (
                <>
                  <Link href="/profile/me" passHref>
                    <S.MenuLink>My profile</S.MenuLink>
                  </Link>
                  <Link href="/profile/wishlist" passHref>
                    <S.MenuLink>Wishlist</S.MenuLink>
                  </Link>
                </>
              )}
            </S.MenuNav>
            {!username && (
              <S.RegisterBox>
                <Link href="/sign-in" passHref>
                  <Button fullWidth size="large" as="a">
                    Sign in
                  </Button>
                </Link>
                <span>or</span>
                <Link href="/sign-in" passHref>
                  <S.CreateAcount href="#" title="Sign Up">
                    Sign Up
                  </S.CreateAcount>
                </Link>
              </S.RegisterBox>
            )}
          </S.MenuFull>
        </>
      )}
    </S.Wrapper>
  )
}

export default Menu
