import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Home } from '../pages/home/Home';

beforeEach(() => {
    localStorage.clear();
});

describe('Home tests', () => {


    test('renders Home component without crashing', () => {
        render(<Home />);
    });

    test('renders form when no username is in localStorage', () => {


        render(<Home />);

        const nameLabel = screen.getByLabelText("Name:");
        const submitButton = screen.getByRole("button");

        expect(nameLabel).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    test('renders welcome message when a username is in localStorage', () => {
        const username = 'JohnDoe';
        localStorage.setItem('username', username);

        render(<Home />);

        const welcomeMessage = screen.getByText(new RegExp(`Welcome ${username}!`, 'i'));
        expect(welcomeMessage).toBeInTheDocument();
    });

    test('submits the form and calls onLogin with true when user exists', async () => {
        const mockUser = { id: 123, username: 'JohnDoe' };
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue([mockUser]),
        });

        const onLoginMock = jest.fn();
        render(<Home onLogin={onLoginMock} />);

        const nameInput = screen.getByLabelText("Name:");
        const submitButton = screen.getByRole("button");

        fireEvent.change(nameInput, { target: { value: 'John' } });
        fireEvent.click(submitButton);

        await waitFor(() => expect(onLoginMock).toHaveBeenCalledWith(true));
    });
})