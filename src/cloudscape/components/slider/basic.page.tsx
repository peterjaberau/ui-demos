// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import FormField from '@cloudscape-design/components/form-field';
import Grid from '@cloudscape-design/components/grid';
import Input from '@cloudscape-design/components/input';
import Select, { SelectProps } from '@cloudscape-design/components/select';
import Slider, { SliderProps } from '@cloudscape-design/components/slider';
import SpaceBetween from '@cloudscape-design/components/space-between';

import styles from './styles.module.scss';

function Sliders() {
  const [value, setValue] = useState<SliderProps['value']>(25);
  const [value2, setValue2] = useState<SliderProps['value']>(200);
  const [value3, setValue3] = useState<SliderProps['value']>(50);
  const [value4, setValue4] = useState<SelectProps.Option>({ value: '2', label: `Not satisfied or unsatisfied` });
  const [value5, setValue5] = useState<SliderProps['value']>(72.5);
  const [value6, setValue6] = useState<SliderProps['value']>(60);
  const [ticks, setTicks] = useState<boolean>(false);
  const [error, setError] = useState<string>('Enter a valid unit.');
  const [warning, setWarning] = useState<string>('Unit is below 80.');

  const satisfactionScaleOptions = [
    { value: '0', label: 'Extremely unsatisfied' },
    { value: '1', label: 'Somewhat unsatisfied' },
    { value: '2', label: `Not satisfied or unsatisfied` },
    { value: '3', label: 'Somewhat satisfied' },
    { value: '4', label: 'Extremely satisfied' },
  ];

  const i18nStrings = {
    valueTextRange: (previousValue: string, value: number, nextValue: string) =>
      `${value}, between ${previousValue} and ${nextValue}`,
  };

  const validateValue = (value: SliderProps['value']) => {
    if (value && (value < 0 || value > 100 || value % 1 !== 0)) {
      return 'Enter a valid unit.';
    }

    if (value && value < 80) {
      return 'Unit is below 80.';
    }

    return '';
  };

  return (
    <SpaceBetween size="xxl">
      <Slider
        ariaLabel="slider-example"
        valueFormatter={value => `${value} is the value`}
        value={value}
        min={0}
        max={100}
        step={10}
        tickMarks={true}
        referenceValues={[25, 50, 75]}
        onChange={({ detail }) => {
          setValue(detail.value);
        }}
        i18nStrings={i18nStrings}
      />
      <FormField
        label="Slider with input and error validation"
        errorText={error}
        i18nStrings={{ errorIconAriaLabel: 'Error' }}
      >
        <div className={styles['flex-wrapper']}>
          <div className={styles['slider-wrapper']}>
            <Slider
              ariaLabel="validation-slider-example"
              value={value2}
              onChange={({ detail }) => {
                setValue2(detail.value);
                setError(validateValue(detail.value));
              }}
              min={0}
              max={100}
              i18nStrings={i18nStrings}
            />
          </div>
          <SpaceBetween size="m" alignItems="center" direction="horizontal">
            <div className={styles['input-wrapper']}>
              <Input
                type="number"
                inputMode="numeric"
                value={`${value2}`}
                onChange={({ detail }) => {
                  setValue2(Number(detail.value));
                  setError(validateValue(Number(detail.value)));
                }}
                controlId="validation-input-error"
              />
            </div>
            <Box>Units</Box>
          </SpaceBetween>
        </div>
      </FormField>
      <FormField
        label="Slider with input and warning validation"
        warningText={warning}
        i18nStrings={{ warningIconAriaLabel: 'Warning' }}
      >
        <div className={styles['flex-wrapper']}>
          <div className={styles['slider-wrapper']}>
            <Slider
              ariaLabel="validation-slider-example"
              value={value6}
              onChange={({ detail }) => {
                setValue6(detail.value);
                setWarning(validateValue(detail.value));
              }}
              min={0}
              max={100}
              i18nStrings={i18nStrings}
            />
          </div>
          <SpaceBetween size="m" alignItems="center" direction="horizontal">
            <div className={styles['input-wrapper']}>
              <Input
                type="number"
                inputMode="numeric"
                value={`${value6}`}
                onChange={({ detail }) => {
                  setValue6(Number(detail.value));
                  setWarning(validateValue(Number(detail.value)));
                }}
                controlId="validation-input-warning"
              />
            </div>
            <Box>Units</Box>
          </SpaceBetween>
        </div>
      </FormField>
      <FormField label="Slider with select">
        <Grid gridDefinition={[{ colspan: { default: 12, xs: 4, m: 3 } }]}>
          <Select
            selectedOption={value4}
            onChange={({ detail }) => setValue4(detail.selectedOption)}
            options={satisfactionScaleOptions}
          />
        </Grid>
        <Slider
          ariaLabel="select-slider-example"
          value={Number(value4.value)}
          onChange={({ detail }) => {
            setValue4({
              value: `${detail.value}`,
              label: satisfactionScaleOptions.find(item => item.value === `${detail.value}`)?.label || '',
            });
          }}
          step={1}
          min={0}
          max={4}
          valueFormatter={value => satisfactionScaleOptions.find(item => item.value === `${value}`)?.label || ''}
          referenceValues={[1, 2, 3]}
          tickMarks={true}
          controlId="select-slider"
          ariaDescription="From very unsatisfied to very satisfied"
          i18nStrings={i18nStrings}
        />
      </FormField>
      <FormField label="Stepped slider">
        <Slider
          value={value3}
          onChange={({ detail }) => {
            setValue3(detail.value);
          }}
          valueFormatter={value => `${value} is the very long and precise value at this point.`}
          min={100}
          max={200}
          step={5}
          referenceValues={[110, 190, 120, 150, 130, 140, 180, 170, 160]}
          tickMarks={true}
          i18nStrings={i18nStrings}
        />
      </FormField>
      <Button onClick={() => setTicks(!ticks)}>Toggle ticks</Button>
      <FormField label="Temperature">
        <Grid gridDefinition={[{ colspan: { default: 12, xs: 4, m: 3 } }]}>
          <Input
            type="number"
            inputMode="numeric"
            value={`${value5}`}
            onChange={({ detail }) => {
              setValue5(Number(detail.value));
            }}
          />
        </Grid>
        <Slider
          ariaLabel="temperature-slider"
          step={0.5}
          tickMarks={ticks}
          value={value5}
          onChange={({ detail }) => setValue5(detail.value)}
          min={65}
          max={85}
          controlId="temperature-slider"
          i18nStrings={i18nStrings}
        />
      </FormField>
    </SpaceBetween>
  );
}

export default function InputsPage() {
  return (
    <div style={{ padding: 30 }}>
      <h1>Sliders demo</h1>
      <SpaceBetween size="xxl">
        <Sliders />
      </SpaceBetween>
    </div>
  );
}
