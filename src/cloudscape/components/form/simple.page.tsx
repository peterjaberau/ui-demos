// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Form from '@cloudscape-design/components/form';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Input from '@cloudscape-design/components/input';
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Tiles from '@cloudscape-design/components/tiles';

import ScreenshotArea from '../utils/screenshot-area';

import styles from './styles.module.scss';

export default function FormScenario() {
  const [value, setValue] = useState<string>('bar');

  return (
    <ScreenshotArea>
      <div className={styles['form-container']}>
        <Form
          header={
            <Header
              variant="h1"
              description="You can find more examples in Form field documentation page"
              info={<Link variant="info">Info</Link>}
            >
              Form header
            </Header>
          }
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link">Cancel</Button>
              <Button variant="primary">Submit</Button>
            </SpaceBetween>
          }
          errorText="This is an error!"
          errorIconAriaLabel="Error"
        >
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
                <FormField label="Some tiles">
                  <Tiles
                    value={value}
                    onChange={event => setValue(event.detail.value)}
                    columns={3}
                    items={[
                      { label: 'Foo', value: 'foo' },
                      { label: 'Bar', value: 'bar' },
                      { label: 'Baz', value: 'baz', disabled: true },
                      { label: 'Boo', value: 'boo' },
                    ]}
                  />
                </FormField>
                <FormField label="Third field">
                  <Input value="" readOnly={true} />
                </FormField>
              </SpaceBetween>
            </Container>
          </SpaceBetween>
        </Form>
      </div>
    </ScreenshotArea>
  );
}
