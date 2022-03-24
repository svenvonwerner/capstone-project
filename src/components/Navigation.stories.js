import Navigation from './Navigation.js';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/Navigation',
  component: Navigation,
};

export const Default = () => (
  <MemoryRouter>
    <Navigation />
  </MemoryRouter>
);
