// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import PieChart from '@cloudscape-design/components/pie-chart';
import Toggle from '@cloudscape-design/components/toggle';

import ScreenshotArea from '../utils/screenshot-area';
import { commonProps, data1, FoodData } from './common';

export default function () {
  const [visibleSegments, setVisibleSegments] = useState<ReadonlyArray<FoodData>>(data1);
  const [checked, setChecked] = useState(false);

  return (
    <ScreenshotArea>
      <h1>Pie charts with additional filtering</h1>
      <Box padding="l">
        <Container header={<Header variant="h2">Food facts</Header>}>
          <PieChart<FoodData>
            {...commonProps}
            data={data1}
            ariaLabel="Food facts"
            size="large"
            legendTitle="Legend"
            onFilterChange={e => {
              console.log(e.detail);
              setVisibleSegments(e.detail.visibleSegments);
            }}
            visibleSegments={visibleSegments}
            additionalFilters={
              <Toggle
                checked={checked}
                onChange={e => {
                  setChecked(e.detail.checked);
                  if (e.detail.checked) {
                    setVisibleSegments(visibleSegments.filter(segment => segment.calories < 75));
                  } else {
                    setVisibleSegments(data1);
                  }
                }}
              >
                Only below 75 calories
              </Toggle>
            }
          />
        </Container>
      </Box>
    </ScreenshotArea>
  );
}
