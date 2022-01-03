import React from 'react';
import {composeStories} from '@storybook/testing-react';
import {
  render,
  screen
  //waitFor,
  // waitForElementToBeRemoved
} from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import * as stories from '../SQFormScrollableCardsMenuWrapper.stories';

const {Default: sqFormScrollableCardsMenuWrapper} = composeStories(stories);

describe('SQFormScrollableCardsMenuWrapper Tests', () => {
  it('should render a title', () => {
    render(<sqFormScrollableCardsMenuWrapper />);

    const mainTitle = screen.getByText(
      'The quick brown fox jumped over the fence'
    );

    expect(mainTitle).toBeVisible();
  });
});
