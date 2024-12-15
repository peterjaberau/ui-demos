// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Header, LiveRegion } from "@cloudscape-design/components";
import { BoardItem, ItemsPalette, ItemsPaletteProps } from "@cloudscape-design/board-components";
import { boardItemI18nStrings, clientI18nStrings, itemsPaletteI18nStrings } from "../shared/i18n";
import { ItemData } from "../shared/interfaces";

interface WidgetsPaletteProps {
  loading: boolean;
  widgets: readonly ItemsPaletteProps.Item<ItemData>[];
}

export function WidgetsPalette({ loading, widgets }: WidgetsPaletteProps) {
  return widgets.length > 0 ? (
    <ItemsPalette
      items={widgets}
      i18nStrings={itemsPaletteI18nStrings}
      renderItem={(item) => (
        <BoardItem header={<Header>{item.data.title}</Header>} i18nStrings={boardItemI18nStrings}>
          {item.data.description}
        </BoardItem>
      )}
    />
  ) : (
    <>
      {loading ? (
        <LiveRegion hidden={false}>{clientI18nStrings.widgetsPalette.widgetsLoading}</LiveRegion>
      ) : (
        clientI18nStrings.widgetsPalette.widgetsEmpty
      )}
    </>
  );
}
