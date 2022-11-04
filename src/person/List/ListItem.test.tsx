import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListItem from './ListItem';

const person = {
  id: 444,
  firstName: 'Dorothea',
  lastName: 'Hammes',
  birthdate: '1955-11-18T14:22:15.431Z',
  street: '385 Conn Overpass Apt. 740',
  city: 'Hackensack',
  zipCode: '98692-7937',
};

describe('ListItem', () => {
  it('snapshot test', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <table>
          <tbody>
            <ListItem person={person} onDelete={jest.fn()} />
          </tbody>
        </table>
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <table>
          <tbody>
            <ListItem person={person} onDelete={jest.fn()} />
          </tbody>
        </table>
      </MemoryRouter>
    );

    expect(screen.getByTestId('firstName')).toHaveTextContent('Dorothea');
    expect(screen.getByTestId('lastName')).toHaveTextContent('Hammes');
  });

  it('should delete an entry', () => {
    const onDelete = jest.fn();

    render(
      <MemoryRouter>
        <table>
          <tbody>
            <ListItem person={person} onDelete={onDelete} />
          </tbody>
        </table>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId('delete-btn'));

    expect(onDelete).toHaveBeenCalled();
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledWith(444);
  });
});
