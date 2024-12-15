import { Suspense, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { pagesMap } from "./pages.ts";

export interface PageProps {
  pageId: string;
}

export default function AppPage({ pageId }: PageProps) {
  const [searchParams] = useSearchParams();
  const direction = searchParams.get("direction") ?? "ltr";

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);

  const Component = pagesMap[pageId];

  console.log(pageId)
  console.log(Component);

  return (
    <Suspense fallback="Loading">
      <Component />
    </Suspense>
  );
}
