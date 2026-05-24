'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';

export type DateRangePreset = '7d' | '30d' | '90d' | '1y' | 'all';

interface DateRangeContextType {
  preset: DateRangePreset;
  setPreset: (preset: DateRangePreset) => void;
  label: string;
}

const presetLabels: Record<DateRangePreset, string> = {
  '7d': 'Last 7 days',
  '30d': 'Last 30 days',
  '90d': 'Last 90 days',
  '1y': 'This year',
  'all': 'All time',
};

const DateRangeContext = createContext<DateRangeContextType>({
  preset: 'all',
  setPreset: () => {},
  label: 'All time',
});

export function DateRangeProvider({ children }: { children: React.ReactNode }) {
  const [preset, setPresetState] = useState<DateRangePreset>('all');

  const setPreset = useCallback((p: DateRangePreset) => {
    setPresetState(p);
  }, []);

  return (
    <DateRangeContext.Provider value={{ preset, setPreset, label: presetLabels[preset] }}>
      {children}
    </DateRangeContext.Provider>
  );
}

export function useDateRange() {
  return useContext(DateRangeContext);
}

/**
 * Filter monthly chart data array by date range preset.
 * Assumes data is in chronological order (oldest first).
 */
export function filterDataByRange<T>(data: T[], preset: DateRangePreset): T[] {
  const pointsMap: Record<DateRangePreset, number> = {
    '7d': 3,
    '30d': 4,
    '90d': 6,
    '1y': 9,
    'all': data.length,
  };
  const points = pointsMap[preset];
  return data.slice(-points);
}

export { presetLabels };
