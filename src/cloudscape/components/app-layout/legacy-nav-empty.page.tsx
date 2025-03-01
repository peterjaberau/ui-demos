// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import AppLayout from '@cloudscape-design/components/app-layout';
import Header from '@cloudscape-design/components/header';

import ScreenshotArea from '../utils/screenshot-area';
import { Footer } from './utils/content-blocks';
import labels from './utils/labels';

export default function () {
  return (
    <ScreenshotArea gutters={false}>
      <AppLayout
        ariaLabels={labels}
        disableBodyScroll={true}
        content={
          <Header variant="h1" description="Works with empty content">
            Legacy AppLayout
          </Header>
        }
      />
      <Footer legacyConsoleNav={true} />
    </ScreenshotArea>
  );
}
