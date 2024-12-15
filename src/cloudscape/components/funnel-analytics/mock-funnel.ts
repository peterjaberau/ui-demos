// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


const funnelMetricsLog: { action: string; resolvedProps?: any; props: any }[] = [];
(window as any).__awsuiFunnelMetrics__ = funnelMetricsLog;

export const MockedFunnelMetrics: any = {
  funnelStart(props: any): string {
    const funnelName = document.querySelector(props.funnelNameSelector)?.innerHTML;
    funnelMetricsLog.push({ action: 'funnelStart', props, resolvedProps: { funnelName } });
    return 'mocked-funnel-id';
  },

  funnelError(props: any): void {
    funnelMetricsLog.push({ action: 'funnelError', props });
  },

  funnelComplete(props: any): void {
    funnelMetricsLog.push({ action: 'funnelComplete', props });
  },

  funnelSuccessful(props: any): void {
    funnelMetricsLog.push({ action: 'funnelSuccessful', props });
  },

  funnelCancelled(props: any): void {
    funnelMetricsLog.push({ action: 'funnelCancelled', props });
  },

  funnelChange(props: any): void {
    funnelMetricsLog.push({ action: 'funnelChange', props });
  },

  funnelStepStart(props: any): void {
    const stepName = document.querySelector(props.stepNameSelector!)?.innerHTML;
    funnelMetricsLog.push({ action: 'funnelStepStart', props, resolvedProps: { stepName } });
  },

  funnelStepComplete(props: any): void {
    const stepName = document.querySelector(props.stepNameSelector!)?.innerHTML;
    funnelMetricsLog.push({ action: 'funnelStepComplete', props, resolvedProps: { stepName } });
  },

  funnelStepNavigation(props: any): void {
    const stepName = document.querySelector(props.stepNameSelector!)?.innerHTML;
    // const subStepAllElements = document.querySelectorAll(props.subStepAllSelector); // TODO: Does not work

    funnelMetricsLog.push({ action: 'funnelStepNavigation', props, resolvedProps: { stepName } });
  },

  funnelStepError(props: any): void {
    const stepName = document.querySelector(props.stepNameSelector!)?.innerHTML;
    funnelMetricsLog.push({ action: 'funnelStepError', props, resolvedProps: { stepName } });
  },

  funnelStepChange(props: any): void {
    const stepName = document.querySelector(props.stepNameSelector!)?.innerHTML;
    funnelMetricsLog.push({ action: 'funnelStepChange', props, resolvedProps: { stepName } });
  },

  funnelSubStepStart(props: any): void {
    const stepName = document.querySelector(props.stepNameSelector!)?.innerHTML;
    const subStepName = document.querySelector(props.subStepNameSelector)?.innerHTML;
    const subStepAllElements = document.querySelectorAll(props.subStepAllSelector);
    const subStepElement = document.querySelector(props.subStepSelector);

    funnelMetricsLog.push({
      action: 'funnelSubStepStart',
      props,
      resolvedProps: { stepName, subStepName, subStepAllElements, subStepElement },
    });
  },

  funnelSubStepComplete(props: any): void {
    const stepName = document.querySelector(props.stepNameSelector!)?.innerHTML;
    const subStepName = document.querySelector(props.subStepNameSelector)?.innerHTML;
    const subStepAllElements = document.querySelectorAll(props.subStepAllSelector);
    const subStepElement = document.querySelector(props.subStepSelector);

    funnelMetricsLog.push({
      action: 'funnelSubStepComplete',
      props,
      resolvedProps: { stepName, subStepName, subStepAllElements, subStepElement },
    });
  },

  funnelSubStepError(props: any): void {
    const stepName = document.querySelector(props.stepNameSelector!)?.innerHTML;
    const subStepName = document.querySelector(props.subStepNameSelector)?.innerHTML;
    const fieldLabel = document.querySelector(props.fieldLabelSelector!)?.innerHTML;
    const fieldError = document.querySelector(props.fieldErrorSelector!)?.innerHTML;

    funnelMetricsLog.push({
      action: 'funnelSubStepError',
      props,
      resolvedProps: { fieldLabel, fieldError, stepName, subStepName },
    });
  },

  helpPanelInteracted(props: any): void {
    const stepName = document.querySelector(props.stepNameSelector!)?.innerHTML;
    const subStepName = document.querySelector(props.subStepNameSelector)?.innerHTML;
    const subStepElement = document.querySelectorAll(props.subStepSelector);
    const subStepAllElements = document.querySelectorAll(props.subStepAllSelector);
    const element = document.querySelector(props.elementSelector);

    funnelMetricsLog.push({
      action: 'helpPanelInteracted',
      props,
      resolvedProps: { stepName, subStepName, subStepAllElements, element, subStepElement },
    });
  },

  externalLinkInteracted(props: any): void {
    const stepName = document.querySelector(props.stepNameSelector!)?.innerHTML;
    const subStepName = document.querySelector(props.subStepNameSelector)?.innerHTML;
    const subStepElement = document.querySelectorAll(props.subStepSelector);
    const subStepAllElements = document.querySelectorAll(props.subStepAllSelector);
    const element = document.querySelector(props.elementSelector);

    funnelMetricsLog.push({
      action: 'externalLinkInteracted',
      props,
      resolvedProps: { stepName, subStepName, subStepAllElements, element, subStepElement },
    });
  },
};
