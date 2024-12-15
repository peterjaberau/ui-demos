// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import AppLayout from '@cloudscape-design/components/app-layout';
import ExpandableSection from '@cloudscape-design/components/expandable-section';
import Header from '@cloudscape-design/components/header';
import Table from '@cloudscape-design/components/table';

import { generateItems, Instance } from '../table/generate-data';
import { columnsConfig } from '../table/shared-configs';
import labels from './utils/labels';

const items = generateItems(20);

export default function () {
  return (
    <AppLayout
      ariaLabels={labels}
      contentType="table"
      navigationHide={true}
      content={
        <Table<Instance>
          header={
            <>
              <Header variant="awsui-h1-sticky">Header that changes size when scrolling</Header>
              <ExpandableSection headerText="Click to expand header area">
                <div style={{ blockSize: '300px' }}>Content</div>
              </ExpandableSection>
            </>
          }
          stickyHeader={true}
          variant="full-page"
          columnDefinitions={columnsConfig}
          items={items}
        />
      }
    />
  );
}
