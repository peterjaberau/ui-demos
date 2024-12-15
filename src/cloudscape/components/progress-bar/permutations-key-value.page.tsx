// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import ColumnLayout from '@cloudscape-design/components/column-layout';
import Container from '@cloudscape-design/components/container';
import ProgressBar from '@cloudscape-design/components/progress-bar';

import ScreenshotArea from '../utils/screenshot-area';
import permutations from './permutations-utils';

export default function ProgressBarPermutations() {
  return (
    <article>
      <h1>ProgressBar permutations - key-value</h1>
      <ScreenshotArea>
        <Container>
          <ColumnLayout columns={3} variant="text-grid">
            {permutations.map((permutation, index) => (
              <ProgressBar key={index} {...permutation} variant="key-value" />
            ))}
          </ColumnLayout>
        </Container>
      </ScreenshotArea>
    </article>
  );
}
