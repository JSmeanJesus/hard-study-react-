import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    // test('Sidebar toggle', () => {
    //     renderWithTranslation(<Sidebar />);
    //     const toggleButton = screen.getByTestId('toggle-button');
    //     expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    //     fireEvent.click(toggleButton);
    //     expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    // });
});
