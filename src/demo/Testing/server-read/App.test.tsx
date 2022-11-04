import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';
import User from '../User';

const users: User[] = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
  },
  {
    id: 2,
    firstname: 'Jane',
    lastname: 'Doe',
  },
];

const server = setupServer();

describe('App', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it('should fetch data from server', async () => {
    server.use(
      rest.get('http://localhost:3001/users', (request, response, context) => {
        return response(context.status(200), context.json(users));
      })
    );

    render(<App />);

    const firstnames = await screen.findAllByTestId('firstname');
    expect(firstnames).toHaveLength(2);
    expect(firstnames[0]).toHaveTextContent('John');
    expect(firstnames[1]).toHaveTextContent('Jane');
  });
});
