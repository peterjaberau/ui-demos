// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useContext, useState } from 'react';

import AppLayout from '@cloudscape-design/components/app-layout';
import Container from '@cloudscape-design/components/container';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Flashbar from '@cloudscape-design/components/flashbar';
import Header from '@cloudscape-design/components/header';
import Toggle from '@cloudscape-design/components/toggle';

import AppContext, { AppContextType } from '../app/app-context';
import { Breadcrumbs } from '../app-layout/utils/content-blocks';
import appLayoutLabels from '../app-layout/utils/labels';
import ScreenshotArea from '../utils/screenshot-area';

type DemoContext = React.Context<
  AppContextType<{ hasBreadcrumbs: boolean; hasNotifications: boolean; disableOverlap: boolean }>
>;

export default function () {
  const { urlParams, setUrlParams } = useContext(AppContext as DemoContext);
  const [stickyNotifications, setStickyNotifications] = useState(true);
  return (
    <ScreenshotArea gutters={false}>
      <AppLayout
        contentType="form"
        ariaLabels={appLayoutLabels}
        stickyNotifications={stickyNotifications}
        notifications={
          <Flashbar
            items={
              urlParams.hasNotifications
                ? [
                    {
                      type: 'success',
                      header: 'Success message',
                      statusIconAriaLabel: 'success',
                    },
                  ]
                : []
            }
          />
        }
        breadcrumbs={urlParams.hasBreadcrumbs && <Breadcrumbs />}
        content={
          <ContentLayout disableOverlap={urlParams.disableOverlap}>
            <Container
              header={
                <Header variant="h2" headingTagOverride="h1">
                  Container header
                </Header>
              }
            >
              <Toggle
                checked={urlParams.hasBreadcrumbs}
                onChange={() => setUrlParams({ hasBreadcrumbs: !urlParams.hasBreadcrumbs })}
              >
                Has breadcrumbs
              </Toggle>
              <Toggle
                checked={urlParams.hasNotifications}
                onChange={() => setUrlParams({ hasNotifications: !urlParams.hasNotifications })}
              >
                Has notifications
              </Toggle>
              <Toggle checked={stickyNotifications} onChange={() => setStickyNotifications(!stickyNotifications)}>
                Sticky notifications
              </Toggle>
              <Toggle
                checked={urlParams.disableOverlap}
                onChange={() => setUrlParams({ disableOverlap: !urlParams.disableOverlap })}
              >
                Disable overlap
              </Toggle>
              <div style={{ height: 400 }}></div>
            </Container>
          </ContentLayout>
        }
      />
    </ScreenshotArea>
  );
}
