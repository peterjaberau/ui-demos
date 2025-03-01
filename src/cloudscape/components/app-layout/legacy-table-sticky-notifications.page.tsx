// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import AppLayout from '@cloudscape-design/components/app-layout';
import Flashbar from '@cloudscape-design/components/flashbar';
import Header from '@cloudscape-design/components/header';
import Table from '@cloudscape-design/components/table';

import ScreenshotArea from '../utils/screenshot-area';
import { Breadcrumbs } from './utils/content-blocks';
import labels from './utils/labels';

export default function () {
  return (
    <ScreenshotArea gutters={false}>
      <AppLayout
        ariaLabels={labels}
        stickyNotifications={true}
        breadcrumbs={<Breadcrumbs />}
        disableBodyScroll={true}
        contentType="table"
        notifications={
          <Flashbar
            items={[
              {
                type: 'success',
                header: 'Success message',
                statusIconAriaLabel: 'success',
              },
              {
                type: 'info',
                header: 'Info message',
                statusIconAriaLabel: 'success',
              },
            ]}
          />
        }
        content={
          <>
            <h1>Sticky Notifications + Table Header</h1>
            <Table
              header={<Header>Sticky Table Header 1</Header>}
              footer={<div style={{ blockSize: '100vh' }}></div>}
              items={[]}
              columnDefinitions={[]}
              stickyHeader={true}
            />
          </>
        }
      />
    </ScreenshotArea>
  );
}
