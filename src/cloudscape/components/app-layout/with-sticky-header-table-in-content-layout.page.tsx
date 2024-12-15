// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import AppLayout from '@cloudscape-design/components/app-layout';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Table from '@cloudscape-design/components/table';

import { generateItems, Instance } from '../table/generate-data';
import { columnsConfig } from '../table/shared-configs';
import ScreenshotArea from '../utils/screenshot-area';
import { Breadcrumbs } from './utils/content-blocks';
import labels from './utils/labels';

const items = generateItems(20);

export default function () {
  return (
    <ScreenshotArea gutters={false}>
      <AppLayout
        ariaLabels={labels}
        breadcrumbs={<Breadcrumbs />}
        navigationHide={true}
        toolsHide={true}
        content={
          <ContentLayout header={<Header variant="h1">Table with Sticky Header inside Content Layout</Header>}>
            <Table<Instance>
              header={<Header>Table with Sticky Header</Header>}
              stickyHeader={true}
              columnDefinitions={columnsConfig}
              items={items}
            />
          </ContentLayout>
        }
      />
    </ScreenshotArea>
  );
}
