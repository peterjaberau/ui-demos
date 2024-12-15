// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import { Box, Button, ButtonDropdown, SpaceBetween } from '@cloudscape-design/components';

export default function ButtonDropdownPage() {
  const [clickedButton, setClickedButton] = useState('');
  return (
    <>
      <Box margin="m">
        <h1>Button dropdown with main action</h1>
        <SpaceBetween size="m">
          <Button data-testid="focus-before" variant="inline-link">
            focus before
          </Button>

          <ButtonDropdown
            data-testid="with-main-action-and-dropdown"
            items={[
              {
                text: 'Launch instance from template',
                id: 'launch-instance-from-template',
              },
            ]}
            onItemClick={() => setClickedButton('Launch instance from template')}
            mainAction={{ text: 'Launch instance', onClick: () => setClickedButton('Launch instance') }}
            ariaLabel="More launch options"
            variant="primary"
          />


          <div id="clicked">{clickedButton}</div>
        </SpaceBetween>
      </Box>
    </>
  );
}
