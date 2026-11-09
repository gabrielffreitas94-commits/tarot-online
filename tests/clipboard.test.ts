import { describe, it, expect, vi } from 'vitest';
import { copyToClipboard } from '../src/utils/clipboard.ts';

describe('Clipboard Copying Engine', () => {
  it('uses navigator.clipboard.writeText when permitted', async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: { writeText: writeTextMock },
    });

    const success = await copyToClipboard('Test text');
    expect(success).toBe(true);
    expect(writeTextMock).toHaveBeenCalledWith('Test text');
  });

  it('falls back to execCommand when navigator.clipboard.writeText rejects (permission denied)', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockRejectedValue(new DOMException('Permission denied', 'NotAllowedError')),
      },
    });

    const execCommandMock = vi.fn().mockReturnValue(true);
    document.execCommand = execCommandMock;

    const success = await copyToClipboard('Fallback text');
    expect(success).toBe(true);
    expect(execCommandMock).toHaveBeenCalledWith('copy');
  });
});
