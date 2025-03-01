// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import { Box } from '@cloudscape-design/components';
import TimeInput from '@cloudscape-design/components/time-input';

export default function TimeInputScenario() {
  const [value, setValue] = useState('');

  return (
    <Box padding="l">
      <h1>Time input</h1>
      <section>
        <TimeInput
          format="hh:mm:ss"
          placeholder="hh:mm:ss"
          ariaLabel="time-input"
          value={value}
          onChange={event => setValue(event.detail.value)}
        />
      </section>
    </Box>
  );
}
