// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import PieChart from '@cloudscape-design/components/pie-chart';

import ScreenshotArea from '../utils/screenshot-area';
import { commonProps, overlappingData } from './common';

export default function () {
  return (
    <ScreenshotArea>
      <h1>Pie charts with additional filtering</h1>
      <Box padding="l">
        <Container header={<Header variant="h2">Overlapping chart</Header>}>
          <PieChart
            {...commonProps}
            data={overlappingData}
            ariaLabel="Overlapping chart"
            size="medium"
            segmentDescription={datum => (datum.value === 2 ? 'Description' : '')}
          />
        </Container>
      </Box>
    </ScreenshotArea>
  );
}
