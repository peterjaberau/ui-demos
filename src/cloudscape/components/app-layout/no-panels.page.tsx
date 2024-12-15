// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import clsx from 'clsx';

import AppLayout from '@cloudscape-design/components/app-layout';
import Header from '@cloudscape-design/components/header';

import ScreenshotArea from '../utils/screenshot-area';
import labels from './utils/labels';

import styles from './styles.module.scss';

export default function () {
  return (
    <ScreenshotArea gutters={false}>
      <AppLayout
        ariaLabels={labels}
        navigationHide={true}
        toolsHide={true}
        content={
          <>
            <Header variant="h1">This page contains app-layout even if you do not see it...</Header>
            <div className={clsx(styles.longContent, styles.floatingBlock, styles.highlightBorder)}>
              Some very long content
            </div>
          </>
        }
      />
    </ScreenshotArea>
  );
}
