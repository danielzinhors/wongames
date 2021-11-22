/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE, ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_banners_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_banners_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryHome_banners_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface QueryHome_banners {
  __typename: "Banner";
  image: QueryHome_banners_image | null;
  title: string;
  subtitle: string;
  button: QueryHome_banners_button | null;
  ribbon: QueryHome_banners_ribbon | null;
}

export interface QueryHome_newGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_newGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_newGames_publisher {
  __typename: "Publisher";
  name: string;
}

export interface QueryHome_newGames_categories {
  __typename: "Category";
  name: string;
}

export interface QueryHome_newGames_platforms {
  __typename: "Platform";
  name: string;
}

export interface QueryHome_newGames {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryHome_newGames_cover | null;
  developers: QueryHome_newGames_developers[];
  publisher: QueryHome_newGames_publisher | null;
  categories: QueryHome_newGames_categories[];
  platforms: QueryHome_newGames_platforms[];
  price: number;
}

export interface QueryHome_upCommingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_upCommingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_upCommingGames_publisher {
  __typename: "Publisher";
  name: string;
}

export interface QueryHome_upCommingGames_categories {
  __typename: "Category";
  name: string;
}

export interface QueryHome_upCommingGames_platforms {
  __typename: "Platform";
  name: string;
}

export interface QueryHome_upCommingGames {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryHome_upCommingGames_cover | null;
  developers: QueryHome_upCommingGames_developers[];
  publisher: QueryHome_upCommingGames_publisher | null;
  categories: QueryHome_upCommingGames_categories[];
  platforms: QueryHome_upCommingGames_platforms[];
  price: number;
}

export interface QueryHome_freeGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_freeGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_freeGames_publisher {
  __typename: "Publisher";
  name: string;
}

export interface QueryHome_freeGames_categories {
  __typename: "Category";
  name: string;
}

export interface QueryHome_freeGames_platforms {
  __typename: "Platform";
  name: string;
}

export interface QueryHome_freeGames {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryHome_freeGames_cover | null;
  developers: QueryHome_freeGames_developers[];
  publisher: QueryHome_freeGames_publisher | null;
  categories: QueryHome_freeGames_categories[];
  platforms: QueryHome_freeGames_platforms[];
  price: number;
}

export interface QueryHome_sections_newGames_highlight_backgroundImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_newGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_newGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  backgroundImage: QueryHome_sections_newGames_highlight_backgroundImage | null;
  floatImage: QueryHome_sections_newGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryHome_sections_newGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_newGames_highlight | null;
}

export interface QueryHome_sections_popularGames_highlight_backgroundImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  backgroundImage: QueryHome_sections_popularGames_highlight_backgroundImage | null;
  floatImage: QueryHome_sections_popularGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryHome_sections_popularGames_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularGames_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_sections_popularGames_games_publisher {
  __typename: "Publisher";
  name: string;
}

export interface QueryHome_sections_popularGames_games_categories {
  __typename: "Category";
  name: string;
}

export interface QueryHome_sections_popularGames_games_platforms {
  __typename: "Platform";
  name: string;
}

export interface QueryHome_sections_popularGames_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryHome_sections_popularGames_games_cover | null;
  developers: QueryHome_sections_popularGames_games_developers[];
  publisher: QueryHome_sections_popularGames_games_publisher | null;
  categories: QueryHome_sections_popularGames_games_categories[];
  platforms: QueryHome_sections_popularGames_games_platforms[];
  price: number;
}

export interface QueryHome_sections_popularGames {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: QueryHome_sections_popularGames_highlight | null;
  games: QueryHome_sections_popularGames_games[];
}

export interface QueryHome_sections_upcomingGames_highlight_backgroundImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_upcomingGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  backgroundImage: QueryHome_sections_upcomingGames_highlight_backgroundImage | null;
  floatImage: QueryHome_sections_upcomingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryHome_sections_upcomingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_upcomingGames_highlight | null;
}

export interface QueryHome_sections_freeGames_highlight_backgroundImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_freeGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_freeGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  backgroundImage: QueryHome_sections_freeGames_highlight_backgroundImage | null;
  floatImage: QueryHome_sections_freeGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryHome_sections_freeGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_freeGames_highlight | null;
}

export interface QueryHome_sections {
  __typename: "Home";
  newGames: QueryHome_sections_newGames | null;
  popularGames: QueryHome_sections_popularGames | null;
  upcomingGames: QueryHome_sections_upcomingGames | null;
  freeGames: QueryHome_sections_freeGames | null;
}

export interface QueryHome {
  banners: QueryHome_banners[];
  newGames: QueryHome_newGames[];
  upCommingGames: QueryHome_upCommingGames[];
  freeGames: QueryHome_freeGames[];
  sections: QueryHome_sections | null;
}

export interface QueryHomeVariables {
  date: any;
}
