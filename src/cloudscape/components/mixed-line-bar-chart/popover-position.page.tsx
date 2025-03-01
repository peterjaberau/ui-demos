// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import ExpandableSection from '@cloudscape-design/components/expandable-section';
import MixedLineBarChart from '@cloudscape-design/components/mixed-line-bar-chart';

import FocusTarget from '../common/focus-target';
import ScreenshotArea from '../utils/screenshot-area';
import { barChartInstructions, commonProps, data3, data4 } from './common';

export default function () {
  return (
    <>
      <h1>Mixed chart popover position</h1>
      <FocusTarget />
      <ScreenshotArea>
        <MixedLineBarChart
          {...commonProps}
          hideFilter={true}
          hideLegend={true}
          height={250}
          series={[{ title: 'Happiness', type: 'bar', data: data4 }]}
          xDomain={data3.map(d => d.x)}
          yDomain={[0, 650]}
          xTitle="Food"
          yTitle="Calories (kcal)"
          xScaleType="categorical"
          ariaLabel="Mixed chart 1"
          ariaDescription={barChartInstructions}
          detailPopoverFooter={() => (
            <ExpandableSection headerText="See more details">
              <div style={{ blockSize: 500 }}>Tall block</div>
            </ExpandableSection>
          )}
        />
      </ScreenshotArea>
    </>
  );
}
