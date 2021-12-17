/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createWishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateWishlist
// ====================================================

export interface MutationUpdateWishlist_updateWishlist_wishlist_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_games_developers {
  __typename: "Developer";
  name: string;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_games_publisher {
  __typename: "Publisher";
  name: string;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_games_categories {
  __typename: "Category";
  name: string;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_games_platforms {
  __typename: "Platform";
  name: string;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: MutationUpdateWishlist_updateWishlist_wishlist_games_cover | null;
  developers: MutationUpdateWishlist_updateWishlist_wishlist_games_developers[];
  publisher: MutationUpdateWishlist_updateWishlist_wishlist_games_publisher | null;
  categories: MutationUpdateWishlist_updateWishlist_wishlist_games_categories[];
  platforms: MutationUpdateWishlist_updateWishlist_wishlist_games_platforms[];
  price: number;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  games: MutationUpdateWishlist_updateWishlist_wishlist_games[];
}

export interface MutationUpdateWishlist_updateWishlist {
  __typename: "updateWishlistPayload";
  wishlist: MutationUpdateWishlist_updateWishlist_wishlist | null;
}

export interface MutationUpdateWishlist {
  updateWishlist: MutationUpdateWishlist_updateWishlist | null;
}

export interface MutationUpdateWishlistVariables {
  input: createWishlistInput;
}
