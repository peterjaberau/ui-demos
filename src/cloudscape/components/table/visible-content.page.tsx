// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import { useCollection } from '@cloudscape-design/collection-hooks';

import Button from '@cloudscape-design/components/button';
import CollectionPreferences, { CollectionPreferencesProps } from '@cloudscape-design/components/collection-preferences';
import Header from '@cloudscape-design/components/header';
import Pagination from '@cloudscape-design/components/pagination';
import Table from '@cloudscape-design/components/table';
import TextFilter from '@cloudscape-design/components/text-filter';

import ScreenshotArea from '../utils/screenshot-area';
import { generateItems, Instance } from './generate-data';
import { columnsConfig, EmptyState, getMatchesCountText, pageSizeOptions, paginationLabels } from './shared-configs';

export const visibleContentOptions: ReadonlyArray<CollectionPreferencesProps.VisibleContentOptionsGroup> = [
  {
    label: 'Instance properties',
    options: [
      {
        id: 'id',
        label: 'ID',
        editable: false,
      },
      { id: 'type', label: 'Type' },
      {
        id: 'dnsName',
        label: 'DNS name',
      },
      {
        id: 'imageId',
        label: 'Image ID',
      },
      {
        id: 'state',
        label: 'State',
      },
    ],
  },
];

const allItems = generateItems();

export default function App() {
  const [preferences, setPreferences] = useState<CollectionPreferencesProps.Preferences>({
    pageSize: 20,
    visibleContent: ['id', 'type', 'dnsName', 'state'],
    wrapLines: false,
  });
  const { items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps } = useCollection(
    allItems,
    {
      filtering: {
        empty: (
          <EmptyState
            title="No resources"
            subtitle="No resources to display."
            action={<Button>Create resource</Button>}
          />
        ),
        noMatch: (
          <EmptyState
            title="No matches"
            subtitle="We can’t find a match."
            action={<Button onClick={() => actions.setFiltering('')}>Clear filter</Button>}
          />
        ),
      },
      pagination: { pageSize: preferences.pageSize },
      sorting: {},
    }
  );
  return (
    <ScreenshotArea>
      <Table<Instance>
        {...collectionProps}
        header={
          <Header headingTagOverride="h1" counter={`(${allItems.length})`}>
            Instances
          </Header>
        }
        columnDefinitions={columnsConfig}
        items={items}
        pagination={<Pagination {...paginationProps} ariaLabels={paginationLabels} />}
        filter={
          <TextFilter
            {...filterProps!}
            countText={getMatchesCountText(filteredItemsCount!)}
            filteringAriaLabel="Filter instances"
          />
        }
        visibleColumns={preferences.visibleContent}
        preferences={
          <CollectionPreferences
            title="Preferences"
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            onConfirm={({ detail }) => setPreferences(detail)}
            preferences={preferences}
            pageSizePreference={{
              title: 'Select page size',
              options: pageSizeOptions,
            }}
            visibleContentPreference={{
              title: 'Select visible columns',
              options: visibleContentOptions,
            }}
            wrapLinesPreference={{
              label: 'Wrap lines',
              description: 'Wrap lines description',
            }}
          />
        }
        stickyHeader={true}
      />
    </ScreenshotArea>
  );
}
