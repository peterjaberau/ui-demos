// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import AppLayout from '@cloudscape-design/components/app-layout';
import Box from '@cloudscape-design/components/box';
import CollectionPreferences, { CollectionPreferencesProps } from '@cloudscape-design/components/collection-preferences';
import Header from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';
import SplitPanel from '@cloudscape-design/components/split-panel';
import Table from '@cloudscape-design/components/table';

import { generateItems } from '../table/generate-data';
import { columnsConfig } from '../table/shared-configs';
import labels from './utils/labels';
import { splitPaneli18nStrings } from './utils/strings';

export default function () {
  const visibleContentOptions: ReadonlyArray<CollectionPreferencesProps.VisibleContentOptionsGroup> = [
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

  const [navigationOpen, setNavigationOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [preferences, setPreferences] = useState<CollectionPreferencesProps.Preferences>({
    stickyColumns: { first: 1, last: 1 },
    visibleContent: visibleContentOptions[0].options.map(o => o.id),
  });
  const items = generateItems(20);

  return (
    <AppLayout
      ariaLabels={labels}
      contentType="table"
      navigationOpen={navigationOpen}
      toolsOpen={toolsOpen}
      onNavigationChange={({ detail }) => setNavigationOpen(detail.open)}
      onToolsChange={({ detail }) => setToolsOpen(detail.open)}
      splitPanelOpen={true}
      splitPanel={
        <SplitPanel header="Split panel header" i18nStrings={splitPaneli18nStrings}>
          I need to be on top! Even on mobile!
        </SplitPanel>
      }
      content={
        <Table
          resizableColumns={true}
          variant="full-page"
          stickyHeader={true}
          footer={
            <Box textAlign="center">
              <Link href="#">View all</Link>
            </Box>
          }
          stickyColumns={preferences.stickyColumns}
          visibleColumns={preferences.visibleContent}
          preferences={
            <CollectionPreferences
              title="Preferences"
              confirmLabel="Confirm"
              cancelLabel="Cancel"
              onConfirm={({ detail }) => setPreferences(detail)}
              preferences={preferences}
              visibleContentPreference={{
                title: 'Select visible columns',
                options: visibleContentOptions,
              }}
              stickyColumnsPreference={{
                firstColumns: {
                  title: 'First column(s)',
                  description: 'Keep the first column(s) visible while horizontally scrolling table content.',
                  options: [
                    { label: 'None', value: 0 },
                    { label: 'First column', value: 1 },
                    { label: 'First two columns', value: 2 },
                  ],
                },
                lastColumns: {
                  title: 'Stick last visible column',
                  description: 'Keep the last column visible when tables are wider than the viewport.',
                  options: [
                    { label: 'None', value: 0 },
                    { label: 'Last column', value: 1 },
                  ],
                },
              }}
            />
          }
          header={
            <Header variant="awsui-h1-sticky" actions={<div style={{ blockSize: '10vh' }} />}>
              Sticky Full-Page Header
            </Header>
          }
          columnDefinitions={columnsConfig}
          items={items}
        />
      }
    />
  );
}
