/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT {
  left = "left",
  right = "right",
}

export enum ENUM_COMPONENTPAGERIBBON_COLOR {
  primary = "primary",
  secondary = "secondary",
}

export enum ENUM_COMPONENTPAGERIBBON_SIZE {
  normal = "normal",
  small = "small",
}

export enum ENUM_GAME_RATING {
  BR0 = "BR0",
  BR10 = "BR10",
  BR13 = "BR13",
  BR17 = "BR17",
  BR18 = "BR18",
  BR3 = "BR3",
  BR6 = "BR6",
}

export interface UsersPermissionsRegisterInput {
  username: string;
  email: string;
  password: string;
}

export interface WishlistInput {
  user?: string | null;
  games?: (string | null)[] | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface createWishlistInput {
  data?: WishlistInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
