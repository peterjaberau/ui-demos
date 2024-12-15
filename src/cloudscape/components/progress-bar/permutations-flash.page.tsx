// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import Flashbar from '@cloudscape-design/components/flashbar';
import ProgressBar from '@cloudscape-design/components/progress-bar';

import ScreenshotArea from '../utils/screenshot-area';
import permutations from './permutations-utils';

export default function ProgressBarPermutations() {
  return (
    <article>
      <h1>ProgressBar permutations - flash</h1>
      <ScreenshotArea>
        <Flashbar
          items={permutations.map(permutation => ({
            content: <ProgressBar {...permutation} variant="flash" />,
            buttonText: permutation.resultButtonText,
            statusIconAriaLabel: 'info',
          }))}
        />
        <Flashbar
          items={permutations.map(permutation => ({
            type: 'warning',
            content: <ProgressBar {...permutation} variant="flash" />,
            buttonText: permutation.resultButtonText,
            statusIconAriaLabel: 'warning',
          }))}
        />
      </ScreenshotArea>
    </article>
  );
}
