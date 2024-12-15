// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import Spinner, { SpinnerProps } from '@cloudscape-design/components/spinner';

import createPermutations from '../utils/permutations';
import PermutationsView from '../utils/permutations-view';
import ScreenshotArea from '../utils/screenshot-area';

import styles from './styles.module.scss';

const permutations = createPermutations<SpinnerProps>([
  {
    variant: ['normal', 'disabled', 'inverted'],
    size: ['normal', 'big', 'large'],
  },
]);

export default function SpinnerPermutations() {
  return (
    <>
      <h1>Spinner permutations</h1>
      <ScreenshotArea disableAnimations={true}>
        <PermutationsView
          permutations={permutations}
          render={permutation => (
            <p className={permutation.variant === 'inverted' ? styles.invertedSpinnerSection : undefined}>
              <Spinner {...permutation} /> variant={permutation.variant} size={permutation.size}
            </p>
          )}
        />
      </ScreenshotArea>
    </>
  );
}
