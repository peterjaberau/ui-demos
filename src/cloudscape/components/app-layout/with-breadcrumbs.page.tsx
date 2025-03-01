// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import AppLayout from '@cloudscape-design/components/app-layout';
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group';

import ScreenshotArea from '../utils/screenshot-area';
import label from './utils/labels';

import styles from './styles.module.scss';

function Breadcrumbs() {
  return (
    <BreadcrumbGroup
      items={[
        { text: 'Home', href: '#' },
        { text: 'Service with a long long long long long long long long long long long long long title', href: '#' },
      ]}
    />
  );
}

export default function () {
  return (
    <ScreenshotArea gutters={false}>
      <AppLayout
        ariaLabels={label}
        breadcrumbs={<Breadcrumbs />}
        content={
          <div className={styles.highlightBorder}>
            <div>
              <h1>Distribution details</h1>
            </div>
            <div>Some information</div>
          </div>
        }
      />
    </ScreenshotArea>
  );
}
