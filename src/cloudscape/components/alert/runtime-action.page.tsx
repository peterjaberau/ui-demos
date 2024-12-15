// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { render, unmountComponentAtNode } from 'react-dom';

import Alert from '@cloudscape-design/components/alert';
import Button from '@cloudscape-design/components/button';
import awsuiPlugins from '@/cloudscape/internals/components/plugins';
import SpaceBetween from '@cloudscape-design/components/space-between';

import createPermutations from '../utils/permutations';
import PermutationsView from '../utils/permutations-view';
import ScreenshotArea from '../utils/screenshot-area';

awsuiPlugins.alert.registerAction({
  id: 'awsui/alert-test-action',
  mountContent: (container: any, context: any) => {
    if (context.type !== 'error') {
      return;
    }
    render(
      <Button
        iconName="status-info"
        onClick={() => {
          alert(
            [
              'Content',
              `Type: ${context.type}`,
              `Header: ${context.headerRef.current?.textContent}`,
              `Content: ${context.contentRef.current?.textContent}`,
            ].join('\n')
          );
        }}
      >
        Runtime button
      </Button>,
      container
    );
  },
  unmountContent: (container: any) => unmountComponentAtNode(container),
});

/* eslint-disable react/jsx-key */
const permutations = createPermutations<any>([
  {
    dismissible: [true, false],
    header: ['Alert'],
    children: ['Content'],
    type: ['success', 'error'],
    action: [
      null,
      <Button>Action</Button>,
      <SpaceBetween direction="horizontal" size="xs">
        <Button>Action 1</Button>
        <Button>Action 2</Button>
      </SpaceBetween>,
    ],
  },
]);
/* eslint-enable react/jsx-key */

export default function () {

  console.log('---alert runtime actions-------');
  return (
    <>
      <h1>Alert runtime actions</h1>
      <ScreenshotArea>
        <PermutationsView
          permutations={permutations}
          render={permutation => (
            <Alert statusIconAriaLabel={permutation.type} dismissAriaLabel="Dismiss" {...permutation} />
          )}
        />
      </ScreenshotArea>
    </>
  );
}
