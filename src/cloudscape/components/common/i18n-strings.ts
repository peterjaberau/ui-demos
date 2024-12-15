// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export const contentDisplayPreferenceI18nStrings: Partial<any> = {
  liveAnnouncementDndStarted: (position: any, total: any) => `Picked up item at position ${position} of ${total}`,
  liveAnnouncementDndDiscarded: 'Reordering canceled',
  liveAnnouncementDndItemReordered: (initialPosition: any, currentPosition: any, total: any) =>
    initialPosition === currentPosition
      ? `Moving item back to position ${currentPosition} of ${total}`
      : `Moving item to position ${currentPosition} of ${total}`,
  liveAnnouncementDndItemCommitted: (initialPosition: any, finalPosition: any, total: any) =>
    initialPosition === finalPosition
      ? `Item moved back to its original position ${initialPosition} of ${total}`
      : `Item moved from position ${initialPosition} to position ${finalPosition} of ${total}`,
  dragHandleAriaDescription:
    "Use Space or Enter to activate drag for an item, then use the arrow keys to move the item's position. To complete the position move, use Space or Enter, or to discard the move, use Escape.",
  dragHandleAriaLabel: 'Drag handle',
  i18nStrings: {
    columnFilteringPlaceholder: 'Filter columns',
    columnFilteringAriaLabel: 'Filter columns',
    columnFilteringNoMatchText: 'No matches',
    columnFilteringCountText: (count: any) => (count > 1 || count === 0 ? `${count} matches` : `${count} match`),
    columnFilteringClearFilterText: 'Clear filter',
  },
};
