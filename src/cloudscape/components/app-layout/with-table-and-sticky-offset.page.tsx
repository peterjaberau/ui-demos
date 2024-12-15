// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useContext } from 'react';

import AppLayout from '@cloudscape-design/components/app-layout';
import Header from '@cloudscape-design/components/header';
import Table from '@cloudscape-design/components/table';

import AppContext from '../app/app-context';
import { generateItems, Instance } from '../table/generate-data';
import { columnsConfig } from '../table/shared-configs';
import ScreenshotArea from '../utils/screenshot-area';
import { Breadcrumbs } from './utils/content-blocks';
import labels from './utils/labels';

const items = generateItems(20);

export default function () {
  const { urlParams } = useContext(AppContext);
  return (
    <ScreenshotArea gutters={false}>
      <AppLayout
        ariaLabels={labels}
        breadcrumbs={<Breadcrumbs />}
        navigationHide={true}
        toolsHide={true}
        contentType="table"
        content={
          <Table<Instance>
            header={<Header variant="awsui-h1-sticky">Sticky Scrollbar Example</Header>}
            // manually set vertical offset to test this feature
            stickyHeaderVerticalOffset={urlParams.visualRefresh ? 57 : 45}
            stickyHeader={true}
            variant="full-page"
            columnDefinitions={columnsConfig}
            items={items}
          />
        }
      />
    </ScreenshotArea>
  );
}
