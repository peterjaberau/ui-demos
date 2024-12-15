// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import Box from '@cloudscape-design/components/box';
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';

import ScreenshotArea from '../utils/screenshot-area';

export default function () {
  return (
    <>
      <h1>Inherit parent styles</h1>
      <ScreenshotArea>
        <SpaceBetween size="l">
          <Box variant="strong">
            Bold text with <Link href="#">a link</Link>
          </Box>
          <Box variant="small">
            Small text with <Link href="#">a link</Link>
          </Box>
          <Box color="text-status-success">
            The colored text with <Link href="#">a normal link</Link>
          </Box>
          <Box>
            Dashboard link{' '}
            <Link href="#" variant="awsui-value-large">
              14
            </Link>
          </Box>
        </SpaceBetween>
      </ScreenshotArea>
    </>
  );
}
