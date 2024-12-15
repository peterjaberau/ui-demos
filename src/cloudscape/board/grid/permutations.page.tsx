// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from "clsx";

import { Grid } from '@cloudscape-design/components';
import { TestBed } from "../app/test-bed";
import { ScreenshotArea } from "../screenshot-area";
import { board, chess, cross, jenga } from "./layouts";

import classnames from "./permutations.module.css";

export default function GridPage() {
  return (
    <ScreenshotArea>
      <header>
        <h1>Grid</h1>
      </header>
      <main>
        <section>
          <TestBed>
            <Grid gridDefinition={[
              { colspan: 4 },
              { colspan: 4 },
              { colspan: 4 },
            ]}>
              {chess.map((stone: any) => <Stone key={stone.id} index={chess.indexOf(stone)} />)}
            </Grid>
          </TestBed>
          <TestBed>
            <Grid gridDefinition={[
              { colspan: 4 },
              { colspan: 4 },
              { colspan: 4 },
            ]}>
              {jenga.map((block: any) => <Block key={block.id} />)}
            </Grid>
          </TestBed>
          <TestBed>
            <Grid gridDefinition={[
              { colspan: 4 },
              { colspan: 4 },
              { colspan: 4 },
            ]}>
              {cross.map((pixel: any) => <Pixel key={pixel.id} />)}
            </Grid>
          </TestBed>
          <TestBed>
            <Grid gridDefinition={[
              { colspan: 4 },
              { colspan: 4 },
              { colspan: 4 },
            ]}>
              {board.map((dummy: any) => <Dummy key={dummy.id} />)}
            </Grid>
          </TestBed>
        </section>
      </main>
    </ScreenshotArea>
  );
}

const Stone = ({ index }: { index: number }) => {
  const row = Math.floor(index / 4);
  const black = index % 2 !== row % 2;
  return black ? <Black /> : <White />;
};

const Black = () => <div className={clsx(classnames.stone, classnames.black)} />;
const White = () => <div className={clsx(classnames.stone, classnames.white)} />;
const Block = () => <div className={classnames.block} />;
const Pixel = () => <div className={classnames.pixel} />;
const Dummy = () => <div className={classnames.dummy} />;
