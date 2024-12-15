import { useContext } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import AppContext from '@/cloudscape/components/app/app-context.tsx';
import ThemeSwitcher from './theme-switcher';

import styles from './header.module.scss';

export default function Header({ sticky }: { sticky?: boolean }) {
  const { mode } = useContext(AppContext);
  return (
    <>
      {/* #h selector for compatibility with global navigation */}
      <header id="h" className={clsx(styles.header, sticky && styles['header-sticky'])}>
        <Link to={`/${mode}/`}>Demo Assets</Link>
        <ThemeSwitcher />
      </header>
    </>
  );
}
