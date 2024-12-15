// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0



import createPermutations from '../utils/permutations';
import PermutationsView from '../utils/permutations-view';
import ScreenshotArea from '../utils/screenshot-area';

const permutations = createPermutations<any>([
  {
    type: ['error', 'warning', 'success', 'info', 'stopped', 'pending', 'in-progress', 'loading'],
  },
  {
    type: ['pending'],
    colorOverride: ['blue', 'grey', 'green', 'red', 'yellow'],
  },
  {
    type: ['info'],
    wrapText: [true, false],
    __display: ['inline', 'inline-block'],
    children: [
      'Simple',
      'very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text',
      'verylongtextwithoutspacesverylongtextwithoutspacesverylongtextwithoutspacesverylongtextwithoutspacesverylongtextwithoutspacesverylongtextwithoutspacesverylongtextwithoutspacesverylongtextwithoutspacesverylongtextwithoutspacesverylongtextwithoutspacesverylongtextwithoutspacesverylongtextwithoutspacesverylongtextwithoutspaces',
    ],
  },
]);

export default function StatusIndicatorPermutations() {
  return (
    <>
      <h1>StatusIndicator permutations</h1>
      <ScreenshotArea disableAnimations={true}>
        <PermutationsView
          permutations={permutations}
          render={permutation => (
            <div style={{ overflow: 'hidden' }}>
              <div style={{ width: permutation.wrapText ? 'auto' : 200 }}>
                  {permutation.children ?? <>Status {permutation.type}</>}
              </div>
            </div>
          )}
        />
      </ScreenshotArea>
    </>
  );
}
