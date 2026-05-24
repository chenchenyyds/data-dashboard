'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { useDateRange, type DateRangePreset, presetLabels } from '@/contexts/date-range-context';

const presets: DateRangePreset[] = ['7d', '30d', '90d', '1y', 'all'];

export function DateRangeFilter() {
  const { preset, setPreset } = useDateRange();
  const { language } = useLanguage();

  const zhLabels: Record<DateRangePreset, string> = {
    '7d': '近7天',
    '30d': '近30天',
    '90d': '近90天',
    '1y': '今年',
    'all': '全部',
  };

  return (
    <div className="flex items-center gap-1 rounded-lg bg-muted p-1">
      {presets.map((p) => (
        <Button
          key={p}
          variant={preset === p ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setPreset(p)}
          className="h-8 text-xs"
        >
          {language === 'zh' ? zhLabels[p] : presetLabels[p]}
        </Button>
      ))}
    </div>
  );
}
