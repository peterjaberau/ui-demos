// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import AppLayout from '@cloudscape-design/components/app-layout';
import Header from '@cloudscape-design/components/header';

import { Counter } from './utils/content-blocks';
import labels from './utils/labels';

export default function AppLayoutStatefulDemo() {
  return (
    <AppLayout
      ariaLabels={labels}
      breadcrumbs={<Counter id="breadcrumbs" />}
      navigation={<Counter id="navigation" />}
      tools={<Counter id="tools" />}
      content={
        <>
          <div style={{ marginBlockEnd: '1rem' }}>
            <Header variant="h1" description="Basic demo">
              Stateful components demo
            </Header>
          </div>
          <Counter id="content" />
        </>
      }
    />
  );
}
