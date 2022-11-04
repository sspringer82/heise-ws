import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PersonProvider from '../PersonProvider';
import Form from './Form';

describe('Form', () => {
  it('should create a new entry', async () => {
    const onSubmit = jest.fn();
    render(
      <PersonProvider>
        <MemoryRouter>
          <Form onSubmit={onSubmit} />
        </MemoryRouter>
      </PersonProvider>
    );

    expect(screen.getByTestId('firstName')).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('firstName'), {
      target: { value: 'firstname' },
    });
    fireEvent.change(screen.getByTestId('lastName'), {
      target: { value: 'lastname' },
    });
    fireEvent.click(screen.getByTestId('submit'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        firstName: 'firstname',
        lastName: 'lastname',
        birthdate: '',
        city: '',
        street: '',
        zipCode: '',
      });
    });
  });
});
