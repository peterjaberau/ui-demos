// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import Autosuggest from '@cloudscape-design/components/autosuggest';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import ButtonDropdown from '@cloudscape-design/components/button-dropdown';
import Checkbox from '@cloudscape-design/components/checkbox';
import FormField from '@cloudscape-design/components/form-field';
import Input from '@cloudscape-design/components/input';
import Multiselect from '@cloudscape-design/components/multiselect';
import RadioGroup from '@cloudscape-design/components/radio-group';
import SegmentedControl from '@cloudscape-design/components/segmented-control';
import Select from '@cloudscape-design/components/select';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Textarea from '@cloudscape-design/components/textarea';
import Tiles from '@cloudscape-design/components/tiles';

import ScreenshotArea from '../utils/screenshot-area';

import styles from './styles.module.scss';

const options = [
  {
    label: 'Option 1',
    value: '1',
    description: 'This is a description',
  },
];

const items = [
  { value: 'first', label: 'First choice' },
  { value: 'second', label: 'Second choice' },
  { value: 'third', label: 'Third choice' },
];

const onChange = () => {};

export default function ContentHeaderVisualContextDemo() {
  return (
    <ScreenshotArea disableAnimations={true} gutters={false}>
        <Box padding="l" className={styles.main}>
          <SpaceBetween size="l">
            <Box variant="h1">Content header visual context</Box>
            <SpaceBetween direction="horizontal" size="xs">
              <Button>Normal button</Button>
              <Button disabled={true}>Disabled</Button>
            </SpaceBetween>
            <SpaceBetween direction="horizontal" size="xs">
              <ButtonDropdown
                items={[
                  { text: 'Delete', id: 'rm', disabled: false },
                  { text: 'Move', id: 'mv', disabled: false },
                  { text: 'Rename', id: 'rn', disabled: true },
                ]}
              >
                Button dropdown
              </ButtonDropdown>
              <ButtonDropdown items={[]} disabled={true}>
                Disabled
              </ButtonDropdown>
              <ButtonDropdown
                expandToViewport={true}
                data-testid="button-dropdown-expand"
                items={[
                  { text: 'Delete', id: 'rm', disabled: false },
                  { text: 'Move', id: 'mv', disabled: false },
                  { text: 'Rename', id: 'rn', disabled: true },
                ]}
              >
                Button dropdown
              </ButtonDropdown>
            </SpaceBetween>
            <SegmentedControl
              selectedId="seg-1"
              onChange={onChange}
              label="Default segmented control"
              options={[
                { text: 'Segment 1', id: 'seg-1' },
                { text: 'Segment 2', id: 'seg-2' },
                { text: 'Segment 3', id: 'seg-3', disabled: true },
              ]}
            />
            <FormField label="Checkbox">
              <Checkbox checked={true} onChange={onChange}>
                Checked
              </Checkbox>
              <Checkbox checked={false} onChange={onChange}>
                Not checked
              </Checkbox>
            </FormField>
            <FormField label="Checkbox">
              <RadioGroup onChange={onChange} value="first" items={items} />
            </FormField>
            <FormField label="Checkbox">
              <Tiles onChange={onChange} value="first" items={items} />
            </FormField>
            <FormField label="Input">
              <Input value="input" onChange={onChange} />
            </FormField>
            <FormField label="Textarea">
              <Textarea value="textarea" onChange={onChange} />
            </FormField>
            <FormField label="Select">
              <Select selectedOption={null} options={options} onChange={onChange} />
            </FormField>
            <FormField label="Select with expandToViewport">
              <Select
                selectedOption={null}
                options={options}
                onChange={onChange}
                expandToViewport={true}
                data-testid="select-expand"
              />
            </FormField>
            <FormField label="Multiselect">
              <Multiselect selectedOptions={[]} options={options} onChange={onChange} />
            </FormField>
            <FormField label="Autosuggest">
              <Autosuggest value={''} options={options} onChange={onChange} enteredTextLabel={() => 'label'} />
            </FormField>
          </SpaceBetween>
        </Box>
    </ScreenshotArea>
  );
}
