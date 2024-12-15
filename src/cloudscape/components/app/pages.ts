import { lazy } from 'react';

const pagesRaw = import.meta.glob('../**/*.page.tsx', { eager: true });

const pageIdRegex = /([\w-/]+)\.page\.tsx/;
const getPage = (path: string) => path.match(pageIdRegex)![1];

export const pages = Object.keys(pagesRaw).map(getPage);
type ComponentFactory = Parameters<typeof lazy>[0];

export const pagesMap = Object.fromEntries(
  Object.entries(pagesRaw).map(([path, dynamicImport]) => {
    const match = getPage(path);
    return ['/components' + match, lazy(dynamicImport as ComponentFactory)];

  })
);

console.log('--pagesMap--', pagesMap);
