// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import Grid from '@cloudscape-design/components/grid';
import MixedLineBarChart from '@cloudscape-design/components/mixed-line-bar-chart';
import { colorChartsThresholdInfo } from '@cloudscape-design/design-tokens';

import ScreenshotArea from '../utils/screenshot-area';
import { barChartInstructions, commonProps, data3, data4 } from './common';

export default function () {
  return (
    <ScreenshotArea>
      <h1>Mixed chart integration test</h1>
      <Box padding="l">
        <Grid
          gridDefinition={[{ colspan: { xxs: 12, s: 12, m: 6, default: 6 } }, { colspan: { s: 12, m: 6, default: 6 } }]}
        >
          <div>
            <input id="focus-target" aria-label="focus input" placeholder="focus input" />
            <MixedLineBarChart
              {...commonProps}
              id="chart"
              height={250}
              series={[
                { title: 'Happiness', type: 'bar', data: data4.filter(({ x }) => x !== 'Chocolate') },
                { title: 'Calories', type: 'line', data: data3 },
                { title: 'Threshold', type: 'threshold', y: 420, color: colorChartsThresholdInfo },
              ]}
              xDomain={data3.map(d => d.x)}
              yDomain={[0, 650]}
              xTitle="Food"
              yTitle="Calories (kcal)"
              xScaleType="categorical"
              ariaLabel="Mixed chart 1"
              ariaDescription={barChartInstructions}
              detailPopoverFooter={xValue => <Button>Filter by {xValue}</Button>}
            />
          </div>
          <div>
            <MixedLineBarChart
              {...commonProps}
              id="chart-no-domain"
              height={250}
              series={[
                { title: 'Happiness', type: 'bar', data: data4 },
                { title: 'Calories', type: 'line', data: data3 },
                { title: 'Threshold', type: 'threshold', y: 420 },
              ]}
              xTitle="Food"
              yTitle="Calories (kcal)"
              xScaleType="categorical"
              ariaLabel="Mixed chart 2"
              ariaDescription={barChartInstructions}
            />
          </div>
        </Grid>
      </Box>
    </ScreenshotArea>
  );
}
