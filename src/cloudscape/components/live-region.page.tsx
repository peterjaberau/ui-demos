// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import LiveRegion from '@cloudscape-design/components/live-region';

export default function LiveRegionXSS() {
  return (
    <>
      <h1>Live region</h1>
      <LiveRegion hidden={true}>
        {`<p>Testing</p>`}
        <p>Testing</p>
      </LiveRegion>
    </>
  );
}