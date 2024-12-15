// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { HashRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { pages } from "./pages";
import RootPage from "./root-page.tsx";


const Start = () => {
  const uniquePages = new Set(pages);

  if (uniquePages.size !== pages.length) {
    console.warn("Duplicate keys found in pages:", pages);
  }

  return (
    <main>
      <ul className="list">
        {Array.from(uniquePages).map((page) => (
          <li key={page}>
            <Link  to={`${page}`}>{page}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

const PageWithFallback = () => {
  const { pathname: page } = useLocation();

  if (!page || !page.includes(page)) {
    return <span>Not Found</span>;
  }

  return <RootPage pageId={page} key={page} />;
};


export default function RootCloudScape() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/*" element={<PageWithFallback />} />
      </Routes>
    </HashRouter>
  );
}
