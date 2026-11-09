const STORAGE_KEY = 'tarot_audio_muted';

let audioCtx: AudioContext | null = null;
let isMuted: boolean = false;
const audioListeners = new Set<(muted: boolean) => void>();

// Initialize mute state from localStorage if available
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved !== null) {
    isMuted = saved === 'true';
  }
}

/**
 * Returns or initializes the shared AudioContext lazily on user gesture.
 */
function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;

  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }

  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }

  return audioCtx;
}

export function isAudioMuted(): boolean {
  return isMuted;
}

export function setAudioMuted(muted: boolean): void {
  isMuted = muted;
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, String(muted));
  }
  audioListeners.forEach((fn) => fn(muted));
}

export function toggleAudio(): boolean {
  const next = !isMuted;
  setAudioMuted(next);
  return next;
}

export function subscribeAudio(fn: (muted: boolean) => void): () => void {
  audioListeners.add(fn);
  return () => {
    audioListeners.delete(fn);
  };
}

/**
 * Procedural card flip sound: soft tactile snap of tarot card stock.
 */
export function playCardFlipSound(): void {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const bufferSize = ctx.sampleRate * 0.08; // 80ms duration
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Pink/brownish noise decay
      const decay = Math.exp(-i / (bufferSize * 0.25));
      data[i] = (Math.random() * 2 - 1) * decay;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.08);

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.4, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    source.start();
  } catch {
    // Ignore audio playback errors silently
  }
}

/**
 * Procedural deck shuffle sound: rapid ripple of cards.
 */
export function playCardShuffleSound(): void {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const rippleCount = 6;
    for (let i = 0; i < rippleCount; i++) {
      const delay = i * 0.045 + Math.random() * 0.01;
      setTimeout(() => {
        if (!isMuted) {
          playCardFlipSound();
        }
      }, delay * 1000);
    }
  } catch {
    // Ignore audio playback errors
  }
}

/**
 * Procedural celestial chime: dual harmonic sine decay (432Hz & 648Hz).
 */
export function playCelestialChime(): void {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const duration = 1.8;

    // Harmonic frequencies for mystical resonant chime
    const frequencies = [432, 648, 864];

    frequencies.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      const baseVolume = 0.15 / (index + 1);
      gain.gain.setValueAtTime(baseVolume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    });
  } catch {
    // Ignore audio playback errors
  }
}
