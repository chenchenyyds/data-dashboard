'use client';

import React from 'react';
import { Icons } from '@/components/icons';
import { useLanguage } from '@/contexts/language-context';

interface ComparisonBadgeProps {
  mom?: number; // month-over-month percentage, e.g. 12.5 or -20
  yoy?: number; // year-over-year percentage
}

export function ComparisonBadge({ mom, yoy }: ComparisonBadgeProps) {
  const { t } = useLanguage();
  const percent = mom ?? yoy ?? 0;
  const isUp = percent >= 0;
  const label = mom !== undefined ? t('overview.vsLastMonth') : t('overview.vsLastYear');

  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className={`inline-flex items-center gap-0.5 font-medium ${isUp ? 'text-green-600' : 'text-red-600'}`}>
        {isUp ? <Icons.trendingUp className="size-3" /> : <Icons.trendingDown className="size-3" />}
        {isUp ? '+' : ''}{percent}%
      </span>
      <span>{label}</span>
    </div>
  );
}
