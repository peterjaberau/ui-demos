// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import Autosuggest from '@cloudscape-design/components/autosuggest';
import Input from '@cloudscape-design/components/input';
import TopNavigation from '@cloudscape-design/components/top-navigation';

import { I18N_STRINGS } from './common';
import logo from './logos/simple-logo.svg';

export default function TopNavigationPage() {
  const [valueAutosuggest, setValueAutosuggest] = useState('');
  const [valueInput, setValueInput] = useState('');
  return (
    <article>
      <h1>TopNavigation with search</h1>
      <TopNavigation
        i18nStrings={I18N_STRINGS}
        identity={{
          logo: { src: logo, alt: 'Logo' },
          href: '#',
          title: 'Input as a search',
        }}
        search={
          <Input ariaLabel="Input field" value={valueInput} onChange={({ detail }) => setValueInput(detail.value)} />
        }
      />
      <br />
      <TopNavigation
        i18nStrings={I18N_STRINGS}
        identity={{
          href: '#',
          title: 'Autosuggest as a search',
        }}
        search={
          <Autosuggest
            ariaLabel="Input field"
            onChange={({ detail }) => setValueAutosuggest(detail.value)}
            value={valueAutosuggest}
            options={[
              { value: 'Suggestion 1' },
              { value: 'Suggestion 2' },
              { value: 'Suggestion 3' },
              { value: 'Suggestion 4' },
            ]}
            enteredTextLabel={value => `Use: "${value}"`}
            placeholder="Enter value"
            empty="No matches found"
          />
        }
      />
      <br />
    </article>
  );
}
