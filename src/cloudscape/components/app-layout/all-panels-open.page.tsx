// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import AppLayout from '@cloudscape-design/components/app-layout';
import Header from '@cloudscape-design/components/header';

import ScreenshotArea from '../utils/screenshot-area';
import { Breadcrumbs, Containers, Navigation, Tools } from './utils/content-blocks';
import labels from './utils/labels';

export default function () {
  return (
    <ScreenshotArea gutters={false}>
      <AppLayout
        ariaLabels={labels}
        breadcrumbs={<Breadcrumbs />}
        navigationOpen={true}
        navigation={<Navigation />}
        toolsOpen={true}
        tools={<Tools>On mobile, tools panel displayed above navigation</Tools>}
        content={
          <>
            <div style={{ marginBlockEnd: '1rem' }}>
              <Header variant="h1" description="Basic demo">
                Demo page
              </Header>
            </div>
            <Containers />
          </>
        }
      />
    </ScreenshotArea>
  );
}
