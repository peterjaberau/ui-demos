// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import Box from '@cloudscape-design/components/box';
import Popover from '@cloudscape-design/components/popover';

import ScreenshotArea from '../utils/screenshot-area';

export default function () {
  const content = 'Nothing to see here';
  return (
    <>
      <h1>Popover rendered inside inline text</h1>
      <ScreenshotArea>
        <Box variant="p">
          Very{' '}
          <Popover content={content} renderWithPortal={true} dismissButton={false}>
            important
          </Popover>{' '}
          message.
        </Box>
      </ScreenshotArea>
    </>
  );
}
