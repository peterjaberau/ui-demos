// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import { useCollection } from '@cloudscape-design/collection-hooks';

import AppLayout from '@cloudscape-design/components/app-layout';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Table from '@cloudscape-design/components/table';

import { generateItems, Instance } from '../table/generate-data';
import { columnsConfig } from '../table/shared-configs';
import ScreenshotArea from '../utils/screenshot-area';
import { Breadcrumbs, Footer, Navigation, Tools } from './utils/content-blocks';
import labels from './utils/labels';
import * as toolsContent from './utils/tools-content';

const allItems = generateItems();
const PAGE_SIZE = 12;

export default function () {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState<keyof typeof toolsContent>('long');

  function openHelp(article: keyof typeof toolsContent) {
    setToolsOpen(true);
    setSelectedTool(article);
  }

  const { items } = useCollection(allItems, {
    pagination: { pageSize: PAGE_SIZE },
    sorting: {},
  });

  return (
    <ScreenshotArea gutters={false}>
      <AppLayout
        ariaLabels={labels}
        breadcrumbs={<Breadcrumbs />}
        navigation={<Navigation />}
        tools={<Tools>{toolsContent[selectedTool]}</Tools>}
        toolsOpen={toolsOpen}
        onToolsChange={({ detail }) => setToolsOpen(detail.open)}
        content={
          <>
            <SpaceBetween size="l">
              <Container
                header={
                  <Header
                    variant="h2"
                    info={
                      <Link variant="info" onFollow={() => openHelp('small')}>
                        Short info text
                      </Link>
                    }
                  >
                    General details
                  </Header>
                }
              >
                <div style={{ blockSize: '400px', overflow: 'auto' }}>
                  <Table<Instance>
                    header={
                      <Header headingTagOverride="h1" counter={`(${allItems.length})`}>
                        Sticky Scrollbar Example
                      </Header>
                    }
                    columnDefinitions={columnsConfig}
                    items={items}
                  />
                </div>
              </Container>
            </SpaceBetween>
          </>
        }
      />
      <Footer legacyConsoleNav={false} />
    </ScreenshotArea>
  );
}
