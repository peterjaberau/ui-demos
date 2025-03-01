// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import FormField from '@cloudscape-design/components/form-field';
import Toggle from '@cloudscape-design/components/toggle';

export default function ToggleSimpleScenario() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <h1>Toggle demo</h1>
      <FormField description="This is a description." label="Form field label" id="formfield-with-toggle">
        <Toggle
          checked={checked}
          onChange={event => {
            setChecked(event.detail.checked);
          }}
        >
          Toggle within Formfield
        </Toggle>
      </FormField>
    </>
  );
}
