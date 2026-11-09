import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SummaryBar } from '../src/components/SummaryBar.tsx';

describe('SummaryBar Component', () => {
  it('renders action buttons and handles clicks', () => {
    const onRevealAll = vi.fn();
    const onNewReading = vi.fn();
    const onCopySummary = vi.fn();

    render(
      <SummaryBar
        isAllRevealed={false}
        onRevealAll={onRevealAll}
        onNewReading={onNewReading}
        onCopySummary={onCopySummary}
        isCopied={false}
      />
    );

    const revealBtn = screen.getByRole('button', { name: /Revelar Todas|Reveal All/i });
    fireEvent.click(revealBtn);
    expect(onRevealAll).toHaveBeenCalledTimes(1);

    const newReadingBtn = screen.getByRole('button', { name: /Nova Leitura|New Reading/i });
    fireEvent.click(newReadingBtn);
    expect(onNewReading).toHaveBeenCalledTimes(1);

    const copyBtn = screen.getByRole('button', { name: /Copiar Resumo|Copy Summary/i });
    fireEvent.click(copyBtn);
    expect(onCopySummary).toHaveBeenCalledTimes(1);
  });

  it('shows copied feedback state when isCopied is true', () => {
    render(
      <SummaryBar
        isAllRevealed={true}
        onRevealAll={() => {}}
        onNewReading={() => {}}
        onCopySummary={() => {}}
        isCopied={true}
      />
    );

    expect(screen.getByText(/Copiado|Copied/i)).toBeInTheDocument();
  });
});
