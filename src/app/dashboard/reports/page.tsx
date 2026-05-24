'use client';

import PageContainer from '@/components/layout/page-container';
import { ReportsTable } from '@/features/reports/components/reports-table';
import { useLanguage } from '@/contexts/language-context';

export default function ReportsPage() {
  const { t } = useLanguage();

  return (
    <PageContainer pageTitle={t('nav.reports') || 'Reports'} pageDescription={t('overview.salesThisMonth')}>
      <ReportsTable />
    </PageContainer>
  );
}
