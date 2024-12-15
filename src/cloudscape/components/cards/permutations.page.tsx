// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import range from 'lodash/range';

import { Link } from '@cloudscape-design/components';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import { Cards } from '@cloudscape-design/components';
import Header from '@cloudscape-design/components/header';

import createPermutations from '../utils/permutations';
import PermutationsView from '../utils/permutations-view';
import ScreenshotArea from '../utils/screenshot-area';



const ariaLabels: any = {
  selectionGroupLabel: 'group label',
  itemSelectionLabel: ({ selectedItems }: any, item: any) =>
    `${item.text} is ${selectedItems.indexOf(item) < 0 ? 'not ' : ''}selected`,
};

function createSimpleItems(count: number) {
  const texts = ['One', 'Two', 'Three', 'Four'];
  return range(count).map(number => ({ number, text: texts[number % texts.length] }));
}

const cardDefinition: any = {
  header: (item: any) =>
    item.number === 2 ? (
      <Link href="#" fontSize="inherit">
        {item.text}
      </Link>
    ) : (
      item.text
    ),
  sections: [
    {
      id: 'description',
      header: 'Number',
      content: (item: any) => item.number,
    },
    {
      id: 'type',
      header: 'Text',
      content: (item: any) => item.text,
    },
  ],
};

const header = <Header>Cards header</Header>;

const empty = (
  <Box textAlign="center" color="inherit">
    <Box variant="strong" textAlign="center" color="inherit">
      No resources
    </Box>
    <Box variant="p" padding={{ bottom: 's' }} color="inherit">
      No resources to display.
    </Box>
    <Button>Create resource</Button>
  </Box>
);

/* eslint-disable react/jsx-key */
const permutations = createPermutations<any>([
  {
    cardDefinition: [cardDefinition],
    variant: ['container', 'full-page'],
    header: [header, undefined],
    items: [createSimpleItems(4)],
  },
  {
    cardDefinition: [cardDefinition],
    header: [header],
    items: [[]],
    empty: [empty, 'empty'],
  },
  {
    cardDefinition: [cardDefinition],
    header: [header],
    items: [[]],
    loading: [true],
    loadingText: ['loading'],
  },
  {
    cardDefinition: [cardDefinition],
    selectedItems: [[{ number: 2 }]],
    selectionType: ['multi', 'single'],
    isItemDisabled: [(item: any) => item.number === 1],
    trackBy: ['number'],
    items: [createSimpleItems(4)],
    ariaLabels: [ariaLabels],
  },
  {
    cardDefinition: [
      {
        header: (item: any) => item.text,
        sections: [],
      },
    ],
    items: [createSimpleItems(4)],
  },
  {
    cardDefinition: [cardDefinition],
    items: [createSimpleItems(3)],
    variant: [undefined, 'full-page'],
    pagination: [undefined, 'pagination'],
  },
]);
/* eslint-enable react/jsx-key */

export default () => {
  return (
    <>
      <h1>Cards permutations</h1>
      <ScreenshotArea disableAnimations={true}>
        <PermutationsView permutations={permutations} render={permutation => <Cards {...permutation} />} />
      </ScreenshotArea>
    </>
  );
};
