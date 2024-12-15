// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useState } from 'react';
import clsx from 'clsx';
import React from 'react';
import { NonCancelableCustomEvent } from '@cloudscape-design/components';
import Popover, { PopoverProps } from '@cloudscape-design/components/popover';
import SegmentedControl, { SegmentedControlProps } from '@cloudscape-design/components/segmented-control';

import ScreenshotArea from '../utils/screenshot-area';

import styles from './positioning.module.scss';

export default function () {
  const [renderWithPortal, setRenderWithPortal] = React.useState(false);
  const [position, setPosition] = useState<PopoverProps.Position>('top');
  const onPositionChange = useCallback((event: NonCancelableCustomEvent<SegmentedControlProps.ChangeDetail>) => {
    setPosition(event.detail.selectedId as PopoverProps.Position);
  }, []);

  return (
    <>
      <h1>Popover positioning playground</h1>

      <label>
        <input
          id="renderWithPortal"
          type="checkbox"
          checked={renderWithPortal}
          onChange={e => setRenderWithPortal(e.target.checked)}
        />
        renderWithPortal
      </label>

      <SegmentedControl
        id="position-control"
        label="Position"
        options={[
          { id: 'top', text: 'Top' },
          { id: 'right', text: 'Right' },
          { id: 'bottom', text: 'Bottom' },
          { id: 'left', text: 'Left' },
        ]}
        selectedId={position}
        onChange={onPositionChange}
      />

      <ScreenshotArea gutters={false} className={styles.grid}>
        {[1, 2, 3].map(row =>
          [1, 2, 3].map(col => (
            <div
              key={`${row}${col}`}
              className={clsx(styles.square, styles[`square-row-${row}`], styles[`square-col-${col}`])}
            >
              <Popover
                id={`popover-${row}-${col}`}
                size="medium"
                position={position}
                header="Memory error"
                content={
                  <>
                    This instance contains insufficient memory. Stop the instance, choose a different instance type with
                    more memory, and restart it.
                  </>
                }
                dismissAriaLabel="Close"
                renderWithPortal={renderWithPortal}
              >
                Click!
              </Popover>
            </div>
          ))
        )}
      </ScreenshotArea>
    </>
  );
}
