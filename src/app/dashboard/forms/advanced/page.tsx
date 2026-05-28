'use client';

import PageContainer from '@/components/layout/page-container';
import AdvancedFormPatterns from '@/features/forms/components/advanced-form-patterns';
import { useLanguage } from '@/contexts/language-context';

export default function Page() {
  const { t } = useLanguage();

  return (
    <PageContainer
      pageTitle={t('page.forms.advanced.title')}
      pageDescription={t('page.forms.advanced.desc')}
    >
      <AdvancedFormPatterns />
    </PageContainer>
  );
}
