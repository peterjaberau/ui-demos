// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useContext, useState } from 'react';

import AppLayout from '@cloudscape-design/components/app-layout';
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group';
import SpaceBetween from '@cloudscape-design/components/space-between';

import AppContext, { AppContextType } from '../app/app-context';
import labels from './utils/labels';

type DemoContext = React.Context<
  AppContextType<{
    hasOwnBreadcrumbs: boolean | undefined;
  }>
>;

export default function () {
  const { urlParams } = useContext(AppContext as DemoContext);
  const [extraBreadcrumb, setExtraBreadcrumb] = useState(false);

  return (
    <AppLayout
      ariaLabels={labels}
      breadcrumbs={
        urlParams.hasOwnBreadcrumbs && (
          <BreadcrumbGroup
            items={[
              { text: 'Own', href: '#' },
              { text: 'instance', href: '#' },
            ]}
          />
        )
      }
      content={
        <SpaceBetween size="m">
          <h1>Page with additional breadcrumbs</h1>
          <BreadcrumbGroup
            items={[
              { text: 'Default', href: '#' },
              { text: 'one', href: '#' },
            ]}
          />
          <label>
            <input
              type="checkbox"
              data-testid="toggle-extra-breadcrumb"
              onChange={event => setExtraBreadcrumb(event.target.checked)}
            />{' '}
            Extra breadcrumb
          </label>
          {extraBreadcrumb && (
            <BreadcrumbGroup
              items={[
                { text: 'Dynamic', href: '#' },
                { text: 'instance', href: '#' },
              ]}
            />
          )}
        </SpaceBetween>
      }
    />
  );
}
