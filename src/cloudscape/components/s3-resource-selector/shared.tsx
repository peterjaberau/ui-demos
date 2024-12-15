// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';

import Alert from '@cloudscape-design/components/alert';

export function SelfDismissibleAlert(props: Omit<any, 'visible' | 'onDismiss'>) {
  const [visible, setVisible] = React.useState(true);
  return <Alert {...props} visible={visible} dismissible={true} onDismiss={() => setVisible(false)} />;
}

export function uriToConsoleUrl(uri: string) {
  const prefix = 'https://s3.console.aws.amazon.com/s3/buckets/';
  return uri.replace(/^s3:\/\//, prefix);
}
