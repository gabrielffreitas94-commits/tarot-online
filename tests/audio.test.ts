import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  playCardFlipSound,
  playCardShuffleSound,
  playCelestialChime,
  toggleAudio,
  isAudioMuted,
  setAudioMuted,
} from '../src/utils/audio.ts';

describe('Procedural Web Audio Synthesizer', () => {
  beforeEach(() => {
    localStorage.clear();
    setAudioMuted(false);
  });

  it('starts unmuted by default', () => {
    expect(isAudioMuted()).toBe(false);
  });

  it('toggles audio mute state and stores in localStorage', () => {
    const muted = toggleAudio();
    expect(muted).toBe(true);
    expect(isAudioMuted()).toBe(true);
    expect(localStorage.getItem('tarot_audio_muted')).toBe('true');

    const unmuted = toggleAudio();
    expect(unmuted).toBe(false);
    expect(isAudioMuted()).toBe(false);
    expect(localStorage.getItem('tarot_audio_muted')).toBe('false');
  });

  it('safely executes audio calls without throwing errors', () => {
    expect(() => playCardFlipSound()).not.toThrow();
    expect(() => playCardShuffleSound()).not.toThrow();
    expect(() => playCelestialChime()).not.toThrow();
  });

  it('does not trigger audio generation when muted', () => {
    setAudioMuted(true);
    expect(() => playCardFlipSound()).not.toThrow();
    expect(() => playCardShuffleSound()).not.toThrow();
    expect(() => playCelestialChime()).not.toThrow();
  });
});
