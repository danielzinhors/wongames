/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryUpcoming
// ====================================================

export interface QueryUpcoming_upCommingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_upCommingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryUpcoming_upCommingGames_publisher {
  __typename: "Publisher";
  name: string;
}

export interface QueryUpcoming_upCommingGames_categories {
  __typename: "Category";
  name: string;
}

export interface QueryUpcoming_upCommingGames_platforms {
  __typename: "Platform";
  name: string;
}

export interface QueryUpcoming_upCommingGames {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryUpcoming_upCommingGames_cover | null;
  developers: QueryUpcoming_upCommingGames_developers[];
  publisher: QueryUpcoming_upCommingGames_publisher | null;
  categories: QueryUpcoming_upCommingGames_categories[];
  platforms: QueryUpcoming_upCommingGames_platforms[];
  price: number;
}

export interface QueryUpcoming_showcase_upcomingGames_highlight_backgroundImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_showcase_upcomingGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_showcase_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  backgroundImage: QueryUpcoming_showcase_upcomingGames_highlight_backgroundImage | null;
  floatImage: QueryUpcoming_showcase_upcomingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryUpcoming_showcase_upcomingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryUpcoming_showcase_upcomingGames_highlight | null;
}

export interface QueryUpcoming_showcase {
  __typename: "Home";
  upcomingGames: QueryUpcoming_showcase_upcomingGames | null;
}

export interface QueryUpcoming {
  upCommingGames: QueryUpcoming_upCommingGames[];
  showcase: QueryUpcoming_showcase | null;
}

export interface QueryUpcomingVariables {
  date: any;
}
