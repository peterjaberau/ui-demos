// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import { Header, Link, Table } from '@cloudscape-design/components';

const componentMetricsLog: any[] = [];
(window as any).__awsuiComponentlMetrics__ = componentMetricsLog;

export default function () {
  return (
    <>
      <h1>Table analytics</h1>
      <Table
        items={[]}
        columnDefinitions={[]}
        header={
          <Header info={<Link variant="info">Info</Link>} counter="(10)">
            Table title
          </Header>
        }
      />
    </>
  );
}
