/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryGames
// ====================================================

export interface QueryGames_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryGames_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryGames_games_publisher {
  __typename: "Publisher";
  name: string;
}

export interface QueryGames_games_categories {
  __typename: "Category";
  name: string;
}

export interface QueryGames_games_platforms {
  __typename: "Platform";
  name: string;
}

export interface QueryGames_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryGames_games_cover | null;
  developers: QueryGames_games_developers[];
  publisher: QueryGames_games_publisher | null;
  categories: QueryGames_games_categories[];
  platforms: QueryGames_games_platforms[];
  price: number;
}

export interface QueryGames {
  games: QueryGames_games[];
}

export interface QueryGamesVariables {
  limit: number;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
