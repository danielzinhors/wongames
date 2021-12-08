/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GameFragment
// ====================================================

export interface GameFragment_cover {
  __typename: "UploadFile";
  url: string;
}

export interface GameFragment_developers {
  __typename: "Developer";
  name: string;
}

export interface GameFragment_publisher {
  __typename: "Publisher";
  name: string;
}

export interface GameFragment_categories {
  __typename: "Category";
  name: string;
}

export interface GameFragment_platforms {
  __typename: "Platform";
  name: string;
}

export interface GameFragment {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: GameFragment_cover | null;
  developers: GameFragment_developers[];
  publisher: GameFragment_publisher | null;
  categories: GameFragment_categories[];
  platforms: GameFragment_platforms[];
  price: number;
}
