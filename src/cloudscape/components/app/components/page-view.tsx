import { lazy, Suspense } from 'react';

const pagesComponents: Record<string, React.LazyExoticComponent<any>> = {};

// After: page-view.tsx
interface PageViewProps {
  pageId: string;
}


export default function PageView({ pageId }: PageViewProps) {
  if (!pageId) {
    return <div>Page not found</div>;
  }

  if (!pagesComponents[pageId]) {
    pagesComponents[pageId] = lazy(() => import(`../${pageId}.page.tsx`));
  }

  const PageComponent = pagesComponents[pageId];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageComponent />
    </Suspense>
  );
}
