import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

const server = setupServer();

describe('App', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should handle an error', async () => {
    server.use(
      rest.get('http://localhost:3001/users', (request, response, context) => {
        return response(context.status(500));
      })
    );
    render(<App />);

    const error = await screen.findByTestId('error');

    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent('Whoops an error happened!');
  });
});
