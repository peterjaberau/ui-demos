// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import Autosuggest from '@cloudscape-design/components/autosuggest';
import SpaceBetween from '@cloudscape-design/components/space-between';

import ScreenshotArea from '../utils/screenshot-area';

const options = new Array(200)
  .join('.')
  .split('.')
  .map((_value, index) => ({ id: `${index}`, label: `option ${index}` }));
const enteredTextLabel = (value: string) => `Use: ${value}`;

export default function () {
  const [value, setValue] = useState('');

  return (
    <>
      <h1>Autosuggest recovery test</h1>
      <ScreenshotArea disableAnimations={true} style={{ blockSize: '500px' }}>
        <SpaceBetween direction="horizontal" size="m">
          <Autosuggest
            value={value}
            onChange={e => setValue(e.detail.value)}
            statusType="error"
            errorText="Some error"
            options={options}
            ariaLabel="Some input"
            enteredTextLabel={enteredTextLabel}
            expandToViewport={true}
            recoveryText="Try again"
            onLoadItems={() => {}}
          />
        </SpaceBetween>
      </ScreenshotArea>
    </>
  );
}
