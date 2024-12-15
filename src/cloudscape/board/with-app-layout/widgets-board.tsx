// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useState } from "react";

import { Box, ButtonDropdown, Header } from "@cloudscape-design/components";
import { Board, BoardItem, BoardProps } from "@cloudscape-design/board-components";
import { boardI18nStrings, boardItemI18nStrings, clientI18nStrings } from "../shared/i18n";
import { ItemData } from "../shared/interfaces";
import { DeleteConfirmationModal } from "./delete-confirmation-modal";

interface WidgetsBoardProps {
  loading: boolean;
  widgets: readonly BoardProps.Item<ItemData>[];
  onWidgetsChange: (detail: BoardProps.ItemsChangeDetail<ItemData>) => void;
}

export function WidgetsBoard({ loading, widgets, onWidgetsChange }: WidgetsBoardProps) {
  const [deleteConfirmation, setDeleteConfirmation] = useState<null | string>(null);
  return (
    <Board
      items={widgets}
      i18nStrings={boardI18nStrings}
      empty={
        <Box margin={{ top: "xxxl" }}>
          {loading ? (
            <div>{clientI18nStrings.widgetsBoard.widgetsLoading}</div>
          ) : (
            clientI18nStrings.widgetsBoard.widgetsEmpty
          )}
        </Box>
      }
      onItemsChange={({ detail }) => onWidgetsChange(detail)}
      renderItem={(item, actions) => (
        <>
          <BoardItem
            header={<Header>{item.data.title}</Header>}
            footer={item.data.footer}
            settings={
              <ButtonDropdown
                items={[{ id: "remove", text: clientI18nStrings.widgetsBoard.removeWidgetAction }]}
                ariaLabel={clientI18nStrings.widgetsBoard.widgetSettings}
                variant="icon"
                onItemClick={() => setDeleteConfirmation(item.id)}
                expandToViewport={true}
              />
            }
            i18nStrings={boardItemI18nStrings}
          >
            {item.data.content}
          </BoardItem>

          {deleteConfirmation === item.id && (
            <DeleteConfirmationModal
              title={item.data.title}
              visible={true}
              onDismiss={() => setDeleteConfirmation(null)}
              onConfirm={() => {
                actions.removeItem();
                setDeleteConfirmation(null);
              }}
            />
          )}
        </>
      )}
    />
  );
}
