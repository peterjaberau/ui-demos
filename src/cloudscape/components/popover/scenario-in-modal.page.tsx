// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import Button from '@cloudscape-design/components/button';
import Modal from '@cloudscape-design/components/modal';
import Popover from '@cloudscape-design/components/popover';

import ScreenshotArea from '../utils/screenshot-area';

export default function () {
  const [visible, setVisible] = useState(false);

  return (
    <article>
      <h1>Popover inside table</h1>
      <Button formAction="none" onClick={() => setVisible(true)}>
        Show modal
      </Button>
      <ScreenshotArea>
        <Modal header="Modal" closeAriaLabel="Close" visible={visible} onDismiss={() => setVisible(false)}>
          <Popover
            id="popover"
            size="medium"
            position="left"
            header="Memory error"
            content={
              <>
                This instance contains insufficient memory. Stop the instance, choose a different instance type with
                more memory, and restart it.
              </>
            }
            dismissAriaLabel="Close"
          >
            Error
          </Popover>
        </Modal>
      </ScreenshotArea>
    </article>
  );
}
