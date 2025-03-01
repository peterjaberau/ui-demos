// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import Input from '@cloudscape-design/components/input';
import SegmentedControl from '@cloudscape-design/components/segmented-control';

export default function SegmentedControlPage() {
  const [selectedId, setSelectedId] = useState<string | null>('seg-4');
  return (
    <article>
      <h1>SegmentedControl with disabled reason</h1>
      <Input ariaLabel="Input Label" value="" readOnly={true} />
      <SegmentedControl
        options={[
          { text: 'Segment-1', iconName: 'settings', id: 'seg-1', disabled: false },
          { text: 'Segment-2', iconName: 'settings', id: 'seg-2', disabled: true },
          { text: 'Segment-3', iconName: 'settings', id: 'seg-3', disabled: true, disabledReason: 'disabled reason' },
          { text: 'Segment-4', iconName: 'settings', id: 'seg-4', disabled: false },
          { text: 'Segment-5', iconName: 'settings', id: 'seg-5', disabled: false },
        ]}
        onChange={event => setSelectedId(event.detail.selectedId)}
        selectedId={selectedId}
        label="Segmented Control Label"
      />
    </article>
  );
}
