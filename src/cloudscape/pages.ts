// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { lazy } from "react";

const pagesRaw = import.meta.glob("./**/*.page.tsx");
// const pageIdRegex = /([\w-/]+\/[\w-]+)\.page\.tsx/;
// const getPage = (path: string) => path.match(pageIdRegex)![1];

// const pageIdRegex = /(?:\.\/)?([\w-/]+)\.page\.tsx/;
// const pageIdRegex = /(?:\.\/)?([\w-/]+\/[\w-]+)\.page\.tsx/;
// const getPage = (path: string) => path.match(pageIdRegex)![1];


let invalidPaths: any = []
const pageIdRegex = /(?:\.\/)?([\w-/]+)\.page\.tsx$/;
const getPage = (path: string) => {
  const match = path.match(pageIdRegex);
  if (!match) {
    invalidPaths.push(path)
    console.error(`Invalid path: ${path}`);
    throw new Error(`Invalid path: ${path}`);
  }

  return match[1];
};

export const pages = Object.keys(pagesRaw).map(getPage);
type ComponentFactory = Parameters<typeof lazy>[0];

let arrMatch: any = []
let arrPath: any = []
export const pagesMap = Object.fromEntries(
  Object.entries(pagesRaw).map(([path, dynamicImport]) => {
    const match = getPage(path);
    arrMatch.push(match)
    arrPath.push(path)
    return ['/' + match, lazy(dynamicImport as ComponentFactory)];
  }),
);


