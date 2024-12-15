import React, { Suspense, useEffect, useContext } from 'react';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import AppContext, { AppContextProvider } from './app-context';
import { applyDensity, applyMode, disableMotion } from '@cloudscape-design/global-styles';
import styles from './styles.module.scss';
import AppPage from './app';
import { pages } from './pages.ts';

const Start = () => (
  <>
    <main>
      <ul className="list">
        {pages.map((page, index) => (
          <li key={index}>
            <Link to={`/components${page}`}>{page}</Link>
          </li>
        ))}
      </ul>
    </main>
  </>
);

const PageWithFallback = () => {
  const { pathname: page } = useLocation();

  if (!page || !page.includes(page)) {
    return <span>Not Found</span>;
  }

  return <AppPage pageId={page} />;
};

export default function AppComponentsDemo() {
  const isMacOS = navigator.userAgent.toLowerCase().indexOf('macintosh') > -1;
  const { mode, urlParams: { density, motionDisabled } } = useContext(AppContext);

  useEffect(() => {
    applyMode(mode ?? null);
  }, [mode]);

  useEffect(() => {
    applyDensity(density ?? null);
  }, [density]);

  useEffect(() => {
    disableMotion(motionDisabled);
  }, [motionDisabled]);

  useEffect(() => {
    if (isMacOS) {
      document.body.classList.add(styles.macos);
    } else {
      document.body.classList.remove(styles.macos);
    }
  }, [isMacOS]);

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <HashRouter>
        <AppContextProvider>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/components/*" element={<PageWithFallback />} />
            {/*<Route path="/:mode(light|dark)/:pageId/*" element={<PageWithFallback />} />*/}
          </Routes>
        </AppContextProvider>
      </HashRouter>
    </Suspense>
  );

}
