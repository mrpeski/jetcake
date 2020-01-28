import React from 'react';
import { render } from '@testing-library/react';
import Nav from './TopNav';
import { withRouter } from 'react-router-dom';

// const Navi = withRouter(<Nav />);

test('renders properly', () => {
  const { getByText } = render(<Nav />);
  const homeLink = getByText(/Home/i);
  const profileLink = getByText(/Profile/i);
  expect(homeLink).toBeInTheDocument();
  expect(profileLink).toBeInTheDocument();
});
