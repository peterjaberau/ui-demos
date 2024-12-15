import { createContext, ReactNode } from 'react';
import { useNavigate, useLocation, useMatch } from 'react-router-dom';
import mapValues from 'lodash/mapValues';
import { Density, Mode } from '@cloudscape-design/global-styles';
import AppPage from './app';
import { pages } from './pages.ts';

export const THEME = 'default';

interface AppUrlParams {
  density: Density;
  direction: 'ltr' | 'rtl';
  visualRefresh: boolean;
  motionDisabled: boolean;
  appLayoutWidget: boolean;
}

export interface AppContextType<T = unknown> {
  mode: Mode;
  pageId?: string;
  urlParams: AppUrlParams & T;
  setUrlParams: (newParams: Partial<AppUrlParams & T>) => void;
  setMode: (newMode: Mode) => void;
}

const appContextDefaults: AppContextType = {
  mode: Mode.Light,
  pageId: undefined,
  urlParams: {
    density: Density.Comfortable,
    direction: 'ltr',
    visualRefresh: THEME === 'default',
    motionDisabled: false,
    appLayoutWidget: false,
  },
  setMode: () => {},
  setUrlParams: () => {},
};

const AppContext = createContext<AppContextType>(appContextDefaults);

export default AppContext;

export function parseQuery(query: string) {
  const queryParams: Record<string, any> = { ...appContextDefaults.urlParams };
  const urlParams = new URLSearchParams(query);
  urlParams.forEach((value, key) => (queryParams[key] = value));

  return mapValues(queryParams, value => {
    if (value === 'true' || value === 'false') {
      return value === 'true';
    }
    return value;
  });
}

function formatQuery(params: AppUrlParams) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === appContextDefaults.urlParams[key as keyof AppUrlParams]) {
      continue;
    }
    query.set(key, value);
  }
  return query ? `?${query.toString()}` : '';
}

export function AppContextProvider({ children }: { children?: ReactNode }) {
  const history = useNavigate();
  const location = useLocation();
  const match = useMatch('/:mode(light|dark)/:pageId/*');
  const mode = match?.params?.['mode(light|dark)'];
  const pageId = match?.params?.['pageId'];
  const urlParams = parseQuery(location.search) as AppUrlParams;

  function setUrlParams(newParams: Partial<AppUrlParams>) {
    const pathname = [mode, pageId].filter(segment => !!segment).join('/') + '/';
    history(`/${pathname}${formatQuery({ ...urlParams, ...newParams })}`, { replace: true });
  }

  function updateMode(newMode: Mode) {
    const pathname = [newMode, pageId].filter(segment => !!segment).join('/') + '/';
    history('/' + pathname + location.search + location.hash, { replace: true });
  }

  return (
    <AppContext.Provider value={{ mode: mode!, pageId, urlParams, setUrlParams, setMode: updateMode } as any}>
      {children}
    </AppContext.Provider>
  );
}
