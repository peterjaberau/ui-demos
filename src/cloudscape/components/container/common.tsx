// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useState } from 'react';

import Button from '@cloudscape-design/components/button';
import { ContainerProps } from '@cloudscape-design/components/container';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';

let nextIframeIndex = 0;
export const PermutationIframe = () => {
  const [iframeIndex] = useState(() => nextIframeIndex++);
  return <iframe title={`iframe ${iframeIndex}`} srcDoc="<h1>This is an iframe</h1>"></iframe>;
};

export const PermutationContainer = ({ permutation }: { permutation: ContainerProps.Media }) => {
  return (
    <Container
      header={
        <Header
          variant="h2"
          headingTagOverride="h1"
          description={
            <>
              Some additional text{' '}
              <Link fontSize="inherit" variant="primary">
                with a link
              </Link>
              .
            </>
          }
          info={<Link variant="info">Info</Link>}
        >
          <Link fontSize="heading-m" href="" variant="primary">
            Secondary link
          </Link>
        </Header>
      }
      footer={<Link>Learn more</Link>}
      media={permutation}
    >
      <SpaceBetween direction="vertical" size="m">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phasellus tincidunt suscipit varius. Nullam dui
          tortor, mollis vitae molestie sed, malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing. Nullam dui
          tortor, mollis vitae molestie sed. Phasellus tincidunt suscipit varius.
        </span>
        <Button>Button</Button>
      </SpaceBetween>
    </Container>
  );
};
