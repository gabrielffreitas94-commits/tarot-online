import '@testing-library/jest-dom';

// Mock Web Audio API for tests where AudioContext is not implemented in jsdom
if (typeof window !== 'undefined' && !window.AudioContext) {
  // @ts-expect-error Mocking AudioContext
  window.AudioContext = class {
    state = 'running';
    createGain() {
      return {
        connect: () => {},
        gain: {
          setValueAtTime: () => {},
          exponentialRampToValueAtTime: () => {},
          linearRampToValueAtTime: () => {},
          value: 1,
        },
      };
    }
    createOscillator() {
      return {
        connect: () => {},
        start: () => {},
        stop: () => {},
        frequency: {
          setValueAtTime: () => {},
          exponentialRampToValueAtTime: () => {},
        },
        type: 'sine',
      };
    }
    createBufferSource() {
      return {
        buffer: null,
        connect: () => {},
        start: () => {},
        stop: () => {},
      };
    }
    createBiquadFilter() {
      return {
        connect: () => {},
        frequency: { setValueAtTime: () => {} },
        Q: { setValueAtTime: () => {} },
        type: 'lowpass',
      };
    }
    createBuffer() {
      return {
        getChannelData: () => new Float32Array(100),
      };
    }
    resume() {
      return Promise.resolve();
    }
    close() {
      return Promise.resolve();
    }
    destination = {};
    currentTime = 0;
  };
}
