/**
 * Robust clipboard copy with automatic cascade from modern Clipboard API
 * down to document.execCommand('copy') when permissions are restricted.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  const copyWithExecCommand = (): boolean => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '-9999px';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      return successful;
    } catch {
      return false;
    }
  };

  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Permission denied or security error -> fallback to execCommand
      return copyWithExecCommand();
    }
  }

  return copyWithExecCommand();
}
