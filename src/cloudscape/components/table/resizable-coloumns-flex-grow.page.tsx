// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import { useCollection } from '@cloudscape-design/collection-hooks';

import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import Header from '@cloudscape-design/components/header';
import Table from '@cloudscape-design/components/table';

import { columnsConfig, EmptyState } from './shared-configs';

export default function () {
  const { collectionProps } = useCollection([], {
    filtering: {
      empty: (
        <EmptyState
          title="No resources"
          subtitle="No resources to display."
          action={<Button>Create resource</Button>}
        />
      ),
    },
  });

  return (
    <>
      <Header variant="h1">Resizable Columns Flex-Grow</Header>
      <Box>Resize any column and reduce screen width to trigger table flickering.</Box>
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          flexWrap: 'nowrap',
          inlineSize: 'calc(100% - 32px)',
          margin: '16px',
        }}
      >
        <div style={{ whiteSpace: 'nowrap' }}>
          <Box padding="s">flex-grow: 0</Box>
        </div>
        <div style={{ display: 'flex', flexGrow: 1 }}>
          <Table
            {...collectionProps}
            resizableColumns={true}
            header="flex-grow: 1"
            columnDefinitions={columnsConfig}
            items={[]}
          />
        </div>
      </div>
    </>
  );
}
