// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
import clsx from 'clsx';

import AppLayout from '@cloudscape-design/components/app-layout';
import Flashbar from '@cloudscape-design/components/flashbar';

import ScreenshotArea from '../utils/screenshot-area';
import { Breadcrumbs } from './utils/content-blocks';
import labels from './utils/labels';

import styles from './styles.module.scss';

export default function () {
  const [isSticky, setSticky] = useState(true);

  return (
    <ScreenshotArea gutters={false}>
      <AppLayout
        ariaLabels={labels}
        stickyNotifications={isSticky}
        breadcrumbs={<Breadcrumbs />}
        notifications={
          <Flashbar
            items={[
              {
                type: 'success',
                header: 'Success message',
                statusIconAriaLabel: 'success',
                buttonText: 'Toggle sticky notifications',
                onButtonClick: () => setSticky(sticky => !sticky),
              },
            ]}
          />
        }
        content={
          <div className={styles.highlightBorder}>
            <div>
              <h1>Distribution details</h1>
            </div>
            <div className={clsx(styles.longContent, styles.floatingBlock)}>Some very long content</div>
          </div>
        }
      />
    </ScreenshotArea>
  );
}
