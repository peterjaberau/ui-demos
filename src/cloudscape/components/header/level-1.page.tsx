// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import Button from '@cloudscape-design/components/button';
import Header from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';

import ScreenshotArea from '../utils/screenshot-area';

export default function PageHeadersDemo() {
  return (
    <ScreenshotArea>
      <Header
        variant="h1"
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button>Button</Button>
            <Button>And Button</Button>
            <Button>And a third Button with very long text</Button>
          </SpaceBetween>
        }
      >
        My large and long title with buttons
      </Header>

      <Header variant="h1" actions={<Button>Button</Button>}>
        My large and long title with single button
      </Header>

      <Header
        variant="h1"
        actions={<Button>Button</Button>}
        info={<Link variant="info">Info</Link>}
        description="This is a page header"
      >
        Page header with description and info link
      </Header>

      <Header variant="h1" actions={<Button>Button</Button>}>
        LongUnbreakableTextLongUnbreakableTextLongUnbreakableTextLongUnbreakableTextLongUnbreakableTextLongUnbreakableTextLongUnbreakableTextLongUnbreakableTextLongUnbreakableText
      </Header>
    </ScreenshotArea>
  );
}
