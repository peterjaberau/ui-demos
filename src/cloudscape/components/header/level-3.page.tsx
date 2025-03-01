// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import Button from '@cloudscape-design/components/button';
import Header from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';

import ScreenshotArea from '../utils/screenshot-area';

export default function HeadersLevel3Demo() {
  return (
    <ScreenshotArea>
      <SpaceBetween size="xs">
        <Header variant="h3" headingTagOverride="h1">
          h1 override
        </Header>
        <Header variant="h3" headingTagOverride="h2" actions={<Button>Edit</Button>}>
          Wizard section header
        </Header>
        <Header variant="h3" description="Some header description" info={<Link variant="info">Info</Link>} counter="3">
          Full blown header
        </Header>
      </SpaceBetween>
    </ScreenshotArea>
  );
}
