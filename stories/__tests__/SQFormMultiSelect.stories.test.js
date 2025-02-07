import React from 'react';
import * as Yup from 'yup';
import {render, screen, waitFor, within} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';

import userEvent from '@testing-library/user-event';
import * as stories from '../SQFormMultiSelect.stories';

const {
  SQFormMultiSelect,
  WithValidation: SQFormMultiSelectWithValidation
} = composeStories(stories);

const initialDropdownValue = '- -';

describe('Tests for SQFormMultiSelect', () => {
  it('should render a form with a multiselect input', async () => {
    render(<SQFormMultiSelect size="auto" />);

    const expandButton = await waitFor(() =>
      screen.findByRole('button', {
        name: /friends/i
      })
    );

    userEvent.click(expandButton);

    const optionsList = screen.getByRole('listbox');
    expect(optionsList).toBeInTheDocument();

    const options = within(optionsList).getAllByRole('option');
    expect(options).toHaveLength(17); // initial '- -' + 16 MOCK_FRIENDS_OPTIONS
  });

  it('should render dropdown options', async () => {
    render(<SQFormMultiSelect size="auto" />);

    const expandButton = await waitFor(() =>
      screen.findByRole('button', {
        name: /friends/i
      })
    );

    userEvent.click(expandButton);

    const optionsList = screen.getByRole('listbox');
    const options = within(optionsList).getAllByRole('option');
    expect(options).toHaveLength(17); // initial '- -' + 16 MOCK_FRIENDS_OPTIONS
  });

  it('should render the multiselect with default initial value "- -"', async () => {
    render(<SQFormMultiSelect size="auto" />);

    const expandButton = await waitFor(() =>
      screen.findByRole('button', {name: /friends/i})
    );

    expect(expandButton).toHaveTextContent(initialDropdownValue);
  });

  it('should render the multiselect with the correct options selected according to initialValues', async () => {
    const initialValueLabels = 'Joe, Jane';

    render(
      <SQFormMultiSelect
        size="auto"
        SQFormProps={{
          initialValues: {friends: [1, 2]}
        }}
      />
    );

    const expandButton = await waitFor(() =>
      screen.findByRole('button', {name: /friends/i})
    );

    expect(expandButton).toHaveTextContent(initialValueLabels);
  });

  it('should show console warning if provided initial value not in options', async () => {
    const consoleWarnSpy = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    render(
      <SQFormMultiSelect
        size="auto"
        SQFormProps={{
          initialValues: {friends: [0]}
        }}
      />
    );

    await waitFor(() =>
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringMatching(
          /the requested display value.*could not be found/i
        )
      )
    );

    consoleWarnSpy.mockRestore();
  });

  it('should show empty list if no options passed', async () => {
    const consoleWarnSpy = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    render(
      <SQFormMultiSelect useSelectAll={false} size="auto" children={null} />
    );

    const expandButton = await screen.findByRole('button', {name: /friends/i});

    userEvent.click(expandButton);
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringMatching(/the children you provided.*was undefined/i)
    );

    consoleWarnSpy.mockRestore();
  });

  it('should update when options are selected', async () => {
    render(<SQFormMultiSelect size="auto" />);

    const expandButton = await screen.findByRole('button', {name: /friends/i});

    expect(expandButton).toHaveTextContent(initialDropdownValue);

    userEvent.click(expandButton);

    const option1 = screen.getByText('Jack');
    userEvent.click(option1);

    const option2 = screen.getByText('Jill');
    userEvent.click(option2);

    await waitFor(() => expect(expandButton).toHaveTextContent('Jack, Jill'));
  });

  it('should not open dropdown options if field is disabled', async () => {
    render(<SQFormMultiSelect size="auto" isDisabled={true} />);

    const expandButton = await screen.findByRole('button', {name: /friends/i});
    expect(expandButton).toHaveAttribute('aria-disabled', 'true');

    const optionsList = screen.queryByRole('listbox');
    expect(optionsList).not.toBeInTheDocument();
  });

  it('should initially render "Required" helper text if field is required', () => {
    render(<SQFormMultiSelectWithValidation size="auto" />);

    const required = screen.getByText(/required/i);
    expect(required).toBeVisible();
  });

  it('should not display "required" helper text if field is not required', async () => {
    render(<SQFormMultiSelect isRequired={false} size="auto" />);

    await screen.findByText('Friends');

    const required = screen.queryByText(/required/i);
    expect(required).not.toBeInTheDocument();
  });

  it('should highlight field if required but no value selected', async () => {
    const validationSchema = {
      friends: Yup.string().required()
    };

    render(
      <SQFormMultiSelect
        size="auto"
        SQFormProps={{
          validationSchema
        }}
      />
    );

    const expandButton = await waitFor(() =>
      screen.findByRole('button', {name: /friends/i})
    );

    userEvent.tab();
    await waitFor(() => expect(expandButton).toHaveFocus());

    userEvent.tab();
    await waitFor(() => expect(expandButton).not.toHaveFocus());

    const required = screen.getByText(/required/i);
    expect(required).toBeVisible();
    expect(required).toHaveClass('Mui-error');
  });
});
