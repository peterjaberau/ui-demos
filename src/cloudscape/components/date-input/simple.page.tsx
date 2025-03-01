// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import { Box } from '@cloudscape-design/components';
import DateInput from '@cloudscape-design/components/date-input';

export default function DateInputScenario() {
  const [value, setValue] = useState('');

  return (
    <Box padding="l">
      <h1>Date input</h1>
      <DateInput
        className="testing-date-input"
        name="date"
        ariaLabel="Enter the date in YYYY/MM/DD"
        placeholder="YYYY/MM/DD"
        onChange={event => setValue(event.detail.value)}
        value={value}
      />
    </Box>
  );
}
