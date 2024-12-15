// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import Button from '@cloudscape-design/components/button';
import ButtonDropdown from '@cloudscape-design/components/button-dropdown';
import Container from '@cloudscape-design/components/container';
import Form, { FormProps } from '@cloudscape-design/components/form';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Input from '@cloudscape-design/components/input';
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';

import createPermutations from '../utils/permutations';
import PermutationsView from '../utils/permutations-view';
import ScreenshotArea from '../utils/screenshot-area';

/* eslint-disable react/jsx-key */
const permutations = createPermutations<FormProps>([
  {
    header: [
      <Header variant="h1">Form header</Header>,
      <Header variant="h1" description="You can find more examples in Form field documentation page">
        Form header
      </Header>,
      <Header
        variant="h1"
        description="You can find more examples in Form field documentation page"
        info={<Link variant="info">Info</Link>}
      >
        Form header
      </Header>,
    ],
    children: [
      <SpaceBetween direction="vertical" size="l">
        <Container header={<Header variant="h2">Form section header 1</Header>}>
          <SpaceBetween direction="vertical" size="l">
            <FormField label="First field">
              <Input value="" readOnly={true} />
            </FormField>
            <FormField label="Second field">
              <Input value="" readOnly={true} />
            </FormField>
          </SpaceBetween>
        </Container>
        <Container header={<Header variant="h2">Form section header 2</Header>}>
          <SpaceBetween direction="vertical" size="l">
            <FormField label="First field">
              <Input value="" readOnly={true} />
            </FormField>
            <FormField label="Second field">
              <Input value="" readOnly={true} />
            </FormField>
          </SpaceBetween>
        </Container>
      </SpaceBetween>,
    ],
    errorText: ['', 'This is an error!'],
    errorIconAriaLabel: ['Error'],
    actions: [
      <SpaceBetween direction="horizontal" size="xs">
        <Button variant="link">Cancel</Button>
        <Button variant="primary">Submit</Button>
      </SpaceBetween>,
    ],
    variant: ['embedded'],
  },
]);

const secondaryActionsPermutations = createPermutations<FormProps>([
  {
    header: [<Header variant="h1">Form header</Header>],
    children: [
      <SpaceBetween direction="vertical" size="l">
        <FormField label="First field">
          <Input value="" readOnly={true} />
        </FormField>
        <FormField label="Second field">
          <Input value="" readOnly={true} />
        </FormField>
      </SpaceBetween>,
    ],
    actions: [
      <SpaceBetween direction="horizontal" size="xs">
        <Button variant="link">Cancel</Button>
        <Button variant="primary">Submit</Button>
      </SpaceBetween>,
    ],
    secondaryActions: [
      <Button>Save and close</Button>,
      <ButtonDropdown items={[{ id: '1', text: 'Item 1' }]}>Actions</ButtonDropdown>,
      <SpaceBetween direction="horizontal" size="xs">
        <Button variant="link">Info</Button>
        <Button>Save and close</Button>
      </SpaceBetween>,
    ],
    variant: ['embedded'],
  },
]);

const layoutPermutations = createPermutations<FormProps>([
  {
    header: [<Header variant="h1">Form header</Header>, undefined],
    children: [
      <Container header={<Header variant="h2">Form section</Header>}>
        <FormField label="Form field">
          <Input value="" readOnly={true} />
        </FormField>
      </Container>,
    ],
    actions: [
      <SpaceBetween direction="horizontal" size="xs">
        <Button variant="link">Cancel</Button>
        <Button variant="primary">Submit</Button>
      </SpaceBetween>,
    ],
    variant: ['embedded', 'full-page'],
  },
]);

export default function FormPermutations() {
  return (
    <>
      <h1>Form permutations</h1>
      <ScreenshotArea>
        <PermutationsView
          permutations={[...permutations, ...secondaryActionsPermutations, ...layoutPermutations]}
          render={permutation => <Form {...permutation} />}
        />
      </ScreenshotArea>
    </>
  );
}
