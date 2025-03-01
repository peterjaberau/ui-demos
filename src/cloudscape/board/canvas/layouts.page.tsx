// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { ReactNode } from "react";

import { Board, BoardProps } from "@cloudscape-design/board-components";
import { TestBed } from "../app/test-bed";
import { ScreenshotArea } from "../screenshot-area";
import { boardI18nStrings } from "../shared/i18n";

import classnames from "./layouts.module.css";

const singleItem: BoardProps.Item<any>[] = [
  {
    id: "1-1",
    data: {},
  },
];

const spacedOutItems: BoardProps.Item<any>[] = [
  {
    id: "2-1",
    data: {},
  },
  {
    id: "2-2",
    columnOffset: { 4: 3 },
    data: {},
  },
];

const nextRowItems: BoardProps.Item<any>[] = [
  {
    id: "3-1",
    columnOffset: { 4: 0 },
    columnSpan: 2,
    data: {},
  },
  {
    id: "3-2",
    columnOffset: { 4: 0 },
    data: {},
  },
];

const noop = () => {
  /* readonly demos */
};

export default function BoardPage() {
  return (
    <ScreenshotArea>
      <h1>Board</h1>
      <main>
        <TestBed>
          <Board
            i18nStrings={boardI18nStrings}
            items={singleItem}
            renderItem={(item) => <CustomBoardItem>{item.id}</CustomBoardItem>}
            onItemsChange={noop}
            empty="No items"
          />
        </TestBed>
        <TestBed>
          <Board
            i18nStrings={boardI18nStrings}
            items={spacedOutItems}
            renderItem={(item) => <CustomBoardItem>{item.id}</CustomBoardItem>}
            onItemsChange={noop}
            empty="No items"
          />
        </TestBed>
        <TestBed>
          <Board
            i18nStrings={boardI18nStrings}
            items={nextRowItems}
            renderItem={(item) => <CustomBoardItem>{item.id}</CustomBoardItem>}
            onItemsChange={noop}
            empty="No items"
          />
        </TestBed>
      </main>
    </ScreenshotArea>
  );
}

function CustomBoardItem({ children }: { children: ReactNode }) {
  return <div className={classnames.block}>{children}</div>;
}
