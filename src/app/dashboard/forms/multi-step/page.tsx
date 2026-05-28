'use client';

import PageContainer from '@/components/layout/page-container';
import FormsShowcasePage from '@/features/forms/components/forms-showcase-page';
import { useLanguage } from '@/contexts/language-context';

export default function Page() {
  const { t } = useLanguage();

  return (
    <PageContainer
      pageTitle={t('page.forms.multiStep.title')}
      pageDescription={t('page.forms.multiStep.desc')}
    >
      <FormsShowcasePage />
    </PageContainer>
  );
}
