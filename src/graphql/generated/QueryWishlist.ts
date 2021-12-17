/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryWishlist
// ====================================================

export interface QueryWishlist_wishlists_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryWishlist_wishlists_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryWishlist_wishlists_games_publisher {
  __typename: "Publisher";
  name: string;
}

export interface QueryWishlist_wishlists_games_categories {
  __typename: "Category";
  name: string;
}

export interface QueryWishlist_wishlists_games_platforms {
  __typename: "Platform";
  name: string;
}

export interface QueryWishlist_wishlists_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryWishlist_wishlists_games_cover | null;
  developers: QueryWishlist_wishlists_games_developers[];
  publisher: QueryWishlist_wishlists_games_publisher | null;
  categories: QueryWishlist_wishlists_games_categories[];
  platforms: QueryWishlist_wishlists_games_platforms[];
  price: number;
}

export interface QueryWishlist_wishlists {
  __typename: "Wishlist";
  id: string;
  games: QueryWishlist_wishlists_games[];
}

export interface QueryWishlist {
  wishlists: QueryWishlist_wishlists[];
}

export interface QueryWishlistVariables {
  identifier: string;
}
