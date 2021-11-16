/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: RecommendedFragment
// ====================================================

export interface RecommendedFragment_section_highlight_backgroundImage {
  __typename: "UploadFile";
  url: string;
}

export interface RecommendedFragment_section_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface RecommendedFragment_section_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  backgroundImage: RecommendedFragment_section_highlight_backgroundImage | null;
  floatImage: RecommendedFragment_section_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface RecommendedFragment_section_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface RecommendedFragment_section_games_developers {
  __typename: "Developer";
  name: string;
}

export interface RecommendedFragment_section_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: RecommendedFragment_section_games_cover | null;
  developers: RecommendedFragment_section_games_developers[];
  price: number;
}

export interface RecommendedFragment_section {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: RecommendedFragment_section_highlight | null;
  games: RecommendedFragment_section_games[];
}

export interface RecommendedFragment {
  __typename: "Recommended";
  section: RecommendedFragment_section | null;
}
