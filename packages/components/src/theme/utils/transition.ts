export const transition = (
  properties: string[],
  duration: 'slow' | 'medium' | 'fast',
  timingFn = 'ease-in-out',
) => {
  const durations = {
    slow: '0.3s',
    medium: '0.2s',
    fast: '0.15s',
  };

  return `${properties.join(', ')} ${durations[duration]} ${timingFn}`;
};
