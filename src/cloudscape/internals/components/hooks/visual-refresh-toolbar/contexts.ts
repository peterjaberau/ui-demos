// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';

import { awsuiPluginsInternal } from '../../plugins/api.ts';

interface BreadcrumbsSlotContextType {
  isInToolbar: boolean;
}

export const BreadcrumbsSlotContext =
  awsuiPluginsInternal.sharedReactContexts.createContext<BreadcrumbsSlotContextType>(React, 'BreadcrumbsSlotContext');
