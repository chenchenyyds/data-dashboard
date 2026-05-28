'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { useDateRange, type DateRangePreset } from '@/contexts/date-range-context';

const presets: DateRangePreset[] = ['7d', '30d', '90d', '1y', 'all'];

export function DateRangeFilter() {
  const { preset, setPreset } = useDateRange();
  const { t } = useLanguage();

  return (
    <div className='flex items-center gap-1 rounded-lg bg-muted p-1'>
      {presets.map((p) => (
        <Button
          key={p}
          variant={preset === p ? 'default' : 'ghost'}
          size='sm'
          onClick={() => setPreset(p)}
          className='h-8 text-xs'
        >
          {t('date.' + p)}
        </Button>
      ))}
    </div>
  );
}
