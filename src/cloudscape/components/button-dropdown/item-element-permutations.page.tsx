// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import Box from '@cloudscape-design/components/box';

import img from '../icon/custom-icon.png';
import createPermutations from '../utils/permutations';
import PermutationsView from '../utils/permutations-view';
import ScreenshotArea from '../utils/screenshot-area';

import styles from './styles.module.scss';

const permutations = createPermutations<any>([
  {
    item: [{ id: '1', text: 'Option' }],
    disabled: [false, true],
    highlighted: [false, true],
    hasCategoryHeader: [false],
    showDivider: [false, true],
    onItemActivate: [() => {}],
    highlightItem: [() => {}],
  },
  {
    item: [{ id: '1', text: 'Child option' }],
    disabled: [false, true],
    highlighted: [false, true],
    hasCategoryHeader: [true],
    showDivider: [false],
    onItemActivate: [() => {}],
    highlightItem: [() => {}],
  },
  {
    item: [
      { id: '1', text: 'Link option', href: '#' },
      {
        id: '1',
        text: 'External link option',
        href: '#',
        external: true,
        externalIconAriaLabel: ' (opens in new tab)',
      },
    ],
    disabled: [false, true],
    highlighted: [false],
    hasCategoryHeader: [false, true],
    showDivider: [false],
    onItemActivate: [() => {}],
    highlightItem: [() => {}],
  },
  // With icons
  {
    item: [
      { id: '1', text: 'Option with icon', iconName: 'settings' },
      { id: '1', text: 'Option with custom icon', iconUrl: img, iconAlt: 'letter A' },
      {
        id: '1',
        text: 'Option with custom SVG',
        iconSvg: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false">
            <circle cx="8" cy="8" r="7" />
            <circle cx="8" cy="8" r="3" />
          </svg>
        ),
      },
    ],
    disabled: [false, true],
    highlighted: [false, true],
    hasCategoryHeader: [false],
    showDivider: [false],
    onItemActivate: [() => {}],
    highlightItem: [() => {}],
  },
  {
    item: [
      {
        id: '1',
        text: 'External link with icon',
        iconName: 'settings',
        href: '#',
        external: true,
        externalIconAriaLabel: ' (opens in new tab)',
      },
    ],
    disabled: [false, true],
    highlighted: [false, true],
    hasCategoryHeader: [false],
    showDivider: [false],
    onItemActivate: [() => {}],
    highlightItem: [() => {}],
  },
  // Navigation variant
  {
    item: [{ id: '1', text: 'Navigation option' }],
    variant: ['navigation'],
    disabled: [false, true],
    highlighted: [false, true],
    hasCategoryHeader: [false],
    showDivider: [false, true],
    onItemActivate: [() => {}],
    highlightItem: [() => {}],
  },
  {
    item: [
      { id: '1', text: 'Navigation link', href: '#' },
      {
        id: '1',
        text: 'External navigation link',
        href: '#',
        external: true,
        externalIconAriaLabel: ' (opens in new tab)',
      },
    ],
    variant: ['navigation'],
    disabled: [false, true],
    highlighted: [false, true],
    hasCategoryHeader: [false],
    showDivider: [false],
    onItemActivate: [() => {}],
    highlightItem: [() => {}],
  },
  // keyboard nav
  {
    item: [{ id: '1', text: 'keyboard nav' }],
    disabled: [false, true],
    highlighted: [false, true],
    hasCategoryHeader: [false],
    showDivider: [false],
    onItemActivate: [() => {}],
    highlightItem: [() => {}],
    isKeyboardHighlighted: [true],
  },
  {
    item: [{ id: '1', text: 'Option' }],
    variant: ['icon', 'inline-icon', 'navigation', 'normal', 'primary'],
    disabled: [false, true],
    highlighted: [false, true],
    hasCategoryHeader: [false],
    showDivider: [false],
    onItemActivate: [() => {}],
    highlightItem: [() => {}],
  },
  // With checkbox without icon
  {
    item: [
      { id: '1', text: 'Option', checked: true, itemType: 'checkbox' },
      { id: '1', text: 'Option', checked: false, itemType: 'checkbox' },
    ],
    disabled: [false, true],
    highlighted: [false, true],
    hasCategoryHeader: [false],
    showDivider: [false, true],
    onItemActivate: [() => {}],
    highlightItem: [() => {}],
  },
  // With checkbox with icon
  {
    item: [
      { id: '1', text: 'Option', checked: true, itemType: 'checkbox', iconName: 'gen-ai' },
      { id: '1', text: 'Option', checked: false, itemType: 'checkbox', iconName: 'gen-ai' },
    ],
    disabled: [false, true],
    highlighted: [false, true],
    hasCategoryHeader: [false],
    showDivider: [false, true],
    onItemActivate: [() => {}],
    highlightItem: [() => {}],
  },
  // with link style
  {
    item: [{ id: '1', text: 'Option' }],
    disabled: [false],
    highlighted: [false],
    hasCategoryHeader: [false],
    showDivider: [false],
    onItemActivate: [() => {}],
    highlightItem: [() => {}],
    linkStyle: [true],
  },
]);

export default function () {
  return (
    <>
      <h1>Button dropdown item permutations</h1>
      <ScreenshotArea disableAnimations={true}>
        <PermutationsView
          permutations={permutations}
          render={permutation => (
            <Box margin={{ bottom: 'xxl' }} className={styles['dropdown-permutation']}>
              <div role="menu">{<div {...permutation} />}</div>
            </Box>
          )}
        />
      </ScreenshotArea>
    </>
  );
}
