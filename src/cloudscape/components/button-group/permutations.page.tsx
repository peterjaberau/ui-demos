// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0



import ButtonGroup, { ButtonGroupProps } from '@cloudscape-design/components/button-group';

import createPermutations from '../utils/permutations';
import PermutationsView from '../utils/permutations-view';
import ScreenshotArea from '../utils/screenshot-area';

const feedbackGroup: ButtonGroupProps.Group = {
  type: 'group',
  text: 'Vote',
  items: [
    {
      type: 'icon-toggle-button',
      id: 'like',
      iconName: 'thumbs-up',
      pressedIconName: 'thumbs-up-filled',
      text: 'Like',
      pressed: true,
    },
    {
      type: 'icon-toggle-button',
      id: 'dislike',
      iconName: 'thumbs-down',
      pressedIconName: 'thumbs-down-filled',
      text: 'Dislike',
      pressed: false,
    },
  ],
};

const copy: ButtonGroupProps.Item = {
  type: 'icon-button',
  id: 'copy',
  iconName: 'copy',
  text: 'Copy',
};

const add: ButtonGroupProps.Item = {
  type: 'icon-button',
  id: 'add',
  iconName: 'add-plus',
  text: 'Add',
};

const cut: ButtonGroupProps.Item = {
  type: 'icon-button',
  id: 'cut',
  iconName: 'delete-marker',
  text: 'Cut',
};

const remove: ButtonGroupProps.Item = {
  type: 'icon-button',
  id: 'remove',
  iconName: 'remove',
  text: 'Remove',
};

const actionsGroup: ButtonGroupProps.Group = {
  type: 'group',
  text: 'Actions',
  items: [add, remove],
};

const moreActionsMenu: ButtonGroupProps.MenuDropdown = {
  type: 'menu-dropdown',
  id: 'more-actions',
  text: 'More actions',
  items: [cut],
};

const actionsGroupsWithMenu: ButtonGroupProps.Group = {
  type: 'group',
  text: 'Actions',
  items: [add, remove, moreActionsMenu],
};

const buttonGroupPermutations = createPermutations<ButtonGroupProps>([
  {
    variant: ['icon'],
    ariaLabel: ['Chat actions'],
    items: [
      [add],
      [add, remove],
      [actionsGroup],
      [feedbackGroup, copy],
      [feedbackGroup, actionsGroup],
      [feedbackGroup, copy, actionsGroup],
      [actionsGroupsWithMenu, copy],
    ],
  },
]);

export default function () {
  return (
    <ScreenshotArea disableAnimations={true}>
      <article>
        <h1>ButtonGroup permutations</h1>
        <PermutationsView
          permutations={buttonGroupPermutations}
          render={permutation => <div>{<ButtonGroup {...permutation} />}</div>}
        />
      </article>
    </ScreenshotArea>
  );
}
