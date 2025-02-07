import {action} from '@storybook/addon-actions';
import React from 'react';
import * as Yup from 'yup';

import {SQFormAsyncAutocomplete} from '../src';
import {SQFormStoryWrapper} from './components/SQFormStoryWrapper';
import {createDocsPage} from './utils/createDocsPage';

export default {
  title: 'Components/SQFormAsyncAutocomplete',
  component: SQFormAsyncAutocomplete,
  argTypes: {
    onBlur: {action: 'blurred', table: {disable: true}},
    onChange: {action: 'changed', table: {disable: true}},
    onInputChange: {action: 'inputChanged', table: {disable: true}},
    onOpen: {action: 'opened', table: {disable: true}},
    onClose: {action: 'closed', table: {disable: true}},
    name: {table: {disable: true}},
    handleAsyncInputChange: {table: {disable: true}}
  },
  parameters: {
    docs: {
      page: createDocsPage(),
      source: {
        type: 'code'
      }
    }
  }
};

const defaultArgs = {
  name: 'asyncAutocomplete',
  label: 'Async Autocomplete',
  children: [
    {
      label: 'First',
      value: 'first'
    },
    {
      label: 'Second',
      value: 'second'
    },
    {
      label: 'Third',
      value: 'third'
    },
    {
      label: 'Fourth',
      value: 'fourth'
    },
    {
      label: 'Fifth',
      value: 'fifth'
    }
  ],
  handleAsyncInputChange: action('handleAsyncInputChange')
};

const Template = args => {
  const {schema, SQFormProps, ...rest} = args;
  return (
    <div style={{minWidth: 250}}>
      <SQFormStoryWrapper
        initialValues={{[defaultArgs.name]: ''}}
        validationSchema={schema}
        {...SQFormProps}
      >
        <SQFormAsyncAutocomplete
          {...rest}
          size={args.size !== 'auto' ? Number(args.size) : args.size}
        />
      </SQFormStoryWrapper>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const WithValidation = Template.bind({});
WithValidation.args = {
  ...defaultArgs,
  schema: {
    [defaultArgs.name]: Yup.string().required()
  }
};
WithValidation.parameters = {
  controls: {exclude: 'schema'}
};
