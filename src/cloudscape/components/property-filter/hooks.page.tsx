// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import { useCollection } from '@cloudscape-design/collection-hooks';

import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import Header from '@cloudscape-design/components/header';
import { I18nProvider } from '@cloudscape-design/components/i18n';
import messages from '@cloudscape-design/components/i18n/messages/all.en';
import PropertyFilter from '@cloudscape-design/components/property-filter';
import Table from '@cloudscape-design/components/table';

import ScreenshotArea from '../utils/screenshot-area';
import { columnDefinitions, filteringProperties, i18nStrings, labels } from './common-props';
import { allItems, TableItem } from './table.data';

export default function () {
  const [locale, setLocale] = useState('en');
  const [tokenLimit, setTokenLimit] = useState<number>();
  const [hideOperations, setHideOperations] = useState<boolean>(false);
  const [disableFreeTextFiltering, setDisableFreeText] = useState<boolean>(false);
  const { items, collectionProps, actions, propertyFilterProps } = useCollection(allItems, {
    propertyFiltering: {
      empty: 'empty',
      noMatch: (
        <Box textAlign="center" color="inherit">
          <Box variant="strong" textAlign="center" color="inherit">
            No matches
          </Box>
          <Box variant="p" padding={{ bottom: 's' }} color="inherit">
            We can’t find a match.
          </Box>
          <Button
            onClick={() => actions.setPropertyFiltering({ tokens: [], operation: propertyFilterProps.query.operation })}
          >
            Clear filter
          </Button>
        </Box>
      ),
      filteringProperties,
      freeTextFiltering: { operators: ['=', '!=', ':', '!:'] },
    },
    sorting: {},
  });

  return (
    <ScreenshotArea disableAnimations={true}>
      <I18nProvider messages={[messages]} locale={locale}>
        <ul>
          <li>
            <label>
              Token limit
              <input
                type="number"
                value={tokenLimit === undefined ? '' : tokenLimit}
                onChange={e => setTokenLimit(parseInt(e.target.value))}
              />
            </label>
          </li>
          <li>
            <label>
              Toggle hideOperations
              <input type="checkbox" checked={hideOperations} onChange={() => setHideOperations(!hideOperations)} />
            </label>
          </li>
          <li>
            <label>
              Toggle disableFreeTextFiltering
              <input
                type="checkbox"
                checked={disableFreeTextFiltering}
                onChange={() => setDisableFreeText(!disableFreeTextFiltering)}
              />
            </label>
          </li>
          <li>
            <label>
              Language
              <select value={locale} onChange={event => setLocale(event.currentTarget.value)}>
                <option value="de">Deutsch</option>
                <option value="en">English (US)</option>
                <option value="en-GB">English (UK)</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="id">Bahasa Indonesia</option>
                <option value="it">Italiano</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option>
                <option value="pt-BR">Português</option>
                <option value="zh-CN">中文(简体)</option>
                <option value="zh-TW">中文(繁體)</option>
              </select>
            </label>
          </li>
        </ul>
        <Table<TableItem>
          header={<Header headingTagOverride={'h1'}>Instances</Header>}
          items={items}
          {...collectionProps}
          filter={
            <PropertyFilter
              {...labels}
              {...propertyFilterProps}
              virtualScroll={true}
              countText={`${items.length} matches`}
              i18nStrings={{ filteringAriaLabel: i18nStrings.filteringAriaLabel }}
              tokenLimit={tokenLimit}
              hideOperations={hideOperations}
              disableFreeTextFiltering={disableFreeTextFiltering}
            />
          }
          columnDefinitions={columnDefinitions}
        />
      </I18nProvider>
    </ScreenshotArea>
  );
}
