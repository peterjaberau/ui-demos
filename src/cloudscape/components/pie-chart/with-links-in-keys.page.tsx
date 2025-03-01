// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import Link from '@cloudscape-design/components/link';
import PieChart from '@cloudscape-design/components/pie-chart';

import FocusTarget from '../common/focus-target';
import ScreenshotArea from '../utils/screenshot-area';
import { commonProps, data1, FoodData, segmentDescription1 } from './common';

export default function () {
  return (
    <>
      <h1>Pie chart with links in the keys</h1>
      <FocusTarget />
      <ScreenshotArea>
        <PieChart<FoodData>
          {...commonProps}
          hideFilter={true}
          hideLegend={true}
          data={data1}
          size="medium"
          detailPopoverContent={datum =>
            [
              {
                key: 'Popularity',
                value: `${datum.value}%`,
              },
              {
                key: 'Calories per 100g',
                value: `${datum.calories} kcal`,
              },
            ].map(({ key, value }) => ({
              key: (
                <Link external={true} href="#">
                  {key}
                </Link>
              ),
              value,
            }))
          }
          segmentDescription={segmentDescription1}
          hideDescriptions={true}
          hideTitles={true}
        />
      </ScreenshotArea>
    </>
  );
}
