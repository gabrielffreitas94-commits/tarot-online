import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../src/App.tsx';

describe('Tarot Online Full Application Integration', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders header, spread selector, tarot table and actions', () => {
    render(<App />);

    // Header
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Tarot Online/i);

    // Spread buttons
    expect(screen.getByRole('button', { name: /Carta do Dia|Card of the Day/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Passado, Presente|Past, Present/i })).toBeInTheDocument();

    // Summary actions
    expect(screen.getByRole('button', { name: /Revelar Todas|Reveal All/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Nova Leitura|New Reading/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Copiar Resumo|Copy Summary/i })).toBeInTheDocument();
  });

  it('allows flipping an unrevealed card and opens detail modal on click', async () => {
    render(<App />);

    // Initially cards are face down
    expect(screen.getByTestId('card-back')).toBeInTheDocument();

    // Click card to flip it
    const cardSlot = screen.getAllByRole('button', { name: /revelar|reveal/i })[0];
    fireEvent.click(cardSlot);

    // Now card is revealed and shows front
    await waitFor(() => {
      expect(screen.getByTestId('card-front')).toBeInTheDocument();
    });

    // Clicking revealed card opens detail modal
    const revealedButton = screen.getByRole('button', { name: /Daily Energy|Energia do Dia/i });
    fireEvent.click(revealedButton);

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  it('reveals all cards when clicking "Revelar Todas"', async () => {
    render(<App />);

    const revealAllBtn = screen.getByRole('button', { name: /Revelar Todas|Reveal All/i });
    fireEvent.click(revealAllBtn);

    await waitFor(() => {
      // "Revelar Todas" button should now be hidden since all are revealed
      expect(screen.queryByRole('button', { name: /Revelar Todas|Reveal All/i })).not.toBeInTheDocument();
    });
  });

  it('switches spread and updates cards accordingly', async () => {
    render(<App />);

    // Switch to Passado, Presente e Futuro (3 cards)
    const threeCardsBtn = screen.getByRole('button', { name: /Passado, Presente|Past, Present/i });
    fireEvent.click(threeCardsBtn);

    await waitFor(() => {
      // 3 cards drawn
      const cardBacks = screen.getAllByTestId('card-back');
      expect(cardBacks).toHaveLength(3);
    });
  });
});
